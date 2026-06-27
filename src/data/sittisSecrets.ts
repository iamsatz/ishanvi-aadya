import type { LearningCard, Lesson } from '../types/content';

const LESSON_ID = 'sittis-secrets';

const cards: LearningCard[] = [
  {
    id: 'ss-intro',
    lessonId: LESSON_ID,
    title: 'Stories about real-life situations',
    subtitle: '7B Fiction Reading · page 102',
    englishContent:
      'Mona lives in America. Her grandmother lives far away in a small village in the Middle East.\n\nOnce, Mona went to visit her. They did not speak the same language, so they made up their own.\n\nYour teacher is helping you read a story from another culture. Listen carefully, use the glossary, and think about how people communicate when words are different.',
    teluguContent:
      'మోనా అమెరికాలో నివాస్తుంది. ఆమె మజ్మమ్మ గ్రామ్మమ్ మధ-middle East లో ఒక చిన గ్రామలో నివాస్తుంది.\n\nఒకసారి, మోనా ఆమెను కలవడానికి వెళ్ళింది. వారిది ఒకే భాష ఉండదు కాదు, కాబను వారు తమ భాషలో మాట్లాడారు.\n\nమీ టీచర్ మీకు వేరే సంసృతి కథతలో కథతను చదవమaniకి సహాయం చేస్తున్నారు. జాగ్రత్తగా వినండి, పద-kosh నిఘ్ధరించండి, పదాలు భిన్నప్పుడు ఎలా మాట్లాడaro చూడండి.',
    parentSuggestion: {
      tip: 'Before reading, ask Ishanvi: "Have you ever visited someone who speaks a different language?" This primes her to notice how Mona and Sitti connect.',
      questions: [
        'What does "from another culture" mean in this lesson?',
        'How can two people be friends if they do not share words?',
      ],
    },
    promptText: 'Tap to reveal what your teacher wants you to do on these pages.',
    interactionType: 'tap-reveal',
    revealAnswer:
      'Listen to and read a story from another culture · Find information to answer questions · Discuss ways of communicating',
    hint: 'Look at the green box on page 102 — three learning goals.',
  },
  {
    id: 'ss-p102',
    lessonId: LESSON_ID,
    title: "Sitti's Secrets",
    subtitle: 'Naomi Shihab Nye · page 102',
    englishContent:
      'When I woke up at Sitti\'s house, the sun was peeking through her window and brushing bright lemons on a lemon tree.\n\n"Your turn!" I say…\n\nMy grandmother and I do not speak the same language. We go through my father, who can translate for both of us. He is like a telephone.\n\nWe have names for each other. I call her Sitti, which means Grandma in Arabic. She calls me habibi, which means darling.\n\nHer voice dances like bird whistles and whooshed like the wind.',
    teluguContent:
      'సitti ఇంటలో నే నidracha లడినప్పుడు, సూరryya ఆమె జనál window గుండా peeking చేసి, lemon tree మీద bright lemons brush చేస్తోంది.\n\n"Your turn!" అని చెప్తాను…\n\nనేను, నా మజ్మమ్మ — ఒకే language మాట్లాడaru. మా నాన్న translate చేస్తారు. అతను telephone లah లndaru.\n\nమనం మనం pettukuntaru. నేను ఆమెను Sitti అంటాను — Arabic లో Grandma. ఆమె నన్ను habibi అంటారు — darling.\n\nఆమె voice bird whistles లah dance చేస్తుంది, wind లah whoosh avutundi.',
    glossary: [
      { word: 'peeking', en: 'quickly and secretly looking at something', te: 'దాగున్యంగా, రహస్యంగా ఏదో చూడడం' },
      { word: 'translate', en: 'say in another language', te: 'మరొక భాషలో చెప్పడం' },
      { word: 'whooshed', en: 'made a rushing noise, like wind or water', te: 'గాలి లా నీటి లah rush avutunna shabdam' },
      { word: 'Sitti', en: 'Grandma in Arabic', te: 'అrabic లో అమ్మ' },
      { word: 'habibi', en: 'darling', te: 'priyamaina vadu' },
    ],
    parentSuggestion: {
      tip: 'Underline the words peeking, translate, and whooshed. Ask Ishanvi to explain each in her own words before she taps the quiz.',
      questions: [
        'Why does Mona call her father a "telephone"?',
        'What do Sitti and habibi mean?',
        'How does the writer describe Sitti\'s voice?',
      ],
    },
    quiz: [
      {
        id: 'ss-p102-q1',
        question: 'Mona and her grandmother…',
        choices: [
          { id: 'a', label: 'Speak the same language fluently', isCorrect: false },
          { id: 'b', label: 'Use her father to translate', isCorrect: true },
          { id: 'c', label: 'Never talk to each other', isCorrect: false },
        ],
        hint: 'He is like a telephone.',
      },
      {
        id: 'ss-p102-q2',
        question: 'Sitti means…',
        choices: [
          { id: 'a', label: 'Darling', isCorrect: false },
          { id: 'b', label: 'Grandma in Arabic', isCorrect: true },
          { id: 'c', label: 'A lemon tree', isCorrect: false },
        ],
      },
      {
        id: 'ss-p102-q3',
        question: '"Peeking" in this story means the sun is…',
        choices: [
          { id: 'a', label: 'Quickly looking through the window', isCorrect: true },
          { id: 'b', label: 'Sleeping all day', isCorrect: false },
          { id: 'c', label: 'Hiding behind clouds forever', isCorrect: false },
        ],
        hint: 'Check the glossary on page 102.',
      },
    ],
    promptText: 'Quick Check — answer from page 102 before you go on.',
    interactionType: 'reflect',
    hint: 'Re-read the lines about Sitti, habibi, and translate if you are stuck.',
  },
  {
    id: 'ss-p104',
    lessonId: LESSON_ID,
    title: "Sitti's Secrets (continued)",
    subtitle: '7D Fiction Reading · page 104',
    englishContent:
      'We talk with our hands and eyes. Sometimes we just hold hands and smile.\n\nEvery day I played with my cousins. We watched the men pick lentils in the fields.\n\nI learned to play marbles with the children. The glass balls clicked and rolled in the dust.',
    teluguContent:
      'మనం chetulu mariyu kannulu tho matladukuntam. Sometimes chetulu pattukoni navvutam.\n\nPrati roju nenu cousins tho adukunnanu. Manushulu fields lo lentils pick chestunnaru.\n\nPillalu tho marbles adadam nerchukunnanu. Glass balls dust lo roll avutunnayi.',
    glossary: [
      { word: 'lentils', en: 'type of small bean', te: 'chinna bean variety' },
      { word: 'marbles', en: 'game played with small glass balls', te: 'chinna glass balls tho aadukune game' },
    ],
    parentSuggestion: {
      tip: 'Point to the bold words lentils and marbles. Ask: "What did Mona do every day with her cousins?"',
      questions: [
        'How do Mona and Sitti communicate without words?',
        'What game did Mona learn to play?',
      ],
    },
    quiz: [
      {
        id: 'ss-p104-q1',
        question: 'Lentils are…',
        choices: [
          { id: 'a', label: 'A type of small bean', isCorrect: true },
          { id: 'b', label: 'Glass balls for a game', isCorrect: false },
          { id: 'c', label: 'A kind of window', isCorrect: false },
        ],
      },
      {
        id: 'ss-p104-q2',
        question: 'Mona learned to play…',
        choices: [
          { id: 'a', label: 'Marbles with the children', isCorrect: true },
          { id: 'b', label: 'Only by herself every day', isCorrect: false },
          { id: 'c', label: 'Nothing with her cousins', isCorrect: false },
        ],
        hint: 'Glass balls clicked and rolled in the dust.',
      },
    ],
    promptText: 'Quick Check — use the glossary and story on page 104.',
    interactionType: 'reflect',
    hint: 'Lentils = beans. Marbles = glass-ball game.',
  },
  {
    id: 'ss-listen',
    lessonId: LESSON_ID,
    title: 'Listen and respond',
    subtitle: 'Section A · page 104',
    englishContent:
      'Which sentence below is true?\n\nRead the story again if you need to. Your teacher wants you to find proof in the text — not guess.',
    teluguContent:
      'Kinda sentence correct? Story malli chadivandi. Text lo proof kanukondi — guess cheyakandi.',
    parentSuggestion: {
      tip: 'Ask Ishanvi to point to the line in the story that proves her answer before she taps.',
      questions: [
        'Can Mona and Sitti communicate? How do you know?',
        'Does Mona play with other children? Where does the story say so?',
      ],
    },
    promptText: 'Which sentence is true?',
    interactionType: 'choice-cards',
    choices: [
      { id: 'a', label: "Mona can't see any of Sitti's hair.", isCorrect: false },
      { id: 'b', label: 'Mona and Sitti are unable to communicate.', isCorrect: false },
      { id: 'c', label: 'Mona plays with other children every day.', isCorrect: true },
    ],
    hint: 'Look for "Every day I played with my cousins."',
  },
  {
    id: 'ss-vocab',
    lessonId: LESSON_ID,
    title: 'Glossary practice',
    subtitle: 'Pages 102 & 104 · tap each word',
    englishContent:
      'Your teacher picked five words from the textbook glossary. Tap each card to flip it and read the meaning.\n\nTry to use peeking, translate, whooshed, lentils, and marbles in your own sentence.',
    teluguContent:
      'Textbook glossary nundi aidu padalu. Prati card tap chesi meaning chadivandi.',
    promptText: 'Flip every vocabulary card.',
    interactionType: 'vocab-grid',
    vocab: [
      { id: 'v1', word: 'peeking', definition: 'quickly and secretly looking at something', definitionTe: 'దాగున్యంగా రహస్యంగా చూడడం' },
      { id: 'v2', word: 'translate', definition: 'say in another language', definitionTe: 'మరొక భాషలో చెప్పడం' },
      { id: 'v3', word: 'whooshed', definition: 'made a rushing noise, like wind or water', definitionTe: 'గాలి లా నీరు rush shabdam' },
      { id: 'v4', word: 'lentils', definition: 'type of small bean', definitionTe: 'chinna bean' },
      { id: 'v5', word: 'marbles', definition: 'game played with small glass balls', definitionTe: 'glass balls game' },
    ],
    hint: 'All five cards must flip open.',
  },
  {
    id: 'ss-checklist',
    lessonId: LESSON_ID,
    title: 'Reading check — tick when you pass',
    subtitle: 'Tuition teacher is helping · mini exams',
    englishContent:
      'Each box below has a tiny exam. Tap the box, answer every question correctly, and it will tick with "Good" or "Very good".\n\nOnly tick when you really know it — your teacher is cheering you on!',
    teluguContent:
      'Prati box lo chinna exam undi. Box tap chesi, anni questions correct ga answer cheste box tick avutundi.',
    parentSuggestion: {
      tip: 'Let Ishanvi try each mini exam herself. If she gets "Good" not "Very good", that means she needed one retry — totally fine.',
      questions: [
        'Which glossary word was hardest?',
        'How did Mona and Sitti communicate without the same language?',
      ],
    },
    promptText: 'Tap each task — pass the mini exam to tick it.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'ss-c1',
        label: '📖 I know what peeking means',
        hint: 'The sun was peeking through the window.',
        exam: [
          {
            id: 'ss-c1-e1',
            question: 'Peeking means…',
            choices: [
              { id: 'a', label: 'Quickly looking at something', isCorrect: true },
              { id: 'b', label: 'Sleeping all night', isCorrect: false },
              { id: 'c', label: 'Shouting loudly', isCorrect: false },
            ],
          },
        ],
      },
      {
        id: 'ss-c2',
        label: '🗣️ I know how Mona and Sitti talk',
        hint: 'Hands, eyes, smiles — and a telephone.',
        exam: [
          {
            id: 'ss-c2-e1',
            question: 'Mona and Sitti communicate by…',
            choices: [
              { id: 'a', label: 'Hands, eyes, and her father translating', isCorrect: true },
              { id: 'b', label: 'Never speaking or gesturing', isCorrect: false },
              { id: 'c', label: 'Writinging only', isCorrect: false },
            ],
          },
        ],
      },
      {
        id: 'ss-c3',
        label: '💬 I know Sitti and habibi',
        exam: [
          {
            id: 'ss-c3-e1',
            question: 'Mona calls her grandmother…',
            choices: [
              { id: 'a', label: 'Sitti (Grandma in Arabic)', isCorrect: true },
              { id: 'b', label: 'Habibi (Grandma in Arabic)', isCorrect: false },
              { id: 'c', label: 'Lentils', isCorrect: false },
            ],
          },
          {
            id: 'ss-c3-e2',
            question: 'Sitti calls Mona…',
            choices: [
              { id: 'a', label: 'Habibi (darling)', isCorrect: true },
              { id: 'b', label: 'Sitti (darling)', isCorrect: false },
              { id: 'c', label: 'Marbles', isCorrect: false },
            ],
          },
        ],
      },
      {
        id: 'ss-c4',
        label: '🫘 I know lentils and marbles',
        exam: [
          {
            id: 'ss-c4-e1',
            question: 'Lentils are…',
            choices: [
              { id: 'a', label: 'Small beans picked in fields', isCorrect: true },
              { id: 'b', label: 'Glass balls for a game', isCorrect: false },
              { id: 'c', label: 'Windows in a house', isCorrect: false },
            ],
          },
          {
            id: 'ss-c4-e2',
            question: 'Marbles are…',
            choices: [
              { id: 'a', label: 'A game with small glass balls', isCorrect: true },
              { id: 'b', label: 'A type of bean', isCorrect: false },
              { id: 'c', label: 'A kind of translate', isCorrect: false },
            ],
          },
        ],
      },
      {
        id: 'ss-c5',
        label: '✅ I answered Section A correctly',
        hint: 'Which sentence is true on page 104?',
        exam: [
          {
            id: 'ss-c5-e1',
            question: 'Which sentence is TRUE?',
            choices: [
              { id: 'a', label: "Mona can't see any of Sitti's hair.", isCorrect: false },
              { id: 'b', label: 'Mona and Sitti are unable to communicate.', isCorrect: false },
              { id: 'c', label: 'Mona plays with other children every day.', isCorrect: true },
            ],
            hint: 'Every day I played with my cousins.',
          },
        ],
      },
      {
        id: 'ss-c6',
        label: '🌍 I can explain "another culture"',
        what: 'Say one way Mona\'s visit is different from your daily life.',
        exam: [
          {
            id: 'ss-c6-e1',
            question: 'This story is "from another culture" because…',
            choices: [
              { id: 'a', label: 'Mona visits family far away with different language and customs', isCorrect: true },
              { id: 'b', label: 'Mona never leaves her own room', isCorrect: false },
              { id: 'c', label: 'The story has no new words', isCorrect: false },
            ],
          },
        ],
      },
    ],
    hint: 'Pass every mini exam to tick all six boxes.',
  },
];

export const sittisSecrets: Lesson = {
  id: LESSON_ID,
  title: "Sitti's Secrets",
  subtitle: '7B & 7D Fiction Reading · pages 102 & 104',
  kid: 'ishanvi',
  subject: 'english',
  hasTelugu: true,
  icon: '📖',
  cards,
};
