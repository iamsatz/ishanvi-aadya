/* ============================================================
   NUMBER FAMILIES — story-led, real-world, no fluff
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const nfCards: LearningCard[] = [
  {
    id: 'nf-0',
    lessonId: 'number-families',
    title: 'The Secret of Big Numbers',
    subtitle: 'Chapter 1 · Arjuna at Charminar',
    englishContent:
      '🦉 Arjuna the owl lands on Charminar. A billboard flashes:\n\n"Hyderabad — population 1,02,46,000"\n\nIshanvi sighs. "So many digits!"\n\nArjuna hoots: "Don\'t read digit by digit. Read FAMILIES."\n\nIn India, digits live in families called periods. Commas show the gaps between families.\n\n🏠 Real life: cricket runs (14,52,000), school fees (₹45,000), Tollywood box office (₹186 crore) — all use the same family trick.',
    glossary: [
      { word: 'periods', en: 'Families of digits in a big number', te: 'అంక కుటుంబాలు' },
    ],
    parentSuggestion: {
      tip: 'Point at any big number around you (Aadhar, phone bill, news) and ask: "Where would the comma go?"',
    },
    promptText: 'Tap for the one rule Arjuna teaches.',
    interactionType: 'tap-reveal',
    revealAnswer: 'From the RIGHT: group 3 digits (Ones), then 2-2-2… (Thousands, Lakhs, Crores). Commas sit BETWEEN families — never inside one.',
  },

  {
    id: 'nf-1',
    lessonId: 'number-families',
    title: 'Word Power — 5 Must-Know Words',
    subtitle: 'Quick vocab · tap each',
    englishContent:
      '📖 Story shortcut — learn these 5 and you\'re 80% ready:\n\n1. Digit = one symbol (0–9). Like a single Lego brick.\n2. Place value = what a digit is WORTH because of its seat.\n3. Face value = the digit itself (6 is always 6).\n4. Period = a family of digits (Ones, Thousands, Lakhs…).\n5. Successor / Predecessor = next number (+1) / previous (−1).\n\n🌍 Example: In IPL, if a player has 7,234 runs — 7 is a digit, but its place value is 7,000 (thousands seat).',
    promptText: 'Tap: face value vs place value of 6 in 56,23,407.',
    interactionType: 'tap-reveal',
    revealAnswer: 'Face value = 6. Place value = 6,00,000 (6 lakhs). Same digit, different seat = different worth!',
  },

  {
    id: 'nf-2',
    lessonId: 'number-families',
    title: 'The Apartment Building',
    subtitle: 'Periods as families',
    englishContent:
      '🏢 Imagine a building read from the TOP floor down:\n\n🟪 Crores — penthouse (biggest)\n🟧 Lakhs — floor below\n🟩 Thousands — next floor\n🟦 Ones — ground floor (3 rooms: ones, tens, hundreds)\n\nNumber 56,23,407:\n• Lakhs family: 56\n• Thousands family: 23\n• Ones family: 407\n\n🌍 Real: A ₹56,23,407 flat in Gachibowli — the 56 tells you it\'s in the "lakhs zone" of the price.',
    promptText: 'Match each family to what it holds in 56,23,407.',
    interactionType: 'match-pairs',
    pairs: [
      { id: 'p1', left: '🟦 Ones', right: '407' },
      { id: 'p2', left: '🟩 Thousands', right: '23' },
      { id: 'p3', left: '🟧 Lakhs', right: '56' },
      { id: 'p4', left: 'Comma rule', right: 'Between families only' },
    ],
    hint: 'Read from the RIGHT: 407 → 23 → 56.',
  },

  {
    id: 'nf-3',
    lessonId: 'number-families',
    title: 'The Comma Rescue',
    subtitle: 'Practice · Flipkart price ₹80,12,693',
    englishContent:
      '🛒 Arjuna finds a price tag with NO commas: 8012693\n\n"Rescue mission!" he says. Start from the right:\n693 (Ones) → 12 (Thousands) → 80 (Lakhs)\n\n✅ Correct: 80,12,693\n\n⚠️ Your homework Q2 has WRONG commas on the sheet!\n7451293 → 74,51,293 (not 7,45,12,93)\n18690214 → 1,86,90,214 (not 18,69,02,14)\n\nTrust the method, not bad commas on paper.',
    promptText: 'Where do commas go in 8012693?',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '8,012,693', isCorrect: false },
      { id: 'b', label: '80,12,693', isCorrect: true },
      { id: 'c', label: '801,269,3', isCorrect: false },
    ],
    hint: 'Indian rule: 3, then 2, then 2 from the right.',
  },

  {
    id: 'nf-4',
    lessonId: 'number-families',
    title: 'Read It Like a News Anchor',
    subtitle: 'From Q3a · 56,23,407',
    englishContent:
      '📺 News anchor style for 56,23,407:\n\n"Fifty-SIX lakh" (56) + "twenty-THREE thousand" (23) + "four hundred seven" (407)\n\n= Fifty-six lakh twenty-three thousand four hundred seven\n\n🌍 Real: Telangana budget numbers, election vote counts — anchors always read period by period.',
    quiz: [
      {
        id: 'nf-4-q1',
        question: 'Place value of 3 in 56,23,407?',
        choices: [
          { id: 'a', label: '3', isCorrect: false },
          { id: 'b', label: '3,000', isCorrect: true },
          { id: 'c', label: '30,000', isCorrect: false },
        ],
      },
    ],
    promptText: 'Tap for expanded form (Q3a).',
    interactionType: 'tap-reveal',
    revealAnswer: '50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7',
  },

  {
    id: 'nf-5',
    lessonId: 'number-families',
    title: 'Build a Number — Expanded Form',
    subtitle: 'From Q1a · like stacking money',
    englishContent:
      '💰 Think of expanded form like counting notes in a wallet:\n\n30 crore note + 20 lakh + 7 lakh + 40 thousand + 6 thousand + 90 + 2\n\n= 30,27,46,092\n\n🌍 Real: A hospital bill breaks into room charge + medicine + tests — expanded form does the same for numbers.',
    promptText: 'Tap the standard form of Q1a.',
    interactionType: 'tap-reveal',
    revealAnswer: '30,27,46,092 — Thirty crore twenty-seven lakh forty-six thousand ninety-two',
  },

  {
    id: 'nf-6',
    lessonId: 'number-families',
    title: 'The State Race',
    subtitle: 'From Q4 · real literacy data',
    englishContent:
      '🏁 Four states compete. Who has the most literate people?\n\nAndhra Pradesh: 24,89,321\nKarnataka: 26,78,945\nTamil Nadu: 28,45,612\nKerala: 34,56,789\n\nArjuna\'s trick: compare Lakhs first (34 > 28 > 26 > 24). No calculator needed!\n\nOrder: AP → Karnataka → TN → Kerala',
    quiz: [
      {
        id: 'nf-6-q1',
        question: 'Who wins without calculating?',
        choices: [
          { id: 'a', label: 'Tamil Nadu', isCorrect: false },
          { id: 'b', label: 'Kerala', isCorrect: true },
          { id: 'c', label: 'Andhra Pradesh', isCorrect: false },
        ],
      },
    ],
    promptText: 'Successor of Andhra Pradesh (24,89,321)?',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '24,89,320', isCorrect: false },
      { id: 'b', label: '24,89,322', isCorrect: true },
      { id: 'c', label: '24,90,321', isCorrect: false },
    ],
    hint: 'Successor = +1 on the ones place.',
  },

  {
    id: 'nf-7',
    lessonId: 'number-families',
    title: 'Homework Sprint',
    subtitle: 'Method only · you write answers on paper',
    englishContent:
      '✏️ Done learning? Open your Silver Oaks sheet and sprint through 5 questions.\n\nThis app taught the METHOD — you write the answers yourself. That\'s how writing muscle grows.',
    parentSuggestion: {
      tip: 'Q2 commas on the printed sheet are wrong. Quiet word to teacher if needed.',
    },
    promptText: 'Tick each as you finish on paper.',
    interactionType: 'checklist',
    checklist: [
      { id: 'hw1', label: 'Q1 — Add expanded → standard + name', example: '30,27,46,092' },
      { id: 'hw2', label: 'Q2 — Fix commas (ignore sheet)', example: '7451293 → 74,51,293' },
      { id: 'hw3', label: 'Q3 — Periods + expanded + name', example: '5623407 → 56,23,407' },
      { id: 'hw4', label: 'Q4 — Order states + successor', example: 'Kerala wins at 34 lakhs' },
    ],
  },

  {
    id: 'nf-8',
    lessonId: 'number-families',
    title: 'Victory Quiz',
    subtitle: '60 seconds · 4 questions',
    englishContent: '🦉 Arjuna: "Four quick ones. Then close the app and do your sheet!"',
    quiz: [
      {
        id: 'nf-8-q1',
        question: 'First group from RIGHT has how many digits?',
        choices: [
          { id: 'a', label: '2', isCorrect: false },
          { id: 'b', label: '3', isCorrect: true },
          { id: 'c', label: '4', isCorrect: false },
        ],
      },
      {
        id: 'nf-8-q2',
        question: 'Which is a DIGIT?',
        choices: [
          { id: 'a', label: '56,23,407', isCorrect: false },
          { id: 'b', label: '7', isCorrect: true },
          { id: 'c', label: '24,89,321', isCorrect: false },
        ],
      },
      {
        id: 'nf-8-q3',
        question: 'Period before Lakhs (from right)?',
        choices: [
          { id: 'a', label: 'Ones', isCorrect: false },
          { id: 'b', label: 'Thousands', isCorrect: true },
          { id: 'c', label: 'Crores', isCorrect: false },
        ],
      },
    ],
    promptText: 'Face value of 8 in 80,12,693?',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '8', isCorrect: true },
      { id: 'b', label: '80,00,000', isCorrect: false },
      { id: 'c', label: '800', isCorrect: false },
    ],
  },
];

export const numberFamilies: Lesson = {
  id: 'number-families',
  title: 'Number Families',
  subtitle: 'Indian Number System · 9 quick steps',
  kid: 'ishanvi',
  subject: 'maths',
  chapter: 'Number System',
  hasTelugu: false,
  icon: '🔢',
  cards: nfCards,
};
