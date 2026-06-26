/* ============================================================
   WEEKEND HOMEWORK — Ishanvi · dated tasks (upload pattern)
   Weekend · 26 Jun 2026
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const DATE_LABEL = '26 Jun 2026';
const HW = 'weekend-2026-06-26';

const englishCards: LearningCard[] = [
  {
    id: 'wh-en-0',
    lessonId: `${HW}-english`,
    title: 'English Weekend Task',
    subtitle: `Weekend · ${DATE_LABEL} · Oxford English Book`,
    englishContent:
      'Dear acorns,\n\nComplete **Bits A and B** on **page 101** (use pencil).\n\nAlso **read pages 102 & 104** and learn the **glossary** words.\n\nWrite answers in your book — the app shows the pages and ticks you off.',
    teluguContent:
      'Dear acorns,\n\n**Page 101** మీద **Bits A & B** complete చేయి (pencil use చేయి).\n\n**Pages 102 & 104** read చేసి **glossary** words నేర్చుకో.\n\nAnswers book లో రాయి — app pages చూపిస్తుంది, tick చేసుకో.',
    parentSuggestion: {
      tip: 'Do Bit A talk-time together at the table. Bit B matching can be solo after she reads the synonym tip box.',
      tipTe: 'Bit A table దగ్గర కలిసి చేయండి. Bit B matching — synonym box చదివాక alone try చేయనివ్వండి.',
    },
    promptText: 'Open page 101 in your book.',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer: 'Pg 101 → Bits A & B with pencil. Then read 102 & 104 + glossary. ✏️',
  },
  {
    id: 'wh-en-1',
    lessonId: `${HW}-english`,
    title: 'Page 101 — Bits A & B',
    subtitle: '7A · Thinking about friends',
    imageUrl: '/homework/weekend-2026-06-26/english-pg101.png',
    englishContent:
      '**Bit A — Work in groups and discuss:**\n\n1. chum, buddy, mate, pal, ally, companion — synonyms for what?\n2. Who do you like or love? What qualities do you admire?\n3. What do these words mean? **bond · embrace · affection · respect**\n\n**Bit B — Match** words from A1 and A3 to the correct definition (not every word is used).',
    teluguContent:
      '**Bit A:**\n1. chum, buddy, mate… — synonyms for?\n2. మీరు ఎవరిని admire చేస్తారు? qualities?\n3. bond, embrace, affection, respect — meanings?\n\n**Bit B:** words match definitions.',
    promptText: 'Tick each bit when done in pencil.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'en-a1',
        label: 'Bit A1 — Synonyms for friend',
        what: 'All those words mean friend or close companion.',
        example: 'chum, buddy, mate, pal, ally, companion → friend',
      },
      {
        id: 'en-a2',
        label: 'Bit A2 — Qualities you admire',
        what: 'Talk about people you love and why.',
      },
      {
        id: 'en-a3',
        label: 'Bit A3 — Meanings of bond, embrace, affection, respect',
        what: 'Discuss each word before matching in Bit B.',
      },
      {
        id: 'en-b1',
        label: 'Bit B — Match chum → a good friend (rhymes with chum)',
      },
      {
        id: 'en-b2',
        label: 'Bit B — Match bond → special relationship / shared feelings',
      },
      {
        id: 'en-b3',
        label: 'Bit B — Match embrace → hold someone close in your arms',
      },
      {
        id: 'en-b4',
        label: 'Bit B — Match respect → admire good things about someone',
      },
      {
        id: 'en-b5',
        label: 'Bit B — Match ally → someone on the same side as you',
      },
      {
        id: 'en-b6',
        label: 'Bit B — Match buddy → American term for good friend',
      },
      {
        id: 'en-b7',
        label: 'Bit B — Match affection → feeling of fondness or liking',
      },
    ],
  },
  {
    id: 'wh-en-2',
    lessonId: `${HW}-english`,
    title: 'Pages 102 & 104 — Read & Glossary',
    subtitle: 'Sitti\'s Secrets · Naomi Shihab Nye',
    englishContent:
      'Read the story excerpts on **pages 102 and 104**.\n\nLearn these glossary words:',
    teluguContent:
      '**Pages 102 & 104** story read చేయి.\n\nGlossary words నేర్చుకో:',
    contentBlocks: [
      {
        type: 'topic',
        icon: '📖',
        title: 'Page 102 — Glossary',
        body: '**peeking** — quickly and secretly looking at something\n**translate** — say in another language\n**whooshed** — made a rushing noise, like wind or water',
      },
      {
        type: 'topic',
        icon: '📖',
        title: 'Page 104 — Glossary + check',
        body: '**lentils** — type of small bean\n**marbles** — game played with small glass balls\n\nAfter reading: Which sentence is true? (Mona & Sitti communicate with gestures and invented language.)',
      },
    ],
    promptText: 'Tick when you have read both pages and know the words.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'en-read102',
        label: 'Read page 102 — Sitti\'s Secrets (opening)',
        what: 'Mona visits her grandmother; they don\'t share a language.',
      },
      {
        id: 'en-gloss102',
        label: 'Learn pg 102 glossary — peeking, translate, whooshed',
      },
      {
        id: 'en-read104',
        label: 'Read page 104 — story continued',
        what: 'Gestures, lentils in fields, marbles with cousins.',
      },
      {
        id: 'en-gloss104',
        label: 'Learn pg 104 glossary — lentils, marbles',
      },
    ],
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
      'Dear Parents/Acorns,\n\nComplete on an **A4 sheet**.\n\n**Theme:** WHO WE ARE\n\n**Task:** Reflection on today\'s storytelling session.',
    teluguContent:
      'Dear Parents/Acorns,\n\n**A4 sheet** మీద complete చేయండి.\n\n**Theme:** WHO WE ARE\n\n**Task:** Storytelling session reflection.',
    parentSuggestion: {
      tip: 'Let her draw a small self-portrait on the A4 sheet before writing — mirrors the “what a mirror can\'t show” question.',
      tipTe: 'A4 మీద chinna self-portrait draw చేయనివ్వండి — “mirror can\'t show” question కు help అవుతుంది.',
    },
    promptText: 'Tick each question when answered on paper.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'sc1',
        label: '1. I am special because _______',
        what: 'Write what makes Ishanvi unique — kind, curious, brave, etc.',
      },
      {
        id: 'sc2',
        label: '2. One thing a mirror can\'t show about me is _______',
        what: 'Inner qualities: kindness, thoughts, feelings, dreams.',
      },
      {
        id: 'sc3',
        label: '3. What makes me feel proud of myself?',
        what: 'A moment or habit she is proud of.',
      },
    ],
  },
];

export const weekendEnglish: Lesson = {
  id: `${HW}-english`,
  title: `English · Weekend ${DATE_LABEL}`,
  subtitle: 'Oxford English Book · pg 101–104',
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
