# Supabase setup (phone upload → TV browser)

Without this, **Upload homework photo** in the menu will show "Cloud not connected."

## Steps

1. [supabase.com](https://supabase.com) → **New project** (free).
2. **Settings → API** → copy:
   - Project URL → `VITE_SUPABASE_URL`
   - anon public key → `VITE_SUPABASE_ANON_KEY`
3. **SQL editor** → run `supabase/schema.sql`.
4. **Storage** → New bucket **`homework`** → turn **Public bucket** ON.
5. **Storage → Policies** → allow anon **SELECT** and **INSERT** on `homework` bucket (or use public bucket).
6. **Vercel** → Project → Settings → Environment Variables → add both keys → **Redeploy**.

## Use on phone

1. Open app (web or APK).
2. Menu (top left) → **This Weekend** section.
3. Tap **Upload homework photo** → PIN `1234`.
4. **Browse photos** → pick page → **Send to TV**.

## On TV

Open the same app URL in the TV browser → menu → new item under **This Weekend** (cloud homework with your photo). Tap image to zoom.

Refresh the TV page if you uploaded while it was already open.
