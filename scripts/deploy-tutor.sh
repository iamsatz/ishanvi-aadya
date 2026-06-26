#!/usr/bin/env bash
# Deploy the tutor edge function (requires one-time supabase login + GEMINI_API_KEY).
set -euo pipefail
cd "$(dirname "$0")/.."

PROJECT_REF="shikwtguxfhefzvfkedo"

echo "→ Checking Supabase login…"
if ! npx supabase projects list >/dev/null 2>&1; then
  echo "Run: npx supabase login"
  exit 1
fi

echo "→ Linking project ${PROJECT_REF}…"
npx supabase link --project-ref "$PROJECT_REF"

if [[ -z "${GEMINI_API_KEY:-}" ]]; then
  echo "Set GEMINI_API_KEY first, e.g.:"
  echo "  export GEMINI_API_KEY=your_key"
  echo "  npx supabase secrets set GEMINI_API_KEY=\$GEMINI_API_KEY"
  exit 1
fi

echo "→ Setting GEMINI_API_KEY secret…"
npx supabase secrets set "GEMINI_API_KEY=${GEMINI_API_KEY}"

echo "→ Deploying tutor function…"
npx supabase functions deploy tutor

echo "→ Done. Run: npm run test-tutor"
