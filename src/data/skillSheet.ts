/* ============================================================
   SKILL DEVELOPMENT SHEET — Step 2 · hints first, peek when stuck
   Silver Oaks · Grade 4 Maths · Number System
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const LEARN = 'number-families';
const DATE_LABEL = '25 Jun 2026';

const ssCards: LearningCard[] = [
  {
    id: 'ss-0',
    lessonId: 'skill-sheet',
    title: 'Your School Paper',
    subtitle: `Weekend · ${DATE_LABEL} · Silver Oaks sheet`,
    imageUrl: '/homework/skill-sheet-math-g4.svg',
    englishContent:
      'Your teacher gave this paper. Arjuna says:\n\nIf any word feels new, use **Maths · Learn** first (games & parent tips). Then tick each question as you write it in your notebook.\n\nTry every question yourself first. Use **hints** on each card. Only open **Peek** cards if you are truly stuck.\n\nThis app teaches the **method** — you write the **answers** on paper.',
    teluguContent:
      'Teacher ఇచ్చిన paper. సతీష్ చెప్పాడు:\n\nWord కొత్తగా అనిపిస్తే ముందు **Learn Number Families** finish చేయి. Notebook లో answer రాస్తూ ప్రతి question tick చేయి.\n\nముందు hints follow చేయి. stuck అయితే మాత్రమే **Peek** cards open చేయి.\n\nApp **method** నేర్పిస్తుంది — **answers** paper మీద మీరే రాయాలి.',
    parentSuggestion: {
      tip: 'Sit beside her for Ex 1 only — then let her try Ex 2–3 alone. Cover Peek cards until she has written her own attempt.',
      tipTe: 'Ex 1 కోసం పక్కన కూర్చోండి — Ex 2–3 alone try చేయనివ్వండి. Peek cards ఆ answer రాసే varaku cover చేయండి.',
      questions: ['Which word on the sheet feels hardest right now?'],
      questionsTe: ['Sheet మీద ఏ word అత్యంత కష్టంగా అనిపిస్తుంది?'],
    },
    promptText: 'Ready to open your notebook?',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer: 'Learn first → Paper second. Hints guide you; Peek is backup only. Tick each box when done. ✏️',
  },

  {
    id: 'ss-1',
    lessonId: 'skill-sheet',
    title: 'Exercise 1 — Expanded to Standard',
    subtitle: 'Write standard form + number name',
    englishContent:
      '**What the sheet asks:** Read the expanded form and write (1) standard form with commas and (2) the number name in words.\n\n**Method:** Add the parts biggest-first, place commas using Indian families, then read period by period.',
    teluguContent:
      '**Sheet ఏమి అడుగుతుంది:** Expanded form చదివి (1) commas తో standard form (2) words లో number name రాయాలి.\n\n**Method:** Parts పెద్దవి ముందు add, Indian families commas, period by period చదవండి.',
    parentSuggestion: {
      tip: 'For (a), count how many crore/lakh/thousand parts before adding — helps avoid a digit shift.',
      tipTe: '(a) కోసం crore/lakh/thousand parts count చేసి add చేయండి — digit shift తప్పుకుంటారు.',
    },
    promptText: 'Tick each part when written on paper.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'ss1a',
        label: '1(a) — 3,00,00,000 + 27,46,000 + 92',
        hint: 'Add the biggest part first. How many crore? Then lakh, then the last tiny part.',
        example: 'Method: crore part + lakh part + ones — then place commas Indian style.',
        peekLink: { cardId: 'ss-peek-1', label: 'Stuck on 1(a)? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-5', label: 'Learn expanded form →' },
      },
      {
        id: 'ss1b',
        label: '1(b) — 50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7',
        hint: 'You played Number Builder with this family — stack biggest note first, then add.',
        peekLink: { cardId: 'ss-peek-1', label: 'Stuck on 1(b)? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-5', label: 'Learn Number Builder →' },
      },
    ],
  },

  {
    id: 'ss-2',
    lessonId: 'skill-sheet',
    title: 'Exercise 2 — Number Names',
    subtitle: '⚠️ Printed commas on sheet are WRONG',
    englishContent:
      '**What the sheet asks:** Write each number in standard form (with correct commas) from the given name.\n\n**Important:** Question 2 on your printed sheet shows commas like 7,45,12,93 — that is **wrong**. Use the **Indian method** from the Comma Rescue game — start from the right, group 3 then 2-2-2.',
    teluguContent:
      '**Sheet:** Number name నుండి standard form (correct commas) రాయాలి.\n\n**ముఖ్యం:** Printed sheet commas 7,45,12,93 — **తప్పు**. Comma Rescue game Indian method use చేయండి — కుడి నుండి 3, తర్వాత 2-2-2.',
    parentSuggestion: {
      tip: 'Quiet word to teacher: Q2 commas are misprinted. Trust Arjuna\'s comma-rescue method — don\'t open Peek until she tries.',
      tipTe: 'Teacher కు quietly: Q2 commas misprint. Comma-rescue method — Peek ముందు try చేయనివ్వండి.',
    },
    promptText: 'Fix the commas and write on paper.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'ss2a',
        label: '2(a) — Seven lakh forty-five thousand one hundred twenty-nine',
        hint: 'Start from the right: Ones (3 digits) → Thousands → Lakhs. Where do commas go?',
        example: 'Seven lakh = 7 in lakhs seat → group as 7,45,129',
        peekLink: { cardId: 'ss-peek-2', label: 'Stuck on 2(a)? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-3', label: 'Learn Comma Rescue →' },
      },
      {
        id: 'ss2b',
        label: '2(b) — Seventy-four lakh fifty-one thousand two hundred ninety-three',
        hint: 'Ignore the bad commas on the printed sheet. How many lakhs does "seventy-four lakh" mean?',
        peekLink: { cardId: 'ss-peek-2', label: 'Stuck on 2(b)? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-3', label: 'Learn Comma Rescue →' },
      },
    ],
  },

  {
    id: 'ss-3',
    lessonId: 'skill-sheet',
    title: 'Exercise 3 — Periods + Expanded + Name',
    subtitle: 'Split into families, then write all three forms',
    englishContent:
      '**What the sheet asks:** For each number — (1) name the periods, (2) write expanded form, (3) write the number name.\n\nUse the apartment-building trick: Lakhs · Thousands · Ones.',
    teluguContent:
      '**Sheet:** ప్రతి number కు — (1) periods పేర్లు (2) expanded form (3) number name.\n\nApartment trick: Lakhs · Thousands · Ones.',
    promptText: 'Tick when all three parts are on paper.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'ss3a',
        label: '3(a) — 5623407',
        hint: 'Split from the right into Ones (3) · Thousands (2) · Lakhs (2). What are the three family names?',
        example: '5623407 → Lakhs 56 · Thousands 23 · Ones 407',
        peekLink: { cardId: 'ss-peek-3', label: 'Stuck on 3(a)? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-2', label: 'Learn periods →' },
      },
      {
        id: 'ss3b',
        label: '3(b) — 8012693',
        hint: 'Same three steps — which period is 80? Which is 12? Which is 693?',
        peekLink: { cardId: 'ss-peek-3', label: 'Stuck on 3(b)? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-3', label: 'Learn Comma Drop →' },
      },
    ],
  },

  {
    id: 'ss-4',
    lessonId: 'skill-sheet',
    title: 'Case Study — State Literacy',
    subtitle: 'Compare, order, justify · 5 questions',
    englishContent:
      '**What the sheet asks:** Use the table to answer 5 questions about literacy numbers in four southern states.\n\n**Method tip:** Compare **lakhs first** — the biggest family usually decides who wins.',
    teluguContent:
      '**Sheet:** Table use చేసి 4 southern states literacy గురించి 5 questions.\n\n**Tip:** **Lakhs ముందు** compare — పెద్ద family usually winner decide చేస్తుంది.',
    contentBlocks: [
      {
        type: 'case-study-table',
        caption: 'Number of literate people (approx.)',
        headers: ['State', 'Literate people'],
        rows: [
          ['Tamil Nadu', '28,45,612'],
          ['Kerala', '34,56,789'],
          ['Karnataka', '26,78,945'],
          ['Andhra Pradesh', '24,89,321'],
        ],
      },
    ],
    parentSuggestion: {
      tip: 'Q5 asks to justify without subtracting — compare period by period (lakhs, then thousands).',
      tipTe: 'Q5 subtract చేయకుండా justify — period by period compare (lakhs, then thousands).',
    },
    promptText: 'Tick each question when answered on paper.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'ss4q1',
        label: 'Q1 — Write Kerala\'s number in expanded form',
        hint: 'Break 34,56,789 into parts — crore? lakh? thousand? ones? Add biggest first.',
        peekLink: { cardId: 'ss-peek-4', label: 'Stuck on Q1? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-5', label: 'Learn expanded form →' },
      },
      {
        id: 'ss4q2',
        label: 'Q2 — Write TN\'s number name in words',
        hint: 'Read 28,45,612 period by period — like a news anchor would say it.',
        peekLink: { cardId: 'ss-peek-4', label: 'Stuck on Q2? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-4', label: 'Learn Anchor Race →' },
      },
      {
        id: 'ss4q3',
        label: 'Q3 — Order all four states smallest to greatest',
        hint: 'Compare lakhs first: 24 vs 26 vs 28 vs 34 — who is smallest? Who is biggest?',
        peekLink: { cardId: 'ss-peek-4', label: 'Stuck on Q3? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-6', label: 'Learn State Race →' },
      },
      {
        id: 'ss4q4',
        label: 'Q4 — Successor of AP\'s number',
        hint: 'AP = 24,89,321. Successor = just one step after (+1). What changes in the ones place?',
        peekLink: { cardId: 'ss-peek-4', label: 'Stuck on Q4? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-7', label: 'Learn Neighbours →' },
      },
      {
        id: 'ss4q5',
        label: 'Q5 — Why Kerala has the highest (without subtracting)',
        hint: 'Compare lakhs first — Kerala\'s lakhs vs every other state. Explain in your own words.',
        peekLink: { cardId: 'ss-peek-4', label: 'Stuck on Q5? Peek →' },
        learnLink: { lessonId: LEARN, cardId: 'nf-1', label: 'Learn place value →' },
      },
    ],
  },

  /* ── Peek cards — only when stuck ── */
  {
    id: 'ss-peek-1',
    lessonId: 'skill-sheet',
    title: 'Peek — Exercise 1',
    subtitle: 'Only if you tried first',
    englishContent:
      'Compare with what you wrote on paper — **do not copy**. Cover this card and try again tomorrow without peeking.',
    teluguContent:
      'Paper మీద రాసిన answer తో compare చేయి — **copy చేయకు**. Card cover చేసి రేపు peek లేకుండా try చేయి.',
    parentSuggestion: {
      tip: 'Cover this card until she has written her own attempt on paper.',
      tipTe: 'Paper మీద own attempt రాసే varaku card cover చేయండి.',
    },
    promptText: 'Tap only after you tried on paper.',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer:
      '1(a): 30,27,46,092 → Thirty crore twenty-seven lakh forty-six thousand ninety-two\n1(b): 56,23,407 → Fifty-six lakh twenty-three thousand four hundred seven',
  },

  {
    id: 'ss-peek-2',
    lessonId: 'skill-sheet',
    title: 'Peek — Exercise 2',
    subtitle: 'Check your commas',
    englishContent:
      'Correct Indian grouping. **Cover and try again** without peeking.',
    teluguContent:
      'Correct Indian commas. **Cover చేసి** peek లేకుండా మళ్లీ try చేయి.',
    parentSuggestion: {
      tip: 'The printed sheet commas for 2(b) are wrong — this is the rescue answer.',
      tipTe: '2(b) printed commas తప్పు — ఇది rescue answer.',
    },
    promptText: 'Tap to see standard forms.',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer:
      '2(a): 7,45,129\n2(b): 74,51,293 (ignore misprint 7,45,12,93 on sheet)',
  },

  {
    id: 'ss-peek-3',
    lessonId: 'skill-sheet',
    title: 'Peek — Exercise 3',
    subtitle: 'Periods + expanded + name',
    englishContent:
      'Ideas to compare with yours — write all three forms on paper yourself first.',
    teluguContent:
      'మీ answers తో compare — ముందు paper మీద మూడు forms మీరే రాయండి.',
    parentSuggestion: {
      tip: 'Ask her to name the three periods aloud before revealing.',
      tipTe: 'Reveal ముందు periods loud గా చెప్పమనండి.',
    },
    promptText: 'Tap to see one worked split.',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer:
      '3(a): 56 Lakhs · 23 Thousands · 407 Ones → 50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7 → Fifty-six lakh twenty-three thousand four hundred seven\n3(b): 80 Lakhs · 12 Thousands · 693 Ones → 80,00,000 + 12,000 + 693 → Eighty lakh twelve thousand six hundred ninety-three',
  },

  {
    id: 'ss-peek-4',
    lessonId: 'skill-sheet',
    title: 'Peek — Case Study',
    subtitle: 'Check your five answers',
    englishContent:
      'Compare each answer with what you wrote. Q5 should be in **your words**, not copied.',
    teluguContent:
      'మీ answers తో compare. Q5 **మీ words** లో — copy కాదు.',
    parentSuggestion: {
      tip: 'For Q5, cover the peek line and ask her to explain using only the lakhs column.',
      tipTe: 'Q5 కోసం peek line cover — lakhs column use చేసి explain చేయమనండి.',
    },
    promptText: 'Tap to see answers.',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer:
      'Q1: 30,00,000 + 4,00,000 + 50,000 + 6,000 + 700 + 80 + 9\nQ2: Twenty-eight lakh forty-five thousand six hundred twelve\nQ3: AP < Karnataka < TN < Kerala\nQ4: 24,89,322\nQ5: Kerala\'s lakhs (34) is greater than every other state\'s lakhs.',
  },
];

export const skillSheet: Lesson = {
  id: 'skill-sheet',
  title: `Maths · ${DATE_LABEL}`,
  subtitle: 'Silver Oaks skill sheet · write in notebook',
  kid: 'ishanvi',
  subject: 'homework',
  chapter: 'Weekend',
  hasTelugu: true,
  icon: '🧮',
  cards: ssCards,
};
