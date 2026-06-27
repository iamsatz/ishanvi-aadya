/* ============================================================
   WEEKEND HOMEWORK — hints first, answers on separate peek cards
   Weekend · 26 Jun 2026 · Ishanvi Grade 4
   ============================================================ */

import type { LearningCard, Lesson } from '../types/content';

const DATE_LABEL = '26 Jun 2026';
const HW = 'weekend-2026-06-26';
const BOOK = 'Oxford English Book';

const englishCards: LearningCard[] = [
  {
    id: 'wh-en-0',
    lessonId: `${HW}-english`,
    title: 'English Weekend Task',
    subtitle: `Weekend · ${DATE_LABEL}`,
    englishContent:
      `Satish says: get your **${BOOK}** — the same English textbook you use at school (Unit 7 · friendship pages).\n\n**Page 101** → Bits A & B in **pencil**.\n**Pages 102 & 104** → read the story *Sitti\'s Secrets* and think about the glossary words.\n\nTry every question yourself first. Use **hints** on each card. Only open **Peek** cards if you are truly stuck.`,
    teluguContent:
      `**${BOOK}** తీసుకో — school English textbook (Unit 7 · friendship).\n\n**Page 101** → Bits A & B pencil తో.\n**Pages 102 & 104** → story read, glossary words గురించి think చేయి.\n\nముందు hints follow చేయి. stuck అయితే మాత్రమే **Peek** cards open చేయి.`,
    parentSuggestion: {
      tip: 'Ask "which book?" before she starts — point to the Oxford English Book from school bag, not the maths sheet.',
      tipTe: '"ఏ book?" అని ask చేయండి — school bag Oxford English Book చూపించండి, maths sheet కాదు.',
      questions: ['Can you find page 101 without me?'],
      questionsTe: ['Page 101 నువ్వే find చేయగలవా?'],
    },
    promptText: 'Pick the book you need for today\'s English homework:',
    interactionType: 'choice-cards',
    choices: [
      { id: 'oxford', label: '📗 Oxford English Book', isCorrect: true },
      { id: 'maths', label: '📐 Maths Silver Oaks sheet', isCorrect: false },
      { id: 'science', label: '🔬 Science textbook', isCorrect: false },
    ],
  },

  {
    id: 'wh-en-1',
    lessonId: `${HW}-english`,
    title: 'Page 101 — Try yourself',
    subtitle: '7A · Thinking about friends · Bits A & B',
    imageUrl: '/homework/weekend-2026-06-26/english-pg101.png',
    englishContent:
      '**Bit A — talk & think** (no rush to write answers yet):\n\n1. chum, buddy, mate, pal, ally, companion — what idea links them?\n2. Who do you admire? **Why** — not just their name.\n3. bond · embrace · affection · respect — say each in your own words first.\n\n**Bit B — match** (after Bit A): use the synonym tip box on the page if needed.\n\nEach checkbox has a **mini exam** — pass it to tick.',
    teluguContent:
      '**Bit A:** words same idea? admire why? bond/embrace/affection/respect — own words.\n\n**Bit B:** Bit A తర్వాత match.',
    parentSuggestion: {
      tip: 'Bit A is discussion — let her guess before Bit B. Synonyms mean same-ish meaning, not identical.',
      tipTe: 'Bit A discussion — guess చేయనివ్వండి. Synonyms = same-ish meaning.',
    },
    promptText: 'Tap each box — pass the mini exam to tick it.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'en-a1',
        label: 'Bit A1 — Synonyms for friend',
        hint: 'When do you call someone a chum or pal? What word means the same?',
        peekLink: { cardId: 'wh-en-peek-a', label: 'Stuck on A1? Peek →' },
        exam: [
          {
            id: 'en-a1-e1',
            question: 'Words like chum, buddy, mate, and pal all mean…',
            choices: [
              { id: 'a', label: 'A close friend', isCorrect: true },
              { id: 'b', label: 'A type of food', isCorrect: false },
              { id: 'c', label: 'A school subject', isCorrect: false },
            ],
            hint: 'They share the same idea — friendship.',
          },
        ],
      },
      {
        id: 'en-a2',
        label: 'Bit A2 — Qualities you admire',
        hint: 'Pick one person. What do they do that you want to copy?',
        exam: [
          {
            id: 'en-a2-e1',
            question: 'A strong "I admire…" answer tells…',
            choices: [
              { id: 'a', label: 'WHY you admire them — not just their name', isCorrect: true },
              { id: 'b', label: 'Only their name and nothing else', isCorrect: false },
              { id: 'c', label: 'A sentence you copied from a peek card', isCorrect: false },
            ],
            hint: 'Satish asks why — what do they do that you want to copy?',
          },
        ],
      },
      {
        id: 'en-a3',
        label: 'Bit A3 — bond, embrace, affection, respect',
        hint: 'Act out embrace vs respect — how are they different?',
        peekLink: { cardId: 'wh-en-peek-a', label: 'Word meanings peek →' },
        exam: [
          {
            id: 'en-a3-e1',
            question: 'Embrace means…',
            choices: [
              { id: 'a', label: 'Hold someone close (like a hug)', isCorrect: true },
              { id: 'b', label: 'Whisper a secret code', isCorrect: false },
              { id: 'c', label: 'Run away from a friend', isCorrect: false },
            ],
          },
          {
            id: 'en-a3-e2',
            question: 'Respect in friendship means…',
            choices: [
              { id: 'a', label: 'Admiring someone\'s good qualities', isCorrect: true },
              { id: 'b', label: 'Ignoring someone completely', isCorrect: false },
              { id: 'c', label: 'Winning a marble game', isCorrect: false },
            ],
          },
        ],
      },
      {
        id: 'en-b',
        label: 'Bit B — All matching pairs',
        hint: 'Read each definition aloud. Which friend-word fits best?',
        peekLink: { cardId: 'wh-en-peek-b', label: 'Stuck on matching? Peek →' },
        exam: [
          {
            id: 'en-b-e1',
            question: 'Bond (in friendship) means…',
            choices: [
              { id: 'a', label: 'A close tie or shared feeling', isCorrect: true },
              { id: 'b', label: 'A glass ball in a game', isCorrect: false },
              { id: 'c', label: 'A word that rhymes with chum', isCorrect: false },
            ],
          },
          {
            id: 'en-b-e2',
            question: 'Ally means…',
            choices: [
              { id: 'a', label: 'Someone on the same side as you', isCorrect: true },
              { id: 'b', label: 'Someone who never helps', isCorrect: false },
              { id: 'c', label: 'A type of lentil', isCorrect: false },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'wh-en-2',
    lessonId: `${HW}-english`,
    title: 'Pages 102 & 104 — Read & think',
    subtitle: 'Sitti\'s Secrets · Naomi Shihab Nye',
    imageUrls: [
      '/homework/weekend-2026-06-26/english-pg102.png',
      '/homework/weekend-2026-06-26/english-pg104.png',
    ],
    englishContent:
      'Read **pages 102 and 104** in your Oxford book (photos above).\n\nDo not memorise definitions yet — notice **when** each glossary word appears in the story.\n\nEach checkbox has a **mini exam**. Tap it, answer correctly, then it ticks with Good or Very good.',
    teluguContent:
      'Pages 102 & 104 read (photos meeda). Definitions mug up cheyakandi.\n\nPrati box lo mini exam — correct ga answer cheste tick avutundi.',
    promptText: 'Tap each box — pass the mini exam to tick it.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'en-read102',
        label: 'Read page 102 — opening of the story',
        hint: 'Mona and Sitti speak different languages. How do they still talk?',
        exam: [
          {
            id: 'en-read102-e1',
            question: 'Mona and her grandmother…',
            choices: [
              { id: 'a', label: 'Use her father to translate and also hands and eyes', isCorrect: true },
              { id: 'b', label: 'Never talk at all', isCorrect: false },
              { id: 'c', label: 'Speak the same language fluently', isCorrect: false },
            ],
            hint: 'He is like a telephone.',
          },
        ],
      },
      {
        id: 'en-gloss102',
        label: 'Think about: peeking, translate, whooshed',
        hint: 'Cover the glossary. What would each word mean from the sentence?',
        peekLink: { cardId: 'wh-en-peek-gloss', label: 'Glossary peek →' },
        exam: [
          {
            id: 'en-gloss102-e1',
            question: 'Peeking in the story means the sun is…',
            choices: [
              { id: 'a', label: 'Quickly looking through the window', isCorrect: true },
              { id: 'b', label: 'Sleeping all day', isCorrect: false },
              { id: 'c', label: 'Playing marbles', isCorrect: false },
            ],
          },
          {
            id: 'en-gloss102-e2',
            question: 'Translate means…',
            choices: [
              { id: 'a', label: 'Say something in another language', isCorrect: true },
              { id: 'b', label: 'Hide under a blanket', isCorrect: false },
              { id: 'c', label: 'Pick lentils in a field', isCorrect: false },
            ],
          },
        ],
      },
      {
        id: 'en-read104',
        label: 'Read page 104 — story continued',
        hint: 'What games do they play? What are lentils in the fields?',
        exam: [
          {
            id: 'en-read104-e1',
            question: 'Every day on page 104, Mona…',
            choices: [
              { id: 'a', label: 'Played with her cousins', isCorrect: true },
              { id: 'b', label: 'Stayed alone in her room', isCorrect: false },
              { id: 'c', label: 'Never left the house', isCorrect: false },
            ],
            hint: 'Look for cousins and games.',
          },
        ],
      },
      {
        id: 'en-gloss104',
        label: 'Think about: lentils, marbles',
        hint: 'Picture the scene before looking up the words.',
        peekLink: { cardId: 'wh-en-peek-gloss', label: 'Glossary peek →' },
        exam: [
          {
            id: 'en-gloss104-e1',
            question: 'Lentils are…',
            choices: [
              { id: 'a', label: 'Small beans picked in fields', isCorrect: true },
              { id: 'b', label: 'Glass balls for a game', isCorrect: false },
              { id: 'c', label: 'Words in Arabic', isCorrect: false },
            ],
          },
          {
            id: 'en-gloss104-e2',
            question: 'Marbles are…',
            choices: [
              { id: 'a', label: 'A game with small glass balls', isCorrect: true },
              { id: 'b', label: 'A type of bean', isCorrect: false },
              { id: 'c', label: 'A kind of window', isCorrect: false },
            ],
          },
        ],
      },
      {
        id: 'en-q104',
        label: 'Page 104 — Which sentence is true?',
        hint: 'Do Mona and Sitti understand each other in the end? How?',
        peekLink: { cardId: 'wh-en-peek-gloss', label: 'Check your thinking →' },
        exam: [
          {
            id: 'en-q104-e1',
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
    ],
  },

  /* ── Peek cards — only when stuck ── */
  {
    id: 'wh-en-peek-a',
    lessonId: `${HW}-english`,
    title: 'Peek — Bit A ideas',
    subtitle: 'Only if you tried first',
    englishContent:
      'These are **ideas to compare with yours** — not copy-paste answers.\n\nDid your Bit A talk sound similar? If not, which word would you change?',
    parentSuggestion: {
      tip: 'Cover this card until she has spoken her own answer out loud.',
      tipTe: 'ఆ answer loud చెప్పే varaku card cover చేయండి.',
    },
    promptText: 'Already tried? Tap to compare with these ideas.',
    interactionType: 'tap-reveal',
    revealAnswer:
      'A1: all mean friend / close companion.\nA3 starters: bond = close tie · embrace = hug · affection = fondness · respect = admire someone\'s good traits.',
  },

  {
    id: 'wh-en-peek-b',
    lessonId: `${HW}-english`,
    title: 'Peek — Bit B matching',
    subtitle: 'Check your pairs',
    englishContent:
      'Match these if you are stuck. **Cover and try again tomorrow** without peeking.',
    promptText: 'Stuck on matching? Tap to see the pairs.',
    interactionType: 'tap-reveal',
    revealAnswer:
      'chum → good friend (rhymes) · bond → shared-feeling relationship · embrace → hold close · respect → admire good things · ally → same side · buddy → American good friend · affection → fondness',
  },

  {
    id: 'wh-en-peek-gloss',
    lessonId: `${HW}-english`,
    title: 'Peek — Glossary 102 & 104',
    subtitle: 'Book definitions',
    englishContent:
      'Official glossary from the textbook. Close this card and explain one word to someone without looking.',
    promptText: 'Need the glossary? Tap to show word meanings.',
    interactionType: 'tap-reveal',
    revealAnswer:
      '102: peeking = quick secret look · translate = say in another language · whooshed = rushing wind/water sound\n104: lentils = small bean · marbles = glass-ball game\nTrue sentence: Mona & Sitti communicate with gestures and their own language.',
  },
];

const scienceCards: LearningCard[] = [
  {
    id: 'wh-sc-0',
    lessonId: `${HW}-science`,
    title: 'Science Extended Task',
    subtitle: `Weekend · ${DATE_LABEL} · WHO WE ARE`,
    imageUrl: '/homework/weekend-2026-06-26/science-extended.png',
    englishContent:
      'On an **A4 sheet** — reflect on today\'s storytelling session.\n\nThere is no single correct sentence to copy. Satish wants you to **understand yourself**. Each box below has a mini exam — pass it to show you got the idea, then write your own words on paper.',
    teluguContent:
      '**A4 sheet** — storytelling reflection. Copy cheyakandi — idea ardham ayyinda chupinchadaniki mini exam.',
    parentSuggestion: {
      tip: 'Draw first, write second. For "proud of myself" ask Ishanvi about her dance at Kashi or Tirumala — let her say it in her own words.',
      tipTe: 'Draw first. "Proud" ki Kashi/Tirumala dance gurinchi ask cheyandi — own words lo cheppamani.',
      questions: [
        'What did you do that makes you special — why does it matter?',
        'What makes you proud that a mirror cannot show?',
      ],
    },
    promptText: 'Tap each box — pass the mini exam, then write on your A4 sheet.',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'sc1',
        label: '1. I am special because _______',
        hint: 'What did YOU do that matters? Think of one thing — why is it special?',
        peekLink: { cardId: 'wh-sc-peek', label: 'Need a starter? Peek →' },
        exam: [
          {
            id: 'sc1-e1',
            question: 'Before you write "I am special because…", what should you think about?',
            choices: [
              { id: 'a', label: 'Something you did or a way you treat people — and why it matters', isCorrect: true },
              { id: 'b', label: 'Only how you look in the mirror', isCorrect: false },
              { id: 'c', label: 'A sentence copied from the peek card', isCorrect: false },
            ],
            hint: 'Satish asks what you DID — not what you look like.',
          },
        ],
      },
      {
        id: 'sc2',
        label: '2. One thing a mirror can\'t show about me is _______',
        hint: 'Feelings, thoughts, kindness, courage, dreams…',
        peekLink: { cardId: 'wh-sc-peek', label: 'Need a starter? Peek →' },
        exam: [
          {
            id: 'sc2-e1',
            question: 'A mirror shows your face. What can it NOT show?',
            choices: [
              { id: 'a', label: 'Kindness, courage, or feelings inside you', isCorrect: true },
              { id: 'b', label: 'Your eye colour', isCorrect: false },
              { id: 'c', label: 'Whether you have a nose', isCorrect: false },
            ],
            hint: 'Think inner qualities — not appearance.',
          },
        ],
      },
      {
        id: 'sc3',
        label: '3. What makes me feel proud of myself?',
        hint: 'Think of something you worked hard for — dance, helping someone, trying again…',
        exam: [
          {
            id: 'sc3-e1',
            question: 'A real "proud of myself" answer should be about…',
            choices: [
              { id: 'a', label: 'Something you actually did and worked hard for', isCorrect: true },
              { id: 'b', label: 'Something you saw on TV yesterday', isCorrect: false },
              { id: 'c', label: 'What someone else wrote on the peek card', isCorrect: false },
            ],
            hint: 'Did you perform somewhere special? What did it take?',
          },
          {
            id: 'sc3-e2',
            question: 'After you pick your proud moment, Satish will ask…',
            choices: [
              { id: 'a', label: 'WHY does that make you proud?', isCorrect: true },
              { id: 'b', label: 'What is your friend\'s name?', isCorrect: false },
              { id: 'c', label: 'Copy this exact sentence from the book', isCorrect: false },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'wh-sc-peek',
    lessonId: `${HW}-science`,
    title: 'Peek — reflection starters',
    subtitle: 'Inspiration only · make it yours',
    englishContent:
      'Examples other kids wrote. **Do not copy** — use them to spark your own honest answer.',
    promptText: 'Need an idea? Tap for examples — then write your own.',
    interactionType: 'tap-reveal',
    revealAnswer:
      'Special because I listen when friends are sad · Mirror can\'t show my kindness · Proud when I kept trying at maths',
  },
];

export const weekendEnglish: Lesson = {
  id: `${HW}-english`,
  title: `English · Weekend ${DATE_LABEL}`,
  subtitle: `${BOOK} · pg 101–104`,
  kid: 'ishanvi',
  subject: 'homework',
  chapter: 'Weekend',
  hasTelugu: true,
  icon: '📖',
  cards: englishCards,
};

export const weekendScience: Lesson = {
  id: `${HW}-science`,
  title: `Science · Weekend ${DATE_LABEL}`,
  subtitle: 'WHO WE ARE · A4 reflection',
  kid: 'ishanvi',
  subject: 'homework',
  hasTelugu: true,
  icon: '🔬',
  cards: scienceCards,
};

const PARENT_HW = 'weekend-2026-06-27-parent';
const PARENT_DATE = '27 Jun 2026';

const parentNoticeCards: LearningCard[] = [
  {
    id: 'wh-pn-0',
    lessonId: PARENT_HW,
    title: 'Important information',
    subtitle: `${PARENT_DATE} · Shruti · HRT`,
    imageUrl: '/homework/weekend-2026-06-27/parent-notice-shruti.png',
    englishContent:
      'Dear parents,\n\nKindly note the following:\n\n• Label all belongings (bags, caps, jackets, books, journals) with **name and e-code**.\n• Send the **red portfolios and box files** on Monday.\n• Make sure all subject **books and journals** are sent to school with labels. They will be kept at school and sent with students as per the home task given.\n• The **interface** continues **29 and 30 June 2026**, 8:30–9:30 a.m. If you missed earlier days, you are welcome to attend on these days.',
    teluguContent:
      'Dear parents — labels (name + e-code), red portfolios Monday, books/journals with labels, interface 29 & 30 Jun 8:30–9:30.',
    parentSuggestion: {
      tip: 'Tick each item when done so nothing is forgotten before Monday.',
      tipTe: 'Done అయిన task tick చేయండి — Monday ముందు miss అవ్వదు.',
    },
    parentOnlyChecklist: true,
    promptText: 'Tick each task when complete (Parent PIN required).',
    interactionType: 'checklist',
    checklist: [
      {
        id: 'pn1',
        label: 'Label belongings — name + e-code on bags, caps, jackets, books, journals',
        hint: 'Use permanent marker or iron-on labels.',
      },
      {
        id: 'pn2',
        label: 'Send red portfolios and box files on Monday',
      },
      {
        id: 'pn3',
        label: 'All subject books and journals labelled and sent to school',
        hint: 'Books stay at school; sent home only when homework requires.',
      },
      {
        id: 'pn4',
        label: 'Interface — 29 & 30 Jun 2026, 8:30–9:30 a.m. (if missed earlier days)',
        hint: 'Attend on either day if you could not come before.',
      },
    ],
  },
];

export const weekendParentNotice: Lesson = {
  id: PARENT_HW,
  title: `Parent · Important information`,
  subtitle: `${PARENT_DATE} · Shruti · HRT`,
  kid: 'ishanvi',
  subject: 'homework',
  chapter: 'Weekend',
  hasTelugu: true,
  icon: '📋',
  cards: parentNoticeCards,
};

export const weekendHomeworkLessons: Lesson[] = [weekendEnglish, weekendScience, weekendParentNotice];
