import type { ReactNode } from 'react';
import type { AvatarId } from '../types/content';
import { SatishGuruAvatar } from './avatars/SatishGuruAvatar';

interface Props {
  avatar: AvatarId;
  emoji?: string;
  size?: number;
  compact?: boolean;
  className?: string;
}

export function MascotAvatar({ avatar, emoji, size = 64, compact = false, className = '' }: Props) {
  if (avatar === 'satish-guru') {
    return (
      <SatishGuruAvatar
        size={size}
        compact={compact}
        className={className}
      />
    );
  }

  return (
    <span
      className={`mascot-emoji${className ? ` ${className}` : ''}`}
      aria-hidden={compact}
      style={compact ? { fontSize: '1.1rem' } : undefined}
    >
      {emoji}
    </span>
  );
}

/** Wrapper for illustration avatars in the character bubble. */
export function CharacterAvatarShell({
  illustration,
  children,
}: {
  illustration: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={
        illustration
          ? 'character__avatar character__avatar--illustration'
          : 'character__avatar'
      }
    >
      {children}
    </div>
  );
}
