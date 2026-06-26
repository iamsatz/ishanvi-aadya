# Tutor function eval log

**Date:** 2026-06-26  
**Harness:** `npm run test-tutor`  
**Endpoint:** `https://shikwtguxfhefzvfkedo.supabase.co/functions/v1/tutor`

## Deploy status

| Check | Result |
|-------|--------|
| `.env` has `VITE_SUPABASE_URL` | Yes |
| `.env` has `VITE_SUPABASE_ANON_KEY` | Yes |
| `GEMINI_API_KEY` in `.env` | No — required for deploy |
| Supabase CLI logged in | No — run `npx supabase login` |
| Function deployed | **No** — all 8 samples returned HTTP 404 |

## Harness run (pre-deploy)

```
Samples run:     8
Failures:        8 (NOT_FOUND — function not deployed)
Empty tasks[]:   0 (could not reach function)
Answer leaks:    0 (could not reach function)
Auto-scored:     n/a
```

## Decision gate

**Blocked.** Cannot score answer accuracy until function is deployed.

### To unblock

```bash
# 1. Login (browser opens once)
npx supabase login

# 2. Set Gemini key and deploy
export GEMINI_API_KEY=your_key_from_aistudio
bash scripts/deploy-tutor.sh

# 3. Re-run harness
npm run test-tutor
npm run test-tutor -- --homework   # homework-only scoring
```

### After deploy — manual accuracy check

Run harness, then verify 5–8 **real** homework questions against textbook/working:

| Accuracy | Action |
|----------|--------|
| ≥ 90% | Keep PIN-gated Answers page |
| 60–90% | Reframe to "worked solution + AI may be wrong" |
| < 60% | Hide final answers; hints/steps only |

Also confirm: `tasks[]` populated, no final answers leaking into teaching cards.

## Post-deploy results (fill in after you deploy)

| # | Sample | AI answer | Correct? | Notes |
|---|--------|-----------|----------|-------|
| 1 | 456 + 789 | | | |
| 2 | Stickers word problem | | | |
| 3 | Place value | | | |
| 4 | Smallest/largest digit | | | |
| 5 | Indian number words | | | |
| 6 | Division remainder | | | |
| 7 | Ask Teacher chat | | | |
| 8 | Image homework | | | |

**Correct count:** ___ / ___  
**Decision:** go / reframe / pivot
