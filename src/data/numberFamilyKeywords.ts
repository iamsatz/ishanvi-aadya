/* ============================================================
   NUMBER FAMILIES — 12 keyword mini-lessons
   Each word: story + example + quiz + quick check (apartment building)
   ============================================================ */

import type { LearningCard } from '../types/content';

const TEN_CRORE = '10,00,00,000';
const TEN_CRORE_INTL = '100,000,000';
const HW = '56,23,407';

export const keywordIntro: LearningCard = {
  id: 'nf-kw-intro',
  lessonId: 'number-families',
  title: '12 Key Words',
  subtitle: 'One lesson per word — then the games',
  sheetTag: 'Vocabulary',
  englishContent: '',
  contentBlocks: [
    {
      type: 'topic',
      icon: '📖',
      title: 'How these pages work',
      body: 'Arjuna teaches **one word per page** — like a mini lesson.\n\nEach page has:\n• a building example\n• a Quick Check quiz\n• one question to try\n\nUse **Next →** to go word by word. All 12 before the games!',
    },
    {
      type: 'topic',
      icon: '🏢',
      title: 'Ten crores — our hero number',
      body: `We use ${TEN_CRORE} (ten crore) in many examples.\n\n🟪 Crores: 10 · 🟧 Lakhs: 00 · 🟩 Thousands: 00 · 🟦 Ones: 000`,
    },
    {
      type: 'system-compare',
      number: 'Ten crores — Indian vs International:',
      indian: TEN_CRORE,
      international: TEN_CRORE_INTL,
    },
  ],
  teluguContent:
    `12 words — ఒక word per page. ప్రతి page: example + quiz + question.\n\n${TEN_CRORE} = ten crore — చాలా examples లో.`,
  parentSuggestion: {
    tip: 'Do one word per sitting if needed. After each page, ask: "Can you use that word in your own sentence?"',
    tipTe: 'ఒక word per day సరిపోతుంది. Page తర్వాత: "ఈ word own sentence లో use చేయగలవా?"',
    questions: ['Which word feels hardest before we start?'],
    questionsTe: ['మొదట ఏ word కష్టంగా అనిపిస్తుంది?'],
  },
  promptText: 'Ready? Tap Next to start Word 1 — Digit.',
  interactionType: 'tap-reveal',
  cardStyle: 'deck',
  revealAnswer: 'Word 1 is Digit. Each word gets its own page with an example and a quiz. Press Next →',
};

export const keywordCards: LearningCard[] = [
  {
    id: 'nf-kw-digit',
    lessonId: 'number-families',
    title: 'Digit',
    subtitle: 'Key Word 1 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🔢',
        title: 'What is a digit?',
        body: 'A digit is one symbol from 0 to 9 — like one person in a family.\n\nIn the building number 56,23,407 there are **seven digits**: 5, 6, 2, 3, 4, 0, 7.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Building example',
        body: 'Each digit can stand on a different floor. Same digit, different floor → different worth (that comes in Place value!).',
      },
    ],
    teluguContent: 'Digit = 0–9 లో ఒక symbol.\n\n56,23,407 లో 7 digits: 5,6,2,3,4,0,7.',
    parentSuggestion: {
      tip: 'Write a big number and ask her to circle each digit — count them together.',
      questions: ['How many digits are in our phone number?'],
      questionsTe: ['Phone number లో ఎన్ని digits?'],
    },
    quiz: [{
      id: 'nf-kw-digit-q',
      question: 'How many digits are in 56,23,407?',
      choices: [
        { id: 'a', label: '6', isCorrect: false },
        { id: 'b', label: '7', isCorrect: true },
        { id: 'c', label: '8', isCorrect: false },
      ],
      hint: 'Count every symbol 0–9, commas don\'t count.',
    }],
    promptText: 'Which of these is ONE digit?',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '56', isCorrect: false },
      { id: 'b', label: '7', isCorrect: true },
      { id: 'c', label: '407', isCorrect: false },
    ],
    hint: 'A digit is a single symbol 0–9.',
  },

  {
    id: 'nf-kw-number',
    lessonId: 'number-families',
    title: 'Number',
    subtitle: 'Key Word 2 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🔢',
        title: 'What is a number?',
        body: 'A **number** is digits grouped together to show an amount.\n\n56,23,407 is one number. 10,00,00,000 is one number — a very tall building!',
      },
      {
        type: 'topic',
        icon: '🏠',
        title: 'Real life',
        body: 'Cricket score 287, school roll number 1042, population on a billboard — each is a number made of digits.',
      },
    ],
    teluguContent: 'Number = digits కలిపి amount చూపించడం.\n\n56,23,407 ఒక number. 10,00,00,000 కూడా ఒక number.',
    parentSuggestion: {
      questions: ['Is "5" a number or a digit? Why?'],
      questionsTe: ['"5" number aa digit aa? ఎందుకు?'],
    },
    quiz: [{
      id: 'nf-kw-number-q',
      question: 'Which is a complete number (not just one digit)?',
      choices: [
        { id: 'a', label: '9', isCorrect: false },
        { id: 'b', label: '10,00,00,000', isCorrect: true },
        { id: 'c', label: 'A comma', isCorrect: false },
      ],
    }],
    promptText: 'Digits grouped together make a…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Comma', isCorrect: false },
      { id: 'b', label: 'Number', isCorrect: true },
      { id: 'c', label: 'Period only', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-place',
    lessonId: 'number-families',
    title: 'Place Value',
    subtitle: 'Key Word 3 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '💪',
        title: 'Place value = power of the seat',
        body: 'Place value is what a digit is **worth** because of which floor it stands on.\n\nIn 56,23,407 the 6 sits on the **Lakhs floor** → place value **6,00,000**.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Move the digit, change the worth',
        body: 'Same digit 6 on the Ones floor = ₹6.\nSame 6 on the Lakhs floor = ₹6,00,000.\nThe seat gives the power!',
      },
    ],
    teluguContent: 'Place value = digit ఏ floor లో ఉందో బట్టి worth.\n\n56,23,407 లో 6 → Lakhs floor → 6,00,000.',
    parentSuggestion: {
      questions: ['If we move the 6 to Thousands floor, would it be worth more or less than 6,00,000?'],
      questionsTe: ['6 ను Thousands floor కు move చేస్తే 6,00,000 కంటే ఎక్కువా తక్కువా?'],
    },
    quiz: [{
      id: 'nf-kw-place-q',
      question: 'Place value of 6 in 56,23,407?',
      choices: [
        { id: 'a', label: '6', isCorrect: false },
        { id: 'b', label: '6,00,000', isCorrect: true },
        { id: 'c', label: '60,000', isCorrect: false },
      ],
      hint: 'Which floor is the 6 on?',
    }],
    promptText: 'The 6 moved to Lakhs floor. Its place value is…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '6', isCorrect: false },
      { id: 'b', label: '6,00,000', isCorrect: true },
      { id: 'c', label: '600', isCorrect: false },
    ],
    hint: 'Lakhs floor × 6',
  },

  {
    id: 'nf-kw-face',
    lessonId: 'number-families',
    title: 'Face Value',
    subtitle: 'Key Word 4 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '👀',
        title: 'Face value = what it looks like',
        body: 'Face value is the digit itself — its face never changes.\n\nIn 80,12,693 the face value of 8 is always **8**, even though its place value is 80,00,000.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Same face, any floor',
        body: '8 on ground floor looks like 8.\n8 on Crores floor still looks like 8.\nOnly place value changes — not the face.',
      },
    ],
    teluguContent: 'Face value = digit ముఖం — మారదు.\n\n80,12,693 లో 8 face value = 8.',
    parentSuggestion: {
      questions: ['Does the face of 8 change when we move it to another floor?'],
      questionsTe: ['8 ను వేరే floor కు move చేస్తే face మారుతుందా?'],
    },
    quiz: [{
      id: 'nf-kw-face-q',
      question: 'Face value of 8 in 80,12,693?',
      choices: [
        { id: 'a', label: '80,00,000', isCorrect: false },
        { id: 'b', label: '8', isCorrect: true },
        { id: 'c', label: '800', isCorrect: false },
      ],
    }],
    promptText: 'Face value never changes. The face of 8 is…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '80,00,000', isCorrect: false },
      { id: 'b', label: '8', isCorrect: true },
      { id: 'c', label: '80', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-period',
    lessonId: 'number-families',
    title: 'Period',
    subtitle: 'Key Word 5 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🏢',
        title: 'Period = one floor family',
        body: 'A period is a family of digits on one floor:\n\n🟦 Ones · 🟩 Thousands · 🟧 Lakhs · 🟪 Crores',
      },
      {
        type: 'topic',
        icon: '📊',
        title: 'Example',
        body: `${HW} → Lakhs period: 56 · Thousands period: 23 · Ones period: 407.\n\n${TEN_CRORE} → only Crores period has 10; other floors are 00 or 000.`,
      },
    ],
    teluguContent: 'Period = ఒక floor family.\n\nOnes · Thousands · Lakhs · Crores.',
    parentSuggestion: {
      questions: ['In 10,00,00,000 which period is not zero?'],
      questionsTe: ['10,00,00,000 లో ఏ period zero కాదు?'],
    },
    quiz: [{
      id: 'nf-kw-period-q',
      question: 'In 56,23,407 what is in the Lakhs period?',
      choices: [
        { id: 'a', label: '407', isCorrect: false },
        { id: 'b', label: '56', isCorrect: true },
        { id: 'c', label: '23', isCorrect: false },
      ],
    }],
    promptText: 'The Lakhs period in 56,23,407 is…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '23', isCorrect: false },
      { id: 'b', label: '56', isCorrect: true },
      { id: 'c', label: '407', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-standard',
    lessonId: 'number-families',
    title: 'Standard Form',
    subtitle: 'Key Word 6 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '✏️',
        title: 'Standard form',
        body: 'Standard form is the normal way to write a number **with commas** between periods.\n\nTen crores in standard form: **10,00,00,000**.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Commas = gaps between floors',
        body: 'Commas sit BETWEEN families, never breaking one period apart.\n\nWrong: 1,000,00,000 · Right: 10,00,00,000 (Indian).',
      },
    ],
    teluguContent: 'Standard form = commas తో normal రాత.\n\nTen crore: 10,00,00,000.',
    parentSuggestion: {
      questions: ['Where would you put commas in 5623407?'],
      questionsTe: ['5623407 లో commas ఎక్కడ?'],
    },
    quiz: [{
      id: 'nf-kw-standard-q',
      question: 'Standard form of ten crores (Indian)?',
      choices: [
        { id: 'a', label: '1,00,00,000', isCorrect: false },
        { id: 'b', label: '10,00,00,000', isCorrect: true },
        { id: 'c', label: '10,000,000', isCorrect: false },
      ],
    }],
    promptText: 'Ten crores with Indian commas is…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '100,000,000', isCorrect: false },
      { id: 'b', label: '10,00,00,000', isCorrect: true },
      { id: 'c', label: '1,0,0,0,0,0,0', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-expanded',
    lessonId: 'number-families',
    title: 'Expanded Form',
    subtitle: 'Key Word 7 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '💰',
        title: 'Expanded form = stacked parts',
        body: 'Expanded form splits a number into parts — one part per floor that has value.\n\n56,23,407 = 50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Ten crores expanded',
        body: `${TEN_CRORE} = 10,00,00,000 + 0 + 0 + 0\n\nOnly the Crores floor has a non-zero part. Other floors are empty (zero).`,
      },
    ],
    teluguContent: 'Expanded form = parts add చేసిన రూపం.\n\n10,00,00,000 = Crores part మాత్రమే.',
    parentSuggestion: {
      questions: ['Which part is biggest in 56,23,407 expanded form? Why?'],
      questionsTe: ['56,23,407 expanded లో biggest part ఏది? ఎందుకు?'],
    },
    quiz: [{
      id: 'nf-kw-expanded-q',
      question: 'Expanded form of 10,00,00,000 has how many non-zero parts?',
      choices: [
        { id: 'a', label: 'Four', isCorrect: false },
        { id: 'b', label: 'One', isCorrect: true },
        { id: 'c', label: 'Ten', isCorrect: false },
      ],
      hint: 'Only Crores floor has 10.',
    }],
    promptText: 'Biggest part of 56,23,407 expanded is…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '407', isCorrect: false },
      { id: 'b', label: '50,00,000', isCorrect: true },
      { id: 'c', label: '23', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-name',
    lessonId: 'number-families',
    title: 'Number Name',
    subtitle: 'Key Word 8 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '📺',
        title: 'Number name = say it in words',
        body: 'A number name is how we **read** the number aloud, floor by floor.\n\n10,00,00,000 → **Ten crore**\n56,23,407 → Fifty-six lakh twenty-three thousand four hundred seven',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Anchor rule',
        body: 'Read from the top floor down. Pause at each comma — each pause is a new period name.',
      },
    ],
    teluguContent: 'Number name = words లో చదవడం.\n\n10,00,00,000 → Ten crore.',
    parentSuggestion: {
      questions: ['Can you read 10,00,00,000 aloud without looking at digits one by one?'],
      questionsTe: ['10,00,00,000 digit by digit కాకుండా read చేయగలరా?'],
    },
    quiz: [{
      id: 'nf-kw-name-q',
      question: 'Number name of 10,00,00,000?',
      choices: [
        { id: 'a', label: 'One crore', isCorrect: false },
        { id: 'b', label: 'Ten crore', isCorrect: true },
        { id: 'c', label: 'Ten thousand', isCorrect: false },
      ],
    }],
    promptText: 'How do we read 10,00,00,000?',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: 'One crore', isCorrect: false },
      { id: 'b', label: 'Ten crore', isCorrect: true },
      { id: 'c', label: 'Ten lakh', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-successor',
    lessonId: 'number-families',
    title: 'Successor',
    subtitle: 'Key Word 9 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '→',
        title: 'Successor = just after (+1)',
        body: 'The successor is the number **one step forward** on the number line.\n\nSuccessor of 24,89,321 is **24,89,322**.',
      },
      {
        type: 'topic',
        icon: '🏘️',
        title: 'Flat next door',
        body: 'Think of apartment numbers: 24,89,321 → next flat is 24,89,322.',
      },
    ],
    teluguContent: 'Successor = తర్వాత number (+1).\n\n24,89,321 → 24,89,322.',
    parentSuggestion: {
      questions: ['What is the successor of 10,00,00,000?'],
      questionsTe: ['10,00,00,000 successor ఎంత?'],
    },
    quiz: [{
      id: 'nf-kw-successor-q',
      question: 'Successor of 24,89,321?',
      choices: [
        { id: 'a', label: '24,89,320', isCorrect: false },
        { id: 'b', label: '24,89,322', isCorrect: true },
        { id: 'c', label: '24,89,421', isCorrect: false },
      ],
    }],
    promptText: 'One step forward from 24,89,321 is…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '24,89,320', isCorrect: false },
      { id: 'b', label: '24,89,322', isCorrect: true },
      { id: 'c', label: '24,90,321', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-predecessor',
    lessonId: 'number-families',
    title: 'Predecessor',
    subtitle: 'Key Word 10 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '←',
        title: 'Predecessor = just before (−1)',
        body: 'The predecessor is the number **one step back**.\n\nPredecessor of 24,89,321 is **24,89,320**.',
      },
      {
        type: 'topic',
        icon: '🏘️',
        title: 'Flat behind',
        body: '24,89,321 → the flat just before is 24,89,320.',
      },
    ],
    teluguContent: 'Predecessor = ముందు number (−1).\n\n24,89,321 → 24,89,320.',
    parentSuggestion: {
      questions: ['What is the predecessor of 10,00,00,001?'],
      questionsTe: ['10,00,00,001 predecessor ఎంత?'],
    },
    quiz: [{
      id: 'nf-kw-predecessor-q',
      question: 'Predecessor of 24,89,321?',
      choices: [
        { id: 'a', label: '24,89,322', isCorrect: false },
        { id: 'b', label: '24,89,320', isCorrect: true },
        { id: 'c', label: '24,88,321', isCorrect: false },
      ],
    }],
    promptText: 'One step back from 24,89,321 is…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '24,89,322', isCorrect: false },
      { id: 'b', label: '24,89,320', isCorrect: true },
      { id: 'c', label: '24,89,221', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-indian',
    lessonId: 'number-families',
    title: 'Indian System',
    subtitle: 'Key Word 11 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🇮🇳',
        title: 'Indian system',
        body: 'From the **right**: group **3** digits (Ones), then **2, 2, 2…** (Thousands, Lakhs, Crores).\n\nThis matches our apartment building floors.',
      },
      {
        type: 'system-compare',
        number: 'Ten crores — Indian style:',
        indian: TEN_CRORE,
        international: TEN_CRORE_INTL,
      },
    ],
    teluguContent: 'Indian system: కుడి నుండి 3, తర్వాత 2,2,2…\n\n10,00,00,000.',
    parentSuggestion: {
      questions: ['Why does Ones floor always have 3 rooms in Indian system?'],
      questionsTe: ['Indian system లో Ones floor ఎందుకు 3 digits?'],
    },
    quiz: [{
      id: 'nf-kw-indian-q',
      question: 'First group from the RIGHT in Indian system has how many digits?',
      choices: [
        { id: 'a', label: '2', isCorrect: false },
        { id: 'b', label: '3', isCorrect: true },
        { id: 'c', label: '4', isCorrect: false },
      ],
    }],
    promptText: 'Indian commas for ten crores look like…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '100,000,000', isCorrect: false },
      { id: 'b', label: '10,00,00,000', isCorrect: true },
      { id: 'c', label: '1,000,000,000', isCorrect: false },
    ],
  },

  {
    id: 'nf-kw-intl',
    lessonId: 'number-families',
    title: 'International System',
    subtitle: 'Key Word 12 of 12',
    sheetTag: 'Key Word',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🌍',
        title: 'International system',
        body: 'Groups of **three** from the right everywhere — Ones, Thousands, Millions, Billions.\n\nNo lakhs or crores names — they use millions instead.',
      },
      {
        type: 'system-compare',
        number: 'Same ten crores — International style:',
        indian: TEN_CRORE,
        international: TEN_CRORE_INTL,
      },
    ],
    teluguContent: 'International: కుడి నుండి threes — millions, billions.\n\n100,000,000 = ten crore (Indian name).',
    parentSuggestion: {
      questions: ['Same amount — why do the commas look different in Indian vs International?'],
      questionsTe: ['Same amount — Indian vs International commas ఎందుకు different?'],
    },
    quiz: [{
      id: 'nf-kw-intl-q',
      question: 'International form of ten crores?',
      choices: [
        { id: 'a', label: '10,00,00,000', isCorrect: false },
        { id: 'b', label: '100,000,000', isCorrect: true },
        { id: 'c', label: '10,000,000', isCorrect: false },
      ],
    }],
    promptText: 'International grouping uses threes. Ten crores is…',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '10,00,00,000', isCorrect: false },
      { id: 'b', label: '100,000,000', isCorrect: true },
      { id: 'c', label: '1,00,00,000', isCorrect: false },
    ],
    hint: '100 million = ten crore.',
  },
];
