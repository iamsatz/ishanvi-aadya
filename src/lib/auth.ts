import type { Session, User } from '@supabase/supabase-js';
import { getSupabase, isSupabaseConfigured } from './supabase';

export async function getSession(): Promise<Session | null> {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session;
}

export async function getCurrentUser(): Promise<User | null> {
  const session = await getSession();
  return session?.user ?? null;
}

export function onAuthStateChange(
  cb: (session: Session | null) => void
): () => void {
  const sb = getSupabase();
  if (!sb) {
    cb(null);
    return () => {};
  }
  const { data: sub } = sb.auth.onAuthStateChange((_event, session) => {
    cb(session);
  });
  return () => sub.subscription.unsubscribe();
}

export async function signInWithMagicLink(email: string): Promise<{ ok: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { ok: false, error: 'Cloud not connected. Add Supabase keys to .env' };
  }
  const sb = getSupabase();
  if (!sb) return { ok: false, error: 'Supabase unavailable' };

  const redirectTo = window.location.origin + window.location.pathname;

  const { error } = await sb.auth.signInWithOtp({
    email: email.trim().toLowerCase(),
    options: { emailRedirectTo: redirectTo },
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export async function signOut(): Promise<void> {
  const sb = getSupabase();
  if (sb) await sb.auth.signOut();
}

export async function checkEmailAllowed(email: string): Promise<boolean> {
  const sb = getSupabase();
  if (!sb) return false;
  const { data, error } = await sb.rpc('is_email_allowed', {
    check_email: email.trim().toLowerCase(),
  });
  if (error) {
    console.warn('[auth] allowlist check failed', error.message);
    return true;
  }
  return Boolean(data);
}
