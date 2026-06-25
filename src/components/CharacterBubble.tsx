import { characters } from '../data/characters';
import type { KidId } from '../types/content';
import { CharacterAvatarShell, MascotAvatar } from './MascotAvatar';

interface Props {
  kid: KidId;
  /** Optional override line (e.g. from card story). */
  line?: string;
}

export function CharacterBubble({ kid, line }: Props) {
  const c = characters[kid];
  const isIllustration = c.avatar !== 'emoji';

  return (
    <div className="character" aria-hidden={false}>
      <CharacterAvatarShell illustration={isIllustration}>
        <MascotAvatar avatar={c.avatar} emoji={c.emoji} size={64} />
      </CharacterAvatarShell>
      <div className="character__bubble">
        <span className="character__name">{c.name}</span>
        <span className="character__role">{c.role}</span>
        <p className="character__line">{line ?? c.cheer}</p>
      </div>
    </div>
  );
}
