# Supabase setup — Closed Beta

**Project:** [shikwtguxfhefzvfkedo](https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo)

## Step 1 — Run SQL

1. Open [SQL editor](https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo/sql/new)
2. Paste all of `supabase/schema.sql`
3. Click **Run**

Creates: auth profiles, allowlist, children, subjects, syllabus, lessons, homework, feedback + RLS.

## Step 2 — Add beta tester emails

```sql
insert into public.allowed_emails (email) values
  ('parent1@example.com'),
  ('parent2@example.com');
```

## Step 3 — Disable public signup (recommended)

Dashboard → Authentication → Providers → Email → disable "Enable sign ups" is NOT needed if you use allowlist trigger (non-listed emails fail on signup).

## Step 4 — Deploy AI tutor function

Install CLI if needed:

```bash
brew install supabase/tap/supabase
```

Then deploy:

```bash
npx supabase login
export GEMINI_API_KEY=your_key_from_aistudio
npm run deploy-tutor
```

Or manually:

```bash
supabase link --project-ref shikwtguxfhefzvfkedo
supabase secrets set GEMINI_API_KEY=your_key_here
supabase functions deploy tutor
```

Get a Gemini key: https://aistudio.google.com/apikey

## Step 5 — Environment variables

`.env` (local) and Vercel:

```
VITE_SUPABASE_URL=https://shikwtguxfhefzvfkedo.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Step 6 — Test tutor function (CLI harness)

After deploy, run the automated smoke test from the repo root:

```bash
npm run test-tutor              # all built-in samples (homework + chat + image)
npm run test-tutor -- --homework   # homework mode only
npm run test-tutor -- --chat       # Ask Teacher chat mode only
npm run test-tutor -- --only 2     # run sample #2 only
```

The harness POSTs to `{VITE_SUPABASE_URL}/functions/v1/tutor` and prints, per question:

- `answer` and `explanation` from `tasks[]`
- warnings if `tasks[]` is empty (Answers page will be blank)
- warnings if final answers appear to leak into teaching `cards[]`

### Answer-accuracy rubric (decision gate)

Run against **5–8 real homework questions** (arithmetic, word problem, multi-step, fill-in-the-blank, Indian number naming). Manually verify each AI answer against the textbook or your own working.

| Accuracy | Action |
|----------|--------|
| **≥ 90%** correct | Keep PIN-gated Answers page as-is |
| **60–90%** | Reframe UI to "worked solution + AI may be wrong — check together" |
| **< 60%** | Do not surface final answers; hints and steps only |

Also confirm:

- `tasks[]` is populated (not empty) for homework uploads
- Teaching cards explain **how**, not final copy-paste answers

Record results in [docs/TUTOR-EVAL-RESULTS.md](TUTOR-EVAL-RESULTS.md) (date, N questions, correct count, decision).

## Step 7 — Test app flow

1. **Phone:** open app → magic link login with allowlisted email
2. **Add child** or **Load demo content**
3. Menu → **Add homework** (PIN 1234) → photo → AI builds help
4. Swipe to last card → **Answers & Explanations** (PIN unlock) → tap **Show answer**
5. Menu → **Ask Teacher** → preset question → answer appears in chat panel
6. Menu → **Add subject index** → paste TOC → AI builds lessons
7. **TV:** same login → remote navigation works

## Storage

Homework photos upload to `homework/{user_id}/{date}/...` with RLS.
