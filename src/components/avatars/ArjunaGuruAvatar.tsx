interface Props {
  size?: number;
  className?: string;
  /** Smaller variant for nav tabs. */
  compact?: boolean;
}

/** Kid-friendly Vyasa-style guru portrait — spectacles, beard, tilak, saffron. */
export function ArjunaGuruAvatar({ size = 64, className = '', compact = false }: Props) {
  const s = compact ? 24 : size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Arjuna, wise guru guide"
    >
      {/* Saffron shawl / background halo */}
      <circle cx="32" cy="34" r="30" fill="#FFF4E6" />
      <ellipse cx="32" cy="52" rx="26" ry="14" fill="#E8923A" opacity="0.35" />

      {/* Shawl drape */}
      <path
        d="M8 48 C12 38 20 32 32 32 C44 32 52 38 56 48 L56 64 L8 64 Z"
        fill="#D97706"
      />
      <path
        d="M14 46 C18 40 24 36 32 36 C40 36 46 40 50 46"
        stroke="#F59E0B"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* White beard */}
      <path
        d="M20 42 Q32 58 44 42 Q40 52 32 54 Q24 52 20 42 Z"
        fill="#F5F5F4"
      />
      <path
        d="M24 40 Q32 50 40 40"
        stroke="#E7E5E4"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Face */}
      <ellipse cx="32" cy="30" rx="16" ry="17" fill="#FDBA74" />

      {/* Tilak */}
      <ellipse cx="32" cy="18" rx="2.2" ry="3.5" fill="#DC2626" />
      <circle cx="32" cy="23" r="1.2" fill="#F97316" />

      {/* Eyes behind spectacles */}
      <ellipse cx="26" cy="29" rx="3" ry="3.5" fill="#1C1917" />
      <ellipse cx="38" cy="29" rx="3" ry="3.5" fill="#1C1917" />
      <circle cx="27" cy="28" r="1" fill="white" opacity="0.7" />
      <circle cx="39" cy="28" r="1" fill="white" opacity="0.7" />

      {/* Spectacles */}
      <circle cx="26" cy="29" r="7" stroke="#44403C" strokeWidth="2" fill="none" />
      <circle cx="38" cy="29" r="7" stroke="#44403C" strokeWidth="2" fill="none" />
      <path d="M33 29 H31" stroke="#44403C" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 28 Q16 27 14 29" stroke="#44403C" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M45 28 Q48 27 50 29" stroke="#44403C" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Gentle smile */}
      <path
        d="M26 36 Q32 40 38 36"
        stroke="#C2410C"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />

      {/* White hair / side locks */}
      <path
        d="M16 24 Q14 30 16 36"
        stroke="#F5F5F4"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M48 24 Q50 30 48 36"
        stroke="#F5F5F4"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M22 16 Q32 10 42 16"
        stroke="#F5F5F4"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Palm-leaf book hint */}
      {!compact && (
        <g transform="translate(46, 44) rotate(12)">
          <rect x="0" y="0" width="10" height="14" rx="1" fill="#84CC16" opacity="0.9" />
          <line x1="2" y1="4" x2="8" y2="4" stroke="#365314" strokeWidth="0.8" />
          <line x1="2" y1="7" x2="8" y2="7" stroke="#365314" strokeWidth="0.8" />
          <line x1="2" y1="10" x2="6" y2="10" stroke="#365314" strokeWidth="0.8" />
        </g>
      )}
    </svg>
  );
}
