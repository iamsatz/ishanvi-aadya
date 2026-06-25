/* ============================================================
   FIXTURE LESSONS
   ------------------------------------------------------------
   3 LESSONS total — Ishanvi's summer holiday tasks:

   1. 📖 Stories — ALL 25 stories merged into one lesson
        (Acorns Power Book + Stories & My School + Character, Skills & Stories)
        Every card has an English passage, a Telugu accordion, parent tip,
        and a Reflect prompt ("write what you understand").

   2. ☀️ Summer Vacation Project (Grade 4) — task checklists.

   3. 🌍 Earth Day 2026 — interactive activities from the workbook.

   English-only lessons (2 + 3) still get word-tooltips with Telugu
   meanings so the kid can learn vocabulary in both languages.
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';
import { numberFamilies } from './numberFamilies';

/* ============================================================
   1) STORIES — 25 cards
   ============================================================ */

const storyCards: LearningCard[] = [
  /* ---------- Book 1: The Acorns Power Book (5 cards) ---------- */
  {
    id: 's-1',
    lessonId: 'stories',
    title: 'Decoding Power',
    subtitle: 'The Acorns Power Book',
    englishContent:
      'Power is using what you have, to make the world better.\nPower is helping when someone is sad.\nPower is sharing the little you had.\nPower is trying and not giving up.\nPower is lifting a fallen cup.\nPower is kindness, brave and true.\nPower is choosing the right thing to do.\n\nPower means believing in yourself.\nPower means being able to help others.\nPower means doing the right thing, even when it is hard.\nPower is using your strength, words, and actions kindly.\nPower is sharing, caring, and standing up for friends.\nPower grows when you learn, practice, and try again.\nPower is not hurting others — it is protecting them.',
    teluguContent:
      'శక్తి అంటే — నీ దగ్గర ఉన్నది ఉపయోగించి, ప్రపంచాన్ని మంచిగా మార్చడం.\nశక్తి అంటే — ఎవరైనా విచారంగా ఉన్నప్పుడు సహాయం చేయడం.\nశక్తి అంటే — నీ దగ్గర ఉన్న కొద్దిది కూడా పంచుకోవడం.\nశక్తి అంటే — ప్రయత్నిస్తూ ఉండడం, ఎప్పుడూ వదలకుండా ఉండడం.\nశక్తి అంటే — క్రింద పడిన కప్పును పైకి ఎత్తడం.\nశక్తి అంటే — దయ, ధైర్యం, నిజాయితీ.\nశక్తి అంటే — సరైన పనిని ఎంచుకోవడం.\n\nశక్తి అంటే — నీపై నీకు నమ్మకం ఉండడం.\nశక్తి అంటే — ఇతరులకు సహాయం చేయగలగడం.\nశక్తి అంటే — కష్టమైనా సరైన పని చేయడం.\nశక్తి అంటే — నీ బలం, మాటలు, చర్యలను దయతో ఉపయోగించడం.\nశక్తి అంటే — పంచుకోవడం, ప్రేమించడం, మిత్రుల పక్షాన నిలబడడం.\nనువ్వు నేర్చుకుంటూ, ప్రయత్నిస్తూ ఉంటే — శక్తి పెరుగుతుంది.\nశక్తి అంటే ఇతరులను బాధపెట్టడం కాదు — వారిని కాపాడడం.',
    glossary: [
      { word: 'Power',     en: 'Strength to do good things', te: 'శక్తి' },
      { word: 'kindness',  en: 'Being nice and gentle',      te: 'దయ' },
      { word: 'brave',     en: 'Not scared to do the right thing', te: 'ధైర్యం' },
      { word: 'protecting',en: 'Keeping someone safe',       te: 'కాపాడడం' },
    ],
    parentSuggestion: {
      tip: 'This poem says "Power" is NOT muscles — it is kindness, courage, and choosing right. Help her connect each line to a small daily action she already does.',
      questions: [
        'Which line do you like the most? Why?',
        'When did you use your "power" to help someone this week?',
        'Is shouting loud the same as being powerful? Why not?',
      ],
    },
    quiz: [
      {
        id: 's-1-q1',
        question: 'In this poem, "Power" means…',
        choices: [
          { id: 'a', label: 'Big muscles and being the strongest', isCorrect: false },
          { id: 'b', label: 'Kindness, courage, and doing right',  isCorrect: true },
          { id: 'c', label: 'Being the boss of everyone',          isCorrect: false },
        ],
        hint: 'Look at the words: kindness, brave, helping, sharing.',
      },
      {
        id: 's-1-q2',
        question: 'Power grows when you…',
        choices: [
          { id: 'a', label: 'Give up when it is hard',        isCorrect: false },
          { id: 'b', label: 'Learn, practice, and try again', isCorrect: true },
          { id: 'c', label: 'Shout louder than everyone',      isCorrect: false },
        ],
      },
      {
        id: 's-1-q3',
        question: 'According to the poem, power is NOT…',
        choices: [
          { id: 'a', label: 'Sharing what you have',   isCorrect: false },
          { id: 'b', label: 'Hurting others',            isCorrect: true },
          { id: 'c', label: 'Choosing the right thing', isCorrect: false },
        ],
        hint: 'Power protects — it does not ___.',
      },
      {
        id: 's-1-q4',
        question: 'Which line in the poem talks about helping a friend in need?',
        choices: [
          { id: 'a', label: 'Power is lifting a fallen cup',            isCorrect: false },
          { id: 'b', label: 'Power is helping when someone is sad',     isCorrect: true },
          { id: 'c', label: 'Power is trying and not giving up',        isCorrect: false },
        ],
      },
    ],
    promptText: 'Write in your own words: what does "Power" mean to YOU?',
    interactionType: 'reflect',
  },
  {
    id: 's-2',
    lessonId: 'stories',
    title: 'A Mythological Hero',
    subtitle: 'Hanuman and the Origin of his Powers',
    englishContent:
      'As a child, when Hanuman mistook the Sun for a fruit and flew to eat it, the gods intervened. After Indra struck Hanuman with his thunderbolt (Vajra), an enraged Vayu stopped the air across the universe, causing suffering to all beings. To appease Vayu and restore balance, the gods blessed Hanuman with numerous boons:\n\n• Brahma — immunity from all divine weapons and the power to change his form and size at will.\n• Indra — a body stronger than the Vajra weapon; the thunderbolt would never harm him again.\n• Surya (the Sun God) — also became his teacher, blessed him with enlightenment, wisdom, and mastery over scriptures.\n• Yama (the God of Death) — a healthy, long life and immunity from his weapon, the rod of death.\n• Agni (the Fire God) — immunity to fire.\n• Varuna (the Water God) — safety from water.\n• Vishwakarma (the divine architect) — safety from all the objects and weapons he created.',
    teluguContent:
      'చిన్నతనంలో, హనుమంతుడు సూర్యుడిని ఒక పండుగా భావించి దానిని తినడానికి ఎగిరినప్పుడు దేవతలు అడ్డుపడ్డారు. ఇంద్రుడు తన వజ్రాయుధంతో హనుమంతుడిని కొట్టిన తర్వాత, వాయుదేవుడు కోపంతో గాలిని ఆపేశాడు — అన్ని జీవులకు బాధ కలిగింది. వాయుదేవుడిని శాంతింపజేయడానికి దేవతలు హనుమంతుడికి అనేక వరాలు ఇచ్చారు:\n\n• బ్రహ్మ — అన్ని ఆయుధాల నుండి రక్షణ, రూపం & పరిమాణం మార్చుకునే శక్తి.\n• ఇంద్రుడు — వజ్రాయుధం కంటే గట్టి శరీరం.\n• సూర్యుడు — జ్ఞానం, వివేకం, శాస్త్రాల జ్ఞానం.\n• యముడు — దీర్ఘాయుష్షు, మృత్యు దండం నుండి రక్షణ.\n• అగ్ని — అగ్ని నుండి రక్షణ.\n• వరుణుడు — నీటి నుండి రక్షణ.\n• విశ్వకర్మ — ఆయుధాల నుండి రక్షణ.',
    glossary: [
      { word: 'Mythological', en: 'From old god/goddess stories', te: 'పురాణ సంబంధమైన' },
      { word: 'thunderbolt',  en: "Lightning weapon (Indra's Vajra)", te: 'వజ్రాయుధం' },
      { word: 'boons',        en: 'Blessings or gifts',          te: 'వరాలు' },
      { word: 'immunity',     en: "Safety — can't be hurt by it",te: 'రక్షణ' },
      { word: 'wisdom',       en: 'Deep, thoughtful knowledge',  te: 'వివేకం' },
    ],
    parentSuggestion: {
      tip: 'Use the gods she already knows. Each god gave Hanuman a different boon — connect each boon to a real "power" the child has (eg. wisdom = paying attention in class).',
      questions: [
        'Which boon would YOU want? Why?',
        'Which god gave Hanuman wisdom?',
        'Why did Vayu get angry?',
      ],
    },
    quiz: [
      {
        id: 's-2-q1',
        question: 'Which god gave Hanuman wisdom and learning?',
        choices: [
          { id: 'a', label: 'Brahma', isCorrect: false },
          { id: 'b', label: 'Surya',  isCorrect: true },
          { id: 'c', label: 'Yama',   isCorrect: false },
        ],
        hint: 'The Sun God also became his teacher.',
      },
      {
        id: 's-2-q2',
        question: 'Why did the gods bless Hanuman with boons?',
        choices: [
          { id: 'a', label: 'To make Vayu happy again', isCorrect: true },
          { id: 'b', label: 'Because he won a race',     isCorrect: false },
          { id: 'c', label: 'Because he asked nicely',   isCorrect: false },
        ],
      },
      {
        id: 's-2-q3',
        question: 'What did Brahma give Hanuman?',
        choices: [
          { id: 'a', label: 'Safety from fire',                isCorrect: false },
          { id: 'b', label: 'Power to change his form & size', isCorrect: true },
          { id: 'c', label: 'Long life',                        isCorrect: false },
        ],
      },
      {
        id: 's-2-q4',
        question: 'Which god protected Hanuman from water?',
        choices: [
          { id: 'a', label: 'Agni',   isCorrect: false },
          { id: 'b', label: 'Varuna', isCorrect: true },
          { id: 'c', label: 'Yama',   isCorrect: false },
        ],
        hint: 'Think of the god of rivers and oceans.',
      },
      {
        id: 's-2-q5',
        question: 'What happened when Indra struck Hanuman with the Vajra?',
        choices: [
          { id: 'a', label: 'Hanuman disappeared',                  isCorrect: false },
          { id: 'b', label: 'Vayu stopped all air across the universe', isCorrect: true },
          { id: 'c', label: 'Hanuman became stronger immediately',    isCorrect: false },
        ],
      },
      {
        id: 's-2-q6',
        question: 'Vishwakarma is known as…',
        choices: [
          { id: 'a', label: 'The God of fire',         isCorrect: false },
          { id: 'b', label: 'The God of death',         isCorrect: false },
          { id: 'c', label: 'The divine architect',     isCorrect: true },
        ],
      },
    ],
    promptText: 'Tell me the story of Hanuman in 3–4 sentences in your own words.',
    interactionType: 'reflect',
  },
  {
    id: 's-3',
    lessonId: 'stories',
    title: 'Super Powers of Your Favourite Characters — Part 1',
    subtitle: 'Paw Patrol · Pooh · Dora · Batman',
    englishContent:
      '• Paw Patrol pups — a team of rescue dogs led by a boy named Ryder. Together, they help people, solve problems, and keep their town safe.\n  "No job is too big, no pup is too small."\n\n• Winnie the Pooh — a friendly bear who loves honey. He values friendship, kindness, and enjoying little moments.\n  "You\'re braver than you believe, stronger than you seem, and smarter than you think."\n\n• Dora the Explorer — goes on adventures, asks questions, and invites children to help her along the way.\n  "Exploring, asking questions, and helping others make you powerful."\n\n• Batman — principled, caring, courageous and balanced.\n  "It\'s not who I am underneath, but what I do that defines me."',
    teluguContent:
      '• పా పెట్రోల్ కుక్కపిల్లలు — రైడర్ అనే అబ్బాయి నడిపే రెస్క్యూ టీం. వారు కలిసి సమస్యలు పరిష్కరిస్తారు, నగరాన్ని కాపాడతారు.\n  "ఏ పని పెద్దది కాదు, ఏ కుక్కపిల్ల చిన్నది కాదు."\n\n• విన్నీ ది పూ — తేనె ఇష్టపడే మంచి ఎలుగుబంటి. స్నేహం, దయ, చిన్న చిన్న ఆనందాలను ప్రేమిస్తుంది.\n  "నువ్వు అనుకుంటున్నదాని కంటే ధైర్యవంతుడివి, కనిపిస్తున్నదాని కంటే బలవంతుడివి."\n\n• డోరా — ప్రశ్నలు అడుగుతుంది, పిల్లలతో కలిసి అన్వేషిస్తుంది.\n  "అన్వేషించడం, ప్రశ్నలు అడగడం, ఇతరులకు సహాయం చేయడం నిన్ను శక్తివంతంగా చేస్తాయి."\n\n• బ్యాట్‌మ్యాన్ — నీతిమంతుడు, శ్రద్ధ చూపేవాడు, ధైర్యవంతుడు, సమతుల్యత ఉన్నవాడు.\n  "నేను లోపల ఎవరో కాదు — నేను ఏం చేస్తానో అదే నన్ను నిర్వచిస్తుంది."',
    glossary: [
      { word: 'rescue',     en: 'Save someone from danger',  te: 'రక్షణ / కాపాడడం' },
      { word: 'friendship', en: 'Being good friends',         te: 'స్నేహం' },
      { word: 'exploring',  en: 'Finding out new places/ideas', te: 'అన్వేషించడం' },
      { word: 'principled', en: 'Always doing what is right', te: 'నీతిమంతుడు' },
    ],
    parentSuggestion: {
      tip: 'Connect each character to ONE Learner Profile word: Pooh = caring, Dora = inquirer, Batman = principled. Make it concrete.',
      questions: [
        'Which character is most like YOU? Why?',
        'What does "you are braver than you believe" mean?',
        'Does Batman use his power for himself or others?',
      ],
    },
    quiz: [
      {
        id: 's-3-q1',
        question: 'Who says "No job is too big, no pup is too small"?',
        choices: [
          { id: 'a', label: 'Paw Patrol pups', isCorrect: true },
          { id: 'b', label: 'Dora',             isCorrect: false },
          { id: 'c', label: 'Winnie the Pooh',  isCorrect: false },
        ],
      },
      {
        id: 's-3-q2',
        question: 'Batman says it is not who he is underneath, but what he…',
        choices: [
          { id: 'a', label: 'Says',  isCorrect: false },
          { id: 'b', label: 'Does',  isCorrect: true },
          { id: 'c', label: 'Wears', isCorrect: false },
        ],
        hint: 'Actions define you, not just words.',
      },
      {
        id: 's-3-q3',
        question: 'What does Winnie the Pooh value most?',
        choices: [
          { id: 'a', label: 'Speed and strength',           isCorrect: false },
          { id: 'b', label: 'Friendship, kindness, little moments', isCorrect: true },
          { id: 'c', label: 'Winning competitions',          isCorrect: false },
        ],
      },
      {
        id: 's-3-q4',
        question: 'Who leads the Paw Patrol team?',
        choices: [
          { id: 'a', label: 'Chase',  isCorrect: false },
          { id: 'b', label: 'Ryder',  isCorrect: true },
          { id: 'c', label: 'Rubble', isCorrect: false },
        ],
      },
    ],
    promptText: 'Which of these 4 characters is most like you? Write WHY.',
    interactionType: 'reflect',
  },
  {
    id: 's-4',
    lessonId: 'stories',
    title: 'Super Powers of Your Favourite Characters — Part 2',
    subtitle: 'Chhota Bheem · Little Singham · Sid · Doc McStuffins · WordGirl · The Incredibles',
    englishContent:
      '• Chhota Bheem — true power comes from strength, kindness, and helping others.\n\n• Little Singham — be brave, honest, and helpful, even when things are difficult.\n\n• Sid the Science Kid — thinking, asking, and trying are real superpowers. "Let\'s find out!"\n\n• Doc McStuffins — kindness and care are powerful. "Time for your check-up!"\n\n• WordGirl — vocabulary and confidence are her powers. "Let\'s save the day!"\n\n• The Incredibles — a family of superheroes who each have different powers. When they work together, they become stronger. "Everyone is special in their own way. Together, we are incredible."',
    teluguContent:
      '• ఛోటా భీం — నిజమైన శక్తి బలం, దయ, ఇతరులకు సహాయం చేయడం నుండి వస్తుంది.\n\n• లిటిల్ సింగం — కష్టమైనా ధైర్యంగా, నిజాయితీగా, సహాయంగా ఉండడం.\n\n• సిడ్ ది సైన్స్ కిడ్ — ఆలోచించడం, ప్రశ్నించడం, ప్రయత్నించడం — ఇవే నిజమైన శక్తులు. "మనం కనుక్కుందాం!"\n\n• డాక్ మెక్‌స్టఫిన్స్ — దయ, శ్రద్ధ శక్తివంతం. "చెక్-అప్ సమయం!"\n\n• వర్డ్‌గర్ల్ — పదజ్ఞానం, ఆత్మవిశ్వాసం ఆమె శక్తులు.\n\n• ది ఇన్‌క్రెడిబుల్స్ — వేర్వేరు శక్తులున్న కుటుంబం. కలిసి పని చేస్తేనే బలవంతులు. "అందరూ ప్రత్యేకమే. కలిసుంటే — మనం అద్భుతం."',
    glossary: [
      { word: 'honest',     en: 'Telling the truth',              te: 'నిజాయితీ' },
      { word: 'vocabulary', en: 'All the words you know',         te: 'పదజ్ఞానం' },
      { word: 'confidence', en: 'Believing in yourself',          te: 'ఆత్మవిశ్వాసం' },
      { word: 'incredible', en: 'Amazing, very special',           te: 'అద్భుతం' },
    ],
    parentSuggestion: {
      tip: 'These characters teach: brain + heart > muscles. Encourage her to name one quality she wants to grow.',
      questions: [
        "Sid says 'Let's find out!' — when did you say that this week?",
        'The Incredibles work as a team. Who is YOUR team?',
        'What does "everyone is special in their own way" mean?',
      ],
    },
    quiz: [
      {
        id: 's-4-q1',
        question: 'Which character says "Let\'s find out!"?',
        choices: [
          { id: 'a', label: 'Doc McStuffins',      isCorrect: false },
          { id: 'b', label: 'Sid the Science Kid',  isCorrect: true },
          { id: 'c', label: 'WordGirl',             isCorrect: false },
        ],
      },
      {
        id: 's-4-q2',
        question: 'The Incredibles teach us that together we are…',
        choices: [
          { id: 'a', label: 'Incredible', isCorrect: true },
          { id: 'b', label: 'Confused',   isCorrect: false },
          { id: 'c', label: 'Tired',      isCorrect: false },
        ],
      },
      {
        id: 's-4-q3',
        question: 'What are WordGirl\'s powers?',
        choices: [
          { id: 'a', label: 'Super speed and flight',      isCorrect: false },
          { id: 'b', label: 'Vocabulary and confidence',   isCorrect: true },
          { id: 'c', label: 'Invisible shield',             isCorrect: false },
        ],
      },
      {
        id: 's-4-q4',
        question: 'What does Chhota Bheem say is the source of TRUE power?',
        choices: [
          { id: 'a', label: 'Laddus only',                       isCorrect: false },
          { id: 'b', label: 'Strength, kindness, helping others', isCorrect: true },
          { id: 'c', label: 'Being the tallest',                  isCorrect: false },
        ],
      },
    ],
    promptText: "Pick one character. What ONE thing did they teach you?",
    interactionType: 'reflect',
  },
  {
    id: 's-5',
    lessonId: 'stories',
    title: 'Super Powers of Your Favourite Characters — Part 3',
    subtitle: 'Powerpuff Girls · Wonder Woman · Ben 10 · Spider-Man · PJ Masks',
    englishContent:
      '• The Powerpuff Girls — Blossom, Bubbles, and Buttercup were created to protect their city. Each has a unique power.\n  "You don\'t have to be big to be powerful."\n\n• Wonder Woman — a warrior princess who protects people and always stands up for what is right.\n  "True strength means being brave, honest, and kind."\n\n• Ben 10 — power is useful only when used to help others. Highly principled and balanced.\n  "It\'s hero time!"\n\n• Spider-Man — caring, strong, helpful.\n  "With great power comes great responsibility."\n\n• PJ Masks — open minded and courageous.\n  "Even little heroes can make a big difference when they work together."',
    teluguContent:
      '• పవర్‌పఫ్ గర్ల్స్ — బ్లాసమ్, బబుల్స్, బటర్‌కప్. ముగ్గురికి వేర్వేరు శక్తులు.\n  "శక్తివంతంగా ఉండడానికి పెద్దగా ఉండనవసరం లేదు."\n\n• వండర్ ఉమన్ — ప్రజలను కాపాడుతుంది, ఎప్పుడూ సరైనదాని పక్షాన నిలుస్తుంది.\n  "నిజమైన బలం అంటే ధైర్యం, నిజాయితీ, దయ."\n\n• బెన్ 10 — శక్తి ఇతరులకు సహాయపడినప్పుడే ఉపయోగం. "ఇది హీరో సమయం!"\n\n• స్పైడర్-మ్యాన్ — శ్రద్ధ చూపేవాడు, బలవంతుడు, సహాయం చేసేవాడు.\n  "గొప్ప శక్తితో గొప్ప బాధ్యత వస్తుంది."\n\n• పీజే మాస్క్స్ — తెరిచిన మనస్సు, ధైర్యవంతులు. "కలిసి పనిచేస్తే చిన్న హీరోలు కూడా పెద్ద మార్పు తేగలరు."',
    glossary: [
      { word: 'protect',        en: 'Keep safe from harm',        te: 'కాపాడడం' },
      { word: 'responsibility', en: 'Something you should do',     te: 'బాధ్యత' },
      { word: 'courageous',     en: 'Brave',                       te: 'ధైర్యవంతుడు' },
      { word: 'difference',     en: 'A change you make',           te: 'మార్పు' },
    ],
    parentSuggestion: {
      tip: '"With great power comes great responsibility" is the big idea. Tie it to small home responsibilities — making her bed, sharing toys.',
      questions: [
        'What is YOUR responsibility at home?',
        'When do you feel "small but powerful"?',
        'Who do you protect — at home or at school?',
      ],
    },
    quiz: [
      {
        id: 's-5-q1',
        question: 'Who says "With great power comes great responsibility"?',
        choices: [
          { id: 'a', label: 'Batman',     isCorrect: false },
          { id: 'b', label: 'Spider-Man', isCorrect: true },
          { id: 'c', label: 'Ben 10',     isCorrect: false },
        ],
        hint: 'Friendly neighbourhood superhero!',
      },
      {
        id: 's-5-q2',
        question: 'The Powerpuff Girls teach us…',
        choices: [
          { id: 'a', label: "You don't have to be big to be powerful", isCorrect: true },
          { id: 'b', label: 'Always work alone',                       isCorrect: false },
          { id: 'c', label: 'Power means winning fights',              isCorrect: false },
        ],
      },
      {
        id: 's-5-q3',
        question: 'What are the names of the three Powerpuff Girls?',
        choices: [
          { id: 'a', label: 'Blossom, Bubbles, Buttercup', isCorrect: true },
          { id: 'b', label: 'Bloom, Belle, Bunny',          isCorrect: false },
          { id: 'c', label: 'Bella, Bonnie, Beth',           isCorrect: false },
        ],
      },
      {
        id: 's-5-q4',
        question: 'Ben 10 teaches us that power is useful only when…',
        choices: [
          { id: 'a', label: 'You are the biggest',          isCorrect: false },
          { id: 'b', label: 'Used to help others',           isCorrect: true },
          { id: 'c', label: 'You never make mistakes',       isCorrect: false },
        ],
      },
      {
        id: 's-5-q5',
        question: 'PJ Masks says "even little heroes can make a big difference when…"',
        choices: [
          { id: 'a', label: 'They have the best gadgets', isCorrect: false },
          { id: 'b', label: 'They work together',          isCorrect: true },
          { id: 'c', label: 'They never sleep',             isCorrect: false },
        ],
      },
    ],
    promptText: 'Write about one moment you were a hero this week — big or small.',
    interactionType: 'reflect',
  },

  /* ---------- Book 2: Stories & My School (9 cards) ---------- */
  {
    id: 's-6',
    lessonId: 'stories',
    title: 'Magic Tree House: Dinosaurs Before Dark',
    subtitle: 'Book 1 by Mary Pope Osborne',
    englishContent:
      "Jack and his younger sister Annie discover a mysterious tree house filled with books. When they open a book about dinosaurs, the tree house magically takes them back in time to the age of dinosaurs. They see real dinosaurs, including a gentle Triceratops and a frightening Tyrannosaurus rex. Jack carefully takes notes, while Annie bravely explores. They help a baby dinosaur find its family and learn how dangerous the prehistoric world can be. Using the book again, they return safely home, excited for their next adventure.\n\n\"Books can take us anywhere if we are curious and brave.\"",
    teluguContent:
      'జాక్, అతని చెల్లి యానీ — పుస్తకాలతో నిండిన మ్యాజిక్ చెట్టు ఇంటిని కనుగొంటారు. డైనోసార్‌ల పుస్తకాన్ని తెరిచినప్పుడు, చెట్టు ఇల్లు వారిని డైనోసార్ల కాలానికి తీసుకువెళ్తుంది. మృదువైన ట్రైసెరాటాప్స్‌ను, భయపెట్టే టి-రెక్స్‌ను చూస్తారు. జాక్ నోట్స్ రాస్తాడు; యానీ ధైర్యంగా అన్వేషిస్తుంది. ఒక చిన్న డైనోసార్‌కి కుటుంబాన్ని కనుగొనడంలో సహాయం చేస్తారు. చివరికి సురక్షితంగా ఇంటికి తిరిగి వస్తారు.\n\n"ఆసక్తి, ధైర్యం ఉంటే — పుస్తకాలు మనల్ని ఎక్కడికైనా తీసుకువెళతాయి."',
    glossary: [
      { word: 'mysterious', en: 'Strange and full of secrets',   te: 'రహస్యమైన' },
      { word: 'prehistoric',en: 'A very, very long time ago',    te: 'చారిత్రకానికి ముందు' },
      { word: 'curious',    en: 'Wanting to find out',           te: 'ఆసక్తి కలిగిన' },
      { word: 'adventure',  en: 'An exciting journey',           te: 'సాహసం' },
    ],
    parentSuggestion: {
      tip: 'Two key qualities: Curiosity (Jack takes notes) and Bravery (Annie explores). Both are needed.',
      questions: [
        'What did Jack do? What did Annie do?',
        'If you had a magic book, where would YOU go?',
        'Why is it good to take notes like Jack?',
      ],
    },
    quiz: [
      {
        id: 's-6-q1',
        question: 'Where does the tree house take Jack and Annie?',
        choices: [
          { id: 'a', label: 'To the future',     isCorrect: false },
          { id: 'b', label: 'To dinosaur times', isCorrect: true },
          { id: 'c', label: 'To the moon',       isCorrect: false },
        ],
        hint: 'They opened a book about dinosaurs!',
      },
      {
        id: 's-6-q2',
        question: 'What two qualities help Jack and Annie succeed?',
        choices: [
          { id: 'a', label: 'Speed and shouting',    isCorrect: false },
          { id: 'b', label: 'Curiosity and bravery', isCorrect: true },
          { id: 'c', label: 'Money and gadgets',     isCorrect: false },
        ],
      },
      {
        id: 's-6-q3',
        question: 'What does Jack do while Annie bravely explores?',
        choices: [
          { id: 'a', label: 'Hides in the tree house',  isCorrect: false },
          { id: 'b', label: 'Carefully takes notes',    isCorrect: true },
          { id: 'c', label: 'Draws pictures of plants', isCorrect: false },
        ],
      },
      {
        id: 's-6-q4',
        question: 'What do Jack and Annie help the baby dinosaur do?',
        choices: [
          { id: 'a', label: 'Learn to fly',          isCorrect: false },
          { id: 'b', label: 'Find its family',       isCorrect: true },
          { id: 'c', label: 'Escape from the T-rex', isCorrect: false },
        ],
      },
    ],
    promptText: 'If a magic book could take you anywhere, where would YOU go? Why?',
    interactionType: 'reflect',
  },
  {
    id: 's-7',
    lessonId: 'stories',
    title: 'Nate the Great',
    subtitle: 'by Marjorie Weinman Sharmat',
    englishContent:
      "Nate is a young boy who loves being a detective. With his sharp thinking and love for solving mysteries, he takes cases from people in his neighborhood. He always wears his detective hat and enjoys pancakes made by his mother. In one famous case — Annie's lost painting — Nate listens carefully to clues, asks smart questions, and observes small details others miss. By thinking logically, he discovers where the missing painting is and returns it to Annie.\n\nNate shows that you don't need to be big to solve big problems — just smart and observant.\n\n\"A good detective thinks carefully and never ignores small clues.\"",
    teluguContent:
      'నేట్ — డిటెక్టివ్‌గా ఉండడం ఇష్టపడే చిన్న అబ్బాయి. తీక్ష్ణమైన ఆలోచనతో, తన పరిసరాల్లోని రహస్యాలను పరిష్కరిస్తాడు. డిటెక్టివ్ హ్యాట్ ధరిస్తాడు, అమ్మ చేసిన పాన్‌కేక్స్ ఇష్టపడతాడు. యానీ యొక్క కనిపించని పెయింటింగ్ కేసులో — సూచనలను జాగ్రత్తగా వింటాడు, తెలివైన ప్రశ్నలు అడుగుతాడు, చిన్న వివరాలను గమనిస్తాడు. తార్కికంగా ఆలోచించి, పెయింటింగ్‌ను కనుగొంటాడు.\n\n"మంచి డిటెక్టివ్ జాగ్రత్తగా ఆలోచిస్తాడు, చిన్న సూచనలను ఎప్పుడూ నిర్లక్ష్యం చేయడు."',
    glossary: [
      { word: 'detective', en: 'A person who solves mysteries', te: 'రహస్యాలను పరిష్కరించేవాడు' },
      { word: 'mysteries', en: 'Things we have to figure out',  te: 'రహస్యాలు' },
      { word: 'clues',     en: 'Small hints that help us solve', te: 'సూచనలు' },
      { word: 'observes',  en: 'Looks carefully and notices',    te: 'గమనించడం' },
      { word: 'logically', en: 'Thinking step by step',          te: 'తార్కికంగా' },
    ],
    parentSuggestion: {
      tip: 'Detective work = observe + ask + think. Play a "spot the difference" game at home using this story as inspo.',
      questions: [
        'What 3 things does a good detective do?',
        'Where did you have to "solve a mystery" this week?',
        'What does "observe" mean?',
      ],
    },
    quiz: [
      {
        id: 's-7-q1',
        question: 'What does Nate do best?',
        choices: [
          { id: 'a', label: 'Cooks pancakes',                              isCorrect: false },
          { id: 'b', label: 'Solves mysteries by listening and observing', isCorrect: true },
          { id: 'c', label: 'Sings songs',                                  isCorrect: false },
        ],
      },
      {
        id: 's-7-q2',
        question: 'A good detective never ignores…',
        choices: [
          { id: 'a', label: 'Small clues', isCorrect: true },
          { id: 'b', label: 'His hat',      isCorrect: false },
          { id: 'c', label: 'Loud noises',  isCorrect: false },
        ],
      },
      {
        id: 's-7-q3',
        question: 'What are the THREE things Nate does to solve a case?',
        choices: [
          { id: 'a', label: 'Run, hide, wait',                       isCorrect: false },
          { id: 'b', label: 'Listen, ask smart questions, observe',   isCorrect: true },
          { id: 'c', label: 'Shout, search, guess',                   isCorrect: false },
        ],
      },
      {
        id: 's-7-q4',
        question: 'Nate shows that to solve big problems you need to be…',
        choices: [
          { id: 'a', label: 'Tall and strong',    isCorrect: false },
          { id: 'b', label: 'Smart and observant', isCorrect: true },
          { id: 'c', label: 'Loud and fast',       isCorrect: false },
        ],
      },
    ],
    promptText: 'What does it mean to be a good detective? Tell me in your own words.',
    interactionType: 'reflect',
  },
  {
    id: 's-8',
    lessonId: 'stories',
    title: 'The Lion and the Clever Rabbit',
    subtitle: 'A Story from Panchatantra',
    englishContent:
      'Once upon a time, there was a fierce lion who ruled the forest. He would eat the other animals whenever he felt hungry. The animals were scared and didn\'t know what to do. One day, a small, clever rabbit decided to trick the lion. The rabbit walked into the lion\'s den and told him there was ANOTHER lion in the forest claiming to be the king. Furious, the lion demanded to see this "other lion." The rabbit led the lion to a deep well and said, "Look in there — he\'s inside!" The lion looked into the water, saw his own reflection, thought it was another lion, and jumped in to attack. The lion drowned, and the animals were safe.\n\n"Brains are stronger than brawn."',
    teluguContent:
      'పూర్వకాలంలో, ఒక భయంకరమైన సింహం అడవిని పరిపాలించేది. ఆకలి అనిపించినప్పుడల్లా ఇతర జంతువులను తినేది. ఒక రోజు, ఒక తెలివైన కుందేలు సింహాన్ని మోసం చేయాలని నిర్ణయించుకుంది. గుహలోకి వెళ్లి, మరో సింహం రాజు అని చెప్పుకుంటోందని చెప్పింది. కోపోద్రిక్తుడై, సింహం ఆ "మరో సింహాన్ని" చూడాలని డిమాండ్ చేసింది. కుందేలు సింహాన్ని లోతైన బావి దగ్గరకు తీసుకువెళ్లి — "లోపల చూడు!" అంది. సింహం నీటిలో తన ప్రతిబింబాన్ని చూసి, మరో సింహంగా భావించి, దాడికి దూకింది — మునిగిపోయింది.\n\n"మెదడు — కండరాల బలం కంటే గట్టిది."',
    glossary: [
      { word: 'fierce',     en: 'Very strong and scary',         te: 'భయంకరమైన' },
      { word: 'clever',     en: 'Smart, quick thinking',         te: 'తెలివైన' },
      { word: 'reflection', en: 'Your image in water or mirror', te: 'ప్రతిబింబం' },
      { word: 'brains',     en: 'Your thinking power',           te: 'మెదడు / బుద్ధి' },
      { word: 'brawn',      en: 'Body muscles',                  te: 'కండరాల బలం' },
    ],
    parentSuggestion: {
      tip: 'A classic Panchatantra story. The lesson: smartness > size. Ask her about a time her brain helped more than her body.',
      questions: [
        'How did the small rabbit beat the big lion?',
        'What does "Brains are stronger than brawn" mean?',
        'Have you ever solved a problem by thinking instead of fighting?',
      ],
    },
    quiz: [
      {
        id: 's-8-q1',
        question: 'How did the rabbit defeat the lion?',
        choices: [
          { id: 'a', label: 'Fought with him',                        isCorrect: false },
          { id: 'b', label: 'Used cleverness — lion saw his reflection', isCorrect: true },
          { id: 'c', label: 'Ran away and hid',                        isCorrect: false },
        ],
        hint: 'The lion looked into a well…',
      },
      {
        id: 's-8-q2',
        question: 'The moral of this story is…',
        choices: [
          { id: 'a', label: 'Brains are stronger than brawn', isCorrect: true },
          { id: 'b', label: 'Always run from danger',          isCorrect: false },
          { id: 'c', label: 'Be the biggest in the forest',    isCorrect: false },
        ],
      },
      {
        id: 's-8-q3',
        question: 'What did the rabbit tell the lion about the well?',
        choices: [
          { id: 'a', label: '"There is water to drink"',          isCorrect: false },
          { id: 'b', label: '"Another lion is hiding inside it"', isCorrect: true },
          { id: 'c', label: '"It is a magic well"',               isCorrect: false },
        ],
      },
      {
        id: 's-8-q4',
        question: 'Where does this story come from?',
        choices: [
          { id: 'a', label: 'Jataka Tales',  isCorrect: false },
          { id: 'b', label: 'Panchatantra',  isCorrect: true },
          { id: 'c', label: 'Jungle Book',   isCorrect: false },
        ],
      },
    ],
    promptText: 'Tell me how the clever rabbit tricked the lion.',
    interactionType: 'reflect',
  },
  {
    id: 's-9',
    lessonId: 'stories',
    title: 'The Monkey and the Crocodile',
    subtitle: 'A Story from Jataka Tales',
    englishContent:
      'Once, there was a clever monkey who lived on a tree by the river. He loved eating sweet fruits and shared them with his friends. One day, a crocodile saw the monkey eating fruits and wanted to be friends. The crocodile invited the monkey to his home across the river. The monkey agreed, but halfway across, the crocodile revealed that he planned to eat the monkey — his wife wanted monkey\'s heart! The clever monkey stayed calm. He said, "Oh, I left my heart on the tree! Let\'s go back and get it." The crocodile took him back, and the monkey quickly jumped to safety.\n\n"Be clever and stay calm in tricky situations."',
    teluguContent:
      'ఒక తెలివైన కోతి నది ఒడ్డున చెట్టు మీద నివసించేది. ఒక మొసలి కోతితో స్నేహం కావాలని వచ్చింది. మొసలి కోతిని తన ఇంటికి ఆహ్వానించింది. నది మధ్యలో — తన భార్యకు కోతి గుండె కావాలని, అందుకే తినాలనుకుంది అని చెప్పింది. తెలివైన కోతి ప్రశాంతంగా — "అయ్యో, నేను నా గుండెను చెట్టు మీద వదిలి వచ్చాను! వెనక్కి వెళ్లి తెచ్చుకుందాం" అంది. మొసలి తిరిగి తీసుకువచ్చింది; కోతి సురక్షితంగా చెట్టు మీదకి ఎగిరి దూకింది.\n\n"కష్ట సమయంలో — తెలివిగా, ప్రశాంతంగా ఉండు."',
    glossary: [
      { word: 'crocodile', en: 'Big water reptile with sharp teeth', te: 'మొసలి' },
      { word: 'revealed',  en: 'Told a secret out loud',              te: 'బయటపెట్టింది' },
      { word: 'calm',      en: 'Not panicked, peaceful inside',       te: 'ప్రశాంతం' },
      { word: 'tricky',    en: 'Difficult and confusing',              te: 'కష్టమైన' },
    ],
    parentSuggestion: {
      tip: 'Key lesson: panic = bad choices, calm = good choices. Practice the "stop, breathe, think" trick with her.',
      questions: [
        'What clever lie did the monkey tell?',
        'Why is staying calm important?',
        'When did you stay calm in a tricky moment?',
      ],
    },
    quiz: [
      {
        id: 's-9-q1',
        question: 'What clever thing did the monkey tell the crocodile?',
        choices: [
          { id: 'a', label: '"I left my heart on the tree!"', isCorrect: true },
          { id: 'b', label: '"I am not tasty!"',               isCorrect: false },
          { id: 'c', label: '"Look, an elephant!"',            isCorrect: false },
        ],
      },
      {
        id: 's-9-q2',
        question: 'What helped the monkey escape?',
        choices: [
          { id: 'a', label: 'His speed',                     isCorrect: false },
          { id: 'b', label: 'Staying calm and being clever', isCorrect: true },
          { id: 'c', label: 'A magic stick',                  isCorrect: false },
        ],
      },
      {
        id: 's-9-q3',
        question: 'Why did the crocodile invite the monkey across the river?',
        choices: [
          { id: 'a', label: 'To share fruits',                  isCorrect: false },
          { id: 'b', label: 'His wife wanted to eat the monkey\'s heart', isCorrect: true },
          { id: 'c', label: 'To show him his home',              isCorrect: false },
        ],
      },
      {
        id: 's-9-q4',
        question: 'Where does this story come from?',
        choices: [
          { id: 'a', label: 'Panchatantra', isCorrect: false },
          { id: 'b', label: 'Jataka Tales', isCorrect: true },
          { id: 'c', label: 'Ramayana',     isCorrect: false },
        ],
      },
    ],
    promptText: 'When was a time YOU stayed calm to solve a problem? Tell me.',
    interactionType: 'reflect',
  },
  {
    id: 's-10',
    lessonId: 'stories',
    title: 'Silver Jubilee Year of Silver Oaks',
    subtitle: 'March 2026 to February 2027',
    englishContent:
      'In the life of a school, Silver Jubilee year is a milestone to be celebrated with joy and honoured with pride. Silver Oaks stands for Character first and Competence next. This inside-out approach is focused in all the special events of Silver Jubilee. Parents, teachers, acorns, alumni and well-wishers of Silver Oaks will participate in different events.\n\n• Character Gallery (Installation) — visual installations across campuses capturing quotes, moments, and lived examples through physical and digital displays.\n• Character in Action (Annual Conclave) — a national forum convening school leaders to share, reflect on, and advance character-building practices.\n• The Character Collective (Conference) — an exclusive conference for Silver Oaks educators across campuses.',
    teluguContent:
      'సిల్వర్ ఓక్స్ తన 25 సంవత్సరాల వేడుకలను (Silver Jubilee) జరుపుకుంటోంది. స్కూల్ నినాదం — "క్యారెక్టర్ ఫస్ట్, కాంపిటెన్స్ నెక్స్ట్" (నైతిక గుణం ముందు, సామర్థ్యం తర్వాత). తల్లిదండ్రులు, ఉపాధ్యాయులు, విద్యార్థులు (acorns), పూర్వ విద్యార్థులు — అందరూ ఈ ప్రత్యేక కార్యక్రమాల్లో పాల్గొంటారు.\n\n• క్యారెక్టర్ గ్యాలరీ — క్యాంపస్‌ల అంతటా దృశ్య ప్రదర్శనలు.\n• క్యారెక్టర్ ఇన్ యాక్షన్ — స్కూల్ నాయకుల జాతీయ సదస్సు.\n• ది క్యారెక్టర్ కలెక్టివ్ — సిల్వర్ ఓక్స్ ఉపాధ్యాయుల సదస్సు.',
    glossary: [
      { word: 'Jubilee',    en: 'A big celebration of an anniversary', te: 'వేడుక' },
      { word: 'milestone',  en: 'A big important moment',              te: 'మైలురాయి' },
      { word: 'character',  en: 'The kind of person you are inside',   te: 'వ్యక్తిత్వం' },
      { word: 'competence', en: 'Being good at doing things',          te: 'సామర్థ్యం' },
      { word: 'acorns',     en: 'What Silver Oaks calls its students', te: 'అకార్న్స్ (విద్యార్థులు)' },
    ],
    parentSuggestion: {
      tip: 'Silver Jubilee = 25 years. Ishanvi will hear about these events at school all year — being able to explain them is empowering.',
      questions: [
        'Why is 25 years called Silver Jubilee?',
        'What does "Character first, Competence next" mean?',
        'Who will participate in the events?',
      ],
    },
    quiz: [
      {
        id: 's-10-q1',
        question: '"Silver Jubilee" means a celebration of how many years?',
        choices: [
          { id: 'a', label: '10 years', isCorrect: false },
          { id: 'b', label: '25 years', isCorrect: true },
          { id: 'c', label: '50 years', isCorrect: false },
        ],
      },
      {
        id: 's-10-q2',
        question: 'Silver Oaks stands for…',
        choices: [
          { id: 'a', label: 'Character first, Competence next', isCorrect: true },
          { id: 'b', label: 'Marks first, Fun next',             isCorrect: false },
          { id: 'c', label: 'Fame first, Friends next',          isCorrect: false },
        ],
      },
      {
        id: 's-10-q3',
        question: 'Who will participate in the Silver Jubilee events?',
        choices: [
          { id: 'a', label: 'Only teachers',                              isCorrect: false },
          { id: 'b', label: 'Parents, teachers, acorns, alumni, well-wishers', isCorrect: true },
          { id: 'c', label: 'Only current students',                      isCorrect: false },
        ],
      },
      {
        id: 's-10-q4',
        question: 'What is the Character Gallery?',
        choices: [
          { id: 'a', label: 'A painting class',                       isCorrect: false },
          { id: 'b', label: 'Visual installations capturing quotes and lived examples', isCorrect: true },
          { id: 'c', label: 'A photo album of students',               isCorrect: false },
        ],
      },
    ],
    promptText: 'What is your school celebrating this year, and why?',
    interactionType: 'reflect',
  },
  {
    id: 's-11',
    lessonId: 'stories',
    title: 'Silver Jubilee Events',
    subtitle: 'Silver Circles · Acorn Ethics Bowl',
    englishContent:
      "As part of Silver Oaks' 25-year milestone, these curated initiatives reflect the school's enduring philosophy of Character Before Competence. Each event is designed to honour the past, engage the present, and inspire the future.\n\n• Silver Circles (podcast) — intergenerational conversations between community members, capturing how Character-led education translates into real-life decisions.\n\n• Acorn Ethics Bowl (debate) — a structured ethics forum where students examine real-world dilemmas and learn to place character before competence through reasoned dialogue.",
    teluguContent:
      'సిల్వర్ ఓక్స్ 25-సంవత్సరాల వేడుకలో — ఈ కార్యక్రమాలు "క్యారెక్టర్ ముందు, కాంపిటెన్స్ తర్వాత" అనే తత్వాన్ని ప్రతిబింబిస్తాయి. గతాన్ని గౌరవించడం, వర్తమానంలో పాల్గొనడం, భవిష్యత్తును ప్రేరేపించడం — ప్రతి కార్యక్రమం ఈ లక్ష్యంతో.\n\n• సిల్వర్ సర్కిల్స్ (పాడ్‌కాస్ట్) — తరాల మధ్య సంభాషణలు. క్యారెక్టర్-ఆధారిత విద్య నిజ జీవితంలో ఎలా ఉపయోగపడుతుందో చూపిస్తాయి.\n\n• ఏకార్న్ ఎథిక్స్ బౌల్ (చర్చ) — విద్యార్థులు నైతిక సమస్యలను చర్చించి, తార్కికంగా ఆలోచించే వేదిక.',
    glossary: [
      { word: 'intergenerational', en: 'Between people of different ages', te: 'తరాల మధ్య' },
      { word: 'ethics',            en: 'What is right and wrong',           te: 'నీతి శాస్త్రం' },
      { word: 'dilemmas',          en: 'Hard choices between two things',   te: 'సందిగ్ధతలు' },
      { word: 'enduring',          en: 'Lasting for a long time',            te: 'శాశ్వత' },
    ],
    parentSuggestion: {
      tip: 'These are grown-up words. Use the simpler glossary meanings to explain. Tie ethics to her own real choices (sharing, telling the truth).',
      questions: [
        'What is the difference between a "podcast" and a "debate"?',
        'Have you ever had to make a hard choice?',
        'What does "ethics" mean in your own words?',
      ],
    },
    quiz: [
      {
        id: 's-11-q1',
        question: 'Silver Circles is a…',
        choices: [
          { id: 'a', label: 'Type of cookie', isCorrect: false },
          { id: 'b', label: 'Podcast',         isCorrect: true },
          { id: 'c', label: 'Sports event',    isCorrect: false },
        ],
      },
      {
        id: 's-11-q2',
        question: 'The Acorn Ethics Bowl is a…',
        choices: [
          { id: 'a', label: 'Quiet snack time',                             isCorrect: false },
          { id: 'b', label: 'Debate where students discuss right and wrong', isCorrect: true },
          { id: 'c', label: 'New library',                                   isCorrect: false },
        ],
      },
      {
        id: 's-11-q3',
        question: 'Silver Circles captures conversations between people of different…',
        choices: [
          { id: 'a', label: 'Countries',  isCorrect: false },
          { id: 'b', label: 'Ages',       isCorrect: true },
          { id: 'c', label: 'Subjects',   isCorrect: false },
        ],
        hint: 'It is called intergenerational.',
      },
    ],
    promptText: 'Describe one Silver Jubilee event in your own words.',
    interactionType: 'reflect',
  },
  {
    id: 's-12',
    lessonId: 'stories',
    title: 'More Silver Jubilee Initiatives',
    subtitle: 'Documentary · 25 Alumni · Guardians of Character',
    englishContent:
      "• Character Through Their Eyes (Documentary) — a student-led documentary capturing authentic expressions of character in everyday school life — through small moments, shared experiences, and quiet acts of integrity.\n\n• 25 Alumni, 25 Values (recognition series) — a flagship initiative showcasing 25 alumni whose life journeys embody Silver Oaks' philosophy of Character Before Competence.\n\n• Guardians of Character (recognition series) — a recognition platform honouring individuals who consistently uphold and protect Silver Oaks' core values in everyday action.",
    teluguContent:
      '• క్యారెక్టర్ త్రూ దైర్ ఐస్ (డాక్యుమెంటరీ) — విద్యార్థులు తీసిన చిత్రం. రోజువారీ స్కూల్ జీవితంలో క్యారెక్టర్‌ను చిన్న చిన్న క్షణాల ద్వారా చూపిస్తుంది.\n\n• 25 అలుమ్నీ, 25 వాల్యూస్ (గుర్తింపు) — సిల్వర్ ఓక్స్ తత్వాన్ని తమ జీవితంలో నిజం చేసిన 25 పూర్వ విద్యార్థులను గౌరవిస్తుంది.\n\n• గార్డియన్స్ ఆఫ్ క్యారెక్టర్ — సిల్వర్ ఓక్స్ విలువలను రోజువారీ చర్యలతో నిలబెట్టే వ్యక్తులను గౌరవించే వేదిక.',
    glossary: [
      { word: 'documentary', en: 'A real-life film about something true', te: 'డాక్యుమెంటరీ' },
      { word: 'authentic',   en: 'Real, true, not fake',                  te: 'నిజమైన' },
      { word: 'integrity',   en: 'Doing right even when no one watches',  te: 'నిజాయితీ' },
      { word: 'alumni',      en: 'Past students of a school',             te: 'పూర్వ విద్యార్థులు' },
      { word: 'uphold',      en: 'To support and protect',                te: 'పాటించడం' },
    ],
    parentSuggestion: {
      tip: '"Integrity" is the big word here. Define it simply: doing right when no one is watching. Catch her doing it and name it.',
      questions: [
        'What is "integrity"? Give one example.',
        'Why is it important to honour past students (alumni)?',
        'Who is YOUR "Guardian of Character" at home?',
      ],
    },
    quiz: [
      {
        id: 's-12-q1',
        question: 'Integrity means…',
        choices: [
          { id: 'a', label: 'Doing the right thing even when no one is watching', isCorrect: true },
          { id: 'b', label: 'Winning every game',                                  isCorrect: false },
          { id: 'c', label: 'Knowing all the answers',                             isCorrect: false },
        ],
      },
      {
        id: 's-12-q2',
        question: 'Alumni are…',
        choices: [
          { id: 'a', label: 'New students',             isCorrect: false },
          { id: 'b', label: 'Past students of a school', isCorrect: true },
          { id: 'c', label: 'Teachers only',              isCorrect: false },
        ],
      },
      {
        id: 's-12-q3',
        question: 'The "25 Alumni, 25 Values" initiative honours students whose journeys embody…',
        choices: [
          { id: 'a', label: 'The highest marks in school',         isCorrect: false },
          { id: 'b', label: 'Character Before Competence',         isCorrect: true },
          { id: 'c', label: 'Sports championships only',           isCorrect: false },
        ],
      },
      {
        id: 's-12-q4',
        question: 'The "Character Through Their Eyes" initiative is a…',
        choices: [
          { id: 'a', label: 'Photography contest',                                    isCorrect: false },
          { id: 'b', label: 'Student-led documentary of everyday school character',   isCorrect: true },
          { id: 'c', label: 'Science fair',                                            isCorrect: false },
        ],
      },
    ],
    promptText: 'What does "integrity" mean to you? Give an example.',
    interactionType: 'reflect',
  },
  {
    id: 's-13',
    lessonId: 'stories',
    title: 'School House — The Constitution of Silver Oaks',
    englishContent:
      "The School House symbolically serves as the Constitution of Silver Oaks.\n\n• The first step into the house speaks about the inside-out approach — Character first, Competence next.\n• The second step speaks about the culture of the school.\n• The third step highlights the motto.\n• Once you enter the house, in Junior School, the Learner Profile builds the character.\n• In Senior School, the 8 habits of Dr Stephen Covey hone leadership skills.\n• The two pillars speak about the 12 Cultures of the school and the Civic & Social Responsibility — 'Me and My Country, We Grow Together'.\n• The ceiling spells out the mission, knowledge, concepts and skills.\n• The roof defines the vision of the school.",
    teluguContent:
      'స్కూల్ హౌస్ — సిల్వర్ ఓక్స్ యొక్క "రాజ్యాంగం" (constitution) ను సూచిస్తుంది.\n\n• మొదటి మెట్టు — క్యారెక్టర్ ముందు, కాంపిటెన్స్ తర్వాత.\n• రెండవ మెట్టు — స్కూల్ సంస్కృతి గురించి.\n• మూడవ మెట్టు — నినాదం (motto).\n• ఇంట్లోకి ప్రవేశించాక — జూనియర్ స్కూల్‌లో Learner Profile క్యారెక్టర్‌ను నిర్మిస్తుంది.\n• సీనియర్ స్కూల్‌లో — డాక్టర్ స్టీఫెన్ కోవే యొక్క 8 అలవాట్లు నాయకత్వ నైపుణ్యాలను ఇస్తాయి.\n• రెండు స్తంభాలు — 12 సంస్కృతులు మరియు "నేను నా దేశం కలిసి ఎదుగుతాము" అనే సేవా బాధ్యత.\n• పైకప్పు — మిషన్, జ్ఞానం, నైపుణ్యాలు.\n• పైకప్పు అంచు — విజన్ (లక్ష్యం).',
    glossary: [
      { word: 'Constitution', en: 'The set of main rules to live by', te: 'రాజ్యాంగం' },
      { word: 'pillars',      en: 'Tall posts that hold something up', te: 'స్తంభాలు' },
      { word: 'motto',        en: 'A short saying you live by',        te: 'నినాదం' },
      { word: 'symbolically', en: 'Standing for something else',       te: 'ప్రతీకాత్మకంగా' },
    ],
    parentSuggestion: {
      tip: 'The School House is a metaphor — each part of a house = a part of school life. Draw it together if she finds it abstract.',
      questions: [
        'Why is the school like a house?',
        'What is the difference between a vision and a mission?',
        'Name 2 things on the "pillars".',
      ],
    },
    quiz: [
      {
        id: 's-13-q1',
        question: 'What does the School House symbolically serve as?',
        choices: [
          { id: 'a', label: 'A snack bar',                     isCorrect: false },
          { id: 'b', label: 'The Constitution of Silver Oaks', isCorrect: true },
          { id: 'c', label: 'A playground',                     isCorrect: false },
        ],
      },
      {
        id: 's-13-q2',
        question: 'In Junior school, what builds the character?',
        choices: [
          { id: 'a', label: 'Learner Profile', isCorrect: true },
          { id: 'b', label: 'Lunch boxes',      isCorrect: false },
          { id: 'c', label: 'TV cartoons',       isCorrect: false },
        ],
      },
      {
        id: 's-13-q3',
        question: 'In Senior school, whose 8 habits hone leadership?',
        choices: [
          { id: 'a', label: 'Mahatma Gandhi',   isCorrect: false },
          { id: 'b', label: 'Dr Stephen Covey', isCorrect: true },
          { id: 'c', label: 'Isaac Newton',      isCorrect: false },
        ],
      },
      {
        id: 's-13-q4',
        question: 'The two PILLARS of the School House represent…',
        choices: [
          { id: 'a', label: 'Science and Maths',                                isCorrect: false },
          { id: 'b', label: '12 Cultures and Civic & Social Responsibility',    isCorrect: true },
          { id: 'c', label: 'Sports and Music',                                  isCorrect: false },
        ],
      },
      {
        id: 's-13-q5',
        question: 'What does the ROOF of the School House represent?',
        choices: [
          { id: 'a', label: 'The vision of the school', isCorrect: true },
          { id: 'b', label: 'The mission of the school', isCorrect: false },
          { id: 'c', label: 'The motto',                  isCorrect: false },
        ],
      },
    ],
    promptText: 'Draw or describe what your school stands for in your own words.',
    interactionType: 'reflect',
  },
  {
    id: 's-14',
    lessonId: 'stories',
    title: 'The School House — Vision, Mission, Motto',
    englishContent:
      'VISION — To develop a community which Lives for a Purpose, Learns to Apply, Leads with Character and Competence, And Leaves a Timeless Legacy.\n\nMISSION — To nurture lifelong learners with ethics, empathy, courage, and civic virtues — who think critically, act inclusively, and contribute responsibly towards a sustainable future while fostering social, emotional, and physical well-being.\n\nMOTTO — "Where the mind is without fear and the head is held high."\n\nCULTURE — Speak softly and pleasantly. Smile always. Be positive and progressive. Feel good. Look good and Do good. Have and Show Confidence.\n\nLEARNER PROFILE (10) — Inquirer · Knowledgeable · Thinker · Communicator · Principled · Open minded · Caring · Risk taker · Balanced · Reflective.',
    teluguContent:
      'విజన్ (లక్ష్యం) — ఒక ప్రయోజనం కోసం జీవించే, నేర్చుకున్నది ఆచరించే, క్యారెక్టర్ & కాంపిటెన్స్‌తో నడిపే, శాశ్వత వారసత్వాన్ని వదిలిపెట్టే సమాజాన్ని నిర్మించడం.\n\nమిషన్ (కర్తవ్యం) — నైతికత, సహానుభూతి, ధైర్యం, పౌర విలువలతో జీవిత-కాల అభ్యాసకులను తయారు చేయడం.\n\nమోటో (నినాదం) — "మనస్సు భయం లేకుండా, తల ఎత్తుకుని ఉన్న చోటు."\n\nసంస్కృతి — మృదువుగా, ఆహ్లాదంగా మాట్లాడు. ఎప్పుడూ నవ్వు. సానుకూలంగా ఉండు. మంచిగా అనిపించు. మంచిగా కనిపించు, మంచి పనులు చేయి.\n\nలెర్నర్ ప్రొఫైల్ (10): ప్రశ్నించేవాడు, జ్ఞానవంతుడు, ఆలోచనపరుడు, కమ్యూనికేటర్, నీతిమంతుడు, తెరిచిన మనస్సు, శ్రద్ధ చూపే, రిస్క్ తీసుకునే, సమతుల్యత, ఆలోచనాత్మక.',
    glossary: [
      { word: 'Vision',  en: 'What you hope to be in the future', te: 'లక్ష్యం / దూరదృష్టి' },
      { word: 'Mission', en: 'What you are here to do',            te: 'కర్తవ్యం' },
      { word: 'Legacy',  en: 'What you leave behind for others',   te: 'వారసత్వం' },
      { word: 'Empathy', en: 'Feeling what others feel',           te: 'సహానుభూతి' },
      { word: 'Inclusively', en: 'Including everyone, not leaving anyone out', te: 'అందరిని కలుపుకుని' },
    ],
    parentSuggestion: {
      tip: 'Recite the motto together — it is from Rabindranath Tagore. Then pick ONE Learner Profile word as her focus for the week.',
      questions: [
        'What does "mind without fear" mean?',
        'Which of the 10 Learner Profile words is most like you?',
        'Pick one to grow this week — why that one?',
      ],
    },
    quiz: [
      {
        id: 's-14-q1',
        question: 'The motto "Where the mind is without fear" was written by…',
        choices: [
          { id: 'a', label: 'Rabindranath Tagore', isCorrect: true },
          { id: 'b', label: 'Mahatma Gandhi',       isCorrect: false },
          { id: 'c', label: 'Stephen Covey',         isCorrect: false },
        ],
        hint: 'A famous Bengali poet.',
      },
      {
        id: 's-14-q2',
        question: 'How many qualities does the Learner Profile have?',
        choices: [
          { id: 'a', label: '5',  isCorrect: false },
          { id: 'b', label: '10', isCorrect: true },
          { id: 'c', label: '12', isCorrect: false },
        ],
      },
      {
        id: 's-14-q3',
        question: 'The school\'s Vision says the community should leave a…',
        choices: [
          { id: 'a', label: 'Timeless Legacy',   isCorrect: true },
          { id: 'b', label: 'Trophy cabinet',     isCorrect: false },
          { id: 'c', label: 'Big building',        isCorrect: false },
        ],
      },
      {
        id: 's-14-q4',
        question: 'Which of these is part of the Silver Oaks Culture?',
        choices: [
          { id: 'a', label: 'Speak softly and smile always',  isCorrect: true },
          { id: 'b', label: 'Shout to be heard',               isCorrect: false },
          { id: 'c', label: 'Never ask questions',              isCorrect: false },
        ],
      },
      {
        id: 's-14-q5',
        question: 'Which Learner Profile quality means "asks lots of questions to learn"?',
        choices: [
          { id: 'a', label: 'Balanced',  isCorrect: false },
          { id: 'b', label: 'Inquirer',  isCorrect: true },
          { id: 'c', label: 'Caring',    isCorrect: false },
        ],
      },
    ],
    promptText: 'Which Learner Profile quality do you want to grow this week? Why?',
    interactionType: 'reflect',
  },

  /* ---------- Book 3: Character, Skills & Stories (11 cards) ---------- */
  {
    id: 's-15',
    lessonId: 'stories',
    title: 'Character is to BE · Competence is to DO',
    englishContent:
      'Character is to BE — living through values.\nCompetence is to DO — doing something valuable.\n\nThe 10 BEING qualities (Learner Profile):\n• Principled · Balanced · Reflective · Caring · Knowledgeable\n• Open minded · Thinker · Communicator · Courageous · Inquirer\n\nThese give immense power from within.',
    teluguContent:
      'క్యారెక్టర్ అంటే — విలువలతో ఉండడం (Being).\nకాంపిటెన్స్ అంటే — విలువైనది ఏదైనా చేయడం (Doing).\n\nఉండడం (Being) యొక్క 10 గుణాలు:\n• నీతిమంతుడు · సమతుల్యత · ఆలోచనాత్మక · శ్రద్ధ చూపే · జ్ఞానవంతుడు\n• తెరిచిన మనస్సు · ఆలోచనపరుడు · కమ్యూనికేటర్ · ధైర్యవంతుడు · ప్రశ్నించేవాడు\n\nఇవి లోపలి నుండి అపారమైన శక్తినిస్తాయి.',
    glossary: [
      { word: 'values',    en: 'Good rules to live by',         te: 'విలువలు' },
      { word: 'immense',   en: 'Very, very big',                 te: 'అపారమైన' },
      { word: 'Balanced',  en: 'Calm and steady, not too much of one thing', te: 'సమతుల్యత' },
      { word: 'Reflective',en: 'Thinks carefully back about things',  te: 'ఆలోచనాత్మక' },
    ],
    parentSuggestion: {
      tip: 'Two simple words: BE (inside) vs DO (outside). Both matter. Use everyday examples — being kind (BE) vs helping someone (DO).',
      questions: [
        'What is the difference between "being kind" and "doing a kind thing"?',
        'Pick 2 BEING words you like most.',
        'Why is power from "within"?',
      ],
    },
    quiz: [
      {
        id: 's-15-q1',
        question: 'Character is to BE — living through…',
        choices: [
          { id: 'a', label: 'Money',  isCorrect: false },
          { id: 'b', label: 'Values', isCorrect: true },
          { id: 'c', label: 'Sports', isCorrect: false },
        ],
      },
      {
        id: 's-15-q2',
        question: 'Being "Principled" means…',
        choices: [
          { id: 'a', label: 'Always doing what is right',  isCorrect: true },
          { id: 'b', label: 'Being the smartest in class', isCorrect: false },
          { id: 'c', label: 'Being the strongest',          isCorrect: false },
        ],
      },
      {
        id: 's-15-q3',
        question: 'Competence is to DO — doing something…',
        choices: [
          { id: 'a', label: 'Boring',   isCorrect: false },
          { id: 'b', label: 'Valuable', isCorrect: true },
          { id: 'c', label: 'Loud',     isCorrect: false },
        ],
      },
      {
        id: 's-15-q4',
        question: 'Which of these is a BEING quality from the Learner Profile?',
        choices: [
          { id: 'a', label: 'Running fast',  isCorrect: false },
          { id: 'b', label: 'Reflective',    isCorrect: true },
          { id: 'c', label: 'Drawing well',  isCorrect: false },
        ],
      },
    ],
    promptText: 'Pick 2 BEING qualities and tell me when you showed them.',
    interactionType: 'reflect',
  },
  {
    id: 's-16',
    lessonId: 'stories',
    title: 'The Powers Developed in Acorns',
    englishContent:
      'Every activity at school gives you a special power:\n\n• Inquiry → Curiosity to learn\n• Concepts → Depths of learning\n• Transdisciplinary approach → Connections between subjects\n• Disciplinary approach → Mastery in subjects\n• Group learning → Collaborative skills\n• SOLS → Reflective learning\n• Human Calculator → Speed and Accuracy\n• Speakers at Silver Oaks → Public Speaking Skills\n• Wordcraft → Creative Writing\n• Spellbee → Precision and Perfection\n• NIE Quiz → General Knowledge\n• Student-led Exhibitions → Confidence in presenting',
    teluguContent:
      'స్కూల్‌లో ప్రతి కార్యక్రమం ఒక శక్తినిస్తుంది:\n\n• ఇన్‌క్వైరీ → నేర్చుకోవాలనే ఆసక్తి\n• కాన్సెప్ట్స్ → లోతైన అభ్యాసం\n• Transdisciplinary → అన్ని విషయాల మధ్య సంబంధాలు\n• Disciplinary → విషయాల్లో నైపుణ్యం\n• గ్రూప్ లెర్నింగ్ → సహకార నైపుణ్యాలు\n• SOLS → ఆలోచనాత్మక అభ్యాసం\n• హ్యూమన్ కాల్క్యులేటర్ → వేగం, ఖచ్చితత్వం\n• సిల్వర్ ఓక్స్ స్పీకర్స్ → మాట్లాడే నైపుణ్యం\n• వర్డ్‌క్రాఫ్ట్ → సృజనాత్మక రచన\n• స్పెల్‌బీ → ఖచ్చితత్వం, పరిపూర్ణత\n• NIE క్విజ్ → సాధారణ జ్ఞానం\n• ఎగ్జిబిషన్స్ → ప్రదర్శించే ఆత్మవిశ్వాసం',
    glossary: [
      { word: 'Inquiry',      en: 'Asking questions to find out',      te: 'ప్రశ్నించడం' },
      { word: 'Mastery',      en: 'Being very good at something',       te: 'నైపుణ్యం' },
      { word: 'Collaborative',en: 'Working together with others',       te: 'సహకారం' },
      { word: 'Precision',    en: 'Exact, no mistakes',                  te: 'ఖచ్చితత్వం' },
    ],
    parentSuggestion: {
      tip: 'These are all school activities she already knows. Ask her which gives her the BEST feeling. That tells you her strength.',
      questions: [
        'Which activity do you enjoy the most? Why?',
        'What "power" does Spellbee give you?',
        'When do you use "collaborative skills"?',
      ],
    },
    quiz: [
      {
        id: 's-16-q1',
        question: 'Spellbee gives you the power of…',
        choices: [
          { id: 'a', label: 'Speed',                    isCorrect: false },
          { id: 'b', label: 'Precision and perfection', isCorrect: true },
          { id: 'c', label: 'Singing',                   isCorrect: false },
        ],
      },
      {
        id: 's-16-q2',
        question: 'What power does INQUIRY give you?',
        choices: [
          { id: 'a', label: 'Curiosity to learn',  isCorrect: true },
          { id: 'b', label: 'Strength of muscles', isCorrect: false },
          { id: 'c', label: 'Speed in running',     isCorrect: false },
        ],
      },
      {
        id: 's-16-q3',
        question: 'What power do Student-led Exhibitions give?',
        choices: [
          { id: 'a', label: 'Cooking skills',                          isCorrect: false },
          { id: 'b', label: 'Confidence in presenting knowledge',      isCorrect: true },
          { id: 'c', label: 'Faster reading',                           isCorrect: false },
        ],
      },
      {
        id: 's-16-q4',
        question: 'Wordcraft develops the power of…',
        choices: [
          { id: 'a', label: 'Creative writing',  isCorrect: true },
          { id: 'b', label: 'General knowledge', isCorrect: false },
          { id: 'c', label: 'Speed and accuracy', isCorrect: false },
        ],
      },
      {
        id: 's-16-q5',
        question: 'What power does SOLS (Self-Organisation Learning Sessions) develop?',
        choices: [
          { id: 'a', label: 'Public speaking',    isCorrect: false },
          { id: 'b', label: 'Reflective learning', isCorrect: true },
          { id: 'c', label: 'Mastery in sport',    isCorrect: false },
        ],
      },
    ],
    promptText: 'Which 2 of these activities do you enjoy most? Why?',
    interactionType: 'reflect',
  },
  {
    id: 's-17',
    lessonId: 'stories',
    title: 'Powers through Sports and Opportunities',
    englishContent:
      'Outside the classroom, you grow many powers too:\n\n• Operas → Cultural exposure\n• Student Government Elections → Leadership\n• Novels → A door into literature\n• Art and Craft → Form to your imagination\n• Ramleela → The good-habits festival; celebrate the good, burn the bad in you\n• Sports → Fitness, focus, team spirit, value of win and lose\n• SOLS → Make you a reflective learner\n• Musical Assemblies → Sync your voice and soul with the world',
    teluguContent:
      'తరగతి బయట కూడా ఎన్నో శక్తులు పెరుగుతాయి:\n\n• ఒపేరాలు → సాంస్కృతిక పరిచయం\n• విద్యార్థి ప్రభుత్వ ఎన్నికలు → నాయకత్వం\n• నవలలు → సాహిత్య ప్రపంచంలోకి ద్వారం\n• ఆర్ట్ & క్రాఫ్ట్ → ఊహకు రూపం\n• రామలీల → మంచి అలవాట్ల పండగ\n• ఆటలు → ఫిట్‌నెస్, ఏకాగ్రత, టీమ్ స్పిరిట్, గెలుపు-ఓటమి విలువ\n• SOLS → ఆలోచనాత్మక అభ్యాసకులు\n• సంగీత సమావేశాలు → నీ గొంతు, ఆత్మను ప్రపంచంతో కలపడం',
    glossary: [
      { word: 'Leadership', en: 'Being able to lead others',     te: 'నాయకత్వం' },
      { word: 'Literature', en: 'Good books and writing',         te: 'సాహిత్యం' },
      { word: 'imagination',en: 'Pictures and ideas in your mind', te: 'ఊహ' },
      { word: 'Fitness',    en: 'Being strong and healthy',        te: 'ఆరోగ్యం' },
      { word: 'team spirit',en: 'Working happily with your team',  te: 'జట్టు భావం' },
    ],
    parentSuggestion: {
      tip: 'Sports teaches losing too — that is valuable. Help her name a recent loss and what she learned.',
      questions: [
        'When did you lose at something? What did you learn?',
        'What "power" comes from singing in assembly?',
        'Which activity makes you feel happiest?',
      ],
    },
    quiz: [
      {
        id: 's-17-q1',
        question: 'Sports teach us about…',
        choices: [
          { id: 'a', label: 'Only winning',                                isCorrect: false },
          { id: 'b', label: 'Fitness, focus, team spirit, win AND lose',   isCorrect: true },
          { id: 'c', label: 'Just running fast',                            isCorrect: false },
        ],
      },
      {
        id: 's-17-q2',
        question: 'Ramleela is called the festival of…',
        choices: [
          { id: 'a', label: 'Good habits', isCorrect: true },
          { id: 'b', label: 'Sweets',       isCorrect: false },
          { id: 'c', label: 'Marbles',      isCorrect: false },
        ],
      },
      {
        id: 's-17-q3',
        question: 'What power do Musical Assemblies give?',
        choices: [
          { id: 'a', label: 'Speed and accuracy',                    isCorrect: false },
          { id: 'b', label: 'Sync your voice and soul with the world', isCorrect: true },
          { id: 'c', label: 'Public speaking',                         isCorrect: false },
        ],
      },
      {
        id: 's-17-q4',
        question: 'Student Government Elections build…',
        choices: [
          { id: 'a', label: 'Spelling skills',    isCorrect: false },
          { id: 'b', label: 'Student leadership', isCorrect: true },
          { id: 'c', label: 'Drawing skills',      isCorrect: false },
        ],
      },
    ],
    promptText: 'Sports teach us about winning AND losing. Tell me a time you lost — what did you learn?',
    interactionType: 'reflect',
  },
  {
    id: 's-18',
    lessonId: 'stories',
    title: 'Skills are the Powers — "To Do Something Valuable"',
    englishContent:
      '5 important skills, each like a famous person:\n\n• Self Management Skills → manage oneself, time, and work — like Sunita Williams (astronaut)\n• Social Skills → respect and welcome new ideas — like Swami Vivekananda\n• Thinking Skills → think deeply and analytically — like Isaac Newton\n• Communication Skills → listen, speak, and read — like Yuval Noah Harari\n• Research Skills → learn and explore more about the world — like Homi Bhabha',
    teluguContent:
      '5 ముఖ్యమైన నైపుణ్యాలు, ప్రతిదీ ఒక గొప్ప వ్యక్తిలా:\n\n• స్వీయ నిర్వహణ → తనను తాను, సమయాన్ని నిర్వహించడం — సునీతా విలియమ్స్‌ లా (వ్యోమగామి)\n• సామాజిక నైపుణ్యాలు → కొత్త ఆలోచనలను స్వాగతించడం — స్వామి వివేకానంద లా\n• ఆలోచనా నైపుణ్యాలు → లోతుగా, విశ్లేషణాత్మకంగా ఆలోచించడం — ఐజాక్ న్యూటన్ లా\n• కమ్యూనికేషన్ → వినడం, మాట్లాడడం, చదవడం — యువల్ నోహ్ హరారీ లా\n• పరిశోధన → ప్రపంచాన్ని అన్వేషించడం — హోమీ భాభా లా',
    glossary: [
      { word: 'manage',       en: 'To handle or take care of',          te: 'నిర్వహించడం' },
      { word: 'Perspectives', en: 'Different ways of looking at things', te: 'దృక్పథాలు' },
      { word: 'analytically', en: 'Looking at things in careful parts',  te: 'విశ్లేషణాత్మకంగా' },
      { word: 'Research',     en: 'Finding out new things by studying',  te: 'పరిశోధన' },
    ],
    parentSuggestion: {
      tip: 'Pick one famous person and tell a 60-second story about them at bedtime. Make the skill stick to a face.',
      questions: [
        'Who is Sunita Williams? What did she do?',
        'What does "analytically" mean?',
        'Which of these 5 skills is YOUR strongest?',
      ],
    },
    quiz: [
      {
        id: 's-18-q1',
        question: 'Self Management Skills are like…',
        choices: [
          { id: 'a', label: 'Sunita Williams (astronaut)', isCorrect: true },
          { id: 'b', label: 'Isaac Newton',                 isCorrect: false },
          { id: 'c', label: 'Homi Bhabha',                   isCorrect: false },
        ],
        hint: 'Who lives in space and manages every minute?',
      },
      {
        id: 's-18-q2',
        question: 'Isaac Newton is famous for which skill?',
        choices: [
          { id: 'a', label: 'Communication', isCorrect: false },
          { id: 'b', label: 'Thinking',       isCorrect: true },
          { id: 'c', label: 'Sports',         isCorrect: false },
        ],
      },
      {
        id: 's-18-q3',
        question: 'Communication Skills are like Yuval Noah Harari. He is known for his ability to…',
        choices: [
          { id: 'a', label: 'Build rockets',                     isCorrect: false },
          { id: 'b', label: 'Listen, speak, and read',           isCorrect: true },
          { id: 'c', label: 'Win sports championships',           isCorrect: false },
        ],
      },
      {
        id: 's-18-q4',
        question: 'Research Skills are like Homi Bhabha. Research means…',
        choices: [
          { id: 'a', label: 'Guessing the answer',                  isCorrect: false },
          { id: 'b', label: 'Learning and exploring more by studying', isCorrect: true },
          { id: 'c', label: 'Copying from a book',                   isCorrect: false },
        ],
      },
      {
        id: 's-18-q5',
        question: 'Social Skills are like Swami Vivekananda. They help you…',
        choices: [
          { id: 'a', label: 'Run faster',                              isCorrect: false },
          { id: 'b', label: 'Respect and welcome new ideas',           isCorrect: true },
          { id: 'c', label: 'Memorise tables',                          isCorrect: false },
        ],
      },
    ],
    promptText: 'Which skill is your strongest? Which one do you want to grow?',
    interactionType: 'reflect',
  },
  {
    id: 's-19',
    lessonId: 'stories',
    title: 'Mantras of Mahatma',
    englishContent:
      'Mantras of Mahatma are seen in who you are. The five mantras for you to be a good citizen:\n\n• Swadharma — My work, I have to do well.\n• Satyagraha — I will speak the truth and I believe in peace.\n• Swaraj — I will be independent.\n• Sarvodaya — I will help others to grow.\n• Swades — I respect my country.',
    teluguContent:
      'మహాత్మా గాంధీ గారు మనకి నేర్పిన 5 మంత్రాలు:\n\n• స్వధర్మం — నా పని, నేను బాగా చేయాలి.\n• సత్యాగ్రహం — నేను సత్యాన్నే మాట్లాడతాను, శాంతిని నమ్ముతాను.\n• స్వరాజ్యం — నేను స్వతంత్రుడిగా ఉంటాను.\n• సర్వోదయ — నేను ఇతరులు పెరగడానికి సహాయం చేస్తాను.\n• స్వదేశీ — నేను నా దేశాన్ని గౌరవిస్తాను.',
    glossary: [
      { word: 'Mantra',     en: 'A short saying you repeat to remember', te: 'మంత్రం' },
      { word: 'Citizen',    en: 'A person who belongs to a country',     te: 'పౌరుడు' },
      { word: 'Swadharma',  en: 'Your own duty / your own work',          te: 'స్వధర్మం' },
      { word: 'Satyagraha', en: 'Holding on to truth',                    te: 'సత్యాగ్రహం' },
      { word: 'Swaraj',     en: 'Self-rule / freedom',                    te: 'స్వరాజ్యం' },
      { word: 'Sarvodaya',  en: 'Growth for all',                          te: 'సర్వోదయ' },
      { word: 'Swades',     en: 'Loving your country',                     te: 'స్వదేశీ' },
    ],
    parentSuggestion: {
      tip: 'These are sanskrit/hindi roots. Say each one out loud together so the sound becomes familiar.',
      questions: [
        'Who was Mahatma Gandhi? What did he do?',
        'Which mantra feels hardest to follow?',
        'How will YOU "help others to grow" today?',
      ],
    },
    quiz: [
      {
        id: 's-19-q1',
        question: '"Swaraj" means…',
        choices: [
          { id: 'a', label: 'I will be independent', isCorrect: true },
          { id: 'b', label: 'I will eat sweets',      isCorrect: false },
          { id: 'c', label: 'I will be loud',         isCorrect: false },
        ],
      },
      {
        id: 's-19-q2',
        question: 'Who gave us these 5 mantras?',
        choices: [
          { id: 'a', label: 'Mahatma Gandhi',       isCorrect: true },
          { id: 'b', label: 'Rabindranath Tagore',  isCorrect: false },
          { id: 'c', label: 'Sunita Williams',       isCorrect: false },
        ],
      },
      {
        id: 's-19-q3',
        question: '"Sarvodaya" means…',
        choices: [
          { id: 'a', label: 'I will earn a lot of money', isCorrect: false },
          { id: 'b', label: 'I will help others to grow', isCorrect: true },
          { id: 'c', label: 'I will speak the truth',     isCorrect: false },
        ],
      },
      {
        id: 's-19-q4',
        question: '"Satyagraha" involves…',
        choices: [
          { id: 'a', label: 'Fighting with weapons',                isCorrect: false },
          { id: 'b', label: 'Speaking the truth and believing in peace', isCorrect: true },
          { id: 'c', label: 'Running away from problems',            isCorrect: false },
        ],
      },
      {
        id: 's-19-q5',
        question: '"Swadharma" means…',
        choices: [
          { id: 'a', label: 'Respecting my country',    isCorrect: false },
          { id: 'b', label: 'My own duty — doing my work well', isCorrect: true },
          { id: 'c', label: 'Being independent',         isCorrect: false },
        ],
      },
    ],
    promptText: 'Pick one mantra and tell me what it means to YOU.',
    interactionType: 'reflect',
  },
  {
    id: 's-20',
    lessonId: 'stories',
    title: 'Cultures of Silver Oaks',
    englishContent:
      'Cultures of Silver Oaks are the shared values and ways of life amongst acorns and teachers.\n\n• Cultures to LIVE, LEAD, GIVE, WORK, READ, THINK, TRUST and LEARN — define WHO they are.\n• Cultures to CONSERVE, CONSISTENT and COLLABORATE — speak about HOW they organize themselves.\n• Culture to APPRECIATE — conveys HOW they express.\n\nAn acorn or teacher of Silver Oaks is known by these cultures.',
    teluguContent:
      'సిల్వర్ ఓక్స్ సంస్కృతులు — విద్యార్థులు (acorns), ఉపాధ్యాయుల మధ్య పంచుకునే విలువలు, జీవన విధానాలు.\n\n• జీవించడం, నడిపించడం, ఇవ్వడం, పనిచేయడం, చదవడం, ఆలోచించడం, నమ్మడం, నేర్చుకోవడం — వారు ఎవరో నిర్వచిస్తాయి.\n• పరిరక్షించడం, స్థిరంగా ఉండడం, సహకరించడం — వారు తమను తాము ఎలా నిర్వహించుకుంటారో చెబుతాయి.\n• ఆస్వాదించడం / ప్రశంసించడం — వారు ఎలా వ్యక్తపరుస్తారో తెలియజేస్తుంది.',
    glossary: [
      { word: 'Conserve',   en: 'To save and protect',          te: 'పరిరక్షించడం' },
      { word: 'Consistent', en: 'Doing the same thing always',  te: 'స్థిరంగా' },
      { word: 'Collaborate',en: 'To work together with others', te: 'సహకరించడం' },
      { word: 'Appreciate', en: 'To notice and be thankful',     te: 'ప్రశంసించడం' },
    ],
    parentSuggestion: {
      tip: '12 culture words. Too many to memorize at once. Pick ONE per week — like Culture to Conserve — and live it together.',
      questions: [
        '"Culture to Give" — what is one thing you can give today?',
        'What does "consistent" mean? Are you consistent with brushing teeth?',
        'Who did you appreciate this week?',
      ],
    },
    quiz: [
      {
        id: 's-20-q1',
        question: '"Culture to Conserve" means…',
        choices: [
          { id: 'a', label: 'To save and protect', isCorrect: true },
          { id: 'b', label: 'To collect coins',     isCorrect: false },
          { id: 'c', label: 'To run fast',           isCorrect: false },
        ],
      },
      {
        id: 's-20-q2',
        question: 'Which Culture word describes "how they express"?',
        choices: [
          { id: 'a', label: 'Appreciate', isCorrect: true },
          { id: 'b', label: 'Conserve',    isCorrect: false },
          { id: 'c', label: 'Collaborate', isCorrect: false },
        ],
      },
      {
        id: 's-20-q3',
        question: 'Cultures to LIVE, LEAD, GIVE, WORK, READ, THINK, TRUST and LEARN define…',
        choices: [
          { id: 'a', label: 'How they organise themselves', isCorrect: false },
          { id: 'b', label: 'WHO they are',                  isCorrect: true },
          { id: 'c', label: 'How they express',              isCorrect: false },
        ],
      },
      {
        id: 's-20-q4',
        question: 'Who is known or recognised by the Cultures of Silver Oaks?',
        choices: [
          { id: 'a', label: 'Only principals',             isCorrect: false },
          { id: 'b', label: 'Acorns (students) and teachers', isCorrect: true },
          { id: 'c', label: 'Only visitors',                isCorrect: false },
        ],
      },
    ],
    promptText: 'Pick one Culture word and tell me how YOU showed it today.',
    interactionType: 'reflect',
  },
  {
    id: 's-21',
    lessonId: 'stories',
    title: 'Me and My Country, We Grow Together',
    subtitle: 'A Civic and Social Responsibility Initiative',
    englishContent:
      'Every drop makes an ocean. Every coin can build the country.\n\nWith the belief that my country and I, we grow together, acorns save and earn coins to help the education of less privileged children. The annual fund raising is not charity but a responsibility. Every acorn and member of Silver Oaks take pride in helping the country grow.\n\nMore than INR 2.5 Crores in the last 17 years — and still counting.\n\nStreet Store is an annual event to spare and share clothes and household items with all those in need.\n\nEvery member of Silver Oaks believes in the Culture to Give.',
    teluguContent:
      'ప్రతి చుక్క — సముద్రాన్ని తయారు చేస్తుంది. ప్రతి నాణెం — దేశాన్ని నిర్మించగలదు.\n\n"నా దేశం, నేను కలిసి ఎదుగుతాము" అనే నమ్మకంతో — విద్యార్థులు డబ్బు సేకరించి, తక్కువ అవకాశాలున్న పిల్లల చదువు కోసం సహాయం చేస్తారు. ఇది దానం (charity) కాదు — బాధ్యత (responsibility).\n\nగత 17 సంవత్సరాలలో ₹2.5 కోట్ల కంటే ఎక్కువ సేకరించాము — ఇంకా కొనసాగుతోంది.\n\nస్ట్రీట్ స్టోర్ — అవసరమైన వారికి బట్టలు, ఇంటి సామగ్రి పంచుకునే వార్షిక కార్యక్రమం.\n\nసిల్వర్ ఓక్స్ ప్రతి సభ్యుడు — "ఇవ్వడం" అనే సంస్కృతిని నమ్ముతారు.',
    glossary: [
      { word: 'Privileged',     en: 'Having more luck or chances than others', te: 'అవకాశాలు ఎక్కువగా ఉన్న' },
      { word: 'Charity',        en: 'Helping people in need by giving',         te: 'దానం' },
      { word: 'Responsibility', en: 'Something you should do',                  te: 'బాధ్యత' },
      { word: 'Crores',         en: 'A big number in India (1 crore = 10 million)', te: 'కోట్లు' },
      { word: 'Household',      en: 'Things used at home',                       te: 'ఇంటి సామగ్రి' },
    ],
    parentSuggestion: {
      tip: 'Big idea: Charity vs Responsibility. Charity is optional. Responsibility is "I should". The school says helping is the second.',
      questions: [
        'What is the difference between "charity" and "responsibility"?',
        '"Every drop makes an ocean" — what does that mean?',
        'Who could YOU help — at home, school, or in the city?',
      ],
    },
    quiz: [
      {
        id: 's-21-q1',
        question: 'At Silver Oaks, helping less privileged children is…',
        choices: [
          { id: 'a', label: 'Charity',          isCorrect: false },
          { id: 'b', label: 'A responsibility', isCorrect: true },
          { id: 'c', label: 'A game',            isCorrect: false },
        ],
        hint: 'Charity is optional; responsibility is "I should".',
      },
      {
        id: 's-21-q2',
        question: 'Street Store is an event to share…',
        choices: [
          { id: 'a', label: 'Clothes and household items', isCorrect: true },
          { id: 'b', label: 'Movies',                       isCorrect: false },
          { id: 'c', label: 'Mobile phones only',           isCorrect: false },
        ],
      },
      {
        id: 's-21-q3',
        question: 'How much money has Silver Oaks raised in 17 years?',
        choices: [
          { id: 'a', label: 'INR 25,000',          isCorrect: false },
          { id: 'b', label: 'More than INR 2.5 Crores', isCorrect: true },
          { id: 'c', label: 'INR 1,000',            isCorrect: false },
        ],
      },
      {
        id: 's-21-q4',
        question: 'What does "Every drop makes an ocean" mean here?',
        choices: [
          { id: 'a', label: 'The school has a swimming pool',          isCorrect: false },
          { id: 'b', label: 'Every small coin or effort adds up to something big', isCorrect: true },
          { id: 'c', label: 'Water is important',                       isCorrect: false },
        ],
      },
    ],
    promptText: 'If you had ₹100 to help someone, who would you help and why?',
    interactionType: 'reflect',
  },
  {
    id: 's-22',
    lessonId: 'stories',
    title: 'School Pledge',
    englishContent:
      'India is my country.\nAnd I will always strive to make Me and My country to help in the development of Mankind.\n\nTo achieve this…\n\n• I shall be Caring for others and Principled in my behavior.\n• I will be Reflective and Responsible for all my actions.\n• I will always be Open minded to new ideas and respect others\' feelings.\n• I will Communicate all my feelings positively.\n• I will be an Inquirer and ask questions wherever required.\n• I will be a Risk taker and take time out to initiate progressive actions and stop all negative traits.\n• I will be a good Thinker and a Balanced person to make myself into a proactive citizen at all times.\n• I will always apply the Knowledge I acquire to lead myself and thereby my country.',
    teluguContent:
      'భారతదేశం నా దేశం.\nనేను, నా దేశం కలిసి — మానవాళి అభివృద్ధికి సహాయం చేయడానికి ఎప్పుడూ కృషి చేస్తాను.\n\nఇది సాధించడానికి —\n\n• ఇతరుల పట్ల శ్రద్ధ చూపుతాను, నీతిగా నడుచుకుంటాను.\n• నేను ఆలోచనాత్మకంగా, నా అన్ని పనులకు బాధ్యత తీసుకుంటాను.\n• కొత్త ఆలోచనలకు తెరిచిన మనస్సుతో ఉంటాను.\n• నా భావాలను సానుకూలంగా వ్యక్తపరుస్తాను.\n• అవసరమైన చోట ప్రశ్నలు అడుగుతాను.\n• సాహసంగా, ప్రగతిశీల పనులకు సమయం కేటాయిస్తాను.\n• మంచి ఆలోచనపరుడిగా, సమతుల్యత ఉన్న చురుకైన పౌరుడిగా ఉంటాను.\n• నేను సంపాదించిన జ్ఞానాన్ని నన్ను, నా దేశాన్ని ముందుకు నడిపించడానికి వర్తింపజేస్తాను.',
    glossary: [
      { word: 'Pledge',      en: 'A serious promise',           te: 'ప్రతిజ్ఞ' },
      { word: 'Strive',      en: 'To try very hard',             te: 'కృషి చేయడం' },
      { word: 'Mankind',     en: 'All the people on Earth',      te: 'మానవాళి' },
      { word: 'Risk taker',  en: 'Brave enough to try new things',te: 'సాహసం చేసేవాడు' },
      { word: 'Progressive', en: 'Moving forward, growing',       te: 'ప్రగతిశీలమైన' },
    ],
    parentSuggestion: {
      tip: 'This pledge contains all 10 Learner Profile qualities. Read it out loud each morning for a week — soon she will know it by heart.',
      questions: [
        'What does "pledge" mean?',
        'Which line of the pledge is hardest to keep?',
        'What does "risk taker" mean? Give an example.',
      ],
    },
    quiz: [
      {
        id: 's-22-q1',
        question: 'A Risk taker is someone who…',
        choices: [
          { id: 'a', label: 'Is brave enough to try new things', isCorrect: true },
          { id: 'b', label: 'Causes trouble',                     isCorrect: false },
          { id: 'c', label: 'Runs away',                           isCorrect: false },
        ],
      },
      {
        id: 's-22-q2',
        question: '"Mankind" means…',
        choices: [
          { id: 'a', label: 'Only kind men',          isCorrect: false },
          { id: 'b', label: 'All the people on Earth', isCorrect: true },
          { id: 'c', label: 'Man\'s Animals',          isCorrect: false },
        ],
      },
      {
        id: 's-22-q3',
        question: 'The school pledge says "I will always be Open minded" — this means…',
        choices: [
          { id: 'a', label: 'Never closing your eyes',          isCorrect: false },
          { id: 'b', label: 'Ready to hear new ideas and respect others', isCorrect: true },
          { id: 'c', label: 'Being very talkative',              isCorrect: false },
        ],
      },
      {
        id: 's-22-q4',
        question: 'What does "Strive" mean in the pledge?',
        choices: [
          { id: 'a', label: 'To sit quietly',    isCorrect: false },
          { id: 'b', label: 'To try very hard',  isCorrect: true },
          { id: 'c', label: 'To run fast',        isCorrect: false },
        ],
      },
    ],
    promptText: 'Pick the line you like most from the pledge. Why that one?',
    interactionType: 'reflect',
  },
  {
    id: 's-23',
    lessonId: 'stories',
    title: 'The Jungle Book',
    subtitle: 'by Rudyard Kipling',
    englishContent:
      'A small human baby is lost in the jungle. A kind family of wolves finds him and raises him as one of their own. They name him Mowgli.\n\nTwo animals become his guides — Baloo the bear, who teaches him the rules of the jungle, and Bagheera the panther, who protects him and helps him survive.\n\nAs Mowgli grows up, he learns how to live in the jungle, make friends, and face dangers. The biggest danger is Sher Khan, a fierce tiger who wants to harm Mowgli because he is human.\n\nGuided by Baloo (Law of the Jungle) and Bagheera (protection), Mowgli learns how to survive, make choices, and understand who he is. Using his intelligence, courage, and help from his friends, Mowgli defeats Sher Khan.\n\nIn the end, he leaves the jungle and goes to live with humans, carrying with him the lessons he learned — bravery, respect, and kindness.',
    teluguContent:
      'ఒక చిన్న మానవ శిశువు అడవిలో తప్పిపోతాడు. ఒక మంచి తోడేళ్ళ కుటుంబం అతనిని పెంచుతుంది, "మౌగ్లీ" అని పేరు పెడుతుంది.\n\nరెండు జంతువులు గురువులు అవుతాయి — బలూ ఎలుగుబంటి (అడవి నియమాలు), బఘీరా చిరుత పులి (రక్షణ).\n\nమౌగ్లీ ఎదుగుతున్నప్పుడు — ఎలా జీవించాలో, మిత్రులను ఎలా చేసుకోవాలో, ప్రమాదాలను ఎలా ఎదుర్కోవాలో నేర్చుకుంటాడు. అతనికి అతిపెద్ద ప్రమాదం — షేర్ ఖాన్ అనే భయంకరమైన పులి.\n\nతెలివి, ధైర్యం, మిత్రుల సహాయంతో — మౌగ్లీ షేర్ ఖాన్‌ను ఓడిస్తాడు.\n\nచివరికి, అతను అడవిని వదిలి మనుషులతో జీవించడానికి వెళతాడు — తాను నేర్చుకున్న పాఠాలను తీసుకువెళతాడు: ధైర్యం, గౌరవం, దయ.',
    glossary: [
      { word: 'Jungle',  en: 'A thick forest with wild animals', te: 'అడవి' },
      { word: 'wolves',  en: 'Wild animals like dogs',           te: 'తోడేళ్ళు' },
      { word: 'panther', en: 'A big black wild cat',              te: 'చిరుత పులి' },
      { word: 'survive', en: 'To stay alive',                     te: 'బ్రతకడం' },
      { word: 'defeats', en: 'Wins against',                       te: 'ఓడిస్తాడు' },
    ],
    parentSuggestion: {
      tip: 'Big themes: belonging (where do I fit?), guides (who do I trust?), choice (who do I become?). You can compare to the Disney movie if she has seen it.',
      questions: [
        'Who taught Mowgli the rules of the jungle?',
        'Why did Sher Khan want to hurt Mowgli?',
        'Why did Mowgli leave the jungle in the end?',
      ],
    },
    quiz: [
      {
        id: 's-23-q1',
        question: 'Who taught Mowgli the Law of the Jungle?',
        choices: [
          { id: 'a', label: 'Bagheera the panther', isCorrect: false },
          { id: 'b', label: 'Baloo the bear',        isCorrect: true },
          { id: 'c', label: 'Sher Khan the tiger',   isCorrect: false },
        ],
        hint: 'A big, friendly bear with a wise voice.',
      },
      {
        id: 's-23-q2',
        question: 'Who is the biggest danger in the jungle?',
        choices: [
          { id: 'a', label: 'Baloo',     isCorrect: false },
          { id: 'b', label: 'Sher Khan', isCorrect: true },
          { id: 'c', label: 'The wolves', isCorrect: false },
        ],
      },
      {
        id: 's-23-q3',
        question: 'What did Bagheera do for Mowgli?',
        choices: [
          { id: 'a', label: 'Taught him the Law of the Jungle', isCorrect: false },
          { id: 'b', label: 'Protected him and helped him survive', isCorrect: true },
          { id: 'c', label: 'Raised him as a baby',               isCorrect: false },
        ],
      },
      {
        id: 's-23-q4',
        question: 'Who first raised Mowgli as their own?',
        choices: [
          { id: 'a', label: 'Bears',        isCorrect: false },
          { id: 'b', label: 'A wolf family', isCorrect: true },
          { id: 'c', label: 'Panthers',      isCorrect: false },
        ],
      },
      {
        id: 's-23-q5',
        question: 'What does Mowgli take with him when he leaves the jungle?',
        choices: [
          { id: 'a', label: 'Food and water',                          isCorrect: false },
          { id: 'b', label: 'Lessons of bravery, respect and kindness', isCorrect: true },
          { id: 'c', label: 'A jungle map',                             isCorrect: false },
        ],
      },
    ],
    promptText: 'Tell me the story of Mowgli in 4–5 lines, in your own words.',
    interactionType: 'reflect',
  },
  {
    id: 's-24',
    lessonId: 'stories',
    title: 'Jungle Book — What we can learn',
    englishContent:
      "• Respect rules and values — The 'Law of the Jungle' teaches that rules help everyone live safely and peacefully together.\n\n• Learn from friends, teachers and family — Wise guides (like Baloo and Bagheera) help shape our character and choices.\n\n• Courage with wisdom — True bravery is not being reckless, but knowing when and how to act wisely.\n\n• Respect for differences — Each one of you may have different strengths. Each one in your group contributes in their own way, and all are valuable.\n\n• Belonging and identity — Everyone has a place where they truly belong, and growing up means understanding who you are.",
    teluguContent:
      '• నియమాలు, విలువలు గౌరవించడం — "అడవి చట్టం" నేర్పిస్తుంది: నియమాలు అందరికీ సురక్షితంగా జీవించడానికి సహాయపడతాయి.\n\n• మిత్రులు, గురువులు, కుటుంబం నుండి నేర్చుకోవడం — జ్ఞానవంతులైన గురువులు (బలూ, బఘీరా లాంటివారు) మన క్యారెక్టర్‌ను తీర్చిదిద్దుతారు.\n\n• తెలివితో ధైర్యం — నిజమైన ధైర్యం అంటే నిర్లక్ష్యంగా ఉండడం కాదు — ఎప్పుడు, ఎలా చర్య తీసుకోవాలో తెలుసుకోవడం.\n\n• తేడాల పట్ల గౌరవం — ప్రతి ఒక్కరికి వేర్వేరు బలాలు ఉంటాయి. మీ గ్రూపులో ప్రతి ఒక్కరూ తమ స్వంత మార్గంలో దోహదపడతారు.\n\n• చెందడం, గుర్తింపు — ప్రతి ఒక్కరికీ తాము నిజంగా చెందే ఒక చోటు ఉంటుంది. పెద్దవ్వడం అంటే — తాము ఎవరో అర్థం చేసుకోవడం.',
    glossary: [
      { word: 'reckless',   en: 'Acting without thinking',     te: 'నిర్లక్ష్యంగా' },
      { word: 'Belonging',  en: 'Feeling you fit in somewhere', te: 'చెందడం' },
      { word: 'identity',   en: 'Who you are',                  te: 'గుర్తింపు' },
      { word: 'contributes',en: 'Adds something helpful',        te: 'దోహదపడడం' },
      { word: 'valuable',   en: 'Worth a lot, important',        te: 'విలువైన' },
    ],
    parentSuggestion: {
      tip: '"Courage with wisdom" is the most important line — brave + smart, not just brave. Discuss the difference.',
      questions: [
        'What is the difference between "brave" and "reckless"?',
        'Who is your "Baloo" or "Bagheera" in real life?',
        'What is YOUR special strength?',
      ],
    },
    quiz: [
      {
        id: 's-24-q1',
        question: '"Reckless" means…',
        choices: [
          { id: 'a', label: 'Acting without thinking',  isCorrect: true },
          { id: 'b', label: 'Acting bravely and wisely', isCorrect: false },
          { id: 'c', label: 'Acting kindly',              isCorrect: false },
        ],
      },
      {
        id: 's-24-q2',
        question: 'True bravery is…',
        choices: [
          { id: 'a', label: 'Doing anything dangerous',             isCorrect: false },
          { id: 'b', label: 'Knowing when and how to act wisely',   isCorrect: true },
          { id: 'c', label: 'Never being scared',                    isCorrect: false },
        ],
      },
      {
        id: 's-24-q3',
        question: '"Each one of your group contributes in their own way" teaches us to…',
        choices: [
          { id: 'a', label: 'Be the best all the time',           isCorrect: false },
          { id: 'b', label: 'Respect differences in strengths',   isCorrect: true },
          { id: 'c', label: 'Copy what others do',                 isCorrect: false },
        ],
      },
      {
        id: 's-24-q4',
        question: '"Belonging and identity" means growing up means understanding…',
        choices: [
          { id: 'a', label: 'How to be the tallest',  isCorrect: false },
          { id: 'b', label: 'Who you are',             isCorrect: true },
          { id: 'c', label: 'How to win',              isCorrect: false },
        ],
      },
    ],
    promptText: 'Which lesson from this story will YOU use this week?',
    interactionType: 'reflect',
  },
  {
    id: 's-25',
    lessonId: 'stories',
    title: 'The Very Hungry Caterpillar',
    subtitle: 'by Eric Carle',
    englishContent:
      "One Sunday morning, a tiny caterpillar hatches from an egg. He is very hungry. Each day of the week, he eats different foods — starting with fruits like apples and pears, and later eating many kinds of food. Even after eating so much, the caterpillar is still hungry and gets a stomach ache. Then he eats a green leaf, which makes him feel better. After that, he builds a cocoon around himself and rests. Soon, he comes out as a beautiful butterfly.\n\n\"With patience, good habits, and time, we grow into something beautiful.\"\n\nRemember:\n• Growing takes time — be patient.\n• Healthy choices matter — eating right helps you feel better.\n• Change is part of life — we all grow and change.\n• Rest is important — taking time to rest helps you grow strong.",
    teluguContent:
      'ఒక ఆదివారం ఉదయం, ఒక చిన్న గొంగళి పురుగు గుడ్డు నుండి బయటకు వస్తుంది. చాలా ఆకలి. వారంలో ప్రతి రోజు వేర్వేరు ఆహారాలు తింటుంది — ఆపిల్, బేరి. చివరికి కడుపు నొప్పి. ఒక పచ్చని ఆకును తింటుంది — మంచి అనిపిస్తుంది. తన చుట్టూ ఒక గూడు (cocoon) నిర్మించుకుని విశ్రాంతి తీసుకుంటుంది. త్వరలో — అందమైన సీతాకోకచిలుక (butterfly) గా బయటకు వస్తుంది.\n\n"ఓర్పు, మంచి అలవాట్లు, సమయంతో — మనం అందమైనదిగా ఎదుగుతాము."\n\nగుర్తుంచుకో:\n• పెరగడానికి సమయం పడుతుంది — ఓర్పుగా ఉండు.\n• ఆరోగ్యకరమైన ఎంపికలు ముఖ్యం.\n• మార్పు జీవితంలో భాగం — మనమంతా పెరుగుతాము.\n• విశ్రాంతి ముఖ్యం — విశ్రాంతి తీసుకోవడం మనకు సహాయపడుతుంది.',
    glossary: [
      { word: 'Caterpillar', en: 'A small worm-like creature that becomes a butterfly', te: 'గొంగళి పురుగు' },
      { word: 'hatches',     en: 'Comes out of an egg',                                  te: 'గుడ్డు నుండి వస్తుంది' },
      { word: 'Cocoon',      en: 'A soft case the caterpillar makes around itself',     te: 'గూడు' },
      { word: 'butterfly',   en: 'A pretty insect with colourful wings',                 te: 'సీతాకోకచిలుక' },
      { word: 'Patience',    en: 'Waiting calmly without getting upset',                  te: 'ఓర్పు' },
      { word: 'Habits',      en: 'Things you do again and again',                         te: 'అలవాట్లు' },
    ],
    parentSuggestion: {
      tip: 'Metamorphosis = growing up = takes time. Tie it to her own growth (taller, smarter than last year).',
      questions: [
        'What does the caterpillar turn into?',
        'Why is rest important?',
        'What "beautiful thing" do YOU want to grow into?',
      ],
    },
    quiz: [
      {
        id: 's-25-q1',
        question: 'What does the caterpillar turn into?',
        choices: [
          { id: 'a', label: 'A bee',       isCorrect: false },
          { id: 'b', label: 'A butterfly', isCorrect: true },
          { id: 'c', label: 'A bird',      isCorrect: false },
        ],
      },
      {
        id: 's-25-q2',
        question: 'The big lesson from this story is…',
        choices: [
          { id: 'a', label: 'Patience and good habits help us grow', isCorrect: true },
          { id: 'b', label: 'Eat as much as you can',                 isCorrect: false },
          { id: 'c', label: 'Sleep all day',                           isCorrect: false },
        ],
      },
      {
        id: 's-25-q3',
        question: 'What does the caterpillar eat to feel better after the stomach ache?',
        choices: [
          { id: 'a', label: 'A piece of cake', isCorrect: false },
          { id: 'b', label: 'A green leaf',    isCorrect: true },
          { id: 'c', label: 'An apple',        isCorrect: false },
        ],
        hint: 'Something simple and healthy.',
      },
      {
        id: 's-25-q4',
        question: 'What is a COCOON?',
        choices: [
          { id: 'a', label: 'A type of butterfly wing',                          isCorrect: false },
          { id: 'b', label: 'A soft case the caterpillar makes around itself',   isCorrect: true },
          { id: 'c', label: 'A nest in a tree',                                   isCorrect: false },
        ],
      },
      {
        id: 's-25-q5',
        question: '"Growing takes time" means you should…',
        choices: [
          { id: 'a', label: 'Rush through everything',    isCorrect: false },
          { id: 'b', label: 'Be patient; good things happen step by step', isCorrect: true },
          { id: 'c', label: 'Give up if it takes too long', isCorrect: false },
        ],
      },
    ],
    promptText: 'You are growing too! What "beautiful thing" do you want to become?',
    interactionType: 'reflect',
  },
];

const stories: Lesson = {
  id: 'stories',
  title: 'My Story Book',
  subtitle: '25 stories · summer reading + reflection',
  kid: 'ishanvi',
  subject: 'stories',
  hasTelugu: true,
  icon: '📖',
  cards: storyCards,
};

/* ============================================================
   2) SUMMER VACATION PROJECT — full activity cards from PDF
   ============================================================ */

const summerProject: Lesson = {
  id: 'summer-project',
  title: 'Summer Vacation Project',
  subtitle: 'Grade 4 · 80 hours · Math · English · Science',
  kid: 'ishanvi',
  subject: 'projects',
  hasTelugu: true,
  icon: '☀️',
  cards: [
    /* ---------- Welcome ---------- */
    {
      id: 'sp-0',
      lessonId: 'summer-project',
      title: 'Welcome to Your Summer Project!',
      subtitle: 'Silver Oaks · Character Before Competence',
      englishContent:
        'Hot summers keep us indoors — so why not sharpen our saw and grow while we relax?\n\nThis project gives you about 80 fun hours out of the 1200 hours of your summer. Just like an acorn grows into a strong tree, this break helps you unwind, discover what you love, and build new skills in Math, English, and Science.\n\n📚 Library: You have one library book to read this summer. Return it on the first day school reopens!\n\nRemember:\n• Watch your capitalisation, handwriting, punctuation, and spelling.\n• Do all your goals in your subject journal.\n• Keep screen time zero or low.\n• Hydrate, stay indoors, stay safe!',
      teluguContent:
        'వేడి వేసవిలో మనం ఇంట్లోనే ఉంటాం — అలాంటప్పుడు, విశ్రాంతి తీసుకుంటూనే మన నైపుణ్యాలను ఎందుకు పదును పెట్టకూడదు?\n\nఈ ప్రాజెక్ట్ నీ వేసవిలోని 1200 గంటల్లో దాదాపు 80 సరదా గంటలు ఇస్తుంది. ఒక గింజ (acorn) పెద్ద చెట్టుగా ఎదిగినట్లే — ఈ సెలవులు నిన్ను ఎదగడానికి సహాయపడతాయి.\n\n📚 లైబ్రరీ: నీకు చదవడానికి ఒక లైబ్రరీ పుస్తకం ఇచ్చారు. స్కూల్ తెరిచిన మొదటి రోజు దాన్ని తిరిగి ఇవ్వాలి!\n\nగుర్తుంచుకో:\n• అక్షరాలు, చేతిరాత, విరామ చిహ్నాలు, స్పెల్లింగ్ జాగ్రత్త.\n• నీ సబ్జెక్ట్ జర్నల్‌లో అన్ని పనులు చేయి.\n• స్క్రీన్ సమయం తక్కువగా ఉంచు.',
      glossary: [
        { word: 'sharpen our saw', en: 'Keep improving and learning new skills', te: 'నైపుణ్యాలను పదును పెట్టడం' },
        { word: 'acorn',           en: 'A baby oak seed — what Silver Oaks calls its students', te: 'అకార్న్ (విద్యార్థి)' },
      ],
      parentSuggestion: {
        tip: 'Frame this as fun, not homework. 80 hours across the summer is about 1 hour a day — very gentle. Make a simple wall chart so she can see her own progress.',
        questions: [
          'Which subject are you most excited about — Math, English, or Science?',
          'What library book did you get? What is it about?',
        ],
      },
      promptText: 'What are you most excited to do this summer? Write 2–3 sentences.',
      interactionType: 'reflect',
    },

    /* ---------- MATH ---------- */
    {
      id: 'sp-math',
      lessonId: 'summer-project',
      title: 'Math Project — All 9 Goals',
      subtitle: 'How does math connect to my daily life?',
      englishContent:
        'Driving question: How can I explore the connection between math, language, and my daily life?\n\nYou will: find patterns, use addition & multiplication, understand shapes, symmetry & place value, and connect math to everyday things.\n\nOpen the Task Guide below — every goal has an Example and a Challenge from your project sheet. Tick each goal as you finish it in your Math journal.',
      glossary: [
        { word: 'patterns',       en: 'Things that repeat in a smart way', te: 'నమూనాలు' },
        { word: 'symmetry',       en: 'Same shape on both sides',           te: 'సమమితి' },
        { word: 'place value',    en: 'What a digit is worth by its position (ones, tens, hundreds…)', te: 'స్థాన విలువ' },
        { word: 'operations',     en: 'Add, subtract, multiply, divide',    te: 'గణిత క్రియలు' },
      ],
      parentSuggestion: {
        tip: 'Do one goal at a time over the summer. The Multiplication Magic Book (tables 2–15) needs daily repetition, so start it early and add a page each day alongside the other goals.',
        questions: [
          'Which goal looks the most fun? Why?',
          'Can you spot a pattern on our kitchen tiles or staircase right now?',
          'What is 3,245 in words? Can you break it into place values?',
        ],
      },
      promptText: 'Tick each Math goal as you finish it in your journal.',
      interactionType: 'checklist',
      checklist: [
        {
          id: 'm1',
          label: '🔍 1. Pattern Hunt & Create',
          what: 'Find patterns around your home (tiles, clothes, stairs). Create your own pattern with numbers, shapes, or colours, then extend it.',
          example: '🔵🔴🔵🔴 → what comes next? 🔵🔴',
          challenge: 'Make a number pattern: 3, 6, 9, __, __  (the +3 pattern)',
          why: 'Spotting and extending patterns builds the algebra instincts she will need in Grade 5.',
        },
        {
          id: 'm2',
          label: '🍋 2. Real-Life Math Chef',
          what: 'Make a simple recipe (lemonade, sandwich). Use add, subtract, multiply to show the ingredients.',
          example: '2 cups water + 1 cup juice = 3 cups drink',
          challenge: 'Double your recipe: 1 sandwich → 2 sandwiches. How do all the ingredients change?',
          why: 'Doubling a recipe is real multiplication — it sticks far better than a worksheet.',
        },
        {
          id: 'm3',
          label: '🔺 3. Shape Hunt',
          what: 'Find real objects shaped like a circle, square, rectangle, and triangle. Draw each one.',
          example: 'Clock = circle ⭕',
          challenge: 'Use different shapes to draw a house 🏠',
          why: 'Grade 4 geometry is tested through real-life examples — this is exactly that skill.',
        },
        {
          id: 'm4',
          label: '🦋 4. Mirror Magic (Symmetry)',
          what: 'Draw a shape or pattern, then fold the paper to check if both sides match.',
          example: 'A butterfly 🦋 has the same shape on both sides.',
          challenge: 'Draw a design with TWO lines of symmetry.',
          why: 'Symmetry is tested in Grade 4–5; folding paper makes it click instantly.',
        },
        {
          id: 'm5',
          label: '📖 5. Math Story Creator',
          what: 'Create 2 simple word problems and solve them.',
          example: '"I had 10 candies. I gave 3 to my friend. How many left?" → 10 − 3 = 7',
          challenge: 'Write one problem that needs multiplication, not subtraction.',
          why: 'Writing problems is harder than solving them — it proves she truly understands the operation.',
        },
        {
          id: 'm6',
          label: '🔢 6. Number Detective',
          what: 'Pick 5 big numbers (from a newspaper or bill). Break them into place values and write them in words.',
          example: '3,245 = 3 thousands + 2 hundreds + 4 tens + 5 ones = Three thousand two hundred forty-five',
          challenge: 'Find the biggest number you can in the newspaper and write it in words.',
          why: 'Place value is the foundation of all arithmetic — Grade 4 moves into bigger numbers.',
        },
        {
          id: 'm7',
          label: '🗺️ 7. Math Around Me',
          what: 'Make a poster or scrapbook showing where you see math in daily life. Add drawings or pictures.',
          example: 'A ruler = measurement 📏',
          why: 'Connecting math to real life makes her see it as useful, not just school work.',
        },
        {
          id: 'm8',
          label: '✖️ 8. Multiplication Magic Book',
          what: 'Make a small book — one page per table (2 to 15). Add colours, drawings, and a tiny story.',
          example: 'Table of 5: 5 × 2 = 10. Story: "5 fingers on each hand, 2 hands = 10 fingers!"',
          why: 'Instant recall of tables to 15 frees her mind for the harder problems in Grade 4–5.',
        },
        {
          id: 'm9',
          label: '📝 9. Weekly Reflection',
          what: 'Each week write: what did you learn? what was difficult? one question you still have.',
          why: 'Reflection turns doing into real learning — the most valuable habit of all.',
        },
      ],
    },
    {
      id: 'sp-math-quiz',
      lessonId: 'summer-project',
      title: 'Math Warm-Up',
      subtitle: 'Try the examples from your project',
      englishContent:
        'Before you start your Math journal, try these quick warm-ups. They use the exact examples from your project sheet!',
      parentSuggestion: {
        tip: 'Let her work these out on paper or fingers — do not just tap. The point is the thinking, not the tap.',
        questions: [
          'How did you work out the pattern?',
          'Can you make up a harder pattern for ME to solve?',
        ],
      },
      quiz: [
        {
          id: 'spm-q1',
          question: 'Continue the pattern: 3, 6, 9, __',
          choices: [
            { id: 'a', label: '10', isCorrect: false },
            { id: 'b', label: '12', isCorrect: true },
            { id: 'c', label: '11', isCorrect: false },
          ],
          hint: 'Each number jumps up by 3.',
        },
        {
          id: 'spm-q2',
          question: 'What comes next: 🔵🔴🔵🔴 __?',
          choices: [
            { id: 'a', label: '🔵', isCorrect: true },
            { id: 'b', label: '🔴', isCorrect: false },
            { id: 'c', label: '🟢', isCorrect: false },
          ],
        },
        {
          id: 'spm-q3',
          question: '2 cups water + 1 cup juice = how many cups of drink?',
          choices: [
            { id: 'a', label: '2 cups', isCorrect: false },
            { id: 'b', label: '3 cups', isCorrect: true },
            { id: 'c', label: '4 cups', isCorrect: false },
          ],
        },
        {
          id: 'spm-q4',
          question: 'In 3,245 — what is the digit 2 worth?',
          choices: [
            { id: 'a', label: '2 hundreds (200)', isCorrect: true },
            { id: 'b', label: '2 tens (20)',      isCorrect: false },
            { id: 'c', label: '2 ones (2)',       isCorrect: false },
          ],
          hint: 'Count the places from the right: ones, tens, hundreds…',
        },
        {
          id: 'spm-q5',
          question: 'A clock is shaped like a…',
          choices: [
            { id: 'a', label: 'Square',    isCorrect: false },
            { id: 'b', label: 'Circle',    isCorrect: true },
            { id: 'c', label: 'Triangle',  isCorrect: false },
          ],
        },
        {
          id: 'spm-q6',
          question: 'Which animal has the same shape on both sides (symmetry)?',
          choices: [
            { id: 'a', label: 'A butterfly', isCorrect: true },
            { id: 'b', label: 'A snail',     isCorrect: false },
            { id: 'c', label: 'A worm',      isCorrect: false },
          ],
        },
      ],
      promptText: 'Now create your OWN number pattern and write the rule (like "+3"). Type it here.',
      interactionType: 'reflect',
    },

    /* ---------- ENGLISH ---------- */
    {
      id: 'sp-english',
      lessonId: 'summer-project',
      title: 'English Project — All 5 Goals',
      subtitle: 'Read · build words · write · speak',
      englishContent:
        'This summer you become a Reading Adventurer, a Word Explorer, a Sentence Artist, and a little Speaker!\n\nYou will: develop reading & comprehension, build vocabulary, improve sentence formation, and express ideas creatively.\n\nOpen the Task Guide — each goal has the exact steps and an example from your project sheet. Do all your work in your English journal.',
      glossary: [
        { word: 'comprehension', en: 'Understanding what you read',          te: 'అవగాహన' },
        { word: 'Vocabulary',    en: 'All the words you know and can use',    te: 'పదజ్ఞానం' },
        { word: 'conjunction',   en: 'A joining word: and, but, because, although', te: 'సంయోజకం' },
        { word: 'descriptive',   en: 'Writing that paints a clear picture',   te: 'వర్ణనాత్మక' },
      ],
      parentSuggestion: {
        tip: '10 minutes of reading daily beats one long session a week. For the speech, let her pick a cause she cares about — passion makes confidence come naturally.',
        questions: [
          'Which book will you read first for your Reading Passport?',
          'Tell me a sentence with one adjective AND one adverb.',
          'What topic would you choose for your "Change-Maker" speech?',
        ],
      },
      promptText: 'Tick each English goal as you finish it in your journal.',
      interactionType: 'checklist',
      checklist: [
        {
          id: 'e1',
          label: '📕 1. Reading Adventure Passport',
          what: 'For each book/story you finish, make a passport page with: 1) Title  2) Main characters  3) Favourite part (2–3 sentences)  4) 2–3 new words  5) a drawing of one scene.',
          example: 'Book: The Jungle Book · Characters: Mowgli, Baloo, Bagheera · New words: jungle, panther, survive.',
          why: 'A structured reading log builds the habit of reading with attention, not just turning pages.',
        },
        {
          id: 'e2',
          label: '🔤 2. Word Explorer Journal',
          what: 'Collect 4–5 new words each week. For each: write the word, its meaning in your own words, the part of speech (noun/verb/adjective), and your own sentence. Use 2 new words daily.',
          example: 'Word: gigantic · Meaning: very, very big · Adjective · "The gigantic elephant drank water."',
          why: 'A rich vocabulary makes comprehension easy and writing vivid — both tested heavily in Grade 4.',
        },
        {
          id: 'e3',
          label: '✏️ 3. Sentence Builders Studio',
          what: 'Make 4 word lists — verbs, adjectives, adverbs, conjunctions. Use them to write 5–6 sentences. Each must have at least one verb, one adjective, one adverb, and one conjunction.',
          example: 'The happy dog ran quickly AND barked loudly.',
          challenge: 'Write a sentence with TWO conjunctions in it.',
          why: 'Grade 4 English moves from simple to complex sentences — this builds that skill directly.',
        },
        {
          id: 'e4',
          label: '☀️ 4. Magic Moments (Descriptive Writing)',
          what: 'Choose a special moment (rainy day, family trip, festival, fun day). Describe it in 10–12 sentences using adjectives and sensory details (what you saw, heard, smelt, felt).',
          example: '"The warm rain smelt of wet earth. Cold drops tickled my nose as I splashed in the shiny puddles…"',
          why: 'Narrative writing is a core English task — length, detail, and structure all earn marks.',
        },
        {
          id: 'e5',
          label: '🎤 5. Be a Change-Maker (My Little Speech)',
          what: 'Prepare a 1–2 minute speech on making the world better through small actions: helping others, saving water/electricity, being kind, keeping clean. Make a poster or cue card.',
          example: 'Topic ideas: "Why I turn off the tap while brushing" or "Three ways my family saves electricity".',
          why: 'Speaking confidence at age 9 sets the foundation for every presentation she will give in school.',
        },
      ],
    },
    {
      id: 'sp-english-quiz',
      lessonId: 'summer-project',
      title: 'Word Power Warm-Up',
      subtitle: 'Parts of speech from your project',
      englishContent:
        'For Sentence Builders you need to know your verbs, adjectives, adverbs, and conjunctions. Try these — they use the example sentence from your project: "The happy dog ran quickly and barked loudly."',
      glossary: [
        { word: 'verb',        en: 'An action word (run, jump, eat)',          te: 'క్రియ' },
        { word: 'adjective',   en: 'A word that describes a noun (happy, big)', te: 'విశేషణం' },
        { word: 'adverb',      en: 'A word that describes how (quickly, loudly)', te: 'క్రియా విశేషణం' },
        { word: 'conjunction', en: 'A joining word (and, but, because)',        te: 'సంయోజకం' },
      ],
      parentSuggestion: {
        tip: 'After the quiz, play a quick game: you say a noun, she adds an adjective; you say a verb, she adds an adverb. Makes the grammar stick through play.',
        questions: [
          'Can you give me 3 more adverbs?',
          'Make your own sentence with a verb, adjective, adverb, and conjunction.',
        ],
      },
      quiz: [
        {
          id: 'spe-q1',
          question: 'In "The happy dog ran quickly", which word is the VERB (action)?',
          choices: [
            { id: 'a', label: 'happy', isCorrect: false },
            { id: 'b', label: 'ran',   isCorrect: true },
            { id: 'c', label: 'dog',   isCorrect: false },
          ],
          hint: 'Which word is the doing/action word?',
        },
        {
          id: 'spe-q2',
          question: 'In "The happy dog", which word is the ADJECTIVE (describes the dog)?',
          choices: [
            { id: 'a', label: 'happy', isCorrect: true },
            { id: 'b', label: 'dog',   isCorrect: false },
            { id: 'c', label: 'the',   isCorrect: false },
          ],
        },
        {
          id: 'spe-q3',
          question: '"ran quickly" — which word is the ADVERB (tells HOW)?',
          choices: [
            { id: 'a', label: 'ran',     isCorrect: false },
            { id: 'b', label: 'quickly', isCorrect: true },
            { id: 'c', label: 'dog',     isCorrect: false },
          ],
        },
        {
          id: 'spe-q4',
          question: '"ran quickly AND barked loudly" — which word is the CONJUNCTION (joining word)?',
          choices: [
            { id: 'a', label: 'and',    isCorrect: true },
            { id: 'b', label: 'barked', isCorrect: false },
            { id: 'c', label: 'loudly', isCorrect: false },
          ],
        },
        {
          id: 'spe-q5',
          question: 'Which of these is a CONJUNCTION?',
          choices: [
            { id: 'a', label: 'jump',    isCorrect: false },
            { id: 'b', label: 'because', isCorrect: true },
            { id: 'c', label: 'shiny',   isCorrect: false },
          ],
        },
      ],
      promptText: 'Write your OWN sentence with a verb, an adjective, an adverb, and a conjunction.',
      interactionType: 'reflect',
    },

    /* ---------- SCIENCE ---------- */
    {
      id: 'sp-science',
      lessonId: 'summer-project',
      title: 'Science Project — 3 Weekly Explorations',
      subtitle: 'You are a young scientist & explorer!',
      englishContent:
        'Driving question: How can observing the world help us understand science and make responsible choices?\n\nYou will investigate through 3 weekly explorations, reflect each week, and present what you found. Record everything on A4 sheets with drawings and labels.\n\nOpen the Task Guide — each week tells you exactly WHAT to do and HOW. Reflect after every week.',
      glossary: [
        { word: 'observe',     en: 'Look carefully and notice details',  te: 'పరిశీలించడం' },
        { word: 'cause',       en: 'The reason something happens',       te: 'కారణం' },
        { word: 'effect',      en: 'What happens as a result',           te: 'ఫలితం' },
        { word: 'investigate', en: 'Study something carefully to learn about it', te: 'పరిశోధించడం' },
      ],
      parentSuggestion: {
        tip: 'Go outside with her for the first observation — once she sees how interesting noticing can be, she will do it alone. Shadow Safari needs the same spot in morning, noon, and evening on a sunny day — plan it.',
        questions: [
          'What did you notice outside today that surprised you?',
          'Why do you think your shadow changes length during the day?',
          'When you kicked the ball — what made it finally stop?',
        ],
      },
      promptText: 'Tick each weekly exploration as you complete it.',
      interactionType: 'checklist',
      checklist: [
        {
          id: 's1',
          label: '🔭 Week 1: Curiosity Capsule',
          what: 'Observe nature 3 times this week (balcony, garden, or while travelling). Each time note: 3 things you SEE, 2 things you HEAR, 1 thing you WONDER. Sketch the thing you liked most.',
          example: 'See: a bird, red flowers, ants in a line · Hear: chirping, wind, a horn · Wonder: why do ants walk in a line?',
          why: 'Observation is the #1 science skill — she learns to notice carefully before she explains.',
        },
        {
          id: 's2',
          label: '🌗 Week 2: Shadow Safari',
          what: 'Observe your shadow (or an object\'s shadow) at 3 times in one day — morning, afternoon, evening. Note the time and draw the shadow each time.',
          example: 'Morning: long shadow · Noon: tiny shadow · Evening: long shadow again!',
          challenge: 'Reflect: "I noticed… I wonder… I think this happens because…"',
          why: 'Directly connects to the Grade 4 chapter on the Sun, light, and shadows.',
        },
        {
          id: 's3',
          label: '⚽ Week 3: Motion in Action',
          what: 'For a week, watch things move at home or play. Each day write: What I did, and What happened as a result.',
          example: 'What I did: I kicked a ball. → What happened: the ball moved far away.',
          challenge: 'Reflect: "My action was… the effect was… I think this happened because… next time I could try…"',
          why: 'Force and motion is a core Grade 4–5 concept — hands-on play makes the theory unforgettable.',
        },
        {
          id: 's4',
          label: '📝 Reflect every week',
          what: 'After each week write: I discovered… · I still wonder… · ATL skills I used… · Learner Profile I showed…',
          why: 'Reflection turns activity into learning and connects it to the Learner Profile she knows from school.',
        },
        {
          id: 's5',
          label: '🎤 Final presentation',
          what: 'After the holidays, present your journey. Choose a poster, a Canva/PPT deck, a scrapbook, or a 1–2 min video.',
          why: 'Presenting builds subject mastery AND communication confidence at the same time.',
        },
      ],
    },
    {
      id: 'sp-science-quiz',
      lessonId: 'summer-project',
      title: 'Science Thinking Warm-Up',
      subtitle: 'Cause, effect & observation',
      englishContent:
        'Good scientists think about CAUSE (why something happens) and EFFECT (what happens as a result). Try these — they use the examples from your Science project.',
      glossary: [
        { word: 'cause',  en: 'The reason something happens', te: 'కారణం' },
        { word: 'effect', en: 'What happens as a result',     te: 'ఫలితం' },
      ],
      parentSuggestion: {
        tip: 'Ask "why?" a lot. For every answer she gives, ask "and why does THAT happen?" — this builds the scientific habit of digging deeper.',
        questions: [
          'What is the cause and what is the effect when you switch on a fan?',
          'Why is your shadow shortest at noon?',
        ],
      },
      quiz: [
        {
          id: 'sps-q1',
          question: '"I kicked the ball and it moved far." What is the CAUSE?',
          choices: [
            { id: 'a', label: 'The ball moved far', isCorrect: false },
            { id: 'b', label: 'I kicked the ball',  isCorrect: true },
            { id: 'c', label: 'The ball is round',  isCorrect: false },
          ],
          hint: 'The cause is the action you DID.',
        },
        {
          id: 'sps-q2',
          question: 'Same example — what is the EFFECT (the result)?',
          choices: [
            { id: 'a', label: 'The ball moved far away', isCorrect: true },
            { id: 'b', label: 'I kicked the ball',        isCorrect: false },
            { id: 'c', label: 'The grass is green',       isCorrect: false },
          ],
        },
        {
          id: 'sps-q3',
          question: 'When is your shadow the SHORTEST?',
          choices: [
            { id: 'a', label: 'Early morning', isCorrect: false },
            { id: 'b', label: 'Noon (midday)', isCorrect: true },
            { id: 'c', label: 'Evening',       isCorrect: false },
          ],
          hint: 'When the Sun is highest in the sky.',
        },
        {
          id: 'sps-q4',
          question: 'In Curiosity Capsule, how many things do you SEE each time?',
          choices: [
            { id: 'a', label: '3 things', isCorrect: true },
            { id: 'b', label: '1 thing',  isCorrect: false },
            { id: 'c', label: '5 things', isCorrect: false },
          ],
          hint: 'Remember: 3 see, 2 hear, 1 wonder.',
        },
      ],
      promptText: 'Think of something that moved today. Write the CAUSE and the EFFECT.',
      interactionType: 'reflect',
    },

    /* ---------- Presentation + reflection ---------- */
    {
      id: 'sp-present',
      lessonId: 'summer-project',
      title: 'Final Presentation — Pick Your Style',
      subtitle: 'Show your learning journey',
      englishContent:
        'After the holidays you will present your journey to your class. Your presentation should show: what you explored, your key findings, one interesting discovery or question, and a reflection.\n\nYou can choose ANY one style:\n\n🎨 Creative Poster — title, drawings, 2–3 findings, one question.\n💻 Digital (Canva/PPT) — 4–6 slides with pictures + a reflection slide.\n📔 Scrapbook Story — journal as a story, captions, one discovery + one challenge.\n🎬 Video — a 1–2 min clip showing your work, ending with a question.',
      parentSuggestion: {
        tip: 'Let her pick the format that matches her personality — a shy child may prefer a poster, a performer may love the video. Ownership boosts effort.',
        questions: [
          'Which style feels most "you" — poster, slides, scrapbook, or video?',
          'What is the ONE discovery you most want to show your class?',
        ],
      },
      promptText: 'Which presentation style will you choose, and why?',
      interactionType: 'choice-cards',
      choices: [
        { id: 'a', label: '🎨 Creative Poster',       isCorrect: true },
        { id: 'b', label: '💻 Digital slides (Canva/PPT)', isCorrect: true },
        { id: 'c', label: '📔 Scrapbook Story',        isCorrect: true },
        { id: 'd', label: '🎬 Video (1–2 min)',        isCorrect: true },
      ],
      hint: 'There is no wrong answer — pick the one that excites you most!',
    },
    {
      id: 'sp-reflect',
      lessonId: 'summer-project',
      title: 'My Weekly Reflection',
      englishContent:
        'Every week, take 5 minutes to think back. Write:\n• What did I learn this week?\n• What was difficult?\n• One question I still have.\n\nReflection is how a busy week becomes real learning.',
      glossary: [
        { word: 'reflection', en: 'Thinking carefully back about what you did', te: 'ఆలోచన / పునరాలోచన' },
      ],
      parentSuggestion: {
        tip: 'Make it cosy — bedtime, on the sofa, no pressure. Just 3 sentences. Reflection is the single habit that separates good learners from great ones.',
        questions: [
          'What was the BEST part of your week?',
          'What was the HARDEST part — and what did you do about it?',
        ],
      },
      promptText: 'Write your reflection for this week.',
      interactionType: 'reflect',
    },
  ],
};

/* ============================================================
   3) EARTH DAY 2026 — interactive activities
   ============================================================ */

const earthDay: Lesson = {
  id: 'earth-day',
  title: 'Earth Day 2026',
  subtitle: 'Sort waste · discover facts · make rules',
  kid: 'ishanvi',
  subject: 'projects',
  hasTelugu: true,
  icon: '🌍',
  cards: [
    /* ---------- Intro ---------- */
    {
      id: 'ed-0',
      lessonId: 'earth-day',
      title: 'What is Earth Day?',
      subtitle: 'Every year on April 22',
      englishContent:
        'Earth Day is celebrated every year on April 22. It is a reminder to celebrate the wonderful planet we live on — and to safeguard it for the future.\n\nIn these activities you will sort waste the right way, discover amazing facts about Earth, and become a city leader who makes rules to protect nature.',
      teluguContent:
        'ప్రతి సంవత్సరం ఏప్రిల్ 22న ఎర్త్ డే (భూమి దినోత్సవం) జరుపుకుంటారు. మనం నివసించే అద్భుతమైన గ్రహాన్ని జరుపుకోవడానికి, దాన్ని భవిష్యత్తు కోసం కాపాడుకోవడానికి ఇది ఒక గుర్తు.\n\nఈ కార్యకలాపాల్లో — నువ్వు చెత్తను సరిగ్గా వేరు చేస్తావు, భూమి గురించి అద్భుతమైన విషయాలు తెలుసుకుంటావు, ప్రకృతిని కాపాడే నియమాలు చేసే నగర నాయకుడివి అవుతావు.',
      glossary: [
        { word: 'safeguard',   en: 'To protect and keep safe',          te: 'కాపాడడం' },
        { word: 'environment', en: 'The world around us — air, water, land', te: 'పర్యావరణం' },
      ],
      parentSuggestion: {
        tip: 'Earth Day is a great hook for real habits. Pick ONE family action this week — a cloth bag, switching off taps, a small plant — and tie it to what she learns here.',
        questions: [
          'What is your favourite thing about our planet?',
          'What is one small thing OUR family could do for the Earth?',
        ],
      },
      promptText: 'On which date is Earth Day celebrated?',
      interactionType: 'choice-cards',
      choices: [
        { id: 'a', label: 'April 22',   isCorrect: true },
        { id: 'b', label: 'January 1',  isCorrect: false },
        { id: 'c', label: 'August 15',  isCorrect: false },
      ],
      hint: 'It is in April — the 22nd!',
    },

    /* ---------- Sort the Waste × 3 rounds ---------- */
    {
      id: 'ed-waste-1',
      lessonId: 'earth-day',
      title: 'Sort the Waste — Round 1',
      subtitle: 'Green bin or Blue bin?',
      englishContent:
        'Using the right dustbin helps us manage waste better.\n\n🟢 GREEN bin — Wet / Biodegradable waste (rots naturally: food, leaves).\n🔵 BLUE bin — Dry / Recyclable waste (can be remade: plastic, glass, paper).\n\nMatch each item to the correct bin.',
      teluguContent:
        'సరైన చెత్తబుట్టను ఉపయోగించడం వల్ల చెత్తను బాగా నిర్వహించవచ్చు.\n\n🟢 ఆకుపచ్చ బుట్ట — తడి / కుళ్ళిపోయే చెత్త (ఆహారం, ఆకులు).\n🔵 నీలం బుట్ట — పొడి / పునర్వినియోగ చెత్త (ప్లాస్టిక్, గాజు, కాగితం).',
      glossary: [
        { word: 'Biodegradable', en: 'Breaks down (rots) naturally in soil', te: 'జీవ-విచ్ఛేదనం అయ్యే' },
        { word: 'Recyclable',    en: 'Can be made into new things',          te: 'పునర్వినియోగమయ్యే' },
      ],
      parentSuggestion: {
        tip: 'Do it for real: stand at your two bins at home and sort one handful of waste together. The hands-on version sticks far better than the screen.',
        questions: [
          'Why does a banana peel go in the GREEN bin?',
          'What could an old glass jar be turned into?',
        ],
      },
      promptText: 'Match each item to the correct bin.',
      interactionType: 'match-pairs',
      pairs: [
        { id: 'w1', left: 'Banana peel',          right: '🟢 Green bin' },
        { id: 'w2', left: 'Plastic water bottle', right: '🔵 Blue bin' },
        { id: 'w3', left: 'Eggshells',            right: '🟢 Green bin' },
        { id: 'w4', left: 'Old magazines',        right: '🔵 Blue bin' },
        { id: 'w5', left: 'Dried flowers',        right: '🟢 Green bin' },
        { id: 'w6', left: 'Glass jar',            right: '🔵 Blue bin' },
      ],
    },
    {
      id: 'ed-waste-2',
      lessonId: 'earth-day',
      title: 'Sort the Waste — Round 2',
      subtitle: 'A little trickier!',
      englishContent:
        'Great work! Here is a harder set. Remember:\n\n🟢 GREEN = wet, came-from-living-things, rots away.\n🔵 BLUE = dry, man-made, can be recycled.',
      teluguContent:
        'భలే చేశావు! ఇది కొంచెం కష్టమైనది. గుర్తుంచుకో:\n\n🟢 ఆకుపచ్చ = తడి, జీవుల నుండి వచ్చినవి, కుళ్ళిపోయేవి.\n🔵 నీలం = పొడి, మనుషులు తయారు చేసినవి, రీసైకిల్ చేయగలిగేవి.',
      glossary: [
        { word: 'compost', en: 'Natural fertiliser made from rotted food waste', te: 'కంపోస్ట్ (ఎరువు)' },
      ],
      parentSuggestion: {
        tip: 'Cardboard and newspaper are recyclable (blue) even though they are made from trees — because they are dry and processed. This trips many kids up; talk it through.',
        questions: [
          'Is a cardboard box wet or dry waste?',
          'What happens to the apple core if we bury it in soil?',
        ],
      },
      promptText: 'Match each item to the correct bin.',
      interactionType: 'match-pairs',
      pairs: [
        { id: 'w1', left: 'Leftover rice',   right: '🟢 Green bin' },
        { id: 'w2', left: 'Fruit peels',     right: '🟢 Green bin' },
        { id: 'w3', left: 'Cardboard box',   right: '🔵 Blue bin' },
        { id: 'w4', left: 'Cold drink cans', right: '🔵 Blue bin' },
        { id: 'w5', left: 'Old newspapers',  right: '🔵 Blue bin' },
        { id: 'w6', left: 'Apple core',      right: '🟢 Green bin' },
      ],
    },
    {
      id: 'ed-waste-3',
      lessonId: 'earth-day',
      title: 'Sort the Waste — Round 3',
      subtitle: 'The expert level!',
      englishContent:
        'Last round — you are a recycling expert now! Tricky ones: peanut shells and corn cobs ROT (green), but aluminium foil and plastic caps are RECYCLED (blue).',
      teluguContent:
        'చివరి రౌండ్ — ఇప్పుడు నువ్వు రీసైక్లింగ్ నిపుణుడివి! కష్టమైనవి: వేరుశెనగ పొట్టు, మొక్కజొన్న కంకులు కుళ్ళిపోతాయి (ఆకుపచ్చ); కానీ అల్యూమినియం ఫాయిల్, ప్లాస్టిక్ మూతలు రీసైకిల్ అవుతాయి (నీలం).',
      glossary: [
        { word: 'aluminium', en: 'A light, shiny metal used in foil and cans', te: 'అల్యూమినియం' },
      ],
      parentSuggestion: {
        tip: 'A wooden toothpick is green (wood rots), but an empty chips packet is blue (foil/plastic). The material matters, not the size. Use this to explain "what is it made of?"',
        questions: [
          'Peanut shells — green or blue? Why?',
          'What is an empty chips packet made of?',
        ],
      },
      promptText: 'Match each item to the correct bin.',
      interactionType: 'match-pairs',
      pairs: [
        { id: 'w1', left: 'Peanut shells',       right: '🟢 Green bin' },
        { id: 'w2', left: 'Aluminium foil',      right: '🔵 Blue bin' },
        { id: 'w3', left: 'Corn cobs',           right: '🟢 Green bin' },
        { id: 'w4', left: 'Plastic bottle caps', right: '🔵 Blue bin' },
        { id: 'w5', left: 'Wooden toothpick',    right: '🟢 Green bin' },
        { id: 'w6', left: 'Empty chips packet',  right: '🔵 Blue bin' },
      ],
    },

    /* ---------- Fill to Discover — themed fact quizzes ---------- */
    {
      id: 'ed-forests',
      lessonId: 'earth-day',
      title: 'Discover: Forests & Trees',
      subtitle: 'The green lungs of our planet',
      englishContent:
        'Trees and forests keep Earth alive — they give oxygen, cool the air, and hold the soil together. Try this knowledge check, then find the hidden idea!',
      teluguContent:
        'చెట్లు, అడవులు భూమిని బ్రతికిస్తాయి — అవి ఆక్సిజన్ ఇస్తాయి, గాలిని చల్లబరుస్తాయి, మట్టిని కలిపి ఉంచుతాయి.',
      glossary: [
        { word: 'rainforest',    en: 'A thick, wet forest full of life',          te: 'వర్షారణ్యం' },
        { word: 'reforestation', en: 'Planting new trees where they were cut',    te: 'పునర్వనీకరణ' },
        { word: 'ozone',         en: 'A layer of air that blocks the Sun\'s harmful rays', te: 'ఓజోన్' },
      ],
      parentSuggestion: {
        tip: 'These facts come straight from her Earth Day worksheet. After the quiz, step outside and look at a real tree — name its trunk, roots, and the shade it makes.',
        questions: [
          'Why is the Amazon called the "lungs of the Earth"?',
          'What do roots do for a plant?',
          'Why should we plant new trees (reforestation)?',
        ],
      },
      quiz: [
        {
          id: 'edf-q1',
          question: 'The Amazon is known as the "______ of the Earth".',
          choices: [
            { id: 'a', label: 'Lungs',   isCorrect: true },
            { id: 'b', label: 'Heart',   isCorrect: false },
            { id: 'c', label: 'Stomach', isCorrect: false },
          ],
          hint: 'Trees give oxygen — like the part of YOUR body you breathe with.',
        },
        {
          id: 'edf-q2',
          question: 'Earth\'s ______ layer protects us from the Sun\'s harmful rays.',
          choices: [
            { id: 'a', label: 'Ozone',  isCorrect: true },
            { id: 'b', label: 'Cloud',  isCorrect: false },
            { id: 'c', label: 'Water',  isCorrect: false },
          ],
        },
        {
          id: 'edf-q3',
          question: 'Planting new trees where forests were cut down is called…',
          choices: [
            { id: 'a', label: 'Reforestation', isCorrect: true },
            { id: 'b', label: 'Pollution',     isCorrect: false },
            { id: 'c', label: 'Recycling',     isCorrect: false },
          ],
        },
        {
          id: 'edf-q4',
          question: 'Which part of a plant is under the soil and absorbs water?',
          choices: [
            { id: 'a', label: 'Roots',   isCorrect: true },
            { id: 'b', label: 'Leaves',  isCorrect: false },
            { id: 'c', label: 'Flowers', isCorrect: false },
          ],
        },
        {
          id: 'edf-q5',
          question: 'How do trees help the temperature of the Earth?',
          choices: [
            { id: 'a', label: 'They give shade and release water vapour', isCorrect: true },
            { id: 'b', label: 'They make the air hotter',                  isCorrect: false },
            { id: 'c', label: 'They block all sunlight forever',           isCorrect: false },
          ],
        },
      ],
      promptText: 'Hidden idea: unscramble these to name what flows through forests — R-I-V-E-R-S. Write what rivers give us.',
      interactionType: 'reflect',
    },
    {
      id: 'ed-water',
      lessonId: 'earth-day',
      title: 'Discover: Water on Earth',
      subtitle: 'Oceans, ice, and the water cycle',
      englishContent:
        'Water covers most of our planet and moves in a never-ending cycle. Without it, nothing could live. Test your water knowledge!',
      teluguContent:
        'నీరు మన గ్రహంలో ఎక్కువ భాగాన్ని ఆవరించి ఉంటుంది, ఎప్పటికీ ఆగని చక్రంలో తిరుగుతుంది. నీరు లేకుండా ఏదీ బ్రతకలేదు.',
      glossary: [
        { word: 'water cycle', en: 'Water rising to clouds and falling as rain, again and again', te: 'జలచక్రం' },
        { word: 'glacier',     en: 'A slow-moving river of ice',     te: 'హిమానీనదం' },
        { word: 'geyser',      en: 'A natural spring that shoots out hot water and steam', te: 'గీజర్' },
      ],
      parentSuggestion: {
        tip: 'Show the water cycle with a real example: a boiling kettle (water → steam → cools on a lid → drops back as "rain"). One minute, unforgettable.',
        questions: [
          'How much of Earth\'s surface is covered by ocean?',
          'What is the difference between a glacier and a river?',
        ],
      },
      quiz: [
        {
          id: 'edw-q1',
          question: 'The ocean covers about how much of Earth\'s surface?',
          choices: [
            { id: 'a', label: '71 percent', isCorrect: true },
            { id: 'b', label: '10 percent', isCorrect: false },
            { id: 'c', label: '30 percent', isCorrect: false },
          ],
          hint: 'It is more than half — about three quarters!',
        },
        {
          id: 'edw-q2',
          question: 'The ______ is how water goes from the ground to clouds and falls back as rain.',
          choices: [
            { id: 'a', label: 'Water cycle', isCorrect: true },
            { id: 'b', label: 'Tide',         isCorrect: false },
            { id: 'c', label: 'Geyser',       isCorrect: false },
          ],
        },
        {
          id: 'edw-q3',
          question: 'A slow-moving river of ice and a source of freshwater is a…',
          choices: [
            { id: 'a', label: 'Glacier', isCorrect: true },
            { id: 'b', label: 'Desert',  isCorrect: false },
            { id: 'c', label: 'Plateau', isCorrect: false },
          ],
        },
        {
          id: 'edw-q4',
          question: '______ energy is made from the movement of ocean tides.',
          choices: [
            { id: 'a', label: 'Tidal', isCorrect: true },
            { id: 'b', label: 'Solar', isCorrect: false },
            { id: 'c', label: 'Wind',  isCorrect: false },
          ],
        },
        {
          id: 'edw-q5',
          question: 'A natural spring that erupts hot water and steam is a…',
          choices: [
            { id: 'a', label: 'Geyser',  isCorrect: true },
            { id: 'b', label: 'Glacier', isCorrect: false },
            { id: 'c', label: 'Ocean',   isCorrect: false },
          ],
        },
      ],
      promptText: 'The hidden word here is WATER. Write one way YOU can save water at home.',
      interactionType: 'reflect',
    },
    {
      id: 'ed-helpers',
      lessonId: 'earth-day',
      title: 'Discover: Nature\'s Helpers',
      subtitle: 'Tiny animals, huge jobs',
      englishContent:
        'Some of Earth\'s most important workers are small! Worms, bees, ants, and even vultures keep nature healthy. Meet the helpers.',
      teluguContent:
        'భూమి యొక్క అత్యంత ముఖ్యమైన పనివారిలో కొందరు చాలా చిన్నవారు! పురుగులు, తేనెటీగలు, చీమలు, రాబందులు కూడా ప్రకృతిని ఆరోగ్యంగా ఉంచుతాయి.',
      glossary: [
        { word: 'pollinators', en: 'Animals that carry pollen so plants make seeds & fruit', te: 'పరాగసంపర్కకారులు' },
        { word: 'earthworms',  en: 'Worms that break down dead plants into rich soil',        te: 'వానపాములు' },
        { word: 'vultures',    en: 'Birds that clean up dead animals',                          te: 'రాబందులు' },
      ],
      parentSuggestion: {
        tip: 'Reframe "yucky" animals as heroes: worms make soil, vultures stop disease, bees grow our food. This builds respect for the whole web of life.',
        questions: [
          'Why are earthworms called "nature\'s recyclers"?',
          'What would happen to flowers without bees and butterflies?',
        ],
      },
      quiz: [
        {
          id: 'edh-q1',
          question: '______ are nature\'s recyclers — they break down dead plants and waste.',
          choices: [
            { id: 'a', label: 'Earthworms', isCorrect: true },
            { id: 'b', label: 'Sharks',     isCorrect: false },
            { id: 'c', label: 'Eagles',     isCorrect: false },
          ],
          hint: 'They live in soil and wriggle!',
        },
        {
          id: 'edh-q2',
          question: 'Bees and ______ are pollinators that help plants make seeds and fruit.',
          choices: [
            { id: 'a', label: 'Butterflies', isCorrect: true },
            { id: 'b', label: 'Spiders',     isCorrect: false },
            { id: 'c', label: 'Snakes',      isCorrect: false },
          ],
        },
        {
          id: 'edh-q3',
          question: 'Which birds are "guardians of the environment" because they clean up dead animals?',
          choices: [
            { id: 'a', label: 'Vultures', isCorrect: true },
            { id: 'b', label: 'Parrots',  isCorrect: false },
            { id: 'c', label: 'Pigeons',  isCorrect: false },
          ],
        },
        {
          id: 'edh-q4',
          question: 'Which insects are "nature\'s architects", building complex mounds?',
          choices: [
            { id: 'a', label: 'Ants',  isCorrect: true },
            { id: 'b', label: 'Flies', isCorrect: false },
            { id: 'c', label: 'Moths', isCorrect: false },
          ],
        },
        {
          id: 'edh-q5',
          question: 'The green sea ______ population grew ~30% thanks to conservation efforts.',
          choices: [
            { id: 'a', label: 'Turtle',  isCorrect: true },
            { id: 'b', label: 'Dolphin', isCorrect: false },
            { id: 'c', label: 'Whale',   isCorrect: false },
          ],
        },
      ],
      promptText: 'Which of these helpers is your favourite, and why? Write 2 sentences.',
      interactionType: 'reflect',
    },
    {
      id: 'ed-structure',
      lessonId: 'earth-day',
      title: 'Discover: Earth\'s Amazing Structure',
      subtitle: 'From the core to the crust',
      englishContent:
        'Our planet has hot insides, frozen lands, tall flat places, and an invisible line around its middle. Explore the parts of the Earth!',
      teluguContent:
        'మన గ్రహానికి వేడి లోపలి భాగం, గడ్డకట్టిన భూములు, ఎత్తైన చదునైన ప్రాంతాలు, మధ్యలో కనిపించని గీత ఉన్నాయి.',
      glossary: [
        { word: 'core',       en: 'The very centre of the Earth — extremely hot',  te: 'భూకేంద్రం' },
        { word: 'crust',      en: 'The thin outer layer of the Earth we live on',  te: 'భూపటలం' },
        { word: 'equator',    en: 'An imaginary line around the middle of the Earth', te: 'భూమధ్యరేఖ' },
        { word: 'permafrost', en: 'Ground that stays frozen all year',             te: 'శాశ్వత మంచు' },
      ],
      parentSuggestion: {
        tip: 'Cut an apple in half to show Earth\'s layers: skin = crust, flesh = mantle, core = core. A 30-second demo that makes the words real.',
        questions: [
          'What is hotter — the core or the crust?',
          'What is the equator, and is it hot or cold there?',
        ],
      },
      quiz: [
        {
          id: 'eds-q1',
          question: 'Earth\'s centre is called the ______ and is as hot as the Sun\'s surface.',
          choices: [
            { id: 'a', label: 'Core',  isCorrect: true },
            { id: 'b', label: 'Crust', isCorrect: false },
            { id: 'c', label: 'Cloud', isCorrect: false },
          ],
        },
        {
          id: 'eds-q2',
          question: 'The thin upper layer of Earth\'s surface is the…',
          choices: [
            { id: 'a', label: 'Crust', isCorrect: true },
            { id: 'b', label: 'Core',  isCorrect: false },
            { id: 'c', label: 'Ocean', isCorrect: false },
          ],
        },
        {
          id: 'eds-q3',
          question: 'The imaginary line that divides Earth into two halves (hot & humid) is the…',
          choices: [
            { id: 'a', label: 'Equator', isCorrect: true },
            { id: 'b', label: 'Glacier', isCorrect: false },
            { id: 'c', label: 'Trunk',   isCorrect: false },
          ],
        },
        {
          id: 'eds-q4',
          question: 'A large area that is flat and high above sea level is a…',
          choices: [
            { id: 'a', label: 'Plateau', isCorrect: true },
            { id: 'b', label: 'Desert',  isCorrect: false },
            { id: 'c', label: 'Ocean',   isCorrect: false },
          ],
        },
        {
          id: 'eds-q5',
          question: '______ create new land by erupting molten magma that hardens after cooling.',
          choices: [
            { id: 'a', label: 'Volcanoes', isCorrect: true },
            { id: 'b', label: 'Rivers',    isCorrect: false },
            { id: 'c', label: 'Clouds',    isCorrect: false },
          ],
        },
        {
          id: 'eds-q6',
          question: 'Permanently frozen land found on or under Earth\'s surface is called…',
          choices: [
            { id: 'a', label: 'Permafrost', isCorrect: true },
            { id: 'b', label: 'Desert',     isCorrect: false },
            { id: 'c', label: 'Plateau',    isCorrect: false },
          ],
        },
      ],
      promptText: 'Which Earth fact surprised you the most? Write it in your own words.',
      interactionType: 'reflect',
    },

    /* ---------- Clean energy reveals ---------- */
    {
      id: 'ed-energy',
      lessonId: 'earth-day',
      title: 'Did You Know? Clean & Green',
      subtitle: 'Energy, air, and recycling',
      englishContent:
        'Some of Earth\'s best ideas are clean and never run out. Test these — they all come from your Earth Day worksheet.',
      teluguContent:
        'భూమి యొక్క కొన్ని ఉత్తమ ఆలోచనలు పరిశుభ్రమైనవి, ఎప్పటికీ అయిపోవు.',
      glossary: [
        { word: 'solar power',    en: 'Electricity made from sunlight',             te: 'సౌర శక్తి' },
        { word: 'compost',        en: 'Natural fertiliser from rotted food waste',  te: 'కంపోస్ట్' },
        { word: 'carbon dioxide', en: 'The gas plants breathe in',                  te: 'కార్బన్ డయాక్సైడ్' },
        { word: 'greenhouse',     en: 'The blanket of air that traps heat & keeps Earth warm', te: 'గ్రీన్‌హౌస్' },
      ],
      parentSuggestion: {
        tip: 'Point out a real solar panel (calculator, street light, rooftop) and a real compost heap or kitchen scraps bin. Connecting the word to a real object makes it permanent.',
        questions: [
          'What can we make from the Sun\'s rays?',
          'What gas do plants breathe in that WE breathe out?',
        ],
      },
      quiz: [
        {
          id: 'ede-q1',
          question: 'Electricity made from sunlight is called…',
          choices: [
            { id: 'a', label: 'Solar power', isCorrect: true },
            { id: 'b', label: 'Tidal power', isCorrect: false },
            { id: 'c', label: 'Coal power',  isCorrect: false },
          ],
        },
        {
          id: 'ede-q2',
          question: '______ is the fertiliser made from food waste that helps plants grow.',
          choices: [
            { id: 'a', label: 'Compost',  isCorrect: true },
            { id: 'b', label: 'Plastic',  isCorrect: false },
            { id: 'c', label: 'Concrete', isCorrect: false },
          ],
          hint: 'You make it from kitchen scraps and leaves.',
        },
        {
          id: 'ede-q3',
          question: 'Which gas do plants breathe IN?',
          choices: [
            { id: 'a', label: 'Carbon dioxide', isCorrect: true },
            { id: 'b', label: 'Oxygen',         isCorrect: false },
            { id: 'c', label: 'Helium',         isCorrect: false },
          ],
        },
        {
          id: 'ede-q4',
          question: 'Earth\'s atmosphere is nicknamed the "______" because it traps heat and keeps us warm.',
          choices: [
            { id: 'a', label: 'Greenhouse', isCorrect: true },
            { id: 'b', label: 'Icebox',     isCorrect: false },
            { id: 'c', label: 'Furnace',    isCorrect: false },
          ],
        },
      ],
      promptText: 'Tap to reveal a clean-energy fact.',
      interactionType: 'tap-reveal',
      revealAnswer: '☀️ The Sun gives us solar power — clean energy that never runs out! Plants give us oxygen, worms give us soil, and Earth gives us everything. Our job is to protect it.',
    },

    /* ---------- Make the Rules ---------- */
    {
      id: 'ed-rules',
      lessonId: 'earth-day',
      title: 'Make the Rules!',
      subtitle: 'You are the leader of your city',
      englishContent:
        'Imagine YOU are the leader of your city. You want a clean and healthy environment for the future. Set goals and make rules to reach them.\n\nHere are example goals and rules to inspire you:\n\n🌳 Goal: Plant more trees\n   • Every student plants a tree when they join school; the family cares for it.\n   • Planting trees is required for building permits (2-room flat = 2 trees).\n\n☀️ Goal: Use more renewable energy\n   • New buildings get solar-panel-ready roofs.\n   • Rainwater harvesting in every home.\n\n💡 Goal: Save more electricity\n   • Motion sensors switch off lights/fans in empty rooms.\n   • Only sell energy-efficient appliances.',
      teluguContent:
        'నువ్వే నీ నగరానికి నాయకుడివి అనుకో. భవిష్యత్తు కోసం పరిశుభ్రమైన, ఆరోగ్యకరమైన వాతావరణం కావాలి. లక్ష్యాలు పెట్టుకుని, వాటిని చేరడానికి నియమాలు చేయి.\n\nనీకు స్ఫూర్తి కోసం కొన్ని ఉదాహరణలు:\n\n🌳 లక్ష్యం: ఎక్కువ చెట్లు నాటడం\n   • ప్రతి విద్యార్థి స్కూల్‌లో చేరినప్పుడు ఒక చెట్టు నాటాలి.\n\n☀️ లక్ష్యం: పునరుత్పాదక శక్తి వాడడం\n   • కొత్త భవనాలకు సోలార్ ప్యానెల్స్, వర్షపు నీటి సంరక్షణ.\n\n💡 లక్ష్యం: విద్యుత్ ఆదా చేయడం\n   • ఖాళీ గదుల్లో లైట్లు ఆటోమేటిక్‌గా ఆగిపోవాలి.',
      glossary: [
        { word: 'renewable',  en: 'Energy that never runs out (sun, wind, water)', te: 'పునరుత్పాదక' },
        { word: 'harvesting', en: 'Collecting and saving something useful',         te: 'సేకరించడం' },
        { word: 'efficient',  en: 'Doing a job using less energy or waste',         te: 'సమర్థవంతమైన' },
      ],
      parentSuggestion: {
        tip: 'There is no wrong answer. Push for the WHY behind each rule — "and how would that help the Earth?" — to build cause-and-effect thinking. She can write more than one goal.',
        questions: [
          'Which of your rules would help the Earth the most? Why?',
          'Who in the city would need to follow your rule?',
          'Could our family follow one of your rules starting today?',
        ],
      },
      promptText: 'Write ONE goal and two rules you would make as city leader.',
      interactionType: 'reflect',
    },
  ],
};

/* ============================================================
   EXPORT
   ============================================================ */

export const fixtureLessons: Lesson[] = [
  stories,
  summerProject,
  earthDay,
  numberFamilies,
];
