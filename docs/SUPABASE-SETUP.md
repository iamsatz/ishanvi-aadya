# Supabase setup (phone upload → TV browser)

**Your project:** [shikwtguxfhefzvfkedo](https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo)

Without keys, **Upload homework photo** shows *"Cloud not connected."*

---

## Step 1 — Run SQL (one time)

1. Open [SQL editor](https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo/sql/new)
2. Paste all of `supabase/schema.sql`
3. Click **Run**

This creates the `homework` table + public `homework` storage bucket.

---

## Step 2 — Copy API keys

1. Open [Settings → API](https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo/settings/api)
2. Copy:

| Key | Value |
|-----|--------|
| `VITE_SUPABASE_URL` | `https://shikwtguxfhefzvfkedo.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | **anon public** key (long `eyJ…` string) |

---

## Step 3 — Add to Vercel

1. Vercel → your project → **Settings → Environment Variables**
2. Add both variables above (Production + Preview)
3. **Redeploy**

---

## Step 4 — Local / APK (optional)

Create `.env` in project root:

```
VITE_SUPABASE_URL=https://shikwtguxfhefzvfkedo.supabase.co
VITE_SUPABASE_ANON_KEY=paste_anon_key_here
```

Then `npm run build` or `npm run cap:apk`.

---

## Test

**Phone:** Menu → This Weekend → **Upload homework photo** → PIN `1234` → browse → **Send to TV**

**TV:** Same app URL → refresh → new item under **This Weekend**

Verify uploads in [Storage → homework](https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo/storage/buckets/homework) and [Table Editor → homework](https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo/editor).
