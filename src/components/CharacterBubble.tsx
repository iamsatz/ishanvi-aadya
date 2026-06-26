import { useStore } from '../state/store';
import type { KidId } from '../types/content';
import { CharacterAvatarShell, MascotAvatar } from './MascotAvatar';

interface Props {
  kid: KidId;
  /** Optional override line (e.g. from card story). */
  line?: string;
}

const DEFAULT_CHEER = 'Let\'s learn together — you\'ve got this!';

export function CharacterBubble({ kid, line }: Props) {
  const kids = useStore((s) => s.kids);
  const k = kids.find((c) => c.id === kid);
  const mascot = k?.mascot ?? { name: 'Guide', avatar: 'emoji' as const, emoji: '🌟', role: 'Learning buddy' };
  const isIllustration = mascot.avatar !== 'emoji';

  return (
    <div className="character" aria-hidden={false}>
      <CharacterAvatarShell illustration={isIllustration}>
        <MascotAvatar avatar={mascot.avatar} emoji={mascot.emoji} size={64} />
      </CharacterAvatarShell>
      <div className="character__bubble">
        <span className="character__name">{mascot.name}</span>
        <span className="character__role">{mascot.role}</span>
        <p className="character__line">{line ?? DEFAULT_CHEER}</p>
      </div>
    </div>
  );
}
