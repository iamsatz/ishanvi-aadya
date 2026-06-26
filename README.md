# Learning Adventures — Closed Beta

Mobile-first + **Android TV remote** learning app for kids. Parents sign in (magic link), add children by **grade + board**, then upload homework or subject indexes — **AI builds interactive lessons**.

## Quick start

```bash
npm install
cp .env.example .env   # add Supabase keys
npm run dev
```

Open http://localhost:5173

## Beta setup (required)

See **[docs/SUPABASE-SETUP.md](docs/SUPABASE-SETUP.md)**:

1. Run `supabase/schema.sql`
2. Add tester emails to `allowed_emails`
3. Deploy `supabase/functions/tutor` with `GEMINI_API_KEY`
4. Set `VITE_SUPABASE_*` on Vercel / `.env`

## Tester flow

1. Magic-link login (allowlisted email)
2. **Add child** (name, grade, board) or **Load demo content**
3. Menu → **Add homework** (PIN `1234`) — photo/text → AI help
4. Menu → **Add subject index** — paste syllabus → AI lessons
5. **TV:** same account, D-pad navigation + focus rings

## Android APK

```bash
npm run cap:apk
```

See [docs/ANDROID-APK.md](docs/ANDROID-APK.md)

## Architecture

| Path | Purpose |
|------|---------|
| `src/lib/auth.ts` | Magic-link auth + allowlist |
| `src/lib/db.ts` | Children, subjects, homework, lessons, feedback |
| `supabase/schema.sql` | Multi-tenant RLS schema |
| `supabase/functions/tutor/` | Gemini AI → LearningCard JSON |
| `src/data/demoContent.ts` | Ishanvi/Aadya demo lessons |
| `src/components/cards/` | Interactive card renderers |
| `src/hooks/useSpatialNav.ts` | TV D-pad focus |

## Parent PIN

Default: `1234` — change in `src/config/app.ts`
