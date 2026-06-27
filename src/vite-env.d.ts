/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_SHARED_ACCOUNT_EMAIL?: string;
  readonly VITE_SHARED_ACCOUNT_PASSWORD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  /** Injected by Android MainActivity when running on Android TV. */
  __ANDROID_TV__?: boolean;
}
