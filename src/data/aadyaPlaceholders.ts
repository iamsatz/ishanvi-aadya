/* ============================================================
   AADYA — Grade 2 placeholder lessons (kid-friendly instructions)
   ============================================================ */

import type { Lesson } from '../types/content';

function welcomeCard(
  id: string,
  lessonId: string,
  subject: string,
  titleEn: string,
  bodyEn: string,
  bodyTe: string,
): Lesson['cards'][0] {
  return {
    id,
    lessonId,
    title: titleEn,
    subtitle: `Grade 2 · ${subject} · Coming soon`,
    englishContent: bodyEn,
    teluguContent: bodyTe,
    parentSuggestion: {
      tip: 'This page is a preview for Aadya. Tap around, explore the bunny guide, and check back soon for full lessons.',
      tipTe: 'ఇది ఆద్య కోసం ప్రివ్యూ పేజీ. బన్నీ గైడ్‌తో explore చేయండి — త్వరలో పూర్తి lessons వస్తాయి.',
      questions: ['Which animal guide do you see?', 'What subject will we learn here?'],
      questionsTe: ['ఏ animal guide కనిపిస్తోంది?', 'ఇక్కడ ఏ subject నేర్చుకుంటాం?'],
    },
    promptText: 'Tap the card — what is Chiku the bunny saying?',
    interactionType: 'tap-reveal',
    cardStyle: 'deck',
    revealAnswer: '🐰 "Hop hop! More fun games are hopping in soon. For now, explore and play!"',
  };
}

export const aadyaMaths: Lesson = {
  id: 'aadya-maths',
  title: 'Maths Playground',
  subtitle: 'Numbers, shapes & fun',
  kid: 'aadya',
  subject: 'maths',
  hasTelugu: true,
  icon: '🧮',
  cards: [
    welcomeCard(
      'ad-m-0', 'aadya-maths', 'Maths',
      'Hi Aadya! Maths is coming!',
      '🐰 Chiku the bunny says:\n\n"Soon we will count, add, and play with numbers!"\n\n🎲 It will feel like a card game — tap, match, and win stars!\n\nFor now: explore this page. Tap the card below!',
      '🐰 చికు బన్నీ చెబుతోంది:\n\n"త్వరలో మనం numbers count చేసి, add చేసి, games ఆడతాం!"\n\n🎲 card game లా ఉంటుంది — tap చేసి, match చేసి, stars గెలుచుకో!\n\nఇప్పుడు: ఈ page explore చేయి. క్రింద card tap చేయి!',
    ),
  ],
};

export const aadyaEnglish: Lesson = {
  id: 'aadya-english',
  title: 'English Adventures',
  subtitle: 'Words, stories & sounds',
  kid: 'aadya',
  subject: 'english',
  hasTelugu: true,
  icon: '📖',
  cards: [
    welcomeCard(
      'ad-e-0', 'aadya-english', 'English',
      'Hello Aadya! Stories are coming!',
      '🐰 Chiku hops in with a storybook:\n\n"Soon we will read short stories, learn new words, and play sound games!"\n\n🃏 Some games will be flip-cards — like a magic deck!\n\nTap the card to hear Chiku\'s secret.',
      '🐰 చికు storybook తో jump అవుతోంది:\n\n"త్వరలో chinnavi stories, kotha words, sound games!"\n\n🃏 flip-cards లా magic deck games కూడా!\n\nCard tap చేసి Chiku secret విను.',
    ),
  ],
};

export const aadyaEvs: Lesson = {
  id: 'aadya-evs',
  title: 'EVS Explorer',
  subtitle: 'Plants, animals & our world',
  kid: 'aadya',
  subject: 'evs',
  hasTelugu: true,
  icon: '🌍',
  cards: [
    welcomeCard(
      'ad-v-0', 'aadya-evs', 'EVS',
      'Explore the world, Aadya!',
      '🐰 Chiku found a little seed:\n\n"Soon we will learn about plants, animals, water, and our home — Earth!"\n\n🌱 We will match pictures like a card game.\n\nTap below to see what Chiku is holding!',
      '🐰 చికు chinna seed కనిపించింది:\n\n"త్వరలో plants, animals, water, Earth గురించి నేర్చుకుంటాం!"\n\n🌱 pictures match చేసే card games కూడా!\n\nక్రింద tap చేసి Chiku ఏమి పట్టుకుందో చూడు.',
    ),
  ],
};

export const aadyaLessons: Lesson[] = [aadyaMaths, aadyaEnglish, aadyaEvs];
