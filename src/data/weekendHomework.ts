/* ============================================================
   WEEKEND HOMEWORK — hints first, answers on separate peek cards
   Weekend · 26 Jun 2026 · Ishanvi Grade 4
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const DATE_LABEL = '26 Jun 2026';
const HW = 'weekend-2026-06-26';
const BOOK = 'Oxford English Book';

const englishCards: LearningCard[] = [
  {
    id: 'wh-en-0',
    lessonId: `${HW}-english`,
    title: 'English Weekend Task',
    subtitle: `Weekend · ${DATE_LABEL}`,
    englishContent:
      `Satish says: get your **${BOOK}** — the same English textbook you use at school (Unit 7 · friendship pages).\n\n**Page 101** → Bits A & B in **pencil**.\n**Pages 102 & 104** → read the story *Sitti\'s Secrets* and think about the glossary words.\n\nTry every question yourself first. Use **hints** on each card. Only open **Peek** cards if you are truly stuck.`,
    teluguContent:
      `**${BOOK}** తీసుకో — school English textbook (Unit 7 · friendship).\n\n**Page 101** → Bits A & B pencil తో.\n**Pages 102 & 104** → story read, glossary words గురించి think చేయి.\n\nముందు hints follow చేయి. stuck అయితే మాత్రమే **Peek** cards open చేయి.`,
    parentSuggestion: {
      tip: 'Ask "which book?" before she starts — point to the Oxford English Book from school bag, not the maths sheet.',
      tipTe: '"ఏ book?" అని ask చేయండి — school bag Oxford English Book చూపించండి, maths sheet కాదు.',
      questions: ['Can you find page 101 without me?'],
      questionsTe: ['Page 101 నువ్వే find చేయగలవా?'],
    },
    promptText: 'Pick the book you need for today\'s English homework:',
    interactionType: 'choice-cards',
    choices: [
      { id: 'oxford', label: '📗 Oxford English Book', isCorrect: true },
      { id: 'maths', label: '📐 Maths Silver Oaks sheet', isCorrect: false },
      { id: 'science', label: '🔬 Science textbook', isCorrect: false },
    ],
  },

  {
    id: 'wh-en-1',
    lessonId: `${HW}-english`,
    title: 'Page 101 — Try yourself',
    subtitle: '7A · Thinking about friends · Bits A & B',
    imageUrl: '/homework/weekend-2026-06-26/english-pg101.png',
    englishContent:
      '**Bit A — talk & think** (no rush to write answers yet):\n\n1. chum, buddy, mate, pal, ally, companion — what idea links them?\n2. Who do you admire? **Why** — not just their name.\n3. bond · embrace · affection · respect — say each in your own words first.\n\n**Bit B — match** (after Bit A): use the synonym tip box on the page if needed.',
    teluguContent:
      '**Bit A:** words same idea? admire why? bond/embrace/affection/respect — own words.\n\n**Bit B:** Bit A తర్వాత match.',
    parentSuggestion: {
      tip: 'Bit A is discussion — let her guess before Bit B. Synonyms mean same-ish meaning, not identical.',
      tipTe: 'Bit A discussion — guess చేయనివ్వండి. Synonyms = same-ish meaning.',
    },
    promptText: 'Tick when you have tried each bit (pencil in book).',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'en-a1',
        label: 'Bit A1 — Synonyms for friend',
        hint: 'When do you call someone a chum or pal? What word means the same?',
        peekLink: { cardId: 'wh-en-peek-a', label: 'Stuck on A1? Peek →' },
      },
      {
        id: 'en-a2',
        label: 'Bit A2 — Qualities you admire',
        hint: 'Pick one person. What do they do that you want to copy?',
      },
      {
        id: 'en-a3',
        label: 'Bit A3 — bond, embrace, affection, respect',
        hint: 'Act out embrace vs respect — how are they different?',
        peekLink: { cardId: 'wh-en-peek-a', label: 'Word meanings peek →' },
      },
      {
        id: 'en-b',
        label: 'Bit B — All matching pairs',
        hint: 'Read each definition aloud. Which friend-word fits best?',
        peekLink: { cardId: 'wh-en-peek-b', label: 'Stuck on matching? Peek →' },
      },
    ],
  },

  {
    id: 'wh-en-2',
    lessonId: `${HW}-english`,
    title: 'Pages 102 & 104 — Read & think',
    subtitle: 'Sitti\'s Secrets · Naomi Shihab Nye',
    englishContent:
      'Read **pages 102 and 104** in your Oxford book.\n\nDo not memorise definitions yet — notice **when** each glossary word appears in the story. What is happening in that moment?',
    teluguContent:
      'Pages 102 & 104 read. Definitions mug up చేయకు — story లో word ఎప్పుడు వస్తుంది notice చేయి.',
    promptText: 'Tick when you have read and thought about each word.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'en-read102',
        label: 'Read page 102 — opening of the story',
        hint: 'Mona and Sitti speak different languages. How do they still talk?',
      },
      {
        id: 'en-gloss102',
        label: 'Think about: peeking, translate, whooshed',
        hint: 'Cover the glossary. What would each word mean from the sentence?',
        peekLink: { cardId: 'wh-en-peek-gloss', label: 'Glossary peek →' },
      },
      {
        id: 'en-read104',
        label: 'Read page 104 — story continued',
        hint: 'What games do they play? What are lentils in the fields?',
      },
      {
        id: 'en-gloss104',
        label: 'Think about: lentils, marbles',
        hint: 'Picture the scene before looking up the words.',
        peekLink: { cardId: 'wh-en-peek-gloss', label: 'Glossary peek →' },
      },
      {
        id: 'en-q104',
        label: 'Page 104 — Which sentence is true?',
        hint: 'Do Mona and Sitti understand each other in the end? How?',
        peekLink: { cardId: 'wh-en-peek-gloss', label: 'Check your thinking →' },
      },
    ],
  },

  /* ── Peek cards — only when stuck ── */
  {
    id: 'wh-en-peek-a',
    lessonId: `${HW}-english`,
    title: 'Peek — Bit A ideas',
    subtitle: 'Only if you tried first',
    englishContent:
      'These are **ideas to compare with yours** — not copy-paste answers.\n\nDid your Bit A talk sound similar? If not, which word would you change?',
    parentSuggestion: {
      tip: 'Cover this card until she has spoken her own answer out loud.',
      tipTe: 'ఆ answer loud చెప్పే varaku card cover చేయండి.',
    },
    promptText: 'Already tried? Tap to compare with these ideas.',
    interactionType: 'tap-reveal',
    revealAnswer:
      'A1: all mean friend / close companion.\nA3 starters: bond = close tie · embrace = hug · affection = fondness · respect = admire someone\'s good traits.',
  },

  {
    id: 'wh-en-peek-b',
    lessonId: `${HW}-english`,
    title: 'Peek — Bit B matching',
    subtitle: 'Check your pairs',
    englishContent:
      'Match these if you are stuck. **Cover and try again tomorrow** without peeking.',
    promptText: 'Stuck on matching? Tap to see the pairs.',
    interactionType: 'tap-reveal',
    revealAnswer:
      'chum → good friend (rhymes) · bond → shared-feeling relationship · embrace → hold close · respect → admire good things · ally → same side · buddy → American good friend · affection → fondness',
  },

  {
    id: 'wh-en-peek-gloss',
    lessonId: `${HW}-english`,
    title: 'Peek — Glossary 102 & 104',
    subtitle: 'Book definitions',
    englishContent:
      'Official glossary from the textbook. Close this card and explain one word to someone without looking.',
    promptText: 'Need the glossary? Tap to show word meanings.',
    interactionType: 'tap-reveal',
    revealAnswer:
      '102: peeking = quick secret look · translate = say in another language · whooshed = rushing wind/water sound\n104: lentils = small bean · marbles = glass-ball game\nTrue sentence: Mona & Sitti communicate with gestures and their own language.',
  },
];

const scienceCards: LearningCard[] = [
  {
    id: 'wh-sc-0',
    lessonId: `${HW}-science`,
    title: 'Science Extended Task',
    subtitle: `Weekend · ${DATE_LABEL} · WHO WE ARE`,
    imageUrl: '/homework/weekend-2026-06-26/science-extended.png',
    englishContent:
      'On an **A4 sheet** — reflect on today\'s storytelling session.\n\nThere is no single correct answer. Satish wants you to **understand yourself**, not copy examples.',
    teluguContent:
      '**A4 sheet** — storytelling reflection. Correct answer లేదు — yourself understand చేసుకో.',
    parentSuggestion: {
      tip: 'Draw first, write second. The mirror question is about inner qualities, not appearance.',
      tipTe: 'Draw first, write second. Mirror question = inner qualities.',
    },
    promptText: 'Tick when you have written honest answers on paper.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'sc1',
        label: '1. I am special because _______',
        hint: 'Not looks — a skill, habit, or way you treat people.',
        peekLink: { cardId: 'wh-sc-peek', label: 'Need a starter? Peek →' },
      },
      {
        id: 'sc2',
        label: '2. One thing a mirror can\'t show about me is _______',
        hint: 'Feelings, thoughts, kindness, courage, dreams…',
        peekLink: { cardId: 'wh-sc-peek', label: 'Need a starter? Peek →' },
      },
      {
        id: 'sc3',
        label: '3. What makes me feel proud of myself?',
        hint: 'Small win counts — helping a friend, finishing homework, trying again.',
      },
    ],
  },

  {
    id: 'wh-sc-peek',
    lessonId: `${HW}-science`,
    title: 'Peek — reflection starters',
    subtitle: 'Inspiration only · make it yours',
    englishContent:
      'Examples other kids wrote. **Do not copy** — use them to spark your own honest answer.',
    promptText: 'Need an idea? Tap for examples — then write your own.',
    interactionType: 'tap-reveal',
    revealAnswer:
      'Special because I listen when friends are sad · Mirror can\'t show my kindness · Proud when I kept trying at maths',
  },
];

export const weekendEnglish: Lesson = {
  id: `${HW}-english`,
  title: `English · Weekend ${DATE_LABEL}`,
  subtitle: `${BOOK} · pg 101–104`,
  kid: 'ishanvi',
  subject: 'homework',
  chapter: 'Weekend',
  hasTelugu: true,
  icon: '📖',
  cards: englishCards,
};

export const weekendScience: Lesson = {
  id: `${HW}-science`,
  title: `Science · Weekend ${DATE_LABEL}`,
  subtitle: 'WHO WE ARE · A4 reflection',
  kid: 'ishanvi',
  subject: 'homework',
  hasTelugu: true,
  icon: '🔬',
  cards: scienceCards,
};

export const weekendHomeworkLessons: Lesson[] = [weekendEnglish, weekendScience];
