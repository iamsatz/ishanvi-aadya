/* ============================================================
   AADYA — Grade 2 EVS (13 chapters · Chiku-led · observe + discover)
   Each chapter = 6 cards: opener, look-around, discover,
   real-life example, quick check, make your own.
   Ask-don't-tell. Bilingual. Emoji visuals.
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
    id: 'ad-v-ch01',
    num: 1,
    title: 'Our Earth',
    subtitle: 'Unit 1 · Our Surroundings',
    glossary: [
      { word: 'Earth', en: 'the planet we live on', te: 'మనం నివసించే గ్రహం' },
    ],
    hook: 'Chiku looked up at the sky and down at the grass. 🌍\n\n**Earth** is our home — land, water, and air all around us. What can you see outside your window?',
    hookTe: 'Earth = మన ఇల్లు. Land, water, air. Window లో ఏం కనిపిస్తోంది?',
    openerHint: 'Name one thing you see: a tree, the sky, a road…',

    teachA: [
      { type: 'topic', icon: '🌍', title: 'Land, water, air', body: 'Earth gives us three things to live:\n🟫 **Land** — where we walk and build\n🟦 **Water** — oceans, rivers, rain\n💨 **Air** — what we breathe' },
      { type: 'topic', icon: '🏞️', title: 'Look around you', body: 'A park has land (grass), water (a pond), and air (the breeze). All three together!' },
    ],
    teachATe: 'Earth = land + water + air. మూడూ మనకు అవసరం.',
    revealA: {
      prompt: 'Which of the three (land, water, air) do you breathe?',
      answer: 'Air! We breathe air in and out all day.',
      hint: 'You cannot see it, but it fills your lungs.',
    },

    teachB: [
      { type: 'topic', icon: '🌞', title: 'Day and night', body: 'Earth slowly **spins** like a top.\nYour side facing the **Sun** → ☀️ **day**.\nYour side turned away → 🌙 **night**.' },
      { type: 'topic', icon: '💛', title: 'Care for Earth', body: 'Earth is the only home we have. Keep it clean — no littering, save water and trees.' },
    ],
    teachBTe: 'Earth తిరుగుతుంది. Sun వైపు = day, దూరం = night.',
    revealB: {
      prompt: 'Why does night happen? Does the Sun run away?',
      answer: 'No — Earth turns away from the Sun. The Sun stays put!',
      hint: 'Think about Earth spinning.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🔦', title: 'Story', body: 'Aadya shines a torch on a ball and slowly turns the ball.' },
        { type: 'topic', icon: '🌗', title: 'Watch', body: 'The lit side is "day". The dark side is "night".' },
      ],
      story: 'When Aadya keeps turning the ball, what happens to the dark side?',
      storyTe: 'Ball తిప్పితే dark side కి ఏమవుతుంది?',
      answer: 'It comes into the light — night becomes day! Just like real Earth.',
      hint: 'Turning brings the dark side toward the torch.',
    },

    quiz: [
      {
        question: 'We breathe…',
        choices: [
          { id: 'a', label: 'Rocks', isCorrect: false },
          { id: 'b', label: 'Air', isCorrect: true },
          { id: 'c', label: 'Plastic', isCorrect: false },
        ],
      },
      {
        question: 'Day happens when our place faces the…',
        choices: [
          { id: 'a', label: 'Moon', isCorrect: false },
          { id: 'b', label: 'Sun', isCorrect: true },
          { id: 'c', label: 'Stars only', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Match each to where it belongs on Earth:',
    tryType: 'match-pairs',
    pairs: [
      { left: 'Fish', right: 'Water' },
      { left: 'Tree', right: 'Land' },
      { left: 'Bird flying', right: 'Air' },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🪟', title: 'Be an Earth-watcher', body: 'Look outside at different times of day.' },
    ],
    makePrompt: 'Draw or tell what you see outside in the morning and at night. What changed?',
    makePromptTe: 'ఉదయం, రాత్రి బయట ఏం కనిపిస్తుంది? తేడా చెప్పండి.',
    makeHint: 'Think about light, the sky, and the Sun or Moon.',

    parentTip: 'At sunset ask "Where did the Sun go?" — guide toward Earth turning, not the Sun leaving.',
    parentTipTe: 'Sunset లో Earth తిరుగుతోందని explain చేయండి.',
    parentQ: 'What three things does Earth give us to live?',
    parentQTe: 'Earth మనకు ఇచ్చే 3 things ఏవి?',
  },

  /* ── Chapter 2 ───────────────────────────────────────────── */
  {
    id: 'ad-v-ch02',
    num: 2,
    title: 'The Green World',
    subtitle: 'Unit 2 · Plant Life',
    glossary: [
      { word: 'roots', en: 'plant part that drinks water from soil', te: 'మట్టి నుండి నీరు పీల్చే భాగం' },
    ],
    hook: 'Chiku planted a seed. After rain and sun, a tiny **shoot** popped up! 🌱\n\nPlants are living things. What does a plant need to grow?',
    hookTe: 'Seed → shoot. Plant పెరగడానికి ఏం కావాలి?',

    teachA: [
      { type: 'topic', icon: '🌱', title: 'Parts of a plant', body: '🟤 **Roots** drink water from soil\n🟩 **Stem** holds the plant up and carries water\n🍃 **Leaves** make food using sunlight\n🌸 **Flower** can become a fruit with seeds' },
      { type: 'topic', icon: '🔍', title: 'Look closely', body: 'Next time you see a plant, find its stem and leaves. Roots hide under the soil!' },
    ],
    teachATe: 'Roots, stem, leaves, flower — ప్రతిదానికి పని ఉంది.',
    revealA: {
      prompt: 'Which part of a plant makes its food?',
      answer: 'Leaves! They use sunlight to make food.',
      hint: 'It needs sunlight to do its job.',
    },

    teachB: [
      { type: 'topic', icon: '☀️', title: 'What plants need', body: '💧 Water + ☀️ Sunlight + 💨 Air + 🟫 Soil = a healthy plant.' },
      { type: 'topic', icon: '🥀', title: 'When something is missing', body: 'No water → the plant **wilts** (goes droopy).\nNo sunlight → it turns pale and weak.' },
    ],
    teachBTe: 'Water + sun + air + soil = healthy plant. Water లేక wilts.',
    revealB: {
      prompt: 'A plant in a dark cupboard starts to go pale. What is it missing?',
      answer: 'Sunlight! Plants need light to stay green and strong.',
      hint: 'What do leaves use to make food?',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🪴', title: 'Story', body: 'Aadya keeps one plant in the sun and one in a dark box for a week.' },
        { type: 'topic', icon: '🔎', title: 'Observe', body: 'The sunny plant stays green. The dark one droops.' },
      ],
      story: 'Which plant grew better, and why?',
      storyTe: 'ఏ plant బాగా పెరిగింది? ఎందుకు?',
      answer: 'The sunny one! It had the sunlight leaves need to make food.',
      hint: 'Plants need light.',
    },

    quiz: [
      {
        question: 'Which part drinks water from soil?',
        choices: [
          { id: 'a', label: 'Flower', isCorrect: false },
          { id: 'b', label: 'Roots', isCorrect: true },
          { id: 'c', label: 'Petals', isCorrect: false },
        ],
      },
      {
        question: 'A plant with no water will…',
        choices: [
          { id: 'a', label: 'Wilt and droop', isCorrect: true },
          { id: 'b', label: 'Grow taller fast', isCorrect: false },
          { id: 'c', label: 'Turn into a rock', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Match each plant part to its job:',
    tryType: 'match-pairs',
    pairs: [
      { left: 'Leaves', right: 'Make food with sun' },
      { left: 'Roots', right: 'Take in water' },
      { left: 'Stem', right: 'Holds plant up' },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🌻', title: 'Grow & watch', body: 'Plants change a little every day.' },
    ],
    makePrompt: 'Watch a plant at home for a few days. What did you notice changing?',
    makePromptTe: 'ఇంట్లో plant కొన్ని రోజులు observe చేసి మార్పు చెప్పండి.',
    makeHint: 'Look at new leaves, height, or colour.',

    parentTip: 'Water a potted plant together and watch the leaves over a week.',
    parentTipTe: 'Plant కి నీరు పోసి week observe చేయండి.',
    parentQ: 'Why do leaves look droopy without water?',
    parentQTe: 'నీరు లేక leaves droopy ఎందుకు?',
  },

  /* ── Chapter 3 ───────────────────────────────────────────── */
  {
    id: 'ad-v-ch03',
    num: 3,
    title: 'Uses of Plants',
    subtitle: 'Unit 2 · Plant Life',
    hook: 'Chiku\'s lunch had **rice** and **mango**, and her shirt is made of **cotton** — all from plants! 🌾\n\nWhat else do plants give us?',
    hookTe: 'Rice, mango, cotton — అన్నీ plants నుండి! ఇంకా ఏమిస్తాయి?',

    teachA: [
      { type: 'topic', icon: '🍚', title: 'Food from plants', body: '🍎 Fruits · 🥦 Vegetables · 🌾 Grains (rice, wheat)\nEven tea leaves and spices come from plants!' },
      { type: 'topic', icon: '🍽️', title: 'Look at your plate', body: 'Most of what we eat starts as a plant. Rice grows in fields; dal comes from seeds.' },
    ],
    teachATe: 'Plants → fruits, vegetables, grains. Plate లో చాలా plant food.',
    revealA: {
      prompt: 'Rice comes from a plant or a rock?',
      answer: 'A plant! Rice grows in fields as a grain.',
      hint: 'It is a grain that grows in water-filled fields.',
    },

    teachB: [
      { type: 'topic', icon: '🪵', title: 'More gifts', body: '🪵 **Wood** for furniture\n👕 **Cotton** for clothes\n🌿 **Neem & tulsi** for medicine\n💐 **Flowers** for festivals' },
      { type: 'topic', icon: '📄', title: 'Even paper!', body: 'Paper is made from trees. So is the book you read from!' },
    ],
    teachBTe: 'Wood, cotton, medicine, paper — plants ఇస్తాయి.',
    revealB: {
      prompt: 'Your notebook paper is made from…?',
      answer: 'Trees! Paper comes from plant material.',
      hint: 'Big plants that give wood.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '👕', title: 'Story', body: 'Aadya wears a cotton dress and carries a wooden pencil.' },
        { type: 'topic', icon: '🧭', title: 'Trace it back', body: 'Cotton → cotton plant. Wood pencil → tree.' },
      ],
      story: 'Name two plant-gifts Aadya is using right now.',
      storyTe: 'Aadya వాడుతున్న 2 plant-gifts ఏవి?',
      answer: 'The cotton dress and the wooden pencil — both from plants!',
      hint: 'Look at clothes and the pencil.',
    },

    quiz: [
      {
        question: 'Rice comes from…',
        choices: [
          { id: 'a', label: 'A plant', isCorrect: true },
          { id: 'b', label: 'A rock', isCorrect: false },
          { id: 'c', label: 'Plastic', isCorrect: false },
        ],
      },
      {
        question: 'Cotton for our clothes is from…',
        choices: [
          { id: 'a', label: 'A plant', isCorrect: true },
          { id: 'b', label: 'A fish', isCorrect: false },
          { id: 'c', label: 'Metal', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'We make paper from…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Stones', isCorrect: false },
      { id: 'b', label: 'Plant material (trees)', isCorrect: true },
      { id: 'c', label: 'Metal', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🔎', title: 'Plant detective', body: 'So many everyday things begin as plants.' },
    ],
    makePrompt: 'Find 3 things at home that come from plants. How do you know?',
    makePromptTe: 'ఇంట్లో plants నుండి వచ్చిన 3 వస్తువులు కనుగొనండి.',
    makeHint: 'Check food, clothes, furniture, and paper.',

    parentTip: 'At meals, name one plant-based food on the plate together.',
    parentTipTe: 'Meal లో ఒక plant food identify చేయండి.',
    parentQ: 'Is cotton from an animal or a plant?',
    parentQTe: 'Cotton plant నుండా animal నుండా?',
  },

  /* ── Chapter 4 ───────────────────────────────────────────── */
  {
    id: 'ad-v-ch04',
    num: 4,
    title: 'Useful Animals',
    subtitle: 'Unit 3 · Animal Life',
    hook: 'Chiku visited a farm — the **cow** gives milk and the **hen** gives eggs! 🐄🥚\n\nSome animals live with us and help us every day.',
    hookTe: 'Cow → milk, hen → eggs. Useful animals!',

    teachA: [
      { type: 'topic', icon: '🐄', title: 'Farm friends', body: '🐄 Cow → milk\n🐔 Hen → eggs\n🐐 Goat → milk\n🐑 Sheep → wool' },
      { type: 'topic', icon: '🥛', title: 'In your breakfast', body: 'Milk in your glass, eggs on your plate — animal gifts you may use today!' },
    ],
    teachATe: 'Cow milk, hen eggs, goat milk, sheep wool.',
    revealA: {
      prompt: 'We get wool for warm clothes from which animal?',
      answer: 'Sheep! Their soft wool is made into warm clothes.',
      hint: 'A fluffy farm animal.',
    },

    teachB: [
      { type: 'topic', icon: '🐕', title: 'Pets & helpers', body: '🐕 Dog guards the home\n🐈 Cat catches mice\n🐎 Horse carries loads and people' },
      { type: 'topic', icon: '❤️', title: 'Be kind', body: 'Animals that help us need food, water, and care in return.' },
    ],
    teachBTe: 'Dog guards, cat mice, horse carries. Animals ని care చేయాలి.',
    revealB: {
      prompt: 'A dog at home mostly helps by…?',
      answer: 'Guarding the house and being a loyal friend.',
      hint: 'It barks to warn us.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🍳', title: 'Story', body: 'Aadya eats an omelette and drinks a glass of milk.' },
        { type: 'topic', icon: '🐾', title: 'Which animals?', body: 'Egg → hen. Milk → cow.' },
      ],
      story: 'Which two animals helped make Aadya\'s breakfast?',
      storyTe: 'Aadya breakfast కి ఏ 2 animals సాయపడ్డాయి?',
      answer: 'The hen (egg) and the cow (milk)!',
      hint: 'Think egg and milk.',
    },

    quiz: [
      {
        question: 'We get wool from…',
        choices: [
          { id: 'a', label: 'Fish', isCorrect: false },
          { id: 'b', label: 'Sheep', isCorrect: true },
          { id: 'c', label: 'Snake', isCorrect: false },
        ],
      },
      {
        question: 'Which animal guards the home?',
        choices: [
          { id: 'a', label: 'Dog', isCorrect: true },
          { id: 'b', label: 'Hen', isCorrect: false },
          { id: 'c', label: 'Goldfish', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Milk comes from…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Cow', isCorrect: true },
      { id: 'b', label: 'Lion', isCorrect: false },
      { id: 'c', label: 'Eagle', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🧺', title: 'Animal gifts', body: 'Milk, eggs, wool, honey — animals give us a lot.' },
    ],
    makePrompt: 'Find one animal gift you used today. Which animal gave it, and how do we say thanks by caring for it?',
    makePromptTe: 'ఈరోజు వాడిన animal gift ఏది? ఏ animal ఇచ్చింది?',
    makeHint: 'Milk, egg, wool, honey…',

    parentTip: 'Ask which animal product is in breakfast (milk, egg, etc.).',
    parentTipTe: 'Breakfast లో animal product ఏది?',
    parentQ: 'Why do farmers take good care of cows?',
    parentQTe: 'Farmers cows ని ఎందుకు care చేస్తారు?',
  },

  /* ── Chapter 5 ───────────────────────────────────────────── */
  {
    id: 'ad-v-ch05',
    num: 5,
    title: 'Wild Animals',
    subtitle: 'Unit 3 · Animal Life',
    glossary: [
      { word: 'wild', en: 'living free in nature, not at home', te: 'అడవిలో స్వేచ్ఛగా జీవించేది' },
    ],
    hook: 'Chiku saw a **tiger** — in a forest, not in a house! 🐅\n\n**Wild animals** live in nature. We watch them from far and keep them safe.',
    hookTe: 'Tiger అడవిలో. Wild animals nature లో. దూరం నుండి చూడాలి.',

    teachA: [
      { type: 'topic', icon: '🌳', title: 'Where they live', body: '🌳 Forest → tiger, deer, monkey\n🏜️ Desert → camel\n❄️ Cold places → polar bear\n🌊 Water → fish, dolphin' },
      { type: 'topic', icon: '🧭', title: 'Homes fit the animal', body: 'A camel\'s body suits the hot, dry desert. A fish\'s body suits water. Each home fits its animal.' },
    ],
    teachATe: 'Forest tiger, desert camel, water fish. Home ప్రతి animal కి సరిపోతుంది.',
    revealA: {
      prompt: 'Why is a camel happy in the desert?',
      answer: 'Its body stores water and walks on sand — perfect for a hot, dry desert!',
      hint: 'Think hot and dry, little water.',
    },

    teachB: [
      { type: 'topic', icon: '🛡️', title: 'Keep them safe', body: 'Never tease wild animals. They need forests and clean water to live.' },
      { type: 'topic', icon: '🦓', title: 'At the zoo', body: 'A **zoo** lets us see some wild animals safely. Even there, we stay kind and do not throw things at them.' },
    ],
    teachBTe: 'Wild animals ని tease చేయొద్దు. Zoo లో కూడా kind గా ఉండాలి.',
    revealB: {
      prompt: 'Should we feed or tease monkeys on the road? Why?',
      answer: 'No! It can make them sick or angry. Wild animals need their own food.',
      hint: 'They are wild, not pets.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🐘', title: 'Story', body: 'On a trip, Aadya sees a deer in a forest and a fish in a pond.' },
        { type: 'topic', icon: '🏠', title: 'Match homes', body: 'Deer → forest. Fish → water.' },
      ],
      story: 'If you put the fish in the forest, what would happen?',
      storyTe: 'Fish ని forest లో పెడితే ఏమవుతుంది?',
      answer: 'It could not breathe! A fish needs water to live.',
      hint: 'Fish need water to breathe.',
    },

    quiz: [
      {
        question: 'A tiger usually lives in…',
        choices: [
          { id: 'a', label: 'A forest', isCorrect: true },
          { id: 'b', label: 'Your bed', isCorrect: false },
          { id: 'c', label: 'A school bag', isCorrect: false },
        ],
      },
      {
        question: 'Wild animals need us to…',
        choices: [
          { id: 'a', label: 'Protect their homes', isCorrect: true },
          { id: 'b', label: 'Tease them', isCorrect: false },
          { id: 'c', label: 'Keep them in our house', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Match each animal to its home:',
    tryType: 'match-pairs',
    pairs: [
      { left: 'Camel', right: 'Desert' },
      { left: 'Fish', right: 'Water' },
      { left: 'Deer', right: 'Forest' },
    ],

    makeBlocks: [
      { type: 'topic', icon: '📓', title: 'Animal explorer', body: 'Books and nature shows are great ways to meet wild animals safely.' },
    ],
    makePrompt: 'Pick a wild animal you like. Where does it live, and one way we can keep it safe?',
    makePromptTe: 'మీకు ఇష్టమైన wild animal ఎక్కడ ఉంటుంది? Safe ఎలా ఉంచాలి?',
    makeHint: 'Think about its home — forest, water, desert, cold.',

    parentTip: 'Talk about why we do not feed monkeys on roads.',
    parentTipTe: 'Road monkeys ని ఎందుకు feed చేయకూడదో మాట్లాడండి.',
    parentQ: 'Why is a camel well suited to the desert?',
    parentQTe: 'Camel desert కి ఎందుకు సరిపోతుంది?',
  },

  /* ── Chapter 6 ───────────────────────────────────────────── */
  {
    id: 'ad-v-ch06',
    num: 6,
    title: 'Bones and Muscles',
    subtitle: 'Unit 4 · Human Body',
    glossary: [
      { word: 'skeleton', en: 'all the bones inside the body', te: 'శరీరంలోని ఎముకలన్నీ' },
    ],
    hook: 'Chiku tried a cartwheel — her **bones** keep her shape and her **muscles** pull to move! 🤸\n\nWithout bones we would be floppy like jelly.',
    hookTe: 'Bones shape ఇస్తాయి, muscles move చేస్తాయి.',

    teachA: [
      { type: 'topic', icon: '🦴', title: 'Your skeleton', body: 'Bones inside you form a **skeleton**.\n🧠 Skull protects the brain\n❤️ Ribs protect the heart\n🦵 Leg bones help you stand' },
      { type: 'topic', icon: '🔗', title: 'Joints bend', body: 'Where two bones meet is a **joint** — like your elbow and knee. Joints let you bend and move.' },
    ],
    teachATe: 'Skeleton = bones. Skull brain, ribs heart protect. Joints bend.',
    revealA: {
      prompt: 'Which bones protect your heart?',
      answer: 'The ribs! They form a cage around the heart.',
      hint: 'Feel your chest — those curved bones.',
    },

    teachB: [
      { type: 'topic', icon: '💪', title: 'Muscles move you', body: 'Muscles **pull** on bones to make them move. They work in the arms, legs, and even your smile!' },
      { type: 'topic', icon: '🏃', title: 'Stay strong', body: 'Exercise and good food make muscles **stronger**. Warm up before big stretches.' },
    ],
    teachBTe: 'Muscles bones ని పట్టి move చేస్తాయి. Exercise → strong.',
    revealB: {
      prompt: 'When you bend your arm, what pulls the bone?',
      answer: 'A muscle! Muscles pull bones to move them.',
      hint: 'Feel the bump on your upper arm.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '✋', title: 'Story', body: 'Aadya picks up a heavy water bottle.' },
        { type: 'topic', icon: '🦴💪', title: 'Team work', body: 'Bones give the arm shape; muscles pull to lift.' },
      ],
      story: 'Do bones OR muscles do the lifting — or both? Why?',
      storyTe: 'Lift చేయడానికి bones aa muscles aa రెండూనా?',
      answer: 'Both! Bones give shape, muscles pull to lift. They work as a team.',
      hint: 'One gives shape, the other moves.',
    },

    quiz: [
      {
        question: 'Bones help us to…',
        choices: [
          { id: 'a', label: 'Stand and keep our shape', isCorrect: true },
          { id: 'b', label: 'Digest food only', isCorrect: false },
          { id: 'c', label: 'See colours', isCorrect: false },
        ],
      },
      {
        question: 'Where two bones meet to bend is a…',
        choices: [
          { id: 'a', label: 'Joint', isCorrect: true },
          { id: 'b', label: 'Muscle', isCorrect: false },
          { id: 'c', label: 'Skull', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'Muscles mainly help us to…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Move', isCorrect: true },
      { id: 'b', label: 'Hear music', isCorrect: false },
      { id: 'c', label: 'Grow hair faster', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🤸', title: 'Body explorer', body: 'You can feel your bones and muscles working!' },
    ],
    makePrompt: 'Bend your elbow and knee. Which joints did you use? What did your muscles do?',
    makePromptTe: 'Elbow, knee bend చేసి ఏ joints, muscles పనిచేశాయో చెప్పండి.',
    makeHint: 'Joints bend; muscles pull.',

    parentTip: 'Feel the elbow bend together — name the joint and the muscle helping.',
    parentTipTe: 'Elbow bend feel చేసి joint/muscle పేరు చెప్పండి.',
    parentQ: 'Why do we need both bones AND muscles?',
    parentQTe: 'Bones, muscles రెండూ ఎందుకు అవసరం?',
  },

  /* ── Chapter 7 ───────────────────────────────────────────── */
  {
    id: 'ad-v-ch07',
    num: 7,
    title: 'Our Food',
    subtitle: 'Unit 4 · Human Body',
    glossary: [
      { word: 'energy', en: 'the power to play, learn and grow', te: 'ఆడటానికి, నేర్చుకోవటానికి శక్తి' },
    ],
    hook: 'Chiku chose **fruits**, **dal**, and **roti** — a colourful plate! 🥗\n\nGood food gives **energy** to play, learn, and grow.',
    hookTe: 'మంచి food → energy. Colourful plate!',

    teachA: [
      { type: 'topic', icon: '🥗', title: 'A healthy plate', body: '🍎 Fruits & vegetables\n🌾 Grains (rice, roti)\n🫘 Pulses (dal)\n🥛 Milk · 🥜 a few nuts' },
      { type: 'topic', icon: '🍭', title: 'Sometimes food', body: 'Sweets and chips are "sometimes" foods — tasty, but not every day.' },
    ],
    teachATe: 'Healthy plate = fruits, grains, dal, milk. Sweets sometimes మాత్రమే.',
    revealA: {
      prompt: 'Should candy be an "every day" or a "sometimes" food?',
      answer: 'Sometimes! Too much sugar is not good for the body.',
      hint: 'Treats now and then, not daily.',
    },

    teachB: [
      { type: 'topic', icon: '💧', title: 'Drink water', body: 'Water helps every part of your body work. Sip it through the day, especially after play.' },
      { type: 'topic', icon: '🌈', title: 'Eat the rainbow', body: 'Different colours of fruits and veggies give different goodness. Try to eat many colours!' },
    ],
    teachBTe: 'Water రోజంతా తాగాలి. రకరకాల colours తినాలి.',
    revealB: {
      prompt: 'After running and playing, what should you drink?',
      answer: 'Water! It cools you and helps your body recover.',
      hint: 'Not soda — something clear and plain.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🍱', title: 'Story', body: 'Aadya builds a lunchbox: roti, dal, a banana, and water.' },
        { type: 'topic', icon: '✅', title: 'Check it', body: 'Grain + pulse + fruit + water — balanced!' },
      ],
      story: 'Is Aadya\'s lunchbox healthy? What makes it good?',
      storyTe: 'Aadya lunchbox healthy aa? ఎందుకు?',
      answer: 'Yes! It has grain, pulse, fruit, and water — a balanced meal.',
      hint: 'Look for variety: grain, dal, fruit.',
    },

    quiz: [
      {
        question: 'Which gives steady energy for play?',
        choices: [
          { id: 'a', label: 'Only candy', isCorrect: false },
          { id: 'b', label: 'A balanced meal + water', isCorrect: true },
          { id: 'c', label: 'Skipping meals', isCorrect: false },
        ],
      },
      {
        question: 'Dal on your plate is a…',
        choices: [
          { id: 'a', label: 'Pulse (good protein)', isCorrect: true },
          { id: 'b', label: 'Sweet treat', isCorrect: false },
          { id: 'c', label: 'Drink', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'We should drink plenty of…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Water', isCorrect: true },
      { id: 'b', label: 'Only soda', isCorrect: false },
      { id: 'c', label: 'Nothing', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🍽️', title: 'Plate planner', body: 'A good meal has a mix of foods and colours.' },
    ],
    makePrompt: 'Plan your own healthy plate. What grain, fruit/veg, and drink will you choose?',
    makePromptTe: 'మీ healthy plate plan చేయండి — grain, fruit, drink.',
    makeHint: 'Grain + fruit/veg + dal/milk + water.',

    parentTip: 'Let Aadya name the colours on her plate and link them to foods.',
    parentTipTe: 'Plate colours ని foods తో link చేయించండి.',
    parentQ: 'Why is dal good for you?',
    parentQTe: 'Dal మంచిది ఎందుకు?',
  },

  /* ── Chapter 8 ───────────────────────────────────────────── */
  {
    id: 'ad-v-ch08',
    num: 8,
    title: 'Housing and Clothing',
    subtitle: 'Unit 4 · Human Body',
    hook: 'When rain came, Chiku wore a **raincoat** and stayed in a **dry house**. 🌧️\n\nHomes and clothes match the **weather**.',
    hookTe: 'Rain → raincoat, dry house. Weather కి తగ్గట్టు.',

    teachA: [
      { type: 'topic', icon: '🏠', title: 'Homes protect us', body: 'Brick house, hut, apartment — all keep us safe from sun ☀️, rain 🌧️, and cold ❄️.' },
      { type: 'topic', icon: '🧹', title: 'Keep it clean', body: 'A clean, tidy home keeps us healthy and happy.' },
    ],
    teachATe: 'Home sun, rain, cold నుండి కాపాడుతుంది. Clean గా ఉంచాలి.',
    revealA: {
      prompt: 'What does a house protect us from?',
      answer: 'Sun, rain, cold, and wind — it keeps us safe and dry.',
      hint: 'Think weather!',
    },

    teachB: [
      { type: 'topic', icon: '🧥', title: 'Clothes for seasons', body: '☀️ Summer → light cotton clothes\n❄️ Winter → warm wool layers\n🌧️ Rain → raincoat & umbrella' },
      { type: 'topic', icon: '🧊', title: 'Why cotton in summer?', body: 'Cotton is thin and lets air pass, so it feels **cool**. Wool is thick and traps warmth.' },
    ],
    teachBTe: 'Summer cotton (cool), winter wool (warm), rain raincoat.',
    revealB: {
      prompt: 'Why do we wear cotton in summer, not wool?',
      answer: 'Cotton is light and lets air through, so it keeps us cool. Wool would feel too hot.',
      hint: 'Thin and airy vs thick and warm.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🌦️', title: 'Story', body: 'It is a rainy, cool morning. Aadya must dress to go out.' },
        { type: 'topic', icon: '🧦', title: 'Choose', body: 'Rain → raincoat. Cool → a warm layer.' },
      ],
      story: 'What should Aadya wear, and why?',
      storyTe: 'Rainy, cool morning — Aadya ఏం వేసుకోవాలి?',
      answer: 'A raincoat (for rain) over warm clothes (for the cool air).',
      hint: 'Match clothes to the weather.',
    },

    quiz: [
      {
        question: 'In heavy rain we use…',
        choices: [
          { id: 'a', label: 'Raincoat / umbrella', isCorrect: true },
          { id: 'b', label: 'Swimming goggles only', isCorrect: false },
          { id: 'c', label: 'Sandals in deep mud', isCorrect: false },
        ],
      },
      {
        question: 'Cotton clothes in summer feel…',
        choices: [
          { id: 'a', label: 'Cool', isCorrect: true },
          { id: 'b', label: 'Very hot', isCorrect: false },
          { id: 'c', label: 'Wet always', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'In cold winter we wear…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Warm wool clothes', isCorrect: true },
      { id: 'b', label: 'Only shorts', isCorrect: false },
      { id: 'c', label: 'Nothing extra', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '👗', title: 'Weather dresser', body: 'Smart dressing matches the day\'s weather.' },
    ],
    makePrompt: 'Look at today\'s weather. What clothes are right for it, and why?',
    makePromptTe: 'ఈరోజు weather కి ఏ clothes సరైనవి? ఎందుకు?',
    makeHint: 'Hot → cotton. Cold → wool. Rain → raincoat.',

    parentTip: 'Before going out, ask: "What weather? What clothes?"',
    parentTipTe: 'బయటకు వెళ్లే ముందు weather, clothes అడగండి.',
    parentQ: 'Why does cotton feel cool in summer?',
    parentQTe: 'Summer లో cotton cool ఎందుకు?',
  },

  /* ── Chapter 9 ───────────────────────────────────────────── */
  {
    id: 'ad-v-ch09',
    num: 9,
    title: 'Safety',
    subtitle: 'Unit 4 · Human Body',
    hook: 'Chiku stopped at the **zebra crossing** and looked **left–right–left**. 🚸\n\nSafety rules keep our body safe every day.',
    hookTe: 'Zebra crossing. Left–right–left. Safety rules!',

    teachA: [
      { type: 'topic', icon: '🚦', title: 'Road safety', body: '🦓 Cross at a zebra crossing or signal\n🪖 Wear a helmet on two-wheelers\n🚫 Never play on the road' },
      { type: 'topic', icon: '👀', title: 'Look both ways', body: 'Look left, then right, then left again — because vehicles can come from either side.' },
    ],
    teachATe: 'Zebra cross, helmet, road లో ఆడొద్దు. Left–right చూడాలి.',
    revealA: {
      prompt: 'Why look left AND right before crossing?',
      answer: 'Vehicles can come from both sides — checking both keeps you safe.',
      hint: 'Cars come from more than one direction.',
    },

    teachB: [
      { type: 'topic', icon: '🏠', title: 'Home safety', body: '🔥 Do not touch a hot stove\n🚪 Do not open the door to strangers\n🔌 Keep fingers away from plug points' },
      { type: 'topic', icon: '🏊', title: 'Water safety', body: 'Never swim alone — always with a trusted adult.' },
    ],
    teachBTe: 'Hot stove, strangers, plugs careful. Adult లేకుండా swim వద్దు.',
    revealB: {
      prompt: 'A stranger at the door offers you candy. What do you do?',
      answer: 'Do not open or go with them — tell a trusted adult first.',
      hint: 'Always check with a grown-up you trust.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🛣️', title: 'Story', body: 'Aadya reaches a busy road with a zebra crossing nearby.' },
        { type: 'topic', icon: '✅', title: 'Safe choice', body: 'Walk to the crossing, look left–right–left, then cross.' },
      ],
      story: 'Should Aadya cross at the busy middle or walk to the crossing? Why?',
      storyTe: 'Busy middle aa crossing aa? ఎందుకు?',
      answer: 'Walk to the zebra crossing — it is the safe place to cross.',
      hint: 'Cross where drivers expect you.',
    },

    quiz: [
      {
        question: 'Cross the road at…',
        choices: [
          { id: 'a', label: 'A zebra crossing / signal', isCorrect: true },
          { id: 'b', label: 'The middle of a busy road', isCorrect: false },
          { id: 'c', label: 'A blind turn', isCorrect: false },
        ],
      },
      {
        question: 'You may swim…',
        choices: [
          { id: 'a', label: 'With a trusted adult', isCorrect: true },
          { id: 'b', label: 'All alone', isCorrect: false },
          { id: 'c', label: 'In any deep water', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'If a stranger offers candy at the door, you…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Tell a trusted adult first', isCorrect: true },
      { id: 'b', label: 'Go alone with the stranger', isCorrect: false },
      { id: 'c', label: 'Hide and tell no one', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🦺', title: 'Safety captain', body: 'Knowing rules keeps you and others safe.' },
    ],
    makePrompt: 'Tell one safety rule you will follow at the road or at home, and why it matters.',
    makePromptTe: 'మీరు పాటించే ఒక safety rule, ఎందుకో చెప్పండి.',
    makeHint: 'Road, stove, strangers, or water.',

    parentTip: 'Practice a road-crossing drill at a quiet crossing — make it a game.',
    parentTipTe: 'నిశ్శబ్ద crossing వద్ద road drill practice చేయండి.',
    parentQ: 'Why look left AND right?',
    parentQTe: 'Left–right రెండూ ఎందుకు చూడాలి?',
  },

  /* ── Chapter 10 ──────────────────────────────────────────── */
  {
    id: 'ad-v-ch10',
    num: 10,
    title: 'Air',
    subtitle: 'Unit 5 · Space & Environment',
    glossary: [
      { word: 'wind', en: 'moving air', te: 'కదులుతున్న గాలి' },
    ],
    hook: 'Chiku felt the **breeze** on her ears — that is **air** moving! 💨\n\nAir is everywhere, even when we cannot see it.',
    hookTe: 'Breeze = air కదలిక. Air అంతటా ఉంది.',

    teachA: [
      { type: 'topic', icon: '💨', title: 'Air is everywhere', body: 'We **breathe** air. Plants and animals need it too.\nYou cannot see air, but you can feel it on your skin.' },
      { type: 'topic', icon: '🎈', title: 'Proof of air', body: 'Blow up a balloon — it fills with air! A fan pushes air so you feel cool.' },
    ],
    teachATe: 'Air కనపడదు కానీ feel అవుతుంది. Balloon నింపుతుంది.',
    revealA: {
      prompt: 'You cannot see air. How do you know it is there?',
      answer: 'You feel it (breeze), it fills balloons, and it moves leaves and flags!',
      hint: 'Think balloon, breeze, flag.',
    },

    teachB: [
      { type: 'topic', icon: '🍃', title: 'Wind = moving air', body: 'Moving air is **wind**. It flies kites, turns windmills, and sways trees.' },
      { type: 'topic', icon: '🌳', title: 'Clean air', body: 'Smoke and dust make air **dirty**. Trees help clean the air. Walking or cycling keeps air cleaner!' },
    ],
    teachBTe: 'Wind = moving air. Trees air clean చేస్తాయి.',
    revealB: {
      prompt: 'What makes a kite fly up in the sky?',
      answer: 'The wind — moving air pushes the kite up!',
      hint: 'Moving air has a name.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🪶', title: 'Story', body: 'Aadya holds a feather in front of a switched-on fan.' },
        { type: 'topic', icon: '👀', title: 'Watch', body: 'The feather flutters and flies away.' },
      ],
      story: 'What pushed the feather, even though we cannot see it?',
      storyTe: 'Feather ని ఏది తోసింది (కనపడకుండా)?',
      answer: 'Moving air from the fan — that is wind!',
      hint: 'The fan moves air.',
    },

    quiz: [
      {
        question: 'Wind is…',
        choices: [
          { id: 'a', label: 'Moving air', isCorrect: true },
          { id: 'b', label: 'A kind of rock', isCorrect: false },
          { id: 'c', label: 'Only found in water', isCorrect: false },
        ],
      },
      {
        question: 'Which helps clean our air?',
        choices: [
          { id: 'a', label: 'Trees', isCorrect: true },
          { id: 'b', label: 'Smoke', isCorrect: false },
          { id: 'c', label: 'Dust', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'We breathe in…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Air', isCorrect: true },
      { id: 'b', label: 'Soil', isCorrect: false },
      { id: 'c', label: 'Stones', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🌬️', title: 'Air spotter', body: 'Air shows itself by moving things.' },
    ],
    makePrompt: 'Find 2 signs of air moving around you (flag, leaves, your breath). Describe them.',
    makePromptTe: 'మీ చుట్టూ air కదిలే 2 signs కనుగొనండి.',
    makeHint: 'Look for things that flutter or sway.',

    parentTip: 'Hold a feather or tissue near a fan and watch air move it.',
    parentTipTe: 'Fan దగ్గర feather పెట్టి air కదలిక చూపించండి.',
    parentQ: 'Can you see air? How do you know it is there?',
    parentQTe: 'Air కనపడదు — ఉందని ఎలా తెలుసు?',
  },

  /* ── Chapter 11 ──────────────────────────────────────────── */
  {
    id: 'ad-v-ch11',
    num: 11,
    title: 'Water',
    subtitle: 'Unit 5 · Space & Environment',
    glossary: [
      { word: 'source', en: 'where something comes from', te: 'ఎక్కడ నుండి వస్తుందో' },
    ],
    hook: 'Chiku turned off the tap while brushing — **save water**! 🚰\n\nWe get water from rain, rivers, lakes, and wells. Why must we not waste it?',
    hookTe: 'Tap off! Water save చేయాలి. వృథా చేయకూడదు ఎందుకు?',

    teachA: [
      { type: 'topic', icon: '💧', title: 'Where water comes from', body: '🌧️ Rain fills rivers and lakes\n🏞️ Rivers and lakes give us water\n🕳️ Wells reach water under the ground' },
      { type: 'topic', icon: '🚰', title: 'To your tap', body: 'Cities store water in **dams** and send it through pipes to your home tap.' },
    ],
    teachATe: 'Rain → rivers, lakes. Wells underground. Dams → pipes → tap.',
    revealA: {
      prompt: 'Where does well water come from?',
      answer: 'From under the ground! A well reaches underground water.',
      hint: 'Look down, not up.',
    },

    teachB: [
      { type: 'topic', icon: '♻️', title: 'Save water', body: '🚰 Close taps when not in use\n🪴 Reuse cup water for plants\n🚿 Take shorter showers' },
      { type: 'topic', icon: '🌍', title: 'Why it matters', body: 'Many places have very little water. Saving it helps everyone — and the Earth.' },
    ],
    teachBTe: 'Tap close, reuse, short shower. చాలా చోట్ల water తక్కువ.',
    revealB: {
      prompt: 'Name one easy way to save water while brushing teeth.',
      answer: 'Turn off the tap while brushing — only open it to rinse!',
      hint: 'The tap does not need to run the whole time.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🦷', title: 'Story', body: 'Aadya leaves the tap running for 2 minutes while brushing.' },
        { type: 'topic', icon: '💧', title: 'Think', body: 'That water flows away unused.' },
      ],
      story: 'What small change saves all that water?',
      storyTe: 'ఆ water save చేయడానికి చిన్న మార్పు ఏది?',
      answer: 'Turn off the tap while brushing, open only to rinse!',
      hint: 'Stop the running tap.',
    },

    quiz: [
      {
        question: 'Rain fills…',
        choices: [
          { id: 'a', label: 'Rivers and lakes', isCorrect: true },
          { id: 'b', label: 'Only books', isCorrect: false },
          { id: 'c', label: 'Plastic toys', isCorrect: false },
        ],
      },
      {
        question: 'Well water comes from…',
        choices: [
          { id: 'a', label: 'Under the ground', isCorrect: true },
          { id: 'b', label: 'The clouds directly', isCorrect: false },
          { id: 'c', label: 'A factory', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'To save water we should…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Close the tap when not using', isCorrect: true },
      { id: 'b', label: 'Leave the tap open all day', isCorrect: false },
      { id: 'c', label: 'Spill water on purpose', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🫗', title: 'Water saver', body: 'Small habits save a lot of water over time.' },
    ],
    makePrompt: 'Pick one water-saving habit for your home. How much do you think it saves?',
    makePromptTe: 'మీ ఇంటికి ఒక water-saving అలవాటు ఎంచుకోండి.',
    makeHint: 'Closing taps, reusing water, shorter showers.',

    parentTip: 'Fix a leaking tap together, or water plants with leftover cup water.',
    parentTipTe: 'Leak tap సరిచేయండి / మిగిలిన water plants కి వాడండి.',
    parentQ: 'Where does tap water come from in your city?',
    parentQTe: 'మీ నగరంలో tap water ఎక్కడ నుండి వస్తుంది?',
  },

  /* ── Chapter 12 ──────────────────────────────────────────── */
  {
    id: 'ad-v-ch12',
    num: 12,
    title: 'Rocks and Minerals',
    subtitle: 'Unit 5 · Space & Environment',
    glossary: [
      { word: 'mineral', en: 'a useful material found in rocks/earth', te: 'రాళ్లలో దొరికే ఉపయోగకరమైన పదార్థం' },
    ],
    hook: 'Chiku picked up a smooth **pebble** and a shiny **mica** flake. 🪨✨\n\n**Rocks** are hard. Some rocks hold **minerals** we use every day.',
    hookTe: 'Rocks గట్టివి. వాటిలో minerals ఉంటాయి — useful.',

    teachA: [
      { type: 'topic', icon: '🪨', title: 'Rocks big and small', body: 'A tiny pebble or a huge mountain — both are rocks!\nSome are **soft** (chalk), some are **hard** (granite).' },
      { type: 'topic', icon: '✋', title: 'Feel the difference', body: 'Chalk crumbles easily; granite stays hard. Try (gently!) and feel.' },
    ],
    teachATe: 'Pebble, mountain — both rocks. Chalk soft, granite hard.',
    revealA: {
      prompt: 'Is chalk a soft rock or a hard rock?',
      answer: 'Soft! Chalk crumbles easily, unlike hard granite.',
      hint: 'It rubs off on the board.',
    },

    teachB: [
      { type: 'topic', icon: '⛏️', title: 'Minerals from Earth', body: '🧂 Salt, ✨ mica, and ⚫ coal are minerals.\nWe dig them from the Earth.' },
      { type: 'topic', icon: '🏗️', title: 'How we use them', body: 'Minerals build roads and houses; salt flavours our food; coal can make heat.' },
    ],
    teachBTe: 'Salt, mica, coal = minerals. Roads, food, heat కి వాడతాం.',
    revealB: {
      prompt: 'The salt you sprinkle on food — plant or mineral?',
      answer: 'A mineral! Salt comes from the Earth, not a plant.',
      hint: 'It is dug or dried from the earth/sea.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🥾', title: 'Story', body: 'On a walk, Aadya finds a crumbly white stone and a hard grey one.' },
        { type: 'topic', icon: '🔬', title: 'Sort', body: 'Crumbly → soft. Hard → cannot scratch easily.' },
      ],
      story: 'How can Aadya tell which stone is soft?',
      storyTe: 'ఏ stone soft అని ఎలా చెప్పొచ్చు?',
      answer: 'The crumbly one that rubs or scratches easily is the soft rock.',
      hint: 'Soft rocks crumble.',
    },

    quiz: [
      {
        question: 'Chalk is a rock that is…',
        choices: [
          { id: 'a', label: 'Soft', isCorrect: true },
          { id: 'b', label: 'Liquid like juice', isCorrect: false },
          { id: 'c', label: 'Made of plastic', isCorrect: false },
        ],
      },
      {
        question: 'Which is a mineral we eat with food?',
        choices: [
          { id: 'a', label: 'Salt', isCorrect: true },
          { id: 'b', label: 'Cotton', isCorrect: false },
          { id: 'c', label: 'Petals', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'We sprinkle on food this mineral from the Earth:',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Salt', isCorrect: true },
      { id: 'b', label: 'Cotton', isCorrect: false },
      { id: 'c', label: 'Petals', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🧺', title: 'Rock collector', body: 'Rocks differ in colour, shine, and hardness.' },
    ],
    makePrompt: 'Collect 3 stones. Sort them soft vs hard. Which was hardest, and how did you know?',
    makePromptTe: '3 stones సేకరించి soft/hard sort చేయండి.',
    makeHint: 'Soft ones crumble or scratch; hard ones do not.',

    parentTip: 'Collect 3 stones on a walk and sort soft vs hard together.',
    parentTipTe: 'నడకలో 3 stones సేకరించి soft/hard sort చేయండి.',
    parentQ: 'Is salt from a plant or from minerals in the Earth?',
    parentQTe: 'Salt plant నుండా mineral నుండా?',
  },

  /* ── Chapter 13 ──────────────────────────────────────────── */
  {
    id: 'ad-v-ch13',
    num: 13,
    title: 'Sun, Light and Shadow',
    subtitle: 'Unit 5 · Space & Environment',
    glossary: [
      { word: 'shadow', en: 'dark shape where light is blocked', te: 'వెలుగు ఆగిన చోట ఏర్పడే చీకటి ఆకారం' },
    ],
    hook: 'Chiku stood in the sun — her **shadow** copied her on the ground! 🌞👤\n\nLight travels in straight lines. What makes a shadow?',
    hookTe: 'Sun → shadow. Shadow ఎలా వస్తుంది?',

    teachA: [
      { type: 'topic', icon: '☀️', title: 'Sun gives light & heat', body: 'The Sun helps plants grow, dries wet clothes, and lights our day.\nWithout it, Earth would be dark and very cold.' },
      { type: 'topic', icon: '➡️', title: 'Light goes straight', body: 'Light travels in **straight lines** — it cannot bend around corners.' },
    ],
    teachATe: 'Sun = light + heat. Light straight line లో వెళుతుంది.',
    revealA: {
      prompt: 'Name two things the Sun does for us.',
      answer: 'Gives light and heat — and helps plants grow and dry clothes!',
      hint: 'Think bright and warm.',
    },

    teachB: [
      { type: 'topic', icon: '👤', title: 'How shadows form', body: 'When you **block** the light, a dark **shadow** forms behind you on the other side.' },
      { type: 'topic', icon: '📏', title: 'Shadow size changes', body: 'When the Sun is **low** (morning/evening), shadows are **long**.\nWhen the Sun is **high** (noon), shadows are **short**.' },
    ],
    teachBTe: 'Light block → shadow. Sun low = long shadow, high = short.',
    revealB: {
      prompt: 'Why is your shadow longer in the evening?',
      answer: 'The Sun is low in the sky, so it stretches your shadow long.',
      hint: 'Think about how high the Sun is.',
    },

    example: {
      steps: [
        { type: 'topic', icon: '🔦', title: 'Story', body: 'Aadya shines a torch on her hand against a wall.' },
        { type: 'topic', icon: '🖐️', title: 'Watch', body: 'A hand-shaped shadow appears on the wall.' },
      ],
      story: 'Why did a shadow of her hand appear?',
      storyTe: 'చేయి shadow ఎందుకు వచ్చింది?',
      answer: 'Her hand blocked the torch light, so a shadow formed behind it.',
      hint: 'Something blocked the light.',
    },

    quiz: [
      {
        question: 'A shadow forms when light is…',
        choices: [
          { id: 'a', label: 'Blocked by an object', isCorrect: true },
          { id: 'b', label: 'Turned into water', isCorrect: false },
          { id: 'c', label: 'Always inside a box', isCorrect: false },
        ],
      },
      {
        question: 'When the Sun is low in the evening, shadows are…',
        choices: [
          { id: 'a', label: 'Long', isCorrect: true },
          { id: 'b', label: 'Very short', isCorrect: false },
          { id: 'c', label: 'Gone', isCorrect: false },
        ],
      },
    ],
    tryPrompt: 'The Sun gives us…',
    tryType: 'choice-cards',
    choices: [
      { id: 'a', label: 'Light and heat', isCorrect: true },
      { id: 'b', label: 'Only cold ice', isCorrect: false },
      { id: 'c', label: 'Underground water', isCorrect: false },
    ],

    makeBlocks: [
      { type: 'topic', icon: '🕵️', title: 'Shadow scientist', body: 'Shadows change through the day as the Sun moves across the sky.' },
    ],
    makePrompt: 'Make a shadow with your hand and a light. Then check your shadow outside in the morning and evening — which is longer?',
    makePromptTe: 'చేయి shadow చేసి, ఉదయం/సాయంత్రం shadow length compare చేయండి.',
    makeHint: 'Low Sun → long shadow; high Sun → short.',

    parentTip: 'Trace a shadow with chalk in the morning and evening — compare the lengths.',
    parentTipTe: 'ఉదయం/సాయంత్రం shadow chalk తో గీసి length compare చేయండి.',
    parentQ: 'Why is your shadow longer in the evening?',
    parentQTe: 'సాయంత్రం shadow పొడవుగా ఎందుకు ఉంటుంది?',
  },
];

const evsCards = [
  buildContentsCard(
    'aadya-evs',
    'EVS · Chiku Explores',
    '🐰 Explore **our world** — Earth, plants, animals, your body, air, water and more!\n\n13 chapters from your **I Explore** book. Each one has a story, two discover pages, a real-life example, a Quick Check, and a "make your own" page.\n\nChiku asks — you think and discover. No copy-paste answers!',
    '🐰 13 EVS chapters — ప్రతి దానిలో story + 2 discover pages + example + quiz + make-your-own.',
  ),
  ...chapters.flatMap((ch) => buildAadyaChapterCards('aadya-evs', ch)),
];

export const aadyaEvs: Lesson = {
  id: 'aadya-evs',
  title: 'EVS Explorer',
  subtitle: 'Grade 2 · 13 chapters · Chiku',
  kid: 'aadya',
  subject: 'evs',
  hasTelugu: true,
  icon: '🌍',
  cards: evsCards,
};
