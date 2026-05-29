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
          { id: 'b', label: 'Kindness, courage, and doing right', isCorrect: true },
          { id: 'c', label: 'Being the boss of everyone',         isCorrect: false },
        ],
        hint: 'Look at the words: kindness, brave, helping, sharing.',
      },
      {
        id: 's-1-q2',
        question: 'Power grows when you…',
        choices: [
          { id: 'a', label: 'Give up when it is hard',           isCorrect: false },
          { id: 'b', label: 'Learn, practice, and try again',     isCorrect: true },
          { id: 'c', label: 'Shout louder than everyone',         isCorrect: false },
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
          { id: 'a', label: 'To make Vayu happy again',   isCorrect: true },
          { id: 'b', label: 'Because he won a race',       isCorrect: false },
          { id: 'c', label: 'Because he asked nicely',     isCorrect: false },
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
          { id: 'a', label: 'Says',     isCorrect: false },
          { id: 'b', label: 'Does',     isCorrect: true },
          { id: 'c', label: 'Wears',    isCorrect: false },
        ],
        hint: 'Actions define you, not just words.',
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
          { id: 'a', label: 'Doc McStuffins',     isCorrect: false },
          { id: 'b', label: 'Sid the Science Kid', isCorrect: true },
          { id: 'c', label: 'WordGirl',            isCorrect: false },
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
        question: 'What two qualities help Jack and Annie?',
        choices: [
          { id: 'a', label: 'Speed and shouting',     isCorrect: false },
          { id: 'b', label: 'Curiosity and bravery',  isCorrect: true },
          { id: 'c', label: 'Money and gadgets',      isCorrect: false },
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
          { id: 'a', label: 'Small clues',  isCorrect: true },
          { id: 'b', label: 'His hat',       isCorrect: false },
          { id: 'c', label: 'Loud noises',   isCorrect: false },
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
          { id: 'a', label: 'Fought with him',                          isCorrect: false },
          { id: 'b', label: 'Used cleverness — the lion saw himself',   isCorrect: true },
          { id: 'c', label: 'Ran away and hid',                          isCorrect: false },
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
        question: 'What clever lie did the monkey tell the crocodile?',
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
          { id: 'a', label: 'His speed',                    isCorrect: false },
          { id: 'b', label: 'Staying calm and being clever', isCorrect: true },
          { id: 'c', label: 'A magic stick',                 isCorrect: false },
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
          { id: 'a', label: 'Quiet snack time',                    isCorrect: false },
          { id: 'b', label: 'Debate where students discuss right and wrong', isCorrect: true },
          { id: 'c', label: 'New library',                          isCorrect: false },
        ],
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
          { id: 'b', label: 'Winning every game',                                   isCorrect: false },
          { id: 'c', label: 'Knowing all the answers',                              isCorrect: false },
        ],
      },
      {
        id: 's-12-q2',
        question: 'Alumni are…',
        choices: [
          { id: 'a', label: 'New students',                  isCorrect: false },
          { id: 'b', label: 'Past students of a school',     isCorrect: true },
          { id: 'c', label: 'Teachers only',                  isCorrect: false },
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
        question: 'What does the SCHOOL HOUSE symbolically serve as?',
        choices: [
          { id: 'a', label: 'A snack bar',                          isCorrect: false },
          { id: 'b', label: 'The Constitution of Silver Oaks',      isCorrect: true },
          { id: 'c', label: 'A playground',                          isCorrect: false },
        ],
      },
      {
        id: 's-13-q2',
        question: 'In Junior school, what builds the character?',
        choices: [
          { id: 'a', label: 'Learner Profile',          isCorrect: true },
          { id: 'b', label: 'Lunch boxes',               isCorrect: false },
          { id: 'c', label: 'TV cartoons',                isCorrect: false },
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
          { id: 'a', label: 'Rabindranath Tagore',  isCorrect: true },
          { id: 'b', label: 'Mahatma Gandhi',        isCorrect: false },
          { id: 'c', label: 'Stephen Covey',          isCorrect: false },
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
          { id: 'a', label: 'Curiosity to learn',     isCorrect: true },
          { id: 'b', label: 'Strength of muscles',    isCorrect: false },
          { id: 'c', label: 'Speed in running',        isCorrect: false },
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
          { id: 'a', label: 'Only winning',                          isCorrect: false },
          { id: 'b', label: 'Fitness, focus, team spirit, win AND lose', isCorrect: true },
          { id: 'c', label: 'Just running fast',                      isCorrect: false },
        ],
      },
      {
        id: 's-17-q2',
        question: 'Ramleela is called the festival of…',
        choices: [
          { id: 'a', label: 'Good habits',  isCorrect: true },
          { id: 'b', label: 'Sweets',        isCorrect: false },
          { id: 'c', label: 'Marbles',       isCorrect: false },
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
          { id: 'a', label: 'Mahatma Gandhi',        isCorrect: true },
          { id: 'b', label: 'Rabindranath Tagore',   isCorrect: false },
          { id: 'c', label: 'Sunita Williams',        isCorrect: false },
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
          { id: 'a', label: 'To save and protect',  isCorrect: true },
          { id: 'b', label: 'To collect coins',      isCorrect: false },
          { id: 'c', label: 'To run fast',            isCorrect: false },
        ],
      },
      {
        id: 's-20-q2',
        question: 'Which Culture word describes "how they express"?',
        choices: [
          { id: 'a', label: 'Appreciate',  isCorrect: true },
          { id: 'b', label: 'Conserve',     isCorrect: false },
          { id: 'c', label: 'Collaborate',  isCorrect: false },
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
          { id: 'a', label: 'Charity',         isCorrect: false },
          { id: 'b', label: 'A responsibility', isCorrect: true },
          { id: 'c', label: 'A game',           isCorrect: false },
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
          { id: 'a', label: 'Only kind men',         isCorrect: false },
          { id: 'b', label: 'All the people on Earth', isCorrect: true },
          { id: 'c', label: 'Mans Animals',           isCorrect: false },
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
          { id: 'a', label: 'Acting without thinking', isCorrect: true },
          { id: 'b', label: 'Acting bravely and wisely', isCorrect: false },
          { id: 'c', label: 'Acting kindly',              isCorrect: false },
        ],
      },
      {
        id: 's-24-q2',
        question: 'True bravery is…',
        choices: [
          { id: 'a', label: 'Doing anything dangerous',         isCorrect: false },
          { id: 'b', label: 'Knowing when and how to act wisely', isCorrect: true },
          { id: 'c', label: 'Never being scared',                 isCorrect: false },
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
    ],
    promptText: 'You are growing too! What "beautiful thing" do you want to become?',
    interactionType: 'reflect',
  },
];

const stories: Lesson = {
  id: 'stories',
  title: 'My Story Book',
  subtitle: '25 stories · summer reading + reflection',
  section: 'stories',
  hasTelugu: true,
  icon: '📖',
  cards: storyCards,
};

/* ============================================================
   2) SUMMER VACATION PROJECT — task checklists
   ============================================================ */

const summerProject: Lesson = {
  id: 'summer-project',
  title: 'Summer Vacation Project',
  subtitle: 'Grade 4 · 80 hours of fun learning',
  section: 'projects',
  hasTelugu: false,
  icon: '☀️',
  cards: [
    {
      id: 'sp-1',
      lessonId: 'summer-project',
      title: 'Math Summer Goals',
      englishContent:
        'Math is everywhere — in cooking, shopping, building, drawing. This summer, become a Math Detective.\n\nTick each goal as you finish it.',
      glossary: [
        { word: 'patterns', en: 'Things that repeat in a smart way', te: 'నమూనాలు' },
        { word: 'symmetry', en: 'Same shape on both sides',           te: 'సమమితి' },
        { word: 'multiplication', en: 'Adding the same number many times', te: 'గుణకారం' },
      ],
      parentSuggestion: {
        tip: 'Tick boxes are motivating. Help her finish ONE per day — small consistent wins build the habit.',
        questions: [
          'Which goal is your favourite? Why?',
          'Which one will you do first today?',
        ],
      },
      promptText: 'Check off each Math goal as you complete it.',
      interactionType: 'checklist',
      checklist: [
        { id: 'm1', label: '🔍 Pattern Hunt — find patterns at home and create your own' },
        { id: 'm2', label: '🍋 Real-Life Math Chef — make a recipe and add up the ingredients' },
        { id: 'm3', label: '🔺 Shape Hunt — find a circle, square, rectangle, triangle' },
        { id: 'm4', label: '🦋 Mirror Magic — draw with 2 lines of symmetry' },
        { id: 'm5', label: '📖 Math Story Creator — write & solve 2 word problems' },
        { id: 'm6', label: '🔢 Number Detective — break 5 big numbers into place value' },
        { id: 'm7', label: '✖️ Multiplication Magic Book — one page per table (2 to 15)' },
      ],
    },
    {
      id: 'sp-2',
      lessonId: 'summer-project',
      title: 'English Summer Goals',
      englishContent:
        'Become a Reading Adventurer and Word Explorer!\n\nTick each goal as you finish it.',
      glossary: [
        { word: 'Adventurer', en: 'Someone who goes on adventures', te: 'సాహసికుడు' },
        { word: 'Vocabulary', en: 'All the words you know',          te: 'పదజ్ఞానం' },
      ],
      parentSuggestion: {
        tip: 'Reading 10 minutes a day beats 1 hour once a week. Help her find books she actually likes.',
        questions: [
          'What book do you want to read first?',
          'Pick 1 new word to learn today.',
        ],
      },
      promptText: 'Check off each English goal.',
      interactionType: 'checklist',
      checklist: [
        { id: 'e1', label: '📕 Reading Adventure Passport — one page per book read' },
        { id: 'e2', label: '🔤 Word Explorer — 4–5 new words each week' },
        { id: 'e3', label: '✏️ Sentence Builders — write 5–6 fancy sentences' },
        { id: 'e4', label: '☀️ Magic Moments — describe a special day in 10–12 sentences' },
        { id: 'e5', label: '🎤 Be a Change-Maker — give a 1–2 minute speech' },
      ],
    },
    {
      id: 'sp-3',
      lessonId: 'summer-project',
      title: 'Science Summer Goals',
      englishContent:
        'You are a young scientist this summer! Three weekly explorations:',
      glossary: [
        { word: 'Curiosity',   en: 'Wanting to find out',           te: 'ఆసక్తి' },
        { word: 'Observation', en: 'Looking carefully and noticing', te: 'పరిశీలన' },
        { word: 'Motion',      en: 'Movement of an object',          te: 'చలనం' },
      ],
      parentSuggestion: {
        tip: 'Outdoor observation is the best science. Help her use her senses — see, hear, smell, touch.',
        questions: [
          'What did you observe outside today?',
          'What still puzzles you?',
        ],
      },
      promptText: 'Check off each weekly exploration.',
      interactionType: 'checklist',
      checklist: [
        { id: 's1', label: '🔭 Week 1: Curiosity Capsule — observe nature 3 times this week' },
        { id: 's2', label: '🌗 Week 2: Shadow Safari — draw your shadow morning, noon, evening' },
        { id: 's3', label: '⚽ Week 3: Motion in Action — record cause & effect (kick a ball, push a toy)' },
        { id: 's4', label: '📝 Reflect each week — "I discovered…" "I still wonder…"' },
        { id: 's5', label: '🎤 Final presentation — poster, slides, scrapbook, or video' },
      ],
    },
    {
      id: 'sp-4',
      lessonId: 'summer-project',
      title: 'My Weekly Reflection',
      englishContent:
        'Each week, think about your week. Write down:\n• What did I learn?\n• What was difficult?\n• One question I still have.',
      glossary: [
        { word: 'reflection', en: 'Thinking carefully back about something', te: 'ఆలోచన' },
      ],
      parentSuggestion: {
        tip: 'Reflection turns "doing" into "learning". 5 minutes a week is enough — make it cozy (bedtime, cuddle).',
        questions: [
          'What was the BEST part of this week?',
          'What was the HARDEST part?',
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
  subtitle: 'Activities for our planet',
  section: 'projects',
  hasTelugu: false,
  icon: '🌍',
  cards: [
    {
      id: 'ed-1',
      lessonId: 'earth-day',
      title: 'Sort the Waste!',
      englishContent:
        'Two bins help us keep Earth clean:\n\n🟢 GREEN bin — Wet / Biodegradable waste\n🔵 BLUE bin — Dry / Recyclable waste\n\nMatch each piece of waste to the right bin.',
      glossary: [
        { word: 'Biodegradable', en: 'Breaks down naturally in soil', te: 'జీవ-విచ్ఛేదనం అయ్యే' },
        { word: 'Recyclable',    en: 'Can be made into new things',    te: 'పునర్వినియోగమయ్యే' },
      ],
      parentSuggestion: {
        tip: 'Do this at home today — sort one bin together. Real practice sticks better than memorising.',
        questions: [
          'What goes in YOUR green bin at home?',
          'Why should plastic NOT be burnt?',
        ],
      },
      promptText: 'Match each item to the correct bin.',
      interactionType: 'match-pairs',
      pairs: [
        { id: 'w1', left: 'Banana peel',     right: '🟢 Green bin' },
        { id: 'w2', left: 'Plastic bottle',  right: '🔵 Blue bin' },
        { id: 'w3', left: 'Eggshells',       right: '🟢 Green bin' },
        { id: 'w4', left: 'Old magazines',   right: '🔵 Blue bin' },
        { id: 'w5', left: 'Dried leaves',    right: '🟢 Green bin' },
      ],
    },
    {
      id: 'ed-2',
      lessonId: 'earth-day',
      title: 'Fill to Discover',
      englishContent:
        'Earth has many wonderful elements. The "lungs of the Earth" are huge forests full of trees, animals, and rivers.\n\nThey are called…',
      glossary: [
        { word: 'lungs',  en: 'Body part we breathe with', te: 'ఊపిరితిత్తులు' },
        { word: 'forest', en: 'A place full of trees',     te: 'అడవి' },
      ],
      parentSuggestion: {
        tip: 'Rainforests = lungs because trees give oxygen. Show a picture of the Amazon together.',
        questions: [
          'Why are trees important for breathing?',
          'Have you been to a forest?',
        ],
      },
      promptText: 'What is known as the "lungs of the Earth"?',
      interactionType: 'choice-cards',
      choices: [
        { id: 'a', label: 'Rainforest', isCorrect: true },
        { id: 'b', label: 'Desert',     isCorrect: false },
        { id: 'c', label: 'Plateau',    isCorrect: false },
      ],
      hint: 'Trees give us oxygen — like lungs!',
    },
    {
      id: 'ed-3',
      lessonId: 'earth-day',
      title: 'Did you know?',
      englishContent:
        'The Sun is so powerful that we can make ELECTRICITY from its rays. This kind of energy is clean and never runs out.\n\nTap to reveal what we call it.',
      glossary: [
        { word: 'electricity', en: 'Energy that powers lights and toys', te: 'విద్యుత్తు' },
        { word: 'energy',      en: 'The power to do work',                te: 'శక్తి' },
      ],
      parentSuggestion: {
        tip: 'Solar = सूर्य. Show her any solar panel you can find (calculator, street light, building).',
        questions: [
          'Have you seen a solar panel?',
          'What else uses sunlight to grow?',
        ],
      },
      promptText: 'Tap to reveal the answer.',
      interactionType: 'tap-reveal',
      revealAnswer: '☀️ Solar power — energy from sunlight!',
    },
    {
      id: 'ed-4',
      lessonId: 'earth-day',
      title: 'Make the Rules',
      englishContent:
        'Imagine YOU are the leader of your city. You want a clean and healthy environment for the future.\n\nWhat is ONE rule you would make to help Earth?',
      glossary: [
        { word: 'environment', en: 'The world around us — air, water, land', te: 'పర్యావరణం' },
        { word: 'leader',      en: 'Someone who guides others',                te: 'నాయకుడు' },
      ],
      parentSuggestion: {
        tip: 'There is no wrong answer. Encourage creativity — "no plastic bags", "every street has a tree", etc.',
        questions: [
          'Why did you pick that rule?',
          'Who would your rule help most?',
        ],
      },
      promptText: 'Write one rule you would make as city leader.',
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
];
