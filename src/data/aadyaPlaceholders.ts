/* ============================================================
   AADYA — Grade 2 lessons (English placeholder + full Maths/EVS)
   ============================================================ */

import type { Lesson } from '../types/content';
import { aadyaMaths } from './aadyaMaths';
import { aadyaEvs } from './aadyaEvs';

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

export { aadyaMaths, aadyaEvs };
export const aadyaLessons: Lesson[] = [aadyaMaths, aadyaEnglish, aadyaEvs];
