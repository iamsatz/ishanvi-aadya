import type { AvatarId, KidId } from '../types/content';

export interface CharacterGuide {
  kid: KidId;
  name: string;
  avatar: AvatarId;
  emoji?: string;
  role: string;
  /** Short cheer shown in the speech bubble. */
  cheer: string;
}

export const characters: Record<KidId, CharacterGuide> = {
  ishanvi: {
    kid: 'ishanvi',
    name: 'Satish',
    avatar: 'satish-guru',
    role: 'Your wise guru guide · Grade 4',
    cheer: 'Learn well, little one — you’ve got this!',
  },
  aadya: {
    kid: 'aadya',
    name: 'Chiku',
    avatar: 'emoji',
    emoji: '🐰',
    role: 'Your bunny buddy · Grade 2',
    cheer: 'Hop hop! Let’s play and learn!',
  },
};
