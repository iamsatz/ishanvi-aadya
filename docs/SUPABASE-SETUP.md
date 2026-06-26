# Supabase setup (cloud homework)

1. Go to [supabase.com](https://supabase.com) → New project (free tier).
2. **Settings → API** → copy:
   - Project URL → `VITE_SUPABASE_URL`
   - anon public key → `VITE_SUPABASE_ANON_KEY`
3. Create `.env` in project root (see `.env.example`).
4. **SQL editor** → paste and run `supabase/schema.sql`.
5. **Storage** → New bucket `homework` → Public bucket ON.
6. Redeploy web app (Vercel: add env vars in project settings).

Parent → **Upload** (PIN 1234) on phone. Open app on TV → homework appears under **This Weekend**.
