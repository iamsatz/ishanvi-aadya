/* ============================================================
   AADYA — Grade 2 Maths (14 chapters · Chiku-led · concept-first)
   Each chapter = 6 cards: opener, teach A, teach B,
   worked example, quick check, make your own.
   Visuals = emoji + text. Ask-don't-tell. Bilingual.
   ============================================================ */

import type { Lesson } from '../types/content';
import {
  buildAadyaChapterCards,
  buildContentsCard,
  type AadyaChapterDef,
} from './aadyaLessonHelpers';

const chapters: AadyaChapterDef[] = [
  /* ── Chapter 1 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch01',
    num: 1,
    title: '2-digit Numbers',
    subtitle: 'Tens and ones',
    glossary: [
      { word: 'tens', en: 'groups of ten', te: 'పది గుంపులు' },
      { word: 'ones', en: 'single units', te: 'ఒక్కొక్కటి' },
    ],
    hook: 'Chiku found **47** carrots in the garden. 🥕\n\nThe **4** is not four carrots — it is **4 tens** (40). The **7** is **7 ones**.\n\nWhat 2-digit number can you find in your home?',
    hookTe: '47 carrots — 4 tens (40) + 7 ones. మీ ఇంట్లో 2-digit number ఏది?',
    openerHint: 'Look at your age, a clock, or a page number!',

    teachA: [
      { type: 'topic', icon: '🔟', title: 'Make groups of ten', body: 'Count 47 carrots by making bundles of **ten**:\n\n🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕 = 1 ten\n🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕 = 2 tens\n🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕 = 3 tens\n🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕 = 4 tens\nLeft over: 🥕🥕🥕🥕🥕🥕🥕 = 7 ones' },
      { type: 'topic', icon: '🏠', title: 'Two houses', body: 'Every 2-digit number lives in two houses:\n\n| Tens | Ones |\n| 4 | 7 |\n\n**47 = 40 + 7**' },
    ],
    teachATe: '47 = 4 tens + 7 ones = 40 + 7. Tens house + ones house.',
    revealA: {
      prompt: 'In **58**, how many tens are there? Think, then tap.',
      answer: '5 tens! 58 = 50 + 8. The 5 sits in the tens house.',
      hint: 'Which digit is on the left?',
    },

    teachB: [
      { type: 'topic', icon: '🔁', title: 'Same digits, new number', body: 'Swap the houses and the number changes!\n\n**36** = 3 tens + 6 ones = 30 + 6\n**63** = 6 tens + 3 ones = 60 + 3\n\nSame digits 3 and 6 — but **63 is bigger**.' },
      { type: 'topic', icon: '🎯', title: 'Why place matters', body: 'The same digit is worth more in the tens house.\n\nThe 6 in **63** means **60**.\nThe 6 in **36** means just **6**.' },
    ],
    teachBTe: '36 vs 63 — same digits, place మారితే number మారుతుంది. 63 పెద్దది.',
    revealB: {
      prompt: 'Which is bigger: **29** or **92**? Why?',
      answer: '92 is bigger — it has 9 tens (90). 29 has only 2 tens (20).',
      hint: 'Compare the tens house first.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '📚', title: 'Story', body: 'Aadya stacks **35** books. Then **2 more** stacks of ten arrive.' },
        { type: 'topic', icon: '🔟', title: 'Step 1', body: '2 stacks of ten = **20** more.' },
        { type: 'topic', icon: '➕', title: 'Step 2', body: '35 + 20 → add the tens: 3 tens + 2 tens = 5 tens. Ones stay 5.' },
      ],
      story: 'How many books does Aadya have now? Work it out, then tap.',
      storyTe: '35 books + 2 tens (20). మొత్తం ఎన్ని?',
      answer: '55 books! 35 + 20 = 55 (5 tens + 5 ones).',
      hint: 'Add only the tens, the ones do not change.',
    },

    quiz: [
      {
        question: 'In 47, what does the 4 stand for?',
        choices: [
          { id: 'a', label: '4 ones', isCorrect: false },
          { id: 'b', label: '4 tens (40)', isCorrect: true },
          { id: 'c', label: '47 tens', isCorrect: false },
        ],
        hint: 'Which house is the 4 in?',
      },
      {
        question: 'Which number has 8 tens and 1 one?',
        choices: [
          { id: 'a', label: '18', isCorrect: false },
          { id: 'b', label: '81', isCorrect: true },
          { id: 'c', label: '801', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Which number has 6 tens and 3 ones?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '36', isCorrect: false },
      { id: 'b', label: '63', isCorrect: true },
      { id: 'c', label: '603', isCorrect: false },
    ],
    tryHint: '6 tens go on the left.',

    makeBlocks: [
      { type: 'topic', icon: '✏️', title: 'Your turn', body: 'Pick any 2-digit number from your day (your age, a house number, a bus number).' },
    ],
    makePrompt: 'Write your number. How many tens and how many ones does it have? Draw the bundles if you like!',
    makePromptTe: 'మీ 2-digit number ఎంచుకొని tens, ones చెప్పండి.',
    makeHint: 'Break it like 40 + 7 — tens part plus ones part.',

    parentTip: 'Use sticks or snacks: make bundles of ten, then count the leftovers.',
    parentTipTe: '10 sticks bundle చేసి tens చూపించండి, leftovers ones.',
    parentQ: 'What does the 5 mean in 58 — five or fifty?',
    parentQTe: '58 లో 5 అంటే five aa fifty aa?',
  },

  /* ── Chapter 2 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch02',
    num: 2,
    title: 'Addition up to 99',
    subtitle: 'Put parts together',
    glossary: [
      { word: 'carry', en: 'move a ten to the next house', te: 'పక్క ఇంటికి ten తరలించు' },
    ],
    hook: 'Chiku had **34** stickers. A friend gave **25** more. ✨\n\nTo add, we join **tens with tens** and **ones with ones**.',
    hookTe: '34 stickers + 25. Tens+tens, ones+ones కలపండి.',

    teachA: [
      { type: 'topic', icon: '➕', title: 'Add without carrying', body: '**34 + 25**\n\nOnes: 4 + 5 = **9**\nTens: 3 + 2 = **5** tens → 50\n\nAnswer: **59**' },
      { type: 'topic', icon: '🧮', title: 'Line them up', body: 'Stack the houses:\n\n`  3 4`\n`+ 2 5`\n`-----`\n`  5 9`' },
    ],
    teachATe: '34 + 25: ones 4+5=9, tens 3+2=5 → 59.',
    revealA: {
      prompt: 'What is **42 + 36**? Add ones first, then tens.',
      answer: '78! Ones 2+6=8, tens 4+3=7 → 78.',
      hint: 'Ones make less than 10, so no carry.',
    },

    teachB: [
      { type: 'topic', icon: '🎒', title: 'When ones spill over', body: '**18 + 27**\n\nOnes: 8 + 7 = **15**. That is more than 9!\nWrite **5**, **carry 1** ten to the tens house.' },
      { type: 'topic', icon: '🔟', title: 'Finish the carry', body: 'Tens: 1 (carried) + 1 + 2 = **4** tens → 40\n\nAnswer: **45**' },
    ],
    teachBTe: '18+27: ones 8+7=15 → write 5, carry 1. Tens 1+1+2=4 → 45.',
    revealB: {
      prompt: 'In **29 + 16**, do the ones spill over 9? What do you carry?',
      answer: 'Yes! 9 + 6 = 15 → write 5, carry 1. Tens 1+2+1=4 → 45.',
      hint: 'Add the ones and check if it passes 9.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🍬', title: 'Story', body: 'Aadya has **47** sweets. Amma gives **28** more.' },
        { type: 'topic', icon: '1️⃣', title: 'Ones', body: '7 + 8 = **15** → write 5, carry 1 ten.' },
        { type: 'topic', icon: '🔟', title: 'Tens', body: '1 + 4 + 2 = **7** tens → 70.' },
      ],
      story: 'How many sweets now? Solve, then tap to check.',
      storyTe: '47 + 28 = ? Ones carry గుర్తుంచుకో.',
      answer: '75 sweets! 47 + 28 = 75.',
      hint: 'Remember the carried ten.',
    },

    quiz: [
      {
        question: 'What is 18 + 31?',
        choices: [
          { id: 'a', label: '39', isCorrect: false },
          { id: 'b', label: '49', isCorrect: true },
          { id: 'c', label: '59', isCorrect: false },
        ],
      },
      {
        question: 'In 56 + 27, what do you carry?',
        choices: [
          { id: 'a', label: 'Nothing', isCorrect: false },
          { id: 'b', label: '1 ten', isCorrect: true },
          { id: 'c', label: '1 hundred', isCorrect: false },
        ],
        hint: '6 + 7 = 13.',
      },
    ],
    tryPrompt: 'Chiku has 45 marbles and finds 23 more. How many now?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '58', isCorrect: false },
      { id: 'b', label: '68', isCorrect: true },
      { id: 'c', label: '78', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '✏️', title: 'Make a sum', body: 'Think of two small piles of things you have (toys, crayons).' },
    ],
    makePrompt: 'Write your own + sum with two 2-digit numbers. Did the ones spill over? Tell why or why not.',
    makePromptTe: 'మీ సొంత addition sum రాయండి. Ones spill అయ్యాయా?',
    makeHint: 'Pick numbers like 27 + 18 to practise carrying.',

    parentTip: 'Ask "Do the ones make more than 9?" before touching the tens.',
    parentTipTe: 'Ones 9 కంటే ఎక్కువా? అయితే carry చేయాలి.',
    parentQ: 'Why do we carry 1 to the tens house?',
    parentQTe: 'Tens house కు 1 carry ఎందుకు?',
  },

  /* ── Chapter 3 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch03',
    num: 3,
    title: 'Subtraction up to 99',
    subtitle: 'Take away',
    glossary: [
      { word: 'borrow', en: 'take a ten from the next house', te: 'పక్క ఇంటి నుండి ten తీసుకో' },
    ],
    hook: 'Chiku had **52** berries. She ate **17**. 🫐\n\nTo subtract, take away the **ones** first. Sometimes you must **borrow** a ten!',
    hookTe: '52 − 17. Ones ముందు తీసివేయి — అవసరమైతే borrow.',

    teachA: [
      { type: 'topic', icon: '➖', title: 'Easy take away', body: '**68 − 25**\n\nOnes: 8 − 5 = **3**\nTens: 6 − 2 = **4** → 40\n\nAnswer: **43** (no borrow needed)' },
      { type: 'topic', icon: '🧮', title: 'Stack it', body: '`  6 8`\n`- 2 5`\n`-----`\n`  4 3`' },
    ],
    teachATe: '68 − 25: ones 8−5=3, tens 6−2=4 → 43.',
    revealA: {
      prompt: 'What is **79 − 34**? Take ones first.',
      answer: '45! Ones 9−4=5, tens 7−3=4 → 45.',
      hint: 'No borrow — the top ones are bigger.',
    },

    teachB: [
      { type: 'topic', icon: '🤝', title: 'When you must borrow', body: '**52 − 17**\n\nOnes: 2 − 7? Too small! **Borrow** 1 ten.\nNow ones = 12 − 7 = **5**, tens become 4.' },
      { type: 'topic', icon: '🔟', title: 'Finish it', body: 'Tens: 4 − 1 = **3** → 30\n\nAnswer: **35**' },
    ],
    teachBTe: '52−17: ones 2−7 కాదు → borrow. 12−7=5, tens 4−1=3 → 35.',
    revealB: {
      prompt: 'In **63 − 28**, can you do ones (3 − 8) without borrowing?',
      answer: 'No — borrow! 13 − 8 = 5, tens 5 − 2 = 3 → 35.',
      hint: 'Top ones (3) smaller than bottom (8) → borrow.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🎈', title: 'Story', body: 'A party had **80** balloons. **35** popped! 💥' },
        { type: 'topic', icon: '1️⃣', title: 'Ones', body: '0 − 5? Borrow → 10 − 5 = **5**. Tens become 7.' },
        { type: 'topic', icon: '🔟', title: 'Tens', body: '7 − 3 = **4** → 40.' },
      ],
      story: 'How many balloons are left? Solve, then tap.',
      storyTe: '80 − 35 = ? Borrow గుర్తుంచుకో.',
      answer: '45 balloons left! 80 − 35 = 45.',
      hint: 'Check with addition: 45 + 35 = 80.',
    },

    quiz: [
      {
        question: 'What is 63 − 21?',
        choices: [
          { id: 'a', label: '32', isCorrect: false },
          { id: 'b', label: '42', isCorrect: true },
          { id: 'c', label: '52', isCorrect: false },
        ],
      },
      {
        question: 'Which sum needs borrowing?',
        choices: [
          { id: 'a', label: '45 − 23', isCorrect: false },
          { id: 'b', label: '41 − 28', isCorrect: true },
          { id: 'c', label: '88 − 11', isCorrect: false },
        ],
        hint: 'Look where top ones are smaller.',
      },
    ],
    tryPrompt: '80 − 35 = ?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '55', isCorrect: false },
      { id: 'b', label: '45', isCorrect: true },
      { id: 'c', label: '35', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '✅', title: 'Check trick', body: 'After subtracting, **add back** to check:\nanswer + taken away = start.' },
    ],
    makePrompt: 'Write a take-away from your day (e.g. you had some snacks, ate a few). Solve it, then check by adding back.',
    makePromptTe: 'మీ సొంత subtraction sum రాసి, add చేసి check చేయండి.',
    makeHint: 'Start − eaten = left. Then left + eaten should equal start.',

    parentTip: 'Use real objects — take some away, then count what is left.',
    parentTipTe: 'Objects తీసివేసి, మిగిలినవి count చేయండి.',
    parentQ: 'How can addition help you check subtraction?',
    parentQTe: 'Subtraction ని addition తో ఎలా check చేయాలి?',
  },

  /* ── Chapter 4 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch04',
    num: 4,
    title: '3-digit Numbers',
    subtitle: 'Hundreds join in',
    glossary: [
      { word: 'hundreds', en: 'groups of one hundred', te: 'వంద గుంపులు' },
    ],
    hook: 'Chiku counted **245** steps to the park. 🏞️\n\nNow there is a new house — **hundreds** — next to tens and ones. Three houses!',
    hookTe: '245 = hundreds + tens + ones. మూడు houses!',

    teachA: [
      { type: 'topic', icon: '🏠', title: 'Three houses', body: '| Hundreds | Tens | Ones |\n| 2 | 4 | 5 |\n\n**245 = 200 + 40 + 5**' },
      { type: 'topic', icon: '🔢', title: 'When a house is empty', body: '**308** → 3 hundreds + **0** tens + 8 ones.\nThe 0 holds the tens house open — without it, 38 is a different number!' },
    ],
    teachATe: '245 = 200+40+5. 308 లో 0 tens house ఖాళీగా.',
    revealA: {
      prompt: 'What is **506** in expanded form?',
      answer: '500 + 0 + 6. 5 hundreds, 0 tens, 6 ones.',
      hint: 'The middle house is empty.',
    },

    teachB: [
      { type: 'topic', icon: '🔍', title: 'Compare big numbers', body: '**245** vs **254** — same digits!\nCompare **hundreds** first: both 2. Then **tens**: 4 vs 5.\n**254 is bigger.**' },
      { type: 'topic', icon: '🪜', title: 'Order them', body: 'To order 245, 254, 240:\nHundreds all 2 → look at tens.\nSmallest → biggest: **240, 245, 254**.' },
    ],
    teachBTe: '245 vs 254 — hundreds same అయితే tens చూడు. 254 పెద్దది.',
    revealB: {
      prompt: 'Which is bigger: **308** or **380**?',
      answer: '380! Hundreds same (3). Tens: 0 vs 8 → 380 wins.',
      hint: 'Hundreds tie, so check the tens house.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🏫', title: 'Story', body: 'A school has **3** hundreds of chairs, **6** tens, and **2** ones.' },
        { type: 'topic', icon: '🧩', title: 'Build it', body: '300 + 60 + 2 → put each digit in its house.' },
      ],
      story: 'What is the number of chairs? Build it, then tap.',
      storyTe: '3 hundreds + 6 tens + 2 ones = ?',
      answer: '362 chairs! 300 + 60 + 2 = 362.',
      hint: 'Hundreds first, then tens, then ones.',
    },

    quiz: [
      {
        question: 'What is 245 in expanded form?',
        choices: [
          { id: 'a', label: '200 + 40 + 5', isCorrect: true },
          { id: 'b', label: '2 + 4 + 5', isCorrect: false },
          { id: 'c', label: '240 + 50', isCorrect: false },
        ],
      },
      {
        question: 'In 470, the 0 is in which house?',
        choices: [
          { id: 'a', label: 'Hundreds', isCorrect: false },
          { id: 'b', label: 'Tens', isCorrect: false },
          { id: 'c', label: 'Ones', isCorrect: true },
        ],
      },
    ],
    tryPrompt: 'Which number is bigger: 308 or 380?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '308', isCorrect: false },
      { id: 'b', label: '380', isCorrect: true },
      { id: 'c', label: 'They are equal', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '✏️', title: 'Your big number', body: 'Pick a 3-digit number you see (a price, a page, a door number).' },
    ],
    makePrompt: 'Write your 3-digit number and split it into hundreds + tens + ones.',
    makePromptTe: 'మీ 3-digit number ని hundreds + tens + ones గా విడగొట్టండి.',
    makeHint: 'Like 245 = 200 + 40 + 5.',

    parentTip: 'Use 100-count bundles or draw block towers for hundreds.',
    parentTipTe: '100 bundle = one hundred అని చూపించండి.',
    parentQ: 'In 308, why is the tens digit 0?',
    parentQTe: '308 లో tens digit 0 ఎందుకు?',
  },

  /* ── Chapter 5 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch05',
    num: 5,
    title: 'Add & Subtract 3-digit',
    subtitle: 'Bigger numbers',
    hook: 'Chiku\'s class collected **125** books. They got **134** more. 📚\n\nLine up hundreds, tens, ones — then add house by house!',
    hookTe: '125 + 134. Houses line up చేసి add చేయండి.',

    teachA: [
      { type: 'topic', icon: '➕', title: 'Add by houses', body: '`  1 2 5`\n`+ 1 3 4`\n`-------`\nOnes 5+4=9, tens 2+3=5, hundreds 1+1=2\n→ **259**' },
      { type: 'topic', icon: '🔟', title: 'Carry still works', body: 'If a house spills over 9, carry 1 to the next house — same rule as 2-digit!' },
    ],
    teachATe: '125 + 134 = 259. House by house. Carry rule అదే.',
    revealA: {
      prompt: 'What is **234 + 152**?',
      answer: '386! Ones 4+2=6, tens 3+5=8, hundreds 2+1=3.',
      hint: 'Add each house separately.',
    },

    teachB: [
      { type: 'topic', icon: '➖', title: 'Subtract by houses', body: '**468 − 235**\nOnes 8−5=3, tens 6−3=3, hundreds 4−2=2 → **233**' },
      { type: 'topic', icon: '🤝', title: 'Borrow across houses', body: '**400 − 175** needs borrowing from tens and hundreds. Take it one house at a time, then check by adding back.' },
    ],
    teachBTe: '468 − 235 = 233. Borrow houses one by one.',
    revealB: {
      prompt: 'What is **500 − 200**? (no borrowing needed)',
      answer: '300! Just hundreds: 5 − 2 = 3 → 300.',
      hint: 'Tens and ones are all 0.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🪙', title: 'Story', body: 'A shop had **350** coins. It sold **123** coins.' },
        { type: 'topic', icon: '1️⃣', title: 'Ones & tens', body: 'Ones 0−3 → borrow → 10−3=7. Tens 4−2=2.' },
        { type: 'topic', icon: '💯', title: 'Hundreds', body: '3 − 1 = 2 → 200.' },
      ],
      story: 'How many coins are left? Solve, then tap.',
      storyTe: '350 − 123 = ? Borrow గుర్తుంచుకో.',
      answer: '227 coins! 350 − 123 = 227.',
      hint: 'Borrow for the ones house.',
    },

    quiz: [
      {
        question: '125 + 134 = ?',
        choices: [
          { id: 'a', label: '249', isCorrect: false },
          { id: 'b', label: '259', isCorrect: true },
          { id: 'c', label: '269', isCorrect: false },
        ],
      },
      {
        question: '346 − 132 = ?',
        choices: [
          { id: 'a', label: '214', isCorrect: true },
          { id: 'b', label: '224', isCorrect: false },
          { id: 'c', label: '314', isCorrect: false },
        ],
      },
    ],
    tryPrompt: '500 − 123 = ?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '377', isCorrect: true },
      { id: 'b', label: '387', isCorrect: false },
      { id: 'c', label: '477', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🧾', title: 'Real maths', body: 'Adding prices, counting collections — big numbers are everywhere.' },
    ],
    makePrompt: 'Make your own 3-digit + or − sum about something real (toys, pages, steps). Solve and check it.',
    makePromptTe: 'మీ సొంత 3-digit sum రాసి solve చేయండి.',
    makeHint: 'Stack the houses neatly before you add.',

    parentTip: 'Write numbers in neat columns on paper together.',
    parentTipTe: 'Paper మీద columns లో సరిగ్గా రాయండి.',
    parentQ: 'Which house do you add first — hundreds or ones?',
    parentQTe: 'ముందు ఏ house — ones aa hundreds aa?',
  },

  /* ── Chapter 6 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch06',
    num: 6,
    title: 'Multiplication',
    subtitle: 'Equal groups',
    glossary: [
      { word: 'multiply', en: 'fast way to add equal groups', te: 'సమ గుంపులను వేగంగా add చేయడం' },
    ],
    hook: 'Chiku made **4** bags with **3** carrots in each. 🥕\n\nInstead of counting one-by-one, multiply: **4 × 3 = 12**.',
    hookTe: '4 bags × 3 carrots = 12. Equal groups వేగంగా count!',

    teachA: [
      { type: 'topic', icon: '🥕', title: 'Groups of', body: '4 groups of 3:\n🥕🥕🥕 | 🥕🥕🥕 | 🥕🥕🥕 | 🥕🥕🥕\n\n3 + 3 + 3 + 3 = **12** → we write **4 × 3 = 12**' },
      { type: 'topic', icon: '🔁', title: 'Repeated addition', body: '**5 × 2** means 5 groups of 2:\n2 + 2 + 2 + 2 + 2 = **10**\n\nMultiplication is just fast adding!' },
    ],
    teachATe: 'Multiplication = equal groups add. 4×3=12, 5×2=10.',
    revealA: {
      prompt: 'What is **3 × 4**? Draw 3 groups of 4 in your head.',
      answer: '12! 4 + 4 + 4 = 12.',
      hint: 'Three groups, four in each.',
    },

    teachB: [
      { type: 'topic', icon: '↔️', title: 'Order does not matter', body: '**3 × 4 = 12** and **4 × 3 = 12**.\nSame answer either way — flip it if it helps!' },
      { type: 'topic', icon: '⭐', title: 'Easy tables', body: 'Start with **2, 5, 10**:\n2 × 6 = 12 · 5 × 3 = 15 · 10 × 4 = 40' },
    ],
    teachBTe: '3×4 = 4×3. Tables 2, 5, 10 సులభం.',
    revealB: {
      prompt: 'If 6 × 2 = 12, what is **2 × 6**?',
      answer: 'Also 12! Order does not change the answer.',
      hint: 'Flipping the numbers keeps the same total.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🌼', title: 'Story', body: 'Aadya puts **6** flowers in each of **3** vases. 🌼' },
        { type: 'topic', icon: '✖️', title: 'Set it up', body: '3 vases × 6 flowers = 3 × 6' },
        { type: 'topic', icon: '➕', title: 'Add groups', body: '6 + 6 + 6 = 18' },
      ],
      story: 'How many flowers in all? Work it out, then tap.',
      storyTe: '3 vases × 6 flowers = ?',
      answer: '18 flowers! 3 × 6 = 18.',
      hint: 'Add 6 three times.',
    },

    quiz: [
      {
        question: '5 × 2 = ?',
        choices: [
          { id: 'a', label: '7', isCorrect: false },
          { id: 'b', label: '10', isCorrect: true },
          { id: 'c', label: '52', isCorrect: false },
        ],
      },
      {
        question: 'Which means the same as 4 + 4 + 4?',
        choices: [
          { id: 'a', label: '3 × 4', isCorrect: true },
          { id: 'b', label: '4 × 4', isCorrect: false },
          { id: 'c', label: '3 + 4', isCorrect: false },
        ],
      },
    ],
    tryPrompt: '6 groups of 3 carrots = ?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '9', isCorrect: false },
      { id: 'b', label: '18', isCorrect: true },
      { id: 'c', label: '63', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🔎', title: 'Spot groups', body: 'Equal groups are everywhere: shoes in pairs, wheels on cars, eggs in a tray.' },
    ],
    makePrompt: 'Find equal groups around you (e.g. 4 chairs with 2 cushions each). Write the × sentence.',
    makePromptTe: 'మీ చుట్టూ equal groups చూసి × sentence రాయండి.',
    makeHint: 'How many groups? How many in each? Groups × each.',

    parentTip: 'Use egg cartons or ice trays to show "groups of".',
    parentTipTe: 'Egg tray లో equal groups చూపించండి.',
    parentQ: 'Is 3 × 4 the same as 4 × 3? Why?',
    parentQTe: '3×4 = 4×3 ఎందుకు?',
  },

  /* ── Chapter 7 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch07',
    num: 7,
    title: 'Division',
    subtitle: 'Share equally',
    glossary: [
      { word: 'divide', en: 'share into equal groups', te: 'సమంగా పంచు' },
    ],
    hook: 'Chiku has **12** carrots for **3** bunny friends. 🐰🐰🐰\n\nDivision means **sharing equally**. How many does each friend get?',
    hookTe: '12 carrots ÷ 3 friends. సమంగా share!',

    teachA: [
      { type: 'topic', icon: '🤲', title: 'Share one by one', body: 'Deal carrots like cards:\n🐰 🥕🥕🥕🥕\n🐰 🥕🥕🥕🥕\n🐰 🥕🥕🥕🥕\n\n**12 ÷ 3 = 4** — each gets 4.' },
      { type: 'topic', icon: '❓', title: 'Think backwards', body: 'Ask: "3 × what = 12?"\n3 × **4** = 12, so 12 ÷ 3 = **4**.' },
    ],
    teachATe: '12 ÷ 3 = 4. "3 × ? = 12" అని ఆలోచించు.',
    revealA: {
      prompt: 'Share **10** apples between **2** kids. How many each?',
      answer: '5 each! 10 ÷ 2 = 5.',
      hint: '2 × what = 10?',
    },

    teachB: [
      { type: 'topic', icon: '↩️', title: 'Division undoes multiply', body: 'If **4 × 3 = 12**, then:\n12 ÷ 3 = 4\n12 ÷ 4 = 3\n\nThey are a family!' },
      { type: 'topic', icon: '⚖️', title: 'Equal means fair', body: 'Sharing must be **equal** — everyone gets the same. Leftovers that cannot share equally are called a remainder (we meet those later).' },
    ],
    teachBTe: 'Division undoes multiplication. Equal = fair share.',
    revealB: {
      prompt: 'If 5 × 4 = 20, what is **20 ÷ 5**?',
      answer: '4! Division undoes the multiply.',
      hint: 'Use the times fact backwards.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🍪', title: 'Story', body: 'Amma bakes **15** cookies for **5** friends. 🍪' },
        { type: 'topic', icon: '❓', title: 'Think', body: '5 × what = 15?' },
        { type: 'topic', icon: '✅', title: 'Find it', body: '5 × 3 = 15.' },
      ],
      story: 'How many cookies does each friend get? Solve, then tap.',
      storyTe: '15 cookies ÷ 5 friends = ?',
      answer: '3 cookies each! 15 ÷ 5 = 3.',
      hint: 'Use the 5 times table.',
    },

    quiz: [
      {
        question: '12 ÷ 4 = ?',
        choices: [
          { id: 'a', label: '2', isCorrect: false },
          { id: 'b', label: '3', isCorrect: true },
          { id: 'c', label: '4', isCorrect: false },
        ],
      },
      {
        question: 'Sharing 18 sweets among 3 kids gives each…',
        choices: [
          { id: 'a', label: '6', isCorrect: true },
          { id: 'b', label: '5', isCorrect: false },
          { id: 'c', label: '9', isCorrect: false },
        ],
        hint: '3 × what = 18?',
      },
    ],
    tryPrompt: '20 ÷ 5 = ?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '4', isCorrect: true },
      { id: 'b', label: '5', isCorrect: false },
      { id: 'c', label: '25', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🍓', title: 'Fair shares', body: 'Sharing snacks fairly is real division!' },
    ],
    makePrompt: 'Share some objects fairly with family. Write your ÷ sentence and tell how many each got.',
    makePromptTe: 'వస్తువులు family తో share చేసి ÷ sentence రాయండి.',
    makeHint: 'Total ÷ people = each share.',

    parentTip: 'Let Aadya deal out snacks one-by-one to feel equal sharing.',
    parentTipTe: 'Snacks ఒక్కొక్కటిగా share చేయనివ్వండి.',
    parentQ: 'What does "equal" mean when we share?',
    parentQTe: 'Equal share అంటే ఏమిటి?',
  },

  /* ── Chapter 8 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch08',
    num: 8,
    title: 'Measurement',
    subtitle: 'Long, heavy, full',
    glossary: [
      { word: 'length', en: 'how long something is', te: 'పొడవు' },
      { word: 'capacity', en: 'how much liquid fits', te: 'ఎంత ద్రవం పడుతుందో' },
    ],
    hook: 'Chiku measured her jump: **120 cm** long! 📏\n\nWe measure **length** (cm, m), **weight** (g, kg), and **liquid** (ml, L).',
    hookTe: 'Length cm/m, weight g/kg, liquid ml/L.',

    teachA: [
      { type: 'topic', icon: '📏', title: 'Length', body: 'Use **cm** for small things (a pencil).\nUse **m** for long things (a room).\n\n**100 cm = 1 m**' },
      { type: 'topic', icon: '⚖️', title: 'Weight', body: 'Use **g** for light things (a tomato).\nUse **kg** for heavy things (a bag of rice).\n\n**1000 g = 1 kg**' },
    ],
    teachATe: 'cm small, m long (100cm=1m). g light, kg heavy (1000g=1kg).',
    revealA: {
      prompt: 'Would you measure your height in **cm** or **kg**?',
      answer: 'cm! Height is a length. kg is for weight.',
      hint: 'Length vs weight.',
    },

    teachB: [
      { type: 'topic', icon: '🥤', title: 'Capacity', body: 'Use **ml** for small amounts (a cup).\nUse **L** for big amounts (a water bottle).\n\n**1000 ml = 1 L**' },
      { type: 'topic', icon: '🤔', title: 'Pick the right unit', body: 'Big thing → big unit (m, kg, L).\nSmall thing → small unit (cm, g, ml).' },
    ],
    teachBTe: 'ml small, L big (1000ml=1L). Big thing → big unit.',
    revealB: {
      prompt: 'A spoon of medicine — **ml** or **L**?',
      answer: 'ml! A spoon is a tiny amount.',
      hint: 'Small amount → small unit.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🪜', title: 'Story', body: 'Aadya measures a table: it is **1 m and 50 cm** long.' },
        { type: 'topic', icon: '🔁', title: 'Change to cm', body: '1 m = 100 cm. Add the 50 cm.' },
      ],
      story: 'How many cm long is the table? Think, then tap.',
      storyTe: '1 m 50 cm = ఎన్ని cm?',
      answer: '150 cm! 100 cm + 50 cm = 150 cm.',
      hint: '1 m is 100 cm.',
    },

    quiz: [
      {
        question: 'Which unit for a pencil\'s length?',
        choices: [
          { id: 'a', label: 'cm', isCorrect: true },
          { id: 'b', label: 'kg', isCorrect: false },
          { id: 'c', label: 'L', isCorrect: false },
        ],
      },
      {
        question: '1000 g is the same as…',
        choices: [
          { id: 'a', label: '1 kg', isCorrect: true },
          { id: 'b', label: '1 cm', isCorrect: false },
          { id: 'c', label: '1 L', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Match each thing to its best unit:',
    tryType: 'match-pairs',
    pairs: [
      { left: 'Bag of rice', right: 'kg' },
      { left: 'Water bottle', right: 'L' },
      { left: 'Your height', right: 'cm' },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🏠', title: 'Measure at home', body: 'Rulers, scales, and measuring cups turn the world into numbers.' },
    ],
    makePrompt: 'Measure one thing at home. What unit did you use, and why that one?',
    makePromptTe: 'ఇంట్లో ఒకటి measure చేసి, ఏ unit వాడారో చెప్పండి.',
    makeHint: 'Small → cm/g/ml. Big → m/kg/L.',

    parentTip: 'Measure one real object together with a ruler or kitchen scale.',
    parentTipTe: 'Ruler/scale తో ఒక వస్తువు measure చేయండి.',
    parentQ: 'Would you measure a pencil in cm or m?',
    parentQTe: 'Pencil cm aa m aa?',
  },

  /* ── Chapter 9 ───────────────────────────────────────────── */
  {
    id: 'ad-m-ch09',
    num: 9,
    title: 'More Multiplication',
    subtitle: 'Tables & arrays',
    glossary: [
      { word: 'array', en: 'rows and columns of equal items', te: 'rows × columns అమరిక' },
    ],
    hook: 'Chiku planted **3 rows** of **6** flowers. 🌸\n\nA neat grid like this is an **array** — rows × columns shows multiplication!',
    hookTe: '3 rows × 6 flowers. Array = multiply!',

    teachA: [
      { type: 'topic', icon: '🌸', title: 'Read an array', body: '🌸🌸🌸🌸🌸🌸\n🌸🌸🌸🌸🌸🌸\n🌸🌸🌸🌸🌸🌸\n\n3 rows of 6 → **3 × 6 = 18**' },
      { type: 'topic', icon: '🔄', title: 'Same array, two ways', body: 'The same grid is also **6 columns of 3** → 6 × 3 = 18.\nEither way: **18 flowers**.' },
    ],
    teachATe: 'Array: 3 rows × 6 = 18. 6 columns × 3 = 18 కూడా.',
    revealA: {
      prompt: 'An array has 4 rows of 5 dots. How many dots?',
      answer: '20! 4 × 5 = 20.',
      hint: 'Rows × how many in each row.',
    },

    teachB: [
      { type: 'topic', icon: '⭐', title: 'Practise tables', body: '3 × 4 = 12\n4 × 5 = 20\n6 × 2 = 12\n\nSkip-count to find them: 3, 6, 9, **12**.' },
      { type: 'topic', icon: '↔️', title: 'Flip to make it easy', body: '7 × 2 feels hard? Flip to **2 × 7 = 14**. Same answer, easier to count.' },
    ],
    teachBTe: 'Tables skip-count: 3,6,9,12. 7×2 = 2×7 = 14.',
    revealB: {
      prompt: 'What is **4 × 5**? Skip-count by 5.',
      answer: '20! 5, 10, 15, 20.',
      hint: 'Count 5 four times.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🍫', title: 'Story', body: 'A chocolate bar has **4 rows** of **7** squares. 🍫' },
        { type: 'topic', icon: '✖️', title: 'Array', body: 'rows × columns = 4 × 7' },
      ],
      story: 'How many squares in the whole bar? Solve, then tap.',
      storyTe: '4 rows × 7 squares = ?',
      answer: '28 squares! 4 × 7 = 28.',
      hint: 'Skip-count by 7 four times.',
    },

    quiz: [
      {
        question: '3 × 6 = ?',
        choices: [
          { id: 'a', label: '9', isCorrect: false },
          { id: 'b', label: '18', isCorrect: true },
          { id: 'c', label: '36', isCorrect: false },
        ],
      },
      {
        question: 'A 2-row, 8-column array has how many items?',
        choices: [
          { id: 'a', label: '10', isCorrect: false },
          { id: 'b', label: '16', isCorrect: true },
          { id: 'c', label: '28', isCorrect: false },
        ],
      },
    ],
    tryPrompt: '4 × 7 = ?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '11', isCorrect: false },
      { id: 'b', label: '28', isCorrect: true },
      { id: 'c', label: '47', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🔲', title: 'Arrays around you', body: 'Egg trays, tiles, window panes — all arrays!' },
    ],
    makePrompt: 'Find an array at home (tiles, a tray). Write its rows × columns and the total.',
    makePromptTe: 'ఇంట్లో array (tiles/tray) చూసి rows × columns రాయండి.',
    makeHint: 'Count rows, count one row, multiply.',

    parentTip: 'Draw dot arrays on paper and count by groups together.',
    parentTipTe: 'Paper మీద dot array గీసి groups గా count చేయండి.',
    parentQ: 'How is an array different from a plain list?',
    parentQTe: 'Array, list — తేడా ఏమిటి?',
  },

  /* ── Chapter 10 ──────────────────────────────────────────── */
  {
    id: 'ad-m-ch10',
    num: 10,
    title: 'Geometry',
    subtitle: 'Shapes & lines',
    glossary: [
      { word: 'sides', en: 'the straight edges of a shape', te: 'shape అంచులు' },
      { word: 'corners', en: 'where two sides meet', te: 'రెండు sides కలిసే చోటు' },
    ],
    hook: 'Chiku sees shapes everywhere — windows (squares 🟦), wheels (circles ⭕), roofs (triangles 🔺)!\n\nShapes have **sides** and **corners**.',
    hookTe: 'Shapes everywhere! Sides, corners ఉంటాయి.',

    teachA: [
      { type: 'topic', icon: '🔺', title: 'Count sides & corners', body: '🔺 Triangle — 3 sides, 3 corners\n🟦 Square — 4 equal sides, 4 corners\n▭ Rectangle — 4 sides, 4 corners\n⭕ Circle — curved, **no** corners' },
      { type: 'topic', icon: '🔍', title: 'Square vs rectangle', body: 'Both have 4 sides and 4 corners.\nA **square** has all sides equal.\nA **rectangle** has long and short sides.' },
    ],
    teachATe: 'Triangle 3, square/rectangle 4 sides. Circle corners లేవు.',
    revealA: {
      prompt: 'How many corners does a **circle** have?',
      answer: 'Zero! A circle is one smooth curved line — no corners.',
      hint: 'Look for where two straight sides meet.',
    },

    teachB: [
      { type: 'topic', icon: '📏', title: 'Straight vs curved', body: 'A **straight** line does not bend (ruler edge).\nA **curved** line bends (a rainbow 🌈).' },
      { type: 'topic', icon: '🧭', title: 'Lines around us', body: '**Horizontal** goes flat like the ground —→\n**Vertical** stands up like a tree ↑' },
    ],
    teachBTe: 'Straight vs curved. Horizontal flat, vertical నిలువు.',
    revealB: {
      prompt: 'Is the edge of your table **straight** or **curved**?',
      answer: 'Straight! (A plate or wheel would be curved.)',
      hint: 'Does it bend or stay flat?',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🏠', title: 'Story', body: 'Aadya draws a house: a square 🟦 base and a triangle 🔺 roof.' },
        { type: 'topic', icon: '➕', title: 'Count corners', body: 'Square 4 corners + triangle 3 corners.' },
      ],
      story: 'How many corners in the whole house drawing? Solve, then tap.',
      storyTe: 'Square 4 + triangle 3 corners = ?',
      answer: '7 corners! 4 + 3 = 7.',
      hint: 'Add the corners of both shapes.',
    },

    quiz: [
      {
        question: 'How many corners does a triangle have?',
        choices: [
          { id: 'a', label: '2', isCorrect: false },
          { id: 'b', label: '3', isCorrect: true },
          { id: 'c', label: '4', isCorrect: false },
        ],
      },
      {
        question: 'Which shape has 4 equal sides?',
        choices: [
          { id: 'a', label: 'Rectangle', isCorrect: false },
          { id: 'b', label: 'Square', isCorrect: true },
          { id: 'c', label: 'Circle', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Match each shape to its clue:',
    tryType: 'match-pairs',
    pairs: [
      { left: 'Square', right: '4 equal sides' },
      { left: 'Circle', right: 'Curved, no corners' },
      { left: 'Triangle', right: '3 sides' },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🚶', title: 'Shape hunt', body: 'Doors, plates, clocks, books — every object is a shape.' },
    ],
    makePrompt: 'Find 3 shapes around you. Name each and say its sides and corners.',
    makePromptTe: 'మీ చుట్టూ 3 shapes చూసి sides, corners చెప్పండి.',
    makeHint: 'Trace the edge with your finger to count sides.',

    parentTip: 'Take a shape walk — find 3 different shapes, name sides and corners.',
    parentTipTe: 'ఇంట్లో 3 shapes కనుగొనండి.',
    parentQ: 'Why does a circle have zero corners?',
    parentQTe: 'Circle కి corners ఎందుకు లేవు?',
  },

  /* ── Chapter 11 ──────────────────────────────────────────── */
  {
    id: 'ad-m-ch11',
    num: 11,
    title: 'Patterns',
    subtitle: 'What comes next?',
    glossary: [
      { word: 'pattern', en: 'something that repeats by a rule', te: 'rule తో repeat అయ్యేది' },
    ],
    hook: 'Chiku claps: **clap, clap, pause, clap, clap, pause**… 👏\n\nA **pattern** repeats by a rule. Find the rule and you can guess what comes next!',
    hookTe: 'Pattern = rule repeat. Next ఏమిటో కనిపెట్టు!',

    teachA: [
      { type: 'topic', icon: '🎨', title: 'Shape patterns', body: '🔴 🔵 🔴 🔵 🔴 __\nRule: red, blue, repeat.\nNext is **🔵 blue**.' },
      { type: 'topic', icon: '🔁', title: 'Find the rule', body: 'Look at what changes each time. Colour? Size? Direction (↑→↓)? The rule is the part that repeats.' },
    ],
    teachATe: 'Shape pattern rule కనిపెట్టు. 🔴🔵🔴🔵 → next 🔵.',
    revealA: {
      prompt: 'What comes next? ⭐ 🌙 ⭐ 🌙 ⭐ __',
      answer: '🌙 moon! The rule is star, moon, repeat.',
      hint: 'Say the pattern out loud.',
    },

    teachB: [
      { type: 'topic', icon: '🔢', title: 'Number patterns', body: '**2, 4, 6, 8, …** rule: **add 2**\n**5, 10, 15, 20, …** rule: **add 5**' },
      { type: 'topic', icon: '⬇️', title: 'Going down too', body: 'Patterns can shrink: **20, 18, 16, …** rule: **take away 2**.' },
    ],
    teachBTe: '2,4,6,8 → add 2. 20,18,16 → take 2.',
    revealB: {
      prompt: 'What is the rule in **3, 6, 9, 12**?',
      answer: 'Add 3 each time! Next would be 15.',
      hint: 'How much jumps between numbers?',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🪜', title: 'Story', body: 'Aadya hops up stairs counting: **10, 20, 30, 40**…' },
        { type: 'topic', icon: '🔎', title: 'Rule', body: 'Each hop adds **10**.' },
      ],
      story: 'What number comes after 40? Think, then tap.',
      storyTe: '10,20,30,40… next?',
      answer: '50! The rule is add 10.',
      hint: 'Add ten more.',
    },

    quiz: [
      {
        question: 'What comes next? 2, 4, 6, 8, …',
        choices: [
          { id: 'a', label: '9', isCorrect: false },
          { id: 'b', label: '10', isCorrect: true },
          { id: 'c', label: '12', isCorrect: false },
        ],
      },
      {
        question: 'Rule for 20, 18, 16, 14?',
        choices: [
          { id: 'a', label: 'Add 2', isCorrect: false },
          { id: 'b', label: 'Take away 2', isCorrect: true },
          { id: 'c', label: 'Add 4', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Next in 5, 10, 15, 20, …?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '22', isCorrect: false },
      { id: 'b', label: '25', isCorrect: true },
      { id: 'c', label: '30', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🎵', title: 'Make a beat', body: 'Patterns can be sounds, claps, colours, or numbers.' },
    ],
    makePrompt: 'Make your own pattern (claps, colours, or numbers). What is your rule?',
    makePromptTe: 'మీ సొంత pattern చేసి rule చెప్పండి.',
    makeHint: 'Repeat the same rule at least 3 times.',

    parentTip: 'Make a bead or sticker pattern; ask Aadya to continue it.',
    parentTipTe: 'Beads/stickers pattern continue చేయించండి.',
    parentQ: 'What is the rule in 2, 4, 6, 8?',
    parentQTe: '2,4,6,8 rule ఏమిటి?',
  },

  /* ── Chapter 12 ──────────────────────────────────────────── */
  {
    id: 'ad-m-ch12',
    num: 12,
    title: 'Time',
    subtitle: 'Clock reading',
    glossary: [
      { word: 'half past', en: '30 minutes after the hour', te: 'గంట దాటిన 30 నిమిషాలు' },
    ],
    hook: 'Chiku\'s dance class starts at **3 o\'clock**. 🕒\n\nThe **short hand** shows the hour. The **long hand** shows the minutes.',
    hookTe: 'Short hand = గంట. Long hand = నిమిషాలు.',

    teachA: [
      { type: 'topic', icon: '🕒', title: "O'clock", body: 'When the **long hand points to 12**, it is exactly **o\'clock**.\nShort hand on 3, long hand on 12 → **3 o\'clock**.' },
      { type: 'topic', icon: '👀', title: 'Two hands', body: 'Short, fat hand = **hour**.\nLong, thin hand = **minutes**.\nAlways read the short hand first.' },
    ],
    teachATe: 'Long hand 12 → o\'clock. Short hand = hour ముందు చదువు.',
    revealA: {
      prompt: 'Long hand on 12, short hand on 9 — what time?',
      answer: '9 o\'clock! Long hand on 12 means o\'clock.',
      hint: 'Read the short hand.',
    },

    teachB: [
      { type: 'topic', icon: '🕧', title: 'Half past', body: 'When the **long hand points to 6**, it is **half past**.\nShort hand between 3 and 4, long on 6 → **half past 3** (3:30).' },
      { type: 'topic', icon: '🌅', title: 'Parts of the day', body: 'Morning, afternoon, evening, night — we use time all day, from waking up to bedtime.' },
    ],
    teachBTe: 'Long hand 6 → half past. Half past 3 = 3:30.',
    revealB: {
      prompt: 'Long hand on 6, short hand between 7 and 8 — what time?',
      answer: 'Half past 7 (7:30)! Long hand on 6 means half past.',
      hint: 'Long hand on 6 → half past the lower hour.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🏫', title: 'Story', body: 'School starts at **8 o\'clock**. Lunch is **half past 12**.' },
        { type: 'topic', icon: '🕧', title: 'Half past 12', body: 'Half past = 30 minutes after → 12:30.' },
      ],
      story: 'Write lunch time in numbers. Think, then tap.',
      storyTe: 'Half past 12 = numbers లో?',
      answer: '12:30! Half past 12 is 12:30.',
      hint: 'Half past adds 30 minutes.',
    },

    quiz: [
      {
        question: 'Long hand on 12, short hand on 7 — what time?',
        choices: [
          { id: 'a', label: "12 o'clock", isCorrect: false },
          { id: 'b', label: "7 o'clock", isCorrect: true },
          { id: 'c', label: 'Half past 7', isCorrect: false },
        ],
      },
      {
        question: 'Which hand shows the hour?',
        choices: [
          { id: 'a', label: 'The short hand', isCorrect: true },
          { id: 'b', label: 'The long hand', isCorrect: false },
          { id: 'c', label: 'Both hands', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Half past 5 means…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '5:00', isCorrect: false },
      { id: 'b', label: '5:30', isCorrect: true },
      { id: 'c', label: '6:00', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '📅', title: 'Your day', body: 'You do things at set times — wake, eat, play, sleep.' },
    ],
    makePrompt: 'Write 3 things you do and the time for each (o\'clock or half past).',
    makePromptTe: 'మీ రోజులో 3 పనులు, వాటి time రాయండి.',
    makeHint: 'Use o\'clock or half past.',

    parentTip: 'Read a real clock at meal times and name the time together.',
    parentTipTe: 'Meal times లో గడియారం చూపించి time చెప్పండి.',
    parentQ: 'Why is half past 3 also written 3:30?',
    parentQTe: 'Half past 3 = 3:30 ఎందుకు?',
  },

  /* ── Chapter 13 ──────────────────────────────────────────── */
  {
    id: 'ad-m-ch13',
    num: 13,
    title: 'Money',
    subtitle: 'Rupees & paise',
    glossary: [
      { word: 'change', en: 'money given back after paying extra', te: 'ఎక్కువ ఇచ్చాక తిరిగొచ్చే డబ్బు' },
    ],
    hook: 'Chiku saved **₹25** in her piggy bank. 🐷\n\nWe use **notes** (₹10, ₹20, ₹50…) and **coins** (₹1, ₹2, ₹5…). Add money like numbers!',
    hookTe: '₹ notes & coins. Money ని numbers లా add చేయండి.',

    teachA: [
      { type: 'topic', icon: '🪙', title: 'Coins & notes', body: 'Coins: ₹1, ₹2, ₹5, ₹10\nNotes: ₹10, ₹20, ₹50, ₹100, ₹200, ₹500\n\n**100 paise = ₹1**' },
      { type: 'topic', icon: '🧩', title: 'Make an amount', body: 'Many ways to make ₹10:\n₹5 + ₹5 · ₹2 + ₹2 + ₹2 + ₹2 + ₹2 · ₹10 note' },
    ],
    teachATe: 'Coins ₹1-₹10, notes ₹10+. 100 paise = ₹1.',
    revealA: {
      prompt: 'How many ₹2 coins make ₹10?',
      answer: '5 coins! ₹2 × 5 = ₹10.',
      hint: 'Count by 2 up to 10.',
    },

    teachB: [
      { type: 'topic', icon: '🛒', title: 'Adding money', body: 'Sticker ₹15 + eraser ₹12:\nLine up rupees, add like numbers → **₹27**.' },
      { type: 'topic', icon: '↩️', title: 'Getting change', body: 'You pay more than the price → shop gives **change** back.\nPay ₹20 for a ₹15 toy → change = ₹20 − ₹15 = **₹5**.' },
    ],
    teachBTe: 'Money add like numbers. Change = paid − price.',
    revealB: {
      prompt: 'A book costs ₹18. You pay ₹20. How much change?',
      answer: '₹2! ₹20 − ₹18 = ₹2.',
      hint: 'Paid minus price.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🍦', title: 'Story', body: 'Aadya buys an ice cream for **₹35** and a candy for **₹12**. 🍦' },
        { type: 'topic', icon: '➕', title: 'Total', body: '₹35 + ₹12 → add rupees.' },
      ],
      story: 'How much does Aadya spend in all? Solve, then tap.',
      storyTe: '₹35 + ₹12 = ?',
      answer: '₹47! ₹35 + ₹12 = ₹47.',
      hint: 'Add ones then tens.',
    },

    quiz: [
      {
        question: '₹15 + ₹12 = ?',
        choices: [
          { id: 'a', label: '₹17', isCorrect: false },
          { id: 'b', label: '₹27', isCorrect: true },
          { id: 'c', label: '₹37', isCorrect: false },
        ],
      },
      {
        question: '100 paise equals…',
        choices: [
          { id: 'a', label: '₹1', isCorrect: true },
          { id: 'b', label: '₹10', isCorrect: false },
          { id: 'c', label: '₹100', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'A pencil costs ₹8. You pay ₹10. How much change back?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '₹1', isCorrect: false },
      { id: 'b', label: '₹2', isCorrect: true },
      { id: 'c', label: '₹3', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🏪', title: 'Play shop', body: 'Buying and selling is everyday money maths.' },
    ],
    makePrompt: 'Pretend to buy 2 things. Add their prices, then work out the change from a ₹50 note.',
    makePromptTe: '2 వస్తువులు కొని total, ₹50 నుండి change లెక్కించండి.',
    makeHint: 'Total first, then ₹50 − total = change.',

    parentTip: 'Let Aadya make ₹25 with real coins in different ways.',
    parentTipTe: 'Coins తో ₹25 వేరువేరుగా తయారు చేయించండి.',
    parentQ: 'Can you make ₹10 using only ₹2 coins? How many?',
    parentQTe: '₹2 coins తో ₹10 — ఎన్ని?',
  },

  /* ── Chapter 14 ──────────────────────────────────────────── */
  {
    id: 'ad-m-ch14',
    num: 14,
    title: 'Data Handling',
    subtitle: 'Count & show',
    glossary: [
      { word: 'tally', en: 'a line for each count', te: 'ప్రతి count కు ఒక గీత' },
      { word: 'pictograph', en: 'a picture chart of data', te: 'బొమ్మల చార్ట్' },
    ],
    hook: 'Chiku asked her friends: **favourite fruit?** 🍎🍌\n\nShe made a **tally chart** — one line per vote. Charts help us **see** answers fast!',
    hookTe: 'Tally chart = ఓట్ల లెక్క. Data వేగంగా చూపిస్తుంది.',

    teachA: [
      { type: 'topic', icon: '✏️', title: 'Tally marks', body: 'One vote = one line: |\nEvery 5th line crosses the bundle: ||||\u0336\n\nCount in fives, then add extras.' },
      { type: 'topic', icon: '🔢', title: 'Read a tally', body: '||||\u0336 || = one bundle of 5 + 2 = **7**' },
    ],
    teachATe: 'Tally: ప్రతి vote ఒక గీత. 5వది cross. Fives లో count.',
    revealA: {
      prompt: 'A tally shows ||||\u0336 ||| — how many is that?',
      answer: '8! One five + three extras = 8.',
      hint: 'Count the bundle of 5, then the extra lines.',
    },

    teachB: [
      { type: 'topic', icon: '🍎', title: 'Pictograph', body: 'One picture = one item.\nApple 🍎🍎🍎 = 3 votes\nBanana 🍌🍌 = 2 votes' },
      { type: 'topic', icon: '📊', title: 'Compare quickly', body: 'The longest row wins! 🍎🍎🍎 beats 🍌🍌, so apple is the favourite.' },
    ],
    teachBTe: 'Pictograph: ఒక బొమ్మ = ఒక item. పొడవైన row = favourite.',
    revealB: {
      prompt: '🍎🍎🍎🍎 vs 🍌🍌 — which fruit got more votes?',
      answer: 'Apple! 4 apples beat 2 bananas.',
      hint: 'Count each row of pictures.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🎨', title: 'Story', body: 'A class voted on colours:\nRed 🟥🟥🟥, Blue 🟦🟦🟦🟦🟦, Green 🟩🟩' },
        { type: 'topic', icon: '🔎', title: 'Find the most', body: 'Count each: red 3, blue 5, green 2.' },
      ],
      story: 'Which colour is the favourite? Think, then tap.',
      storyTe: 'Red 3, Blue 5, Green 2 — favourite ఏది?',
      answer: 'Blue! It has the most votes (5).',
      hint: 'The biggest count wins.',
    },

    quiz: [
      {
        question: 'Tally ||||\u0336 | means how many?',
        choices: [
          { id: 'a', label: '4', isCorrect: false },
          { id: 'b', label: '6', isCorrect: true },
          { id: 'c', label: '5', isCorrect: false },
        ],
        hint: 'One bundle of 5 + 1 extra.',
      },
      {
        question: 'On a pictograph, what does one picture usually stand for?',
        choices: [
          { id: 'a', label: 'One item', isCorrect: true },
          { id: 'b', label: 'Ten items', isCorrect: false },
          { id: 'c', label: 'Nothing', isCorrect: false },
        ],
      },
    ],
    tryPrompt: '3 apples + 2 bananas on a pictograph = how many fruits shown?',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: '3', isCorrect: false },
      { id: 'b', label: '5', isCorrect: true },
      { id: 'c', label: '6', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🗳️', title: 'Be a data detective', body: 'Surveys turn opinions into countable data.' },
    ],
    makePrompt: 'Survey your family (favourite colour or fruit). Make a tally, then say which won.',
    makePromptTe: 'Family ని survey చేసి tally chart తయారు చేయండి.',
    makeHint: 'One line per answer; longest count is the winner.',

    parentTip: 'Survey the family on a favourite, then build a tally together.',
    parentTipTe: 'Family survey చేసి tally chart చేయండి.',
    parentQ: 'Why do we group tally marks in fives?',
    parentQTe: 'Tally గీతలను fives గా ఎందుకు group చేస్తాం?',
  },
];

const mathsCards = [
  buildContentsCard(
    'aadya-maths',
    "Maths · Chiku's Playground",
    '🐰 Chiku teaches **ideas**, not copy-paste answers!\n\n14 chapters from your book. Each one has a story, two learning pages, a real-life example, a Quick Check, and a "make your own" page.\n\n**Different numbers every time** — so you truly understand.',
    '🐰 14 chapters — ప్రతి దానిలో story + 2 learn pages + example + quiz + make-your-own.',
  ),
  ...chapters.flatMap((ch) => buildAadyaChapterCards('aadya-maths', ch)),
];

export const aadyaMaths: Lesson = {
  id: 'aadya-maths',
  title: 'Maths Playground',
  subtitle: 'Grade 2 · 14 chapters · Chiku',
  kid: 'aadya',
  subject: 'maths',
  hasTelugu: true,
  icon: '🧮',
  cards: mathsCards,
};
