/* ============================================================
   SKILL DEVELOPMENT SHEET — Step 2 · write answers on paper
   Silver Oaks · Grade 4 Maths · Number System
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const LEARN = 'number-families';

const ssCards: LearningCard[] = [
  {
    id: 'ss-0',
    lessonId: 'skill-sheet',
    title: 'Your School Paper',
    subtitle: 'Step 2 · Silver Oaks Skill Development Sheet',
    imageUrl: '/homework/skill-sheet-math-g4.svg',
    englishContent:
      'Your teacher gave this paper. Satish says:\n\nFinish **Learn Number Families** first if any word feels new. Then tick each question as you write it in your notebook.\n\nThis app teaches the **method** — you write the **answers** on paper. No answer key until you try!',
    teluguContent:
      'Teacher ఇచ్చిన paper. సతీష్ చెప్పాడు:\n\nWord కొత్తగా అనిపిస్తే ముందు **Learn Number Families** finish చేయి. Notebook లో answer రాస్తూ ప్రతి question tick చేయి.\n\nApp **method** నేర్పిస్తుంది — **answers** paper మీద మీరే రాయాలి.',
    parentSuggestion: {
      tip: 'Sit beside her for Ex 1 only — then let her try Ex 2–3 alone. One word at a time from the Key Words card if she stalls.',
      tipTe: 'Ex 1 కోసం పక్కన కూర్చోండి — Ex 2–3 alone try చేయనివ్వండి. Key Words card నుండి ఒక word at a time.',
      questions: ['Which word on the sheet feels hardest right now?'],
      questionsTe: ['Sheet మీద ఏ word అత్యంత కష్టంగా అనిపిస్తుంది?'],
    },
    promptText: 'Ready to open your notebook?',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer: 'Learn first → Paper second. Tick each box when done. You\'ve got this! ✏️',
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
        what: 'Add the three parts → write standard form with commas → write the number name.',
        example: '30,27,46,092 → Thirty crore twenty-seven lakh forty-six thousand ninety-two',
        learnLink: { lessonId: LEARN, cardId: 'nf-5', label: 'Learn expanded form →' },
      },
      {
        id: 'ss1b',
        label: '1(b) — 50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7',
        what: 'Same steps — this is the 56,23,407 family from the games.',
        example: '56,23,407 → Fifty-six lakh twenty-three thousand four hundred seven',
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
      '**What the sheet asks:** Write each number in standard form (with correct commas) from the given name.\n\n**Important:** Question 2 on your printed sheet shows commas like 7,45,12,93 — that is **wrong**. Use the Indian method from the games.\n\nCorrect grouping for 7451293 → **74,51,293** (seventy-four lakh fifty-one thousand two hundred ninety-three).',
    teluguContent:
      '**Sheet:** Number name నుండి standard form (correct commas) రాయాలి.\n\n**ముఖ్యం:** Printed sheet commas 7,45,12,93 — **తప్పు**. Games method use చేయండి.\n\n7451293 → **74,51,293**.',
    parentSuggestion: {
      tip: 'Quiet word to teacher: Q2 commas are misprinted. Trust Satish\'s comma-rescue method.',
      tipTe: 'Teacher కు quietly: Q2 commas misprint. Satish comma-rescue method నమ్మండి.',
    },
    promptText: 'Fix the commas and write on paper.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'ss2a',
        label: '2(a) — Seven lakh forty-five thousand one hundred twenty-nine',
        what: 'Start from the right: Ones (3 digits) → Thousands → Lakhs. Write with commas.',
        example: '7,45,129',
        learnLink: { lessonId: LEARN, cardId: 'nf-3', label: 'Learn Comma Rescue →' },
      },
      {
        id: 'ss2b',
        label: '2(b) — Seventy-four lakh fifty-one thousand two hundred ninety-three',
        what: 'The misprinted sheet shows 7,45,12,93 — ignore it. Correct: 74,51,293.',
        example: '7451293 → 74,51,293',
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
        what: 'Periods: 56 Lakhs · 23 Thousands · 407 Ones. Then expanded + name.',
        example: '56,23,407 → 50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7',
        learnLink: { lessonId: LEARN, cardId: 'nf-2', label: 'Learn periods →' },
      },
      {
        id: 'ss3b',
        label: '3(b) — 8012693',
        what: 'Periods: 80 Lakhs · 12 Thousands · 693 Ones. Same three steps.',
        example: '80,12,693 → 80,00,000 + 12,000 + 693',
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
        what: 'Break 34,56,789 into crore/lakh/thousand/ones parts.',
        example: '30,00,000 + 4,00,000 + 50,000 + 6,000 + 700 + 80 + 9',
        learnLink: { lessonId: LEARN, cardId: 'nf-5', label: 'Learn expanded form →' },
      },
      {
        id: 'ss4q2',
        label: 'Q2 — Write TN\'s number name in words',
        what: 'Read 28,45,612 period by period like a news anchor.',
        example: 'Twenty-eight lakh forty-five thousand six hundred twelve',
        learnLink: { lessonId: LEARN, cardId: 'nf-4', label: 'Learn Anchor Race →' },
      },
      {
        id: 'ss4q3',
        label: 'Q3 — Order all four states smallest to greatest',
        what: 'Compare lakhs: 24 vs 26 vs 28 vs 34 — then write the order.',
        example: 'AP < Karnataka < TN < Kerala',
        learnLink: { lessonId: LEARN, cardId: 'nf-6', label: 'Learn State Race →' },
      },
      {
        id: 'ss4q4',
        label: 'Q4 — Successor of AP\'s number',
        what: 'AP = 24,89,321. Successor = just after (+1).',
        example: '24,89,322',
        learnLink: { lessonId: LEARN, cardId: 'nf-7', label: 'Learn Neighbours →' },
      },
      {
        id: 'ss4q5',
        label: 'Q5 — Why Kerala has the highest (without subtracting)',
        what: 'Compare lakhs first: Kerala 34 vs others lower. Explain in words.',
        example: 'Kerala\'s lakhs digit (34) is greater than every other state\'s lakhs.',
        learnLink: { lessonId: LEARN, cardId: 'nf-1', label: 'Learn place value →' },
      },
    ],
  },
];

export const skillSheet: Lesson = {
  id: 'skill-sheet',
  title: 'Step 2 — Skill Sheet (Paper)',
  subtitle: 'Silver Oaks · write in notebook',
  kid: 'ishanvi',
  subject: 'maths',
  chapter: 'Number System',
  hasTelugu: true,
  icon: '✏️',
  cards: ssCards,
};
