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

/** Credentials for the invisible shared family account, baked in at build time. */
export const sharedAccount = {
  email: import.meta.env.VITE_SHARED_ACCOUNT_EMAIL,
  password: import.meta.env.VITE_SHARED_ACCOUNT_PASSWORD,
};

export const isSharedAccountConfigured = Boolean(
  sharedAccount.email && sharedAccount.password
);

/**
 * Silently sign into the one shared family account so the app opens straight in
 * (no login UI) while keeping cross-device cloud sync (phone upload -> TV).
 */
export async function signInShared(): Promise<{ ok: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { ok: false, error: 'Cloud not connected. Add Supabase keys to .env' };
  }
  if (!isSharedAccountConfigured) {
    return {
      ok: false,
      error: 'Shared account not configured. Add VITE_SHARED_ACCOUNT_EMAIL and VITE_SHARED_ACCOUNT_PASSWORD to .env',
    };
  }
  const sb = getSupabase();
  if (!sb) return { ok: false, error: 'Supabase unavailable' };

  const { error } = await sb.auth.signInWithPassword({
    email: sharedAccount.email!.trim().toLowerCase(),
    password: sharedAccount.password!,
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
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
