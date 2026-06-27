/* ============================================================
   NUMBER FAMILIES — story-led, bilingual, game per concept
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const nfCards: LearningCard[] = [
  {
    id: 'nf-contents',
    lessonId: 'number-families',
    title: 'Maths · Number Families',
    subtitle: 'Contents — pick a topic',
    englishContent:
      'Welcome to Number Families! Arjuna teaches the **Apartment Building trick** — digits live on floors (Crores, Lakhs, Thousands, Ones).\n\nStart with Key Words, then play each game. Tap any topic below to jump there.',
    teluguContent:
      'Number Families కి స్వాగతం! **Apartment Building trick** — Crores, Lakhs, Thousands, Ones floors.\n\nKey Words ముందు, తర్వాత games. Topic tap చేసి jump అవ్వండి.',
    promptText: 'Pick a topic to start learning.',
    interactionType: 'contents',
  },

  {
    id: 'nf-0',
    lessonId: 'number-families',
    title: 'The Secret of Big Numbers',
    subtitle: 'Chapter 1 · Arjuna at Charminar',
    sheetTag: 'Foundation',
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🕌',
        title: 'Arjuna at Charminar',
        body: 'A billboard flashes:\n\n"Hyderabad — population 1,02,46,000"\n\nIshanvi sighs. "So many digits!"\n\nArjuna says gently: "Don\'t read digit by digit. Read FAMILIES — like floors in an apartment building."',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Think: apartment building',
        body: 'Each floor is a family of digits.\n\n🟪 Top floor = Crores\n🟧 Next = Lakhs\n🟩 Next = Thousands\n🟦 Ground floor = Ones (always 3 rooms)\n\nCommas are the gaps BETWEEN floors — never inside one family.',
      },
      {
        type: 'topic',
        icon: '🏠',
        title: 'Real life',
        body: 'Cricket runs, school fees, movie box office — big numbers everywhere use the same family trick.\n\nOnce you see the building, commas make sense.',
      },
    ],
    teluguContent:
      'అర్జున గురువు చార్మినార్ వద్దకు వచ్చాడు. Billboard: "హైదరాబాద్ — 1,02,46,000"\n\nఇషాన్వి: "ఎన్ని digits!"\n\nఅర్జున: FAMILIES గా చదవు — apartment floors లా.\n\n🟪 Crores · 🟧 Lakhs · 🟩 Thousands · 🟦 Ones.',
    glossary: [
      { word: 'periods', en: 'Families of digits in a big number', te: 'అంక కుటుంబాలు' },
    ],
    parentSuggestion: {
      tip: 'Point at any big number around you (Aadhar, phone bill, news) and ask: "Where would the comma go?"',
      tipTe: 'ఇంట్లో/వార్తల్లో పెద్ద number చూపించి: "Comma ఎక్కడ వస్తుంది?" అని అడగండి.',
      questions: ['Can you find a comma in today\'s newspaper?'],
      questionsTe: ['ఈరోజు paper లో comma ఉన్న number కనిపిస్తుందా?'],
    },
    promptText: 'Tap for the one rule Arjuna teaches.',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer: 'From the RIGHT: group 3 digits (Ones), then 2-2-2… (Thousands, Lakhs, Crores). Commas sit BETWEEN families — never inside one.',
  },

  {
    id: 'nf-vocab',
    lessonId: 'number-families',
    title: 'Key Words',
    subtitle: 'Learn these first — then the games make sense',
    englishContent: '',
    teluguContent:
      'అర్జున: Homework ముందు పన్నెండు words నేర్చుకో.\n\n🏢 10,00,00,000 = ten crore — Indian vs International commas చూడు.',
    contentBlocks: [
      {
        type: 'topic',
        icon: '📖',
        title: 'Learn these twelve words',
        body: 'Arjuna says: "Before any homework, learn these twelve words. Tap each card to flip. One word at a time is fine!"',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'The Apartment Building trick',
        body: 'Read any big number like floors of a building — top (biggest) to bottom:\n\n🟪 Crores · 🟧 Lakhs · 🟩 Thousands · 🟦 Ones (ground floor = 3 rooms).\n\nExample — ten crores:\n10,00,00,000 → Crores: 10 · Lakhs: 00 · Thousands: 00 · Ones: 000.',
      },
      {
        type: 'system-compare',
        number: 'Ten crores — same number, two comma styles:',
        indian: '10,00,00,000',
        international: '100,000,000',
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
      { id: 'v6', word: 'Standard form', definition: 'Normal way to write with commas (10,00,00,000)', definitionTe: 'commas తో normal రాత' },
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
        icon: '🏢',
        title: 'Each digit has a FLOOR',
        body: 'In the apartment building, where a digit stands is its seat.\n\nSame digit on different floors = different worth.\n\nThat is why we need TWO words: FACE (what it looks like) and PLACE (what it is worth on that floor).',
      },
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
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🏢',
        title: 'Arjuna opens the building',
        body: 'Arjuna opens a tall apartment building. "Every big number lives here — one family per floor."',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Read top to bottom',
        body: '🟪 Crores · 🟧 Lakhs · 🟩 Thousands · 🟦 Ones (ground floor = 3 rooms).\n\nTen crores: 10,00,00,000 → Crores: 10 · Lakhs: 00 · Thousands: 00 · Ones: 000.\n\nHomework number 56,23,407 → Lakhs: 56 · Thousands: 23 · Ones: 407.',
      },
      {
        type: 'topic',
        icon: '🏠',
        title: 'Real life',
        body: 'A ₹10,00,00,000 project — the 10 on the Crores floor tells you how big it is.\n\nA ₹56,23,407 flat — the 56 tells you it is in the "lakhs zone".',
      },
    ],
    teluguContent:
      '🏢 Number ను building floors లా చదవండి (పై నుండి):\n\n🟪 Crores · 🟧 Lakhs · 🟩 Thousands · 🟦 Ones (ground floor = 3 rooms).\n\n10,00,00,000 → Crores: 10 · Lakhs: 00 · Thousands: 00 · Ones: 000.\n\n56,23,407 → Lakhs: 56 · Thousands: 23 · Ones: 407.\n\n🏠 ₹10,00,00,000 project — Crores floor 10 చూపిస్తుంది.',
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
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🛒',
        title: 'Comma rescue',
        body: 'Arjuna finds a price tag with NO commas. "Rescue mission — put commas between the floors!"',
      },
      {
        type: 'topic',
        icon: '🛒',
        title: 'The rescue',
        body: 'Price with no commas: 8012693.\n\nStart from the ground floor (right): 693 (Ones) → 12 (Thousands) → 80 (Lakhs) → 80,12,693.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Building rule',
        body: 'Commas sit BETWEEN families — never inside one floor.\n\nFrom the right: 3 digits (Ones), then 2-2-2… (Thousands, Lakhs, Crores).',
      },
      {
        type: 'topic',
        icon: '⚠️',
        title: 'Homework heads-up',
        body: 'Your homework Q2 has WRONG commas on the printed sheet. Trust the building method, not bad commas on paper.',
      },
    ],
    teluguContent:
      '🛒 Commas లేని price: 8012693.\n\n"Rescue!" ground floor (కుడి) నుండి: 693 (Ones) → 12 (Thousands) → 80 (Lakhs) → 80,12,693.\n\n🏢 Commas floors మధ్య — floor లోపల కాదు.\n\n⚠️ Homework Q2 sheet commas wrong. Building method నమ్ము.',
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
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '📺',
        title: 'News anchor',
        body: 'Arjuna becomes a news anchor. "Read each floor of the building out loud — Crores, then Lakhs, then Thousands, then Ones."',
      },
      {
        type: 'topic',
        icon: '📺',
        title: 'Anchor style',
        body: 'Read period by period: "Fifty-six lakh… twenty-three thousand… four hundred seven."\n\nEach pause = you finished one floor of the building.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Ten crores on TV',
        body: '10,00,00,000 → "Ten crore."\n\nOnly the Crores floor has a non-zero family — so you start at the top!',
      },
      {
        type: 'topic',
        icon: '🌍',
        title: 'Real life',
        body: 'Budget figures, election vote counts — anchors always read family by family, floor by floor.',
      },
    ],
    teluguContent:
      '📺 News anchor period by period చదువుతారు — ప్రతి floor complete అయిన తర్వాత pause.\n\n10,00,00,000 → "Ten crore."\n\n🌍 Budget, votes — building floor by floor చదవాలి.',
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
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '💰',
        title: 'Stack from the top',
        body: 'Arjuna stacks money notes from the TOP floor down — biggest family first.',
      },
      {
        type: 'topic',
        icon: '💰',
        title: 'Expanded form = stacked floors',
        body: '50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7 = 56,23,407.\n\nEach part is one family in the building — add biggest (Lakhs) first, then smaller floors.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Ten crores example',
        body: '10,00,00,000 = 10,00,00,000 + 0 + 0 + 0.\n\nOnly the Crores floor has value — the rest are empty rooms (zeros).',
      },
      {
        type: 'topic',
        icon: '🌍',
        title: 'Real life',
        body: 'A hospital bill = room + medicine + tests added up — same as stacking building parts.',
      },
    ],
    teluguContent:
      '💰 Expanded form = building floors stack — పెద్ద floor ముందు:\n\n50,00,000 + 6,00,000 + 20,000 + 3,000 + 400 + 7 = 56,23,407.\n\n10,00,00,000 = Crores floor 10 మాత్రమే — మిగతా floors empty (zeros).',
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
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🏁',
        title: 'State race',
        body: 'Four states race — who has the most literate people? Compare the Lakhs floor first!',
      },
      {
        type: 'topic',
        icon: '🏁',
        title: 'Compare top floors first',
        body: 'When numbers are in the same building size, compare Lakhs first — then Thousands — then Ones.\n\nAndhra Pradesh 24,89,321 · Karnataka 26,78,945 · Tamil Nadu 28,45,612 · Kerala 34,56,789.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Building tip',
        body: 'Kerala\'s Lakhs floor shows 34 — that is bigger than Tamil Nadu\'s 28. So Kerala wins before you even look at the lower floors.',
      },
    ],
    teluguContent:
      '🏁 నాలుగు states — LAKHS floor ముందు compare చేయి.\n\nAP 24,89,321 · Karnataka 26,78,945 · TN 28,45,612 · Kerala 34,56,789.\n\n🏢 Kerala Lakhs floor 34 — TN 28 కంటే పెద్దది.',
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
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '🏘️',
        title: 'Flat neighbours',
        body: 'Every apartment number has two neighbours — the flat just before and just after.',
      },
      {
        type: 'topic',
        icon: '🏘️',
        title: 'Two neighbours',
        body: '← Predecessor = just BEFORE (−1)\n→ Successor = just AFTER (+1)',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'Example',
        body: 'For 24,89,321:\npredecessor 24,89,320 · successor 24,89,322.\n\nWalk one step back or forward on the same floor.',
      },
    ],
    teluguContent:
      '🏘️ ప్రతి number కు neighbours:\n\n← Predecessor = ముందు (−1)\n→ Successor = తర్వాత (+1)\n\n24,89,321: predecessor 24,89,320, successor 24,89,322.',
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
    englishContent: '',
    contentBlocks: [
      {
        type: 'topic',
        icon: '✏️',
        title: 'Ready for paper',
        body: 'You learned the building trick and played all the games. Arjuna sends you to your weekend maths paper.',
      },
      {
        type: 'topic',
        icon: '🏢',
        title: 'You know the building now',
        body: 'Crores · Lakhs · Thousands · Ones — commas between floors, never inside.\n\nTen crores: 10,00,00,000. Homework numbers: same trick.',
      },
      {
        type: 'topic',
        icon: '✏️',
        title: 'Next step',
        body: 'Open **This Weekend** in the menu → **Maths · 25 Jun**.\n\nTick each question as you write on paper. Hints first — peek only if stuck.',
      },
    ],
    teluguContent:
      'Building trick నేర్చుకుని games play చేశావు. menu లో **This Weekend** → **Maths · 25 Jun** paper కు వెళ్ళు.\n\n10,00,00,000 = ten crore — అదే trick homework numbers కు.',
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
    englishContent: 'Arjuna: "Four quick ones about the building. Then close the app and do your sheet!"',
    teluguContent: 'అర్జున: "Building గురించి నాలుగు quick questions. App close చేసి sheet చేయి!"',
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
