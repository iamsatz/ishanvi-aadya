/** User-facing message when the tutor edge function call fails. */
export function tutorErrorMessage(err: unknown): string {
  if (!navigator.onLine) {
    return 'You are offline. Connect to Wi-Fi or mobile data, then try again.';
  }

  const msg = err instanceof Error ? err.message : String(err ?? '');
  const lower = msg.toLowerCase();

  if (
    lower.includes('supabase not configured') ||
    lower.includes('failed to fetch') && !navigator.onLine
  ) {
    return 'Ask Arjuna is not set up on this device yet. A parent needs to configure Supabase keys.';
  }

  if (
    lower.includes('not signed in') ||
    lower.includes('jwt') ||
    lower.includes('unauthorized') ||
    lower.includes('401')
  ) {
    return 'Ask Arjuna needs you to be signed in. A parent can set the shared family account in settings.';
  }

  if (
    lower.includes('404') ||
    lower.includes('not found') ||
    lower.includes('function') && lower.includes('tutor')
  ) {
    return 'Ask Arjuna is not deployed yet. A parent needs to run: npm run deploy-tutor (after supabase login).';
  }

  if (lower.includes('failed to fetch') || lower.includes('network')) {
    return 'Could not reach the server. Check your internet connection and try again.';
  }

  if (lower.includes('gemini') || lower.includes('api key')) {
    return 'The tutor server is missing its AI key. A parent needs to set GEMINI_API_KEY in Supabase secrets.';
  }

  return "Arjuna couldn't reach the server. Check internet, or ask a parent to deploy the tutor.";
}

/** Resolve a public image path to an absolute URL for the tutor API. */
export function absoluteImageUrl(src: string): string {
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const base = typeof window !== 'undefined' ? window.location.origin : '';
  return `${base}${src.startsWith('/') ? '' : '/'}${src}`;
}
