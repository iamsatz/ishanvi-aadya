/* ============================================================
   NUMBER FAMILIES — 12 keyword mini-lessons
   Each word: story + example + quiz + quick check (apartment building)
   ============================================================ */

import type { LearningCard } from '../types/content';

const TEN_CRORE = '10,00,00,000';
const TEN_CRORE_INTL = '100,000,000';
/** Rotating example numbers — each card uses different ones for quiz vs try-it. */
const N_A = '80,12,693';
const N_B = '3,04,567';
const N_C = '7,02,15,890';
const N_D = '2,58,000';
const N_E = '9,15,042';
const N_F = '1,05,030';
const N_G = '50,00,000';
const N_H = '9,99,999';

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
      body: 'Arjuna teaches **one word per page** — like a mini lesson.\n\nEach page has:\n• a building example (different numbers each time!)\n• a Quick Check quiz\n• one question to try\n\nUse **Next →** to go word by word. All 12 before the games!',
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
        body: `A digit is one symbol from 0 to 9 — like one person in a family.\n\nIn ${N_A} there are **eight digits**: 8, 0, 1, 2, 6, 9, 3.`,
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Building example',
        body: 'Each digit can stand on a different floor. Same digit, different floor → different worth (that comes in Place value!).',
      },
    ],
    teluguContent: `Digit = 0–9 లో ఒక symbol.\n\n${N_A} లో 8 digits.`,
    parentSuggestion: {
      tip: 'Write a big number and ask her to circle each digit — count them together.',
      questions: ['How many digits are in our phone number?'],
      questionsTe: ['Phone number లో ఎన్ని digits?'],
    },
    quiz: [{
      id: 'nf-kw-digit-q',
      question: `How many digits are in ${N_A}?`,
      choices: [
        { id: 'a', label: '7', isCorrect: false },
        { id: 'b', label: '8', isCorrect: true },
        { id: 'c', label: '9', isCorrect: false },
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
        body: `A **number** is digits grouped together to show an amount.\n\n${N_B} is one number. ${TEN_CRORE} is one number — a very tall building!`,
      },
      {
        type: 'topic',
        icon: '🏠',
        title: 'Real life',
        body: 'Cricket score 287, school roll number 1042, population on a billboard — each is a number made of digits.',
      },
    ],
    teluguContent: `Number = digits కలిపి amount.\n\n${N_B} ఒక number. ${TEN_CRORE} కూడా ఒక number.`,
    parentSuggestion: {
      questions: ['Is "5" a number or a digit? Why?'],
      questionsTe: ['"5" number aa digit aa? ఎందుకు?'],
    },
    quiz: [{
      id: 'nf-kw-number-q',
      question: `Which is a complete number (not just one digit)?`,
      choices: [
        { id: 'a', label: '4', isCorrect: false },
        { id: 'b', label: N_B, isCorrect: true },
        { id: 'c', label: 'A comma', isCorrect: false },
      ],
    }],
    promptText: '72,105 is made of digits grouped together — it is a…',
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
        body: `Place value is what a digit is **worth** because of which floor it stands on.\n\nIn ${N_C} the 6 sits on the **Lakhs floor** → place value **6,00,000**.`,
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
      question: `Place value of 4 in ${N_B}?`,
      choices: [
        { id: 'a', label: '4', isCorrect: false },
        { id: 'b', label: '4,000', isCorrect: true },
        { id: 'c', label: '40,000', isCorrect: false },
      ],
      hint: 'Which floor is the 4 on?',
    }],
    promptText: `The 2 in ${N_C} sits on Lakhs floor. Its place value is…`,
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '2', isCorrect: false },
      { id: 'b', label: '2,00,000', isCorrect: true },
      { id: 'c', label: '20,000', isCorrect: false },
    ],
    hint: 'Lakhs floor × 2',
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
      question: `Face value of 9 in ${N_E}?`,
      choices: [
        { id: 'a', label: '9,00,000', isCorrect: false },
        { id: 'b', label: '9', isCorrect: true },
        { id: 'c', label: '90', isCorrect: false },
      ],
    }],
    promptText: `Face value never changes. The face of 3 in 4,18,306 is…`,
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '4,00,000', isCorrect: false },
      { id: 'b', label: '3', isCorrect: true },
      { id: 'c', label: '30', isCorrect: false },
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
        body: `Example:\n${N_B} → Lakhs period: 03 · Thousands period: 04 · Ones period: 567.\n\n${TEN_CRORE} → only Crores period has 10; other floors are 00 or 000.`,
      },
    ],
    teluguContent: 'Period = ఒక floor family.\n\nOnes · Thousands · Lakhs · Crores.',
    parentSuggestion: {
      questions: ['In 10,00,00,000 which period is not zero?'],
      questionsTe: ['10,00,00,000 లో ఏ period zero కాదు?'],
    },
    quiz: [{
      id: 'nf-kw-period-q',
      question: `In ${N_B} what is in the Lakhs period?`,
      choices: [
        { id: 'a', label: '567', isCorrect: false },
        { id: 'b', label: '03', isCorrect: true },
        { id: 'c', label: '04', isCorrect: false },
      ],
    }],
    promptText: `The Thousands period in ${N_C} is…`,
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '02', isCorrect: true },
      { id: 'b', label: '15', isCorrect: false },
      { id: 'c', label: '890', isCorrect: false },
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
    promptText: `${N_D} with Indian commas is…`,
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '258,000', isCorrect: false },
      { id: 'b', label: N_D, isCorrect: true },
      { id: 'c', label: '2,580,00', isCorrect: false },
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
        body: `Expanded form splits a number into parts — one part per floor that has value.\n\n${N_B} = 3,00,000 + 4,000 + 500 + 60 + 7`,
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
      question: `Expanded form of ${N_F} has how many non-zero parts?`,
      choices: [
        { id: 'a', label: 'Five', isCorrect: false },
        { id: 'b', label: 'Three', isCorrect: true },
        { id: 'c', label: 'One', isCorrect: false },
      ],
      hint: '1,00,000 + 5,000 + 30 — count the parts.',
    }],
    promptText: `Biggest part of ${N_B} expanded is…`,
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '567', isCorrect: false },
      { id: 'b', label: '3,00,000', isCorrect: true },
      { id: 'c', label: '4,000', isCorrect: false },
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
        body: `A number name is how we **read** the number aloud, floor by floor.\n\n${TEN_CRORE} → **Ten crore**\n${N_G} → **Fifty lakh**\n${N_B} → Three lakh four thousand five hundred sixty-seven`,
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
      question: `Number name of ${N_G}?`,
      choices: [
        { id: 'a', label: 'Five lakh', isCorrect: false },
        { id: 'b', label: 'Fifty lakh', isCorrect: true },
        { id: 'c', label: 'Fifty thousand', isCorrect: false },
      ],
    }],
    promptText: `How do we read ${N_B} aloud?`,
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Three thousand four hundred', isCorrect: false },
      { id: 'b', label: 'Three lakh four thousand five hundred sixty-seven', isCorrect: true },
      { id: 'c', label: 'Thirty-four thousand', isCorrect: false },
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
        body: `The successor is the number **one step forward** on the number line.\n\nSuccessor of ${N_B} is **3,04,568**.`,
      },
      {
        type: 'topic',
        icon: '🏘️',
        title: 'Flat next door',
        body: 'Think of apartment numbers: 24,89,321 → next flat is 24,89,322.',
      },
    ],
    teluguContent: `Successor = తర్వాత (+1).\n\n${N_B} → 3,04,568.`,
    parentSuggestion: {
      questions: ['What is the successor of 10,00,00,000?'],
      questionsTe: ['10,00,00,000 successor ఎంత?'],
    },
    quiz: [{
      id: 'nf-kw-successor-q',
      question: `Successor of ${N_B}?`,
      choices: [
        { id: 'a', label: '3,04,566', isCorrect: false },
        { id: 'b', label: '3,04,568', isCorrect: true },
        { id: 'c', label: '3,05,567', isCorrect: false },
      ],
    }],
    promptText: `One step forward from ${N_H} is…`,
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '9,99,998', isCorrect: false },
      { id: 'b', label: '10,00,000', isCorrect: true },
      { id: 'c', label: '9,99,990', isCorrect: false },
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
        body: `The predecessor is the number **one step back**.\n\nPredecessor of ${N_B} is **3,04,566**.`,
      },
      {
        type: 'topic',
        icon: '🏘️',
        title: 'Flat behind',
        body: '24,89,321 → the flat just before is 24,89,320.',
      },
    ],
    teluguContent: `Predecessor = ముందు (−1).\n\n${N_B} → 3,04,566.`,
    parentSuggestion: {
      questions: ['What is the predecessor of 10,00,00,001?'],
      questionsTe: ['10,00,00,001 predecessor ఎంత?'],
    },
    quiz: [{
      id: 'nf-kw-predecessor-q',
      question: `Predecessor of ${N_B}?`,
      choices: [
        { id: 'a', label: '3,04,568', isCorrect: false },
        { id: 'b', label: '3,04,566', isCorrect: true },
        { id: 'c', label: '3,03,567', isCorrect: false },
      ],
    }],
    promptText: `One step back from 7,00,000 is…`,
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '7,00,001', isCorrect: false },
      { id: 'b', label: '6,99,999', isCorrect: true },
      { id: 'c', label: '6,90,000', isCorrect: false },
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
