# Quickstart: validate the Spanish Tenses Guide

## Prerequisites

- Node + npm (see `packageManager` in `package.json`), dependencies installed with `npm install`.

## Automated checks

```bash
npm test -- --watch=false   # unit + component tests (Vitest)
npm run build               # production build; must finish with no budget errors
```

Expected: all tests pass, including:

- content integrity (every catalogue entry has content, required sections, 6-person rows,
  5-person Imperativo rows, ≥ 3 mistakes, ≥ 5 self-check items) — see [data-model.md](data-model.md)
- known-form spot checks (e.g. `tuve`, `hizo`, `dijeron`, `pondría`, `hecho`, `durmiendo`)
- study-progress ordering and corrupt-storage handling — see [contracts/storage.md](contracts/storage.md)
- sidebar collapse/drawer behaviour and pin/learned toggles — see [contracts/ui.md](contracts/ui.md)

## Manual walkthrough (`npm start`, http://localhost:4200)

1. `/` shows the overview: decision guide and tense map with 14 rows; clicking a row opens it.
2. Open **Pretérito indefinido**: endings, hablar/comer/vivir conjugation, seven irregular groups
   as tables, signal words, examples with translations, Perfecto vs Indefinido comparison,
   mistakes, self-check with hidden answers.
3. Pin **Condicional simple**, then **Presente**: both appear under "Вивчаю зараз" in that order.
   Mark **Presente** as learned: ✓ appears, position unchanged. Reload: state is restored.
4. Collapse the sidebar, reload: still collapsed. Expand again.
5. Resize to 360px wide: sidebar is a closed drawer; open it, choose a tense, and it closes.
   Wide tables scroll inside their box; the page does not scroll sideways.
6. Visit `/no-such-tense`: redirected to `/`.
7. DevTools → Application → Local Storage: set `espanol.progress.v1` to `garbage`, reload: app
   works with no pins and no console errors.
8. Production build only (`npm run build` then serve `dist/espanol/browser` with any static
   server): after the first visit, DevTools → Network → Offline, reload, and open a tense never
   visited before: it loads (prefetched by the service worker).
