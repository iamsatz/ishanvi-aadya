# Learning Adventures — Ishanvi · Aadya

A mobile-first, interactive learning web app for kids 6–9, built from
5 source PDFs (3 bilingual English+Telugu stories, 2 English-only
project workbooks). Single-page React + TypeScript app. Progress
persists in `localStorage`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## What's in it

**Stories** (Telugu accordion under each card, collapsed by default)
- ⚡ The Acorns Power Book — Decoding Power
- 📚 Stories & My School — 7 stories + Silver Oaks chapters
- 🌟 Character, Skills & Stories — Being, Doing, Mahatma's mantras

**Projects** (English only — no Telugu)
- 🌍 Earth Day 2026 — waste sorting, fill blanks, reflect
- ☀️ Summer Vacation Project — Math, English, Science checklists

Every card has an interaction — no passive reading:
- `tap-reveal` · `choice-cards` · `match-pairs` · `reflect` (text) · `checklist`

## Mobile-first UI

- Top bar with hamburger ☰ (no sidebar; drawer slides in from left)
- Drawer has **Stories** | **Projects** tabs
- Sticky bottom Back / Next buttons (keyboard ← → also works)
- Telugu translation hidden behind "తెలుగు చదవండి · Read in Telugu"
- "👩‍👧 అమ్మ కోసం · For Parent" hint also collapsed by default

## What's where

| Path | Purpose |
|------|---------|
| [src/types/content.ts](src/types/content.ts) | Generic content model (Lesson, Card, Choice, Pair, …) |
| [src/data/fixtures.ts](src/data/fixtures.ts) | All 5 lessons, hand-authored from the source PDFs |
| [src/state/store.ts](src/state/store.ts) | Zustand store + localStorage persistence |
| [src/lib/pdfParser.ts](src/lib/pdfParser.ts) | **🔌 Stub** — plug in `pdfjs-dist` here for real upload parsing |
| [src/styles/tokens.css](src/styles/tokens.css) | **🎨 Edit me** — palette, fonts, spacing, motion |
| [src/styles/global.css](src/styles/global.css) | Mobile-first layout, drawer, accordion, animations |
| [src/components/cards/](src/components/cards) | One file per `interactionType` |
| [src/hooks/useCardStorage.ts](src/hooks/useCardStorage.ts) | Per-card persisted state (reflect text, checklist ticks) |

## Adding more PDFs/images later

Use **+ PDFs** / **+ Images** in the drawer footer. Files run through
`parsePdfFile` / `parseImageFile` (currently stubs that produce
placeholder lessons). To make these meaningful, wire `pdfjs-dist`
into [src/lib/pdfParser.ts](src/lib/pdfParser.ts) — no other code
needs to change.

Or just append to [src/data/fixtures.ts](src/data/fixtures.ts):
```ts
{ id: 'my-book', title: '…', section: 'stories', hasTelugu: true, icon: '📖', cards: [ … ] }
```

## Accessibility

- 18–20 px base font, ≥ 56 px tap targets, 3 px visible focus ring
- Choice feedback uses icon + text + colour (never colour alone)
- `prefers-reduced-motion` zeroes animation durations
- Telugu rendered with `font-family: var(--font-telugu)` — falls
  back to Noto Sans Telugu / Mallanna / Gautami
- Drawer dismissable via backdrop tap, ✕ button, or ESC
