# Vercel — add Supabase keys (phone → TV upload)

**Live site:** https://ishanvi-aadya.vercel.app

Env vars must be set in Vercel **and** you must **Redeploy** (Vite bakes them at build time).

---

## Step A — Get anon key from Supabase

1. Open [Supabase → Settings → API](https://supabase.com/dashboard/project/shikwtguxfhefzvfkedo/settings/api)
2. Under **Project API keys**, copy **`anon` `public`** (starts with `eyJ…`)
3. Do **not** use the `service_role` key

---

## Step B — Add variables in Vercel

1. Log in at [vercel.com](https://vercel.com)
2. Open project **ishanvi-aadya** (or the project linked to `iamsatz/ishanvi-aadya` on GitHub)
3. **Settings** → **Environment Variables**
4. Add **two** variables (tick **Production**, **Preview**, and **Development** for each):

| Name | Value |
|------|--------|
| `VITE_SUPABASE_URL` | `https://shikwtguxfhefzvfkedo.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | paste your `eyJ…` anon key |

5. Click **Save**

**Direct link (if logged in):**  
https://vercel.com/dashboard → your team → **ishanvi-aadya** → Settings → Environment Variables

---

## Step C — Redeploy

1. **Deployments** tab
2. Latest deployment → **⋯** menu → **Redeploy**
3. Leave **Use existing Build Cache** **unchecked** (so new env vars apply)
4. Wait ~1–2 minutes

---

## Step D — Test

1. Open https://ishanvi-aadya.vercel.app on your phone
2. Menu → **This Weekend** → **Upload homework photo**
3. PIN `1234` — you should **not** see *"Cloud not connected"*
4. Upload a test photo → refresh on TV → appears under **This Weekend**

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Still says "Cloud not connected" | Redeploy without cache; hard-refresh phone (Cmd+Shift+R) |
| Upload fails | Run `supabase/schema.sql` in Supabase SQL editor |
| Image upload error | Storage bucket `homework` must exist and be public |
| Works on web but not APK | Rebuild APK after adding keys to local `.env` |

---

## Local `.env` (same keys)

```
VITE_SUPABASE_URL=https://shikwtguxfhefzvfkedo.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...your_anon_key
```

Then: `npm run build`
