import type { LearningCard } from '../types/content';
import type { AskPageContext } from './askContext';

/** Friendly hint when the cloud tutor is unreachable — never a scary error. */
export function buildOfflineTutorCard(
  question: string,
  pageContext?: AskPageContext,
  grade = 'Grade 4',
): LearningCard {
  const q = question.trim().toLowerCase();
  const title = pageContext?.cardTitle ?? 'This page';
  const hint = pageContext?.hint;
  const prompt = pageContext?.promptText;
  const reading = pageContext?.englishContent?.slice(0, 400);

  let lead = '';
  let body = '';
  let followUp = 'What do you notice on this page?';

  if (q.includes('hint') || q.includes('stuck') || q.includes('help me think')) {
    lead = 'Hint';
    body = hint
      ? `${hint}\n\nLook at the page again — what is the question really asking?`
      : prompt
        ? `The task says: "${prompt}"\n\nTry one small step on paper. What do you already know?`
        : `Read "${title}" slowly. Underline the important words. What is one thing you can try first?`;
    followUp = 'What is one small step you can try right now?';
  } else if (q.includes('why') || q.includes('explain') || q.includes('simpler')) {
    lead = 'Explanation';
    body = reading
      ? `On this page we learn about ${title}.\n\n${reading.split('\n').slice(0, 3).join('\n')}\n\nThink of something from your own day that fits this idea.`
      : `"${title}" is about understanding the idea — not memorising one answer.\n\nCan you tell me in your own words what this page is about?`;
    followUp = 'Can you say it in your own words?';
  } else if (q.includes('what does') || q.includes('what is') || q.includes('mean')) {
    lead = 'Answer';
    const word = pageContext?.glossaryWords?.[0];
    body = word
      ? `"${word}" is a key word on this page. Read the story part again — what does the example show about ${word}?`
      : `Look at the example on "${title}". What is it showing you?`;
    followUp = `What does ${word ?? 'this word'} mean in your own sentence?`;
  } else if (q.includes('telugu') || q.includes('తెలుగు')) {
    lead = 'తెలుగు';
    body =
      'Arjuna is resting right now (no internet or server). Ask a parent to read the English part aloud, or use the తెలుగు accordion on the page if it is there.';
    followUp = 'Which word on the page do you want to understand first?';
  } else {
    lead = 'Hint';
    body = prompt
      ? `You asked about "${title}".\n\nThe task: "${prompt}"\n\nTry writing one idea — even a guess. Then check the story part above.`
      : `You asked: "${question.slice(0, 120)}"\n\nLook at "${title}" again. What part feels tricky?`;
    followUp = 'What part feels tricky — the story, the question, or the choices?';
  }

  const gradeNote =
    grade.includes('2')
      ? '\n\n🐰 Chiku says: take your time — one small step is enough!'
      : '\n\nArjuna says: try first, then ask why.';

  return {
    id: `offline-${Date.now()}`,
    lessonId: 'offline',
    title: `${lead}: ${title}`,
    englishContent: `${body}${gradeNote}\n\n_(Arjuna is offline — this is a built-in guide. Connect to the internet for a full answer.)_`,
    teluguContent: grade.includes('2')
      ? 'ఇంటర్నెట్ లేదు — ఈ hint built-in. Story part మళ్లీ చదవండి.'
      : 'ఇంటర్నెట్ లేదు — built-in hint. Page మళ్లీ చదవండి.',
    hint: followUp,
    promptText: 'Did this help you think?',
    interactionType: 'reflect',
  };
}

/** True when we should show offline card instead of an error string. */
export function shouldUseOfflineFallback(err: unknown): boolean {
  const msg = err instanceof Error ? err.message : String(err ?? '');
  const lower = msg.toLowerCase();
  return (
    lower.includes('failed to fetch') ||
    lower.includes('network') ||
    lower.includes('404') ||
    lower.includes('not found') ||
    lower.includes('not deployed') ||
    lower.includes('gemini') ||
    lower.includes('api key') ||
    lower.includes('function') ||
    lower.includes('supabase not configured') ||
    lower.includes('401') ||
    lower.includes('unauthorized') ||
    !navigator.onLine
  );
}
