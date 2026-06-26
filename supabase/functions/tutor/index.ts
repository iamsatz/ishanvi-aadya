// Supabase Edge Function: tutor
// Deploy: supabase functions deploy tutor --no-verify-jwt
// Secrets: GEMINI_API_KEY (or OPENAI_API_KEY), TUTOR_PROVIDER=gemini|openai

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TutorRequest {
  mode: 'homework' | 'index' | 'chat';
  grade: string;
  board: string;
  subject?: string;
  text?: string;
  imageUrl?: string;
  syllabusItems?: string[];
}

interface LearningCard {
  id: string;
  lessonId?: string;
  title: string;
  englishContent: string;
  teluguContent?: string;
  promptText: string;
  interactionType: string;
  choices?: { id: string; label: string; isCorrect: boolean }[];
  checklist?: { id: string; label: string; hint?: string }[];
  revealAnswer?: string;
  hint?: string;
  imageUrl?: string;
}

interface HomeworkTask {
  label: string;
  hint?: string;
  example?: string;
  answer?: string;
  /** Short kid-friendly reason the answer is correct (PIN-gated Answers page). */
  explanation?: string;
}

function systemPrompt(req: TutorRequest): string {
  return `You are a patient kid-friendly tutor for ${req.grade} students following ${req.board} curriculum.
Subject: ${req.subject ?? 'general'}.
Rules:
- Explain HOW to do homework step-by-step, never just give final answers to copy.
- Use simple English suitable for the grade. Optionally add teluguContent for key concepts.
- Output ONLY valid JSON matching the schema below.
- Include a "Parent, please check" tone in hints where answers are involved.
- interactionType must be one of: tap-reveal, choice-cards, checklist, reflect, match-pairs, vocab-grid.
- For homework mode: 3-5 cards — intro, step-by-step checklist, practice choice-cards, reflect.
- For index mode: one card per syllabus topic (max 8), mix interaction types.

JSON schema:
{
  "cards": [LearningCard],
  "tasks": [{"label","hint","answer","explanation"}] // homework mode only
}`;
}

async function callGemini(prompt: string, imageUrl?: string): Promise<string> {
  const key = Deno.env.get('GEMINI_API_KEY');
  if (!key) throw new Error('GEMINI_API_KEY not set');

  const parts: Record<string, unknown>[] = [{ text: prompt }];
  if (imageUrl) {
    try {
      const imgRes = await fetch(imageUrl);
      const buf = await imgRes.arrayBuffer();
      const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
      const mime = imgRes.headers.get('content-type') ?? 'image/jpeg';
      parts.unshift({ inline_data: { mime_type: mime, data: b64 } });
    } catch {
      parts.push({ text: `\nImage URL (could not fetch): ${imageUrl}` });
    }
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: { responseMimeType: 'application/json', temperature: 0.4 },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini error: ${err}`);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}';
}

function buildUserPrompt(req: TutorRequest): string {
  if (req.mode === 'homework') {
    return `Mode: homework help.
${req.text ? `Homework text:\n${req.text}` : 'Read the homework from the attached image.'}
Generate guided learning cards (teach HOW, with hints — never put final answers in the cards).
ALSO return a "tasks" array — one entry per question found in the homework — where each entry has:
- "label": the question text.
- "hint": a nudge that helps without giving it away.
- "answer": the correct final answer (this is shown only on a PIN-locked Answers page for parents).
- "explanation": one simple kid-friendly sentence on WHY that answer is correct.`;
  }
  if (req.mode === 'index') {
    const items = req.syllabusItems?.join('\n') ?? req.text ?? '';
    return `Mode: syllabus to lessons.
Topics:\n${items}
Create one engaging interactive card per topic.`;
  }
  return `Mode: chat — a ${req.grade} child asked a question${req.subject ? ` (context: ${req.subject})` : ''}.
Question: ${req.text}

Reply with EXACTLY ONE card in the JSON "cards" array:
- "title": the question restated in simple kid words.
- "englishContent": a short, clear answer for this grade (2-4 short paragraphs). PLAIN TEXT ONLY — no markdown, no asterisks. If the question is "difference between X and Y", explain each side with one tiny everyday example.
- "teluguContent": a 1-2 line Telugu summary of the key idea.
- "glossary": up to 3 tricky words as {"word","en","te"} — en is a simple meaning, te is Telugu. Use the exact words as they appear in englishContent.
- "promptText": "Did this help?"
- "interactionType": "reflect".
Stay on school topics; if the question is off-topic or unsafe, gently steer back to learning.`;
}

function normalizeCards(raw: LearningCard[], lessonPrefix: string): LearningCard[] {
  return raw.map((c, i) => ({
    ...c,
    id: c.id || `${lessonPrefix}-c${i}`,
    interactionType: c.interactionType || 'tap-reveal',
    promptText: c.promptText || 'Tap to continue',
    englishContent: c.englishContent || c.title,
  }));
}

function fallbackHomework(req: TutorRequest): { cards: LearningCard[]; tasks: HomeworkTask[] } {
  const id = crypto.randomUUID();
  return {
    cards: [
      {
        id: `${id}-0`,
        title: 'Homework help',
        englishContent: `Let's work through this ${req.subject ?? 'homework'} together!\n\n👩 Parent, please check each step.`,
        teluguContent: 'ఈ homework ని కలిసి చేద్దాం!',
        promptText: 'Ready?',
        interactionType: 'tap-reveal',
        revealAnswer: 'Read the page carefully. Underline key words. Try the first question on paper.',
        hint: req.text?.slice(0, 200) ?? 'Look at the homework photo.',
        imageUrl: req.imageUrl,
      },
      {
        id: `${id}-1`,
        title: 'Steps',
        englishContent: 'Work through each step. Write answers in your notebook.',
        promptText: 'Tick each step when done.',
        interactionType: 'checklist',
        checklist: [
          { id: 's1', label: '📖 Read the question twice', hint: 'What is it asking?' },
          { id: 's2', label: '✏️ Write your answer on paper', hint: 'Try before peeking' },
          { id: 's3', label: '✅ Check your work', hint: 'Did you answer every part?' },
        ],
      },
    ],
    tasks: [],
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as TutorRequest;
    const lessonPrefix = crypto.randomUUID();

    let parsed: { cards?: LearningCard[]; tasks?: HomeworkTask[]; message?: string };

    try {
      const raw = await callGemini(
        `${systemPrompt(body)}\n\n${buildUserPrompt(body)}`,
        body.imageUrl
      );
      parsed = JSON.parse(raw);
    } catch (aiErr) {
      console.warn('AI fallback:', aiErr);
      if (body.mode === 'homework') {
        parsed = fallbackHomework(body);
      } else {
        parsed = {
          cards: [{
            id: `${lessonPrefix}-0`,
            title: body.text?.slice(0, 60) ?? 'Lesson',
            englishContent: body.text ?? 'Explore this topic with your tutor.',
            promptText: 'What did you learn?',
            interactionType: 'reflect',
          }],
        };
      }
    }

    const cards = normalizeCards(parsed.cards ?? [], lessonPrefix);

    return new Response(
      JSON.stringify({ cards, tasks: parsed.tasks ?? [], message: parsed.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
