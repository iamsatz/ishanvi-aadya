/* ============================================================
   NUMBER FAMILIES — story-led, real-world, game per concept
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const nfCards: LearningCard[] = [
  {
    id: 'nf-0',
    lessonId: 'number-families',
    title: 'The Secret of Big Numbers',
    subtitle: 'Chapter 1 · Arjuna at Charminar',
    englishContent:
      '🦉 Arjuna the owl lands on Charminar. A billboard flashes:\n\n"Hyderabad — population 1,02,46,000"\n\nIshanvi sighs. "So many digits!"\n\nArjuna hoots: "Don\'t read digit by digit. Read FAMILIES."\n\nIn India, digits live in families called periods. Commas show the gaps between families.\n\n🏠 Real life: cricket runs, school fees, movie box office — all use the same family trick.',
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
    title: 'Face Value vs Place Value',
    subtitle: 'The most confusing pair — made simple',
    englishContent:
      'Two words, but they mean very different things:\n\n👀 FACE value = the digit\'s FACE. What it LOOKS like. It never changes. A 6 always looks like 6.\n\n💪 PLACE value = the digit\'s POWER. How much it is WORTH. This changes depending on WHERE the digit stands.\n\n— — — Two ways to picture it — — —\n\n💰 MONEY: Six ₹1 coins in your hand = ₹6. Now move that same 6 into the lakhs seat — it becomes 6 bundles of ₹1,00,000 = ₹6,00,000. Same 6, much bigger power.\n\n🏟️ STADIUM: A "6" sitting in the Ones row scores 6 points. Move the very same "6" to the Lakhs row and it scores 6,00,000 points. The player didn\'t change — the ROW gave it power.',
    glossary: [
      { word: 'FACE value', en: 'The digit itself — what it looks like', te: 'ముఖ విలువ' },
      { word: 'PLACE value', en: 'What the digit is worth, by its position', te: 'స్థాన విలువ' },
    ],
    parentSuggestion: {
      tip: 'Use real coins: put a 6 in different "seats" drawn on paper and ask how much it is worth each time.',
      questions: ['Does the FACE of 6 ever change?', 'What gives the 6 more power — the digit or the seat?'],
    },
    promptText: 'Play: move the 6 to the Lakhs seat and watch its value grow.',
    interactionType: 'game',
    game: { kind: 'seat-swap', digit: '6', targetSeat: 5 },
  },

  {
    id: 'nf-2',
    lessonId: 'number-families',
    title: 'The Apartment Building',
    subtitle: 'Periods as families · Game: Family Sort',
    englishContent:
      '🏢 Read a number like floors of a building, top (biggest) to bottom:\n\n🟪 Crores · 🟧 Lakhs · 🟩 Thousands · 🟦 Ones (the ground floor has 3 rooms: ones, tens, hundreds).\n\nNumber 56,23,407 → Lakhs family: 56 · Thousands family: 23 · Ones family: 407.\n\n🏠 Real: a ₹56,23,407 flat — the 56 tells you it is in the "lakhs zone" of the price.',
    promptText: 'Put each group into its correct family house.',
    interactionType: 'game',
    game: { kind: 'family-sort', digits: '5623407' },
  },

  {
    id: 'nf-3',
    lessonId: 'number-families',
    title: 'The Comma Rescue',
    subtitle: 'Game: Comma Drop · price ₹80,12,693',
    englishContent:
      '🛒 Arjuna finds a price tag with NO commas: 8012693.\n\n"Rescue mission!" Start from the right: 693 (Ones) → 12 (Thousands) → 80 (Lakhs) → 80,12,693.\n\n⚠️ Your homework Q2 has WRONG commas on the sheet. Trust the method, not bad commas on paper.',
    parentSuggestion: {
      tip: 'Q2 printed commas (7,45,12,93) are wrong. Correct: 74,51,293. Worth a quiet word to the teacher.',
    },
    promptText: 'Tap the gaps where commas belong.',
    interactionType: 'game',
    game: { kind: 'comma-drop', digits: '8012693' },
  },

  {
    id: 'nf-4',
    lessonId: 'number-families',
    title: 'Read It Like a News Anchor',
    subtitle: 'Game: Anchor Race',
    englishContent:
      '📺 Anchors read period by period: "Fifty-six lakh… twenty-three thousand… four hundred seven."\n\n🌍 Real: budget figures, election vote counts — always read family by family, never digit by digit.',
    promptText: 'Match each number to the way an anchor would say it.',
    interactionType: 'game',
    game: {
      kind: 'anchor-race',
      rounds: [
        {
          number: '28,45,612',
          name: 'Twenty-eight lakh forty-five thousand six hundred twelve',
          distractors: [
            'Twenty-eight thousand four hundred fifty-six',
            'Two crore eighty-four lakh',
          ],
        },
        {
          number: '34,56,789',
          name: 'Thirty-four lakh fifty-six thousand seven hundred eighty-nine',
          distractors: [
            'Three lakh forty-five thousand',
            'Thirty-four thousand five hundred sixty-seven',
          ],
        },
        {
          number: '56,23,407',
          name: 'Fifty-six lakh twenty-three thousand four hundred seven',
          distractors: [
            'Five lakh sixty-two thousand',
            'Fifty-six thousand two hundred thirty-four',
          ],
        },
      ],
    },
  },

  {
    id: 'nf-5',
    lessonId: 'number-families',
    title: 'Build the Number',
    subtitle: 'Game: Number Builder · expanded form',
    englishContent:
      '💰 Expanded form is like counting notes biggest first:\n\n50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7 = 56,23,407.\n\n🌍 Real: a bill = room + medicine + tests added up. Same idea.',
    promptText: 'Tap the pieces from BIGGEST to smallest to build 56,23,407.',
    interactionType: 'game',
    game: {
      kind: 'number-builder',
      pieces: ['50,00,000', '6,00,000', '20,000', '3,000', '400', '7'],
      result: '56,23,407',
    },
  },

  {
    id: 'nf-6',
    lessonId: 'number-families',
    title: 'The State Race',
    subtitle: 'Game: Podium · real literacy data',
    englishContent:
      '🏁 Four states, who has the most literate people? Arjuna\'s trick: compare the LAKHS first — no calculator needed.\n\nAndhra Pradesh 24,89,321 · Karnataka 26,78,945 · Tamil Nadu 28,45,612 · Kerala 34,56,789.',
    quiz: [
      {
        id: 'nf-6-q1',
        question: 'Who wins, just by comparing the lakhs?',
        choices: [
          { id: 'a', label: 'Tamil Nadu', isCorrect: false },
          { id: 'b', label: 'Kerala', isCorrect: true },
          { id: 'c', label: 'Andhra Pradesh', isCorrect: false },
        ],
        hint: 'Compare 34 vs 28 vs 26 vs 24.',
      },
    ],
    promptText: 'Put the states in order: smallest to greatest.',
    interactionType: 'game',
    game: {
      kind: 'podium',
      items: [
        { label: 'Andhra Pradesh', value: 2489321 },
        { label: 'Karnataka', value: 2678945 },
        { label: 'Tamil Nadu', value: 2845612 },
        { label: 'Kerala', value: 3456789 },
      ],
    },
  },

  {
    id: 'nf-7',
    lessonId: 'number-families',
    title: 'Find the Neighbours',
    subtitle: 'Game: Successor & Predecessor',
    englishContent:
      '🏘️ Every number has two neighbours:\n\n← Predecessor = the number just BEFORE (−1)\n→ Successor = the number just AFTER (+1)\n\nFor Andhra Pradesh 24,89,321: predecessor 24,89,320, successor 24,89,322.',
    promptText: 'Tap the correct neighbour in each row.',
    interactionType: 'game',
    game: { kind: 'neighbours', center: '2489321' },
  },

  {
    id: 'nf-8',
    lessonId: 'number-families',
    title: 'Homework Sprint',
    subtitle: 'Method only · you write answers on paper',
    englishContent:
      '✏️ Done learning? Open your Silver Oaks sheet and sprint through 5 questions.\n\nThis app taught the METHOD — you write the answers yourself. That is how writing muscle grows.',
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
    id: 'nf-9',
    lessonId: 'number-families',
    title: 'Victory Quiz',
    subtitle: '60 seconds · 4 questions',
    englishContent: '🦉 Arjuna: "Four quick ones. Then close the app and do your sheet!"',
    quiz: [
      {
        id: 'nf-9-q1',
        question: 'First group from the RIGHT has how many digits?',
        choices: [
          { id: 'a', label: '2', isCorrect: false },
          { id: 'b', label: '3', isCorrect: true },
          { id: 'c', label: '4', isCorrect: false },
        ],
      },
      {
        id: 'nf-9-q2',
        question: 'FACE value of 8 in 80,12,693?',
        choices: [
          { id: 'a', label: '8', isCorrect: true },
          { id: 'b', label: '80,00,000', isCorrect: false },
          { id: 'c', label: '800', isCorrect: false },
        ],
        hint: 'Face value = what the digit looks like.',
      },
      {
        id: 'nf-9-q3',
        question: 'Period right before Lakhs (from the right)?',
        choices: [
          { id: 'a', label: 'Ones', isCorrect: false },
          { id: 'b', label: 'Thousands', isCorrect: true },
          { id: 'c', label: 'Crores', isCorrect: false },
        ],
      },
    ],
    promptText: 'PLACE value of 6 in 56,23,407?',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: '6', isCorrect: false },
      { id: 'b', label: '6,00,000', isCorrect: true },
      { id: 'c', label: '60,000', isCorrect: false },
    ],
    hint: 'The 6 sits in the Lakhs seat.',
  },
];

export const numberFamilies: Lesson = {
  id: 'number-families',
  title: 'Number Families',
  subtitle: 'Indian Number System · play & learn',
  kid: 'ishanvi',
  subject: 'maths',
  chapter: 'Number System',
  hasTelugu: false,
  icon: '🔢',
  cards: nfCards,
};
