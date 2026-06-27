import { SCHOOL_LOGO } from '../config/app';

interface Props {
  className?: string;
}

/** Removable school logo — controlled by SCHOOL_LOGO.enabled in config. */
export function SchoolLogo({ className = '' }: Props) {
  if (!SCHOOL_LOGO.enabled) return null;
  return (
    <img
      className={className}
      src={SCHOOL_LOGO.src}
      alt={SCHOOL_LOGO.alt}
      width={120}
      height={48}
    />
  );
}
