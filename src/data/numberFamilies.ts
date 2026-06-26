/* ============================================================
   NUMBER FAMILIES — story-led, bilingual, game per concept
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const nfCards: LearningCard[] = [
  {
    id: 'nf-0',
    lessonId: 'number-families',
    title: 'The Secret of Big Numbers',
    subtitle: 'Chapter 1 · Satish at Charminar',
    sheetTag: 'Foundation',
    englishContent:
      'Satish the guru arrives at Charminar. A billboard flashes:\n\n"Hyderabad — population 1,02,46,000"\n\nIshanvi sighs. "So many digits!"\n\nSatish says gently: "Don\'t read digit by digit. Read FAMILIES."\n\nIn India, digits live in families called periods. Commas show the gaps between families.\n\n🏠 Real life: cricket runs, school fees, movie box office — all use the same family trick.',
    teluguContent:
      'సతీష్ గురువు చార్మినార్ వద్దకు వచ్చాడు. Billboard flash అవుతోంది:\n\n"హైదరాబాద్ — జనాభా 1,02,46,000"\n\nఇషాన్వి: "ఎన్ని digits!"\n\nసతీష్ మృదువుగా: "Digit by digit చదవకు. FAMILIES గా చదవు."\n\nభారతదేశంలో digits periods అనే కుటుంబాల్లో ఉంటాయి. Commas కుటుంబాల మధ్య gaps చూపిస్తాయి.\n\n🏠 నిజ జీవితం: cricket runs, school fees — అందరూ ఇదే trick.',
    glossary: [
      { word: 'periods', en: 'Families of digits in a big number', te: 'అంక కుటుంబాలు' },
    ],
    parentSuggestion: {
      tip: 'Point at any big number around you (Aadhar, phone bill, news) and ask: "Where would the comma go?"',
      tipTe: 'ఇంట్లో/వార్తల్లో పెద్ద number చూపించి: "Comma ఎక్కడ వస్తుంది?" అని అడగండి.',
      questions: ['Can you find a comma in today\'s newspaper?'],
      questionsTe: ['ఈరోజు paper లో comma ఉన్న number కనిపిస్తుందా?'],
    },
    promptText: 'Tap for the one rule Satish teaches.',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer: 'From the RIGHT: group 3 digits (Ones), then 2-2-2… (Thousands, Lakhs, Crores). Commas sit BETWEEN families — never inside one.',
  },

  {
    id: 'nf-vocab',
    lessonId: 'number-families',
    title: 'Key Words',
    subtitle: 'Learn these first — then the games make sense',
    englishContent:
      'Satish says: "Before any homework, learn these twelve words. Tap each card to flip. One word at a time is fine!"',
    teluguContent:
      'సతీష్: "Homework ముందు ఈ పన్నెండు words నేర్చుకో. Card tap చేసి flip చేయి. ఒక word at a time సరిపోతుంది!"',
    contentBlocks: [
      {
        type: 'system-compare',
        number: 'Same number, two comma styles:',
        indian: '12,34,56,789',
        international: '1,234,567,89',
      },
    ],
    parentSuggestion: {
      tip: 'Do one word per day if needed. Words 11–12 (Indian vs International) — show one number both ways on paper.',
      tipTe: 'ఒక word per day సరిపోతుంది. #11–#12 — ఒక number Indian vs International paper మీద చూపించండి.',
      questions: ['Can she explain "period" in her own words?'],
      questionsTe: ['"Period" own words లో explain చేయగలరా?'],
    },
    promptText: 'Tap each word to reveal its meaning.',
    interactionType: 'vocab-grid',
    cardStyle: 'deck',
    vocab: [
      { id: 'v1', word: 'Digit', definition: 'One symbol 0–9', definitionTe: 'ఒక symbol 0–9' },
      { id: 'v2', word: 'Number', definition: 'Digits grouped together to show an amount', definitionTe: 'amount చూపడానికి digits కలిపి' },
      { id: 'v3', word: 'Place value', definition: 'What a digit is worth because of its seat', definitionTe: 'seat వల్ల digit worth' },
      { id: 'v4', word: 'Face value', definition: 'What the digit looks like — never changes', definitionTe: 'digit ముఖం — మారదు' },
      { id: 'v5', word: 'Period', definition: 'A family of digits (Ones, Thousands, Lakhs, Crores)', definitionTe: 'digit కుటుంబం' },
      { id: 'v6', word: 'Standard form', definition: 'Normal way to write with commas (56,23,407)', definitionTe: 'commas తో normal రాత' },
      { id: 'v7', word: 'Expanded form', definition: 'Number as added parts (50,00,000 + 6,00,000 + …)', definitionTe: 'parts add చేసిన రూపం' },
      { id: 'v8', word: 'Number name', definition: 'Number said in words (fifty-six lakh…)', definitionTe: 'words లో చెప్పిన number' },
      { id: 'v9', word: 'Successor', definition: 'The number just after (+1)', definitionTe: 'తర్వాత number (+1)' },
      { id: 'v10', word: 'Predecessor', definition: 'The number just before (−1)', definitionTe: 'ముందు number (−1)' },
      { id: 'v11', word: 'Indian system', definition: 'Groups from right: 3, then 2,2,2… (lakhs, crores)', definitionTe: 'కుడి నుండి 3, తర్వాత 2,2,2…' },
      { id: 'v12', word: 'International system', definition: 'Groups in threes from the right (millions, billions)', definitionTe: 'కుడి నుండి threes గా groups' },
    ],
  },

  {
    id: 'nf-1',
    lessonId: 'number-families',
    title: 'Face Value vs Place Value',
    subtitle: 'The most confusing pair — made simple',
    sheetTag: 'From Q5',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '👀',
        title: 'FACE value',
        body: 'FACE value is the digit\'s FACE — what it LOOKS like.\nIt never changes. A 6 always looks like 6, whether it sits in Ones or Lakhs.',
      },
      {
        type: 'topic',
        icon: '💪',
        title: 'PLACE value',
        body: 'PLACE value is the digit\'s POWER — how much it is WORTH.\nIt changes depending on WHERE the digit stands in the number.',
      },
      {
        type: 'face-place-table',
        display: '6,234',
        places: ['Thousands', 'Hundreds', 'Tens', 'Ones'],
        digits: ['6', '2', '3', '4'],
        faceValues: ['6', '2', '3', '4'],
        placeValues: ['6,000', '200', '30', '4'],
        highlightIndex: 0,
      },
      {
        type: 'topic',
        icon: '💰',
        title: 'Picture it with money',
        body: 'Four ₹1 coins in the Ones seat = ₹4.\nThe same digit 6 in the Thousands seat = ₹6,000.\nSame FACE (6) — different PLACE, different worth.',
      },
      {
        type: 'topic',
        icon: '🏟️',
        title: 'Picture it in a stadium',
        body: 'A "6" in the Ones row scores 6 points.\nMove that same "6" to the Thousands row — it scores 6,000 points.\nThe player (digit) did not change — the ROW (place) gave it power.',
      },
    ],
    teluguContent:
      '👀 FACE value = digit ముఖం — ఎలా కనిపిస్తుందో అదే. 6 ఎప్పుడూ 6 లా.\n\n💪 PLACE value = digit power — ఎంత worth. Digit ఎక్కడ ఉందో బట్టి మారుతుంది.\n\n📊 6,234 ఉదాహరణ:\nThousands: 6 (face 6, place 6,000)\nHundreds: 2 (face 2, place 200)\nTens: 3 (face 3, place 30)\nOnes: 4 (face 4, place 4)\n\n💰 Money: Ones లో 6 = ₹6. Thousands లో 6 = ₹6,000.\n\n🏟️ Stadium: Ones row 6 = 6 points. Thousands row 6 = 6,000 points.',
    glossary: [
      { word: 'FACE value', en: 'The digit itself — what it looks like', te: 'ముఖ విలువ' },
      { word: 'PLACE value', en: 'What the digit is worth, by its position', te: 'స్థాన విలువ' },
    ],
    parentSuggestion: {
      tip: 'Use real coins: put a 6 in different "seats" drawn on paper and ask how much it is worth each time.',
      tipTe: 'Paper మీద seats గీసి, 6 ను వేర్వేరు seats లో పెట్టి worth ఎంత అని అడగండి.',
      questions: ['Does the FACE of 6 ever change?', 'What gives the 6 more power — the digit or the seat?'],
      questionsTe: ['6 ముఖం మారుతుందా?', '6 కు power — digit ఇస్తుందా, seat ఇస్తుందా?'],
    },
    promptText: 'Play: move the 6 to the Lakhs seat and watch its value grow.',
    interactionType: 'game',
    cardStyle: 'deck',
    game: { kind: 'seat-swap', digit: '6', targetSeat: 5 },
  },

  {
    id: 'nf-2',
    lessonId: 'number-families',
    title: 'The Apartment Building',
    subtitle: 'Periods as families · Game: Family Sort',
    sheetTag: 'From Q3',
    englishContent:
      '🏢 Read a number like floors of a building, top (biggest) to bottom:\n\n🟪 Crores · 🟧 Lakhs · 🟩 Thousands · 🟦 Ones (ground floor = 3 rooms).\n\nNumber 56,23,407 → Lakhs: 56 · Thousands: 23 · Ones: 407.\n\n🏠 Real: a ₹56,23,407 flat — the 56 tells you it is in the "lakhs zone".',
    teluguContent:
      '🏢 Number ను building floors లా చదవండి (పై నుండి):\n\n🟪 Crores · 🟧 Lakhs · 🟩 Thousands · 🟦 Ones (ground floor = 3 rooms).\n\n56,23,407 → Lakhs: 56 · Thousands: 23 · Ones: 407.\n\n🏠 ₹56,23,407 flat — 56 "lakhs zone" చూపిస్తుంది.',
    parentSuggestion: {
      tip: 'Draw four coloured boxes on paper — one per family. Drop digit groups into each box.',
      tipTe: 'నాలుగు colour boxes గీసి, digit groups correct family లో drop చేయమనండి.',
    },
    promptText: 'Put each group into its correct family house.',
    interactionType: 'game',
    cardStyle: 'deck',
    game: { kind: 'family-sort', digits: '5623407' },
  },

  {
    id: 'nf-3',
    lessonId: 'number-families',
    title: 'The Comma Rescue',
    subtitle: 'Game: Comma Drop · price ₹80,12,693',
    sheetTag: 'From Q2 · Q3b',
    englishContent:
      '🛒 Satish finds a price tag with NO commas: 8012693.\n\n"Rescue mission!" Start from the right: 693 (Ones) → 12 (Thousands) → 80 (Lakhs) → 80,12,693.\n\n⚠️ Your homework Q2 has WRONG commas on the sheet. Trust the method, not bad commas on paper.',
    teluguContent:
      '🛒 Commas లేని price: 8012693.\n\n"Rescue!" కుడి నుండి: 693 (Ones) → 12 (Thousands) → 80 (Lakhs) → 80,12,693.\n\n⚠️ Homework Q2 sheet మీద commas wrong. Method నమ్ము, paper commas కాదు.',
    parentSuggestion: {
      tip: 'Q2 printed commas (7,45,12,93) are wrong. Correct: 74,51,293. Worth a quiet word to the teacher.',
      tipTe: 'Q2 sheet commas తప్పు (7,45,12,93). సరైనది: 74,51,293. Teacher కు quietly చెప్పవచ్చు.',
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
    sheetTag: 'From Q3 · Case study',
    englishContent:
      '📺 Anchors read period by period: "Fifty-six lakh… twenty-three thousand… four hundred seven."\n\n🌍 Real: budget figures, election vote counts — always read family by family.',
    teluguContent:
      '📺 News anchor period by period చదువుతారు: " Fifty-six lakh… twenty-three thousand… four hundred seven."\n\n🌍 Budget, votes — family by family చదవాలి.',
    parentSuggestion: {
      tip: 'Pick a number from the news and read it aloud together — lakhs first, then thousands, then ones.',
      tipTe: 'News number ఎంచుకుని కలిసి loud గా చదవండి — lakhs, thousands, ones.',
    },
    promptText: 'Match each number to the way an anchor would say it.',
    interactionType: 'game',
    cardStyle: 'deck',
    game: {
      kind: 'anchor-race',
      rounds: [
        {
          number: '28,45,612',
          name: 'Twenty-eight lakh forty-five thousand six hundred twelve',
          distractors: ['Twenty-eight thousand four hundred fifty-six', 'Two crore eighty-four lakh'],
        },
        {
          number: '34,56,789',
          name: 'Thirty-four lakh fifty-six thousand seven hundred eighty-nine',
          distractors: ['Three lakh forty-five thousand', 'Thirty-four thousand five hundred sixty-seven'],
        },
        {
          number: '56,23,407',
          name: 'Fifty-six lakh twenty-three thousand four hundred seven',
          distractors: ['Five lakh sixty-two thousand', 'Fifty-six thousand two hundred thirty-four'],
        },
      ],
    },
  },

  {
    id: 'nf-5',
    lessonId: 'number-families',
    title: 'Build the Number',
    subtitle: 'Game: Number Builder · expanded form',
    sheetTag: 'From Q1',
    englishContent:
      '💰 Expanded form is like counting notes biggest first:\n\n50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7 = 56,23,407.\n\n🌍 Real: a bill = room + medicine + tests added up.',
    teluguContent:
      '💰 Expanded form = పెద్ద notes ముందు:\n\n50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7 = 56,23,407.\n\n🌍 Bill = room + medicine + tests add చేసినట్టే.',
    parentSuggestion: {
      tip: 'Use play money or written amounts — stack biggest note first, then add smaller ones.',
      tipTe: 'Paper amounts stack చేయండి — పెద్దది ముందు, చిన్నవి తర్వాత.',
    },
    promptText: 'Tap the pieces from BIGGEST to smallest to build 56,23,407.',
    interactionType: 'game',
    cardStyle: 'deck',
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
    sheetTag: 'From Case study Q3–Q5',
    englishContent:
      '🏁 Four states — who has the most literate people? Compare the LAKHS first.\n\nAndhra Pradesh 24,89,321 · Karnataka 26,78,945 · Tamil Nadu 28,45,612 · Kerala 34,56,789.',
    teluguContent:
      '🏁 నాలుగు states — literacy ఎక్కువ ఎవరికి? LAKHS ముందు compare చేయి.\n\nAP 24,89,321 · Karnataka 26,78,945 · TN 28,45,612 · Kerala 34,56,789.',
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
    sheetTag: 'From Q4.4',
    englishContent:
      '🏘️ Every number has two neighbours:\n\n← Predecessor = just BEFORE (−1)\n→ Successor = just AFTER (+1)\n\nFor 24,89,321: predecessor 24,89,320, successor 24,89,322.',
    teluguContent:
      '🏘️ ప్రతి number కు neighbours:\n\n← Predecessor = ముందు number (−1)\n→ Successor = తర్వాత number (+1)\n\n24,89,321: predecessor 24,89,320, successor 24,89,322.',
    parentSuggestion: {
      tip: 'Walk up and down a number line drawn on paper — "one step back, one step forward".',
      tipTe: 'Paper number line — "one step back, one step forward" అని చెప్పండి.',
    },
    promptText: 'Tap the correct neighbour in each row.',
    interactionType: 'game',
    cardStyle: 'deck',
    game: { kind: 'neighbours', center: '2489321' },
  },

  {
    id: 'nf-8',
    lessonId: 'number-families',
    title: 'Ready for Your Paper?',
    subtitle: 'Weekend paper is in the menu',
    englishContent:
      'You learned the words and played the games. Now Satish sends you to your **weekend maths paper** under **This Weekend** in the menu.\n\nOpen your Silver Oaks sheet. Tick each question as you write — hints first, peek only if stuck.',
    teluguContent:
'Words నేర్చుకుని games play చేశావు. ఇప్పుడు menu లో **This Weekend** → **Maths · 25 Jun** paper కు వెళ్ళు.\n\nSilver Oaks sheet తీసుకుని paper మీద రాయి — hints ముందు, stuck అయితే peek.',
    parentSuggestion: {
      tip: 'Teaching stays here in Maths · Learn. The paper is under This Weekend — two different jobs.',
      tipTe: 'Teaching ఇక్కడ Maths · Learn. Paper This Weekend లో — రెండు different jobs.',
    },
    promptText: 'Tap when you are ready for the paper.',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer: 'Menu → This Weekend → Maths · 25 Jun 2026. Learn stays here if a word feels new. ✏️',
  },

  {
    id: 'nf-9',
    lessonId: 'number-families',
    title: 'Victory Quiz',
    subtitle: '60 seconds · flip-card quiz',
    englishContent: 'Satish: "Four quick ones. Then close the app and do your sheet!"',
    teluguContent: 'సతీష్: "నాలుగు quick questions. App close చేసి sheet చేయి!"',
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
    cardStyle: 'deck',
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
  title: 'Step 1 — Learn Number Families',
  subtitle: 'Games & parent tips · not weekend homework',
  kid: 'ishanvi',
  subject: 'maths',
  chapter: 'Number System',
  hasTelugu: true,
  icon: '🔢',
  cards: nfCards,
};
