# Research: Spanish Tenses Guide (Ukrainian)

No `NEEDS CLARIFICATION` items remained in the Technical Context; this file records the design
decisions and the alternatives that were rejected.

## R1. Styling approach: own SCSS tokens vs a UI framework

- **Decision**: Hand-written SCSS with design tokens as CSS custom properties defined once in
  `src/styles/` partials (`_tokens.scss`, `_typography.scss`, `_tables.scss`, `_base.scss`),
  imported from `src/styles.scss`. No component library.
- **Rationale**: The UI is a sidebar, a top bar, prose and tables. A framework (Angular Material,
  Bootstrap, Bulma) would add 100kB+ CSS/JS and its own visual language to override for a dark
  theme. Custom properties give one source for colours (Principle V) and are trivially dark-only.
- **Alternatives considered**: Angular Material (heavy, M3 theming overhead for 3 controls);
  Bootstrap 5 SCSS (grid and utilities unused; dark mode needs overrides); Pico.css (classless,
  nice defaults, but fights custom table emphasis and still needs dark overrides).

## R2. Font

- **Decision**: Inter (variable), self-hosted via the `@fontsource-variable/inter` npm package,
  Cyrillic + Latin + Latin-ext subsets. Body 17px / line-height 1.65; tables 15px with tabular
  numerals. Fallback stack: `Inter Variable, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`.
- **Rationale**: Inter has complete Cyrillic and Spanish diacritics, is designed for screens, and
  stays legible at small table sizes. Self-hosting keeps the app working offline (SC-006) and
  avoids a third-party request (constitution: no tracking).
- **Alternatives considered**: Google Fonts link (needs network, breaks SC-006); IBM Plex Sans
  (good Cyrillic, slightly wider, worse in dense tables); system font only (inconsistent Cyrillic
  rendering across OSes).

## R3. Content format

- **Decision**: Content is typed TypeScript data, one `*.properties.ts` file per tense, built from
  a small set of block types (paragraph, table, list, examples, note) inside named sections with a
  fixed `SectionKind` order. Inline emphasis uses a tiny markup: `**bold**` for the changing part
  and `*italic*` for Spanish examples, parsed by a pure helper into segments and rendered with
  `@for` (never `innerHTML`).
- **Rationale**: Type-checked content catches missing fields at build time; structural tests can
  assert completeness (Principle I). Markup mirrors `Часи.md`, so its tables can be ported nearly
  verbatim. Avoiding `innerHTML` removes sanitisation concerns.
- **Alternatives considered**: Markdown files rendered at runtime (needs a parser dependency,
  untyped, hard to test for completeness); JSON files (no types without extra schema tooling);
  one component template per tense (14 hand-written templates, no structural tests).

## R4. Bundle size and lazy loading

- **Decision**: A small catalogue (`id`, Spanish name, Ukrainian hint, order, map summary) is
  eagerly part of the tenses feature chunk. Each tense's full content is loaded with a dynamic
  `import()` through a loader map, consumed by Angular `resource()` on the tense page.
- **Rationale**: 14 tenses of tables will be roughly 150–250kB of source text. Loading per tense
  keeps the initial bundle well under the 500kB warning budget and each chunk small.
- **Offline**: Lazy chunks alone are not offline-safe, so the Angular service worker
  (`@angular/service-worker`, first-party) prefetches every chunk and the font on first load (SC-006).
- **Alternatives considered**: All content in one module (simple, but grows the feature chunk on
  every content addition); HTTP-fetched JSON (contradicts typed content and offline-first).

## R5. Persistence

- **Decision**: A single `core/services/local-storage.ts` service wraps `localStorage` with
  `read<T>(key, validate, fallback)` / `write(key, value)`, catching every exception. Feature
  services (`study-progress`, `sidebar-state`) hold state in signals and persist through an
  `effect()`. Keys are versioned: `espanol.progress.v1`, `espanol.sidebar.v1`.
- **Rationale**: Meets Principle VI (one access point, tolerant of corrupt/blocked storage) and the
  spec edge cases. Signals keep the sidebar order reactive (`computed`).
- **Alternatives considered**: IndexedDB (overkill for two tiny records); a state library such as
  NgRx Signal Store (unjustified dependency for two signals).

## R6. Routing and layout

- **Decision**: `app.routes.ts` lazy-loads `features/tenses/tenses.routes.ts` at `''`. A
  feature-level layout component (`features/tenses/components/tenses-layout`) renders the top bar,
  sidebar and a child `<router-outlet>`. Children: `''` → overview page, `:tenseId` → tense page,
  `**` → redirect to `''`. `withComponentInputBinding()` binds `tenseId` to a signal input;
  `withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })`.
  An unknown `tenseId` redirects to `''` via a `CanMatchFn` guard.
- **Rationale**: Every page uses the sidebar, so the layout belongs to the tenses domain rather
  than `core/` (core must not depend on a feature). Path-based URLs give bookmarkable links (FR-012).
- **Alternatives considered**: Layout in `core/layout` importing feature data (core → feature
  dependency, violates Principle IV); hash routing (uglier links; only needed for hosts without
  SPA fallback, which can be switched on later with `withHashLocation()`).

## R7. Responsive sidebar behaviour

- **Decision**: Breakpoint 900px. Above it, the sidebar is an inline 300px column that collapses to
  hidden. Below it, the sidebar is an overlay drawer with a backdrop that closes on navigation, on
  Escape and on backdrop click. Desktop collapsed state is persisted; on narrow screens the drawer
  always starts closed and its open state is not persisted. Viewport is tracked with
  `matchMedia` in a signal.
- **Rationale**: Matches the clarified behaviour (fully hidden, toggle in the top bar) and story 2,
  scenario 4.
- **Alternatives considered**: CDK `BreakpointObserver` / `@angular/cdk` drawer (extra dependency
  for one media query and one overlay).

## R8. Content sources for accuracy

- **Decision**: The six tenses in `Часи.md` reuse its tables verbatim. The other eight tenses are
  written from standard Peninsular grammar (RAE *Nueva gramática* conjugation tables / Cervantes
  AVE reference), with the same section structure. A content integrity test verifies structure
  (six persons per conjugation row, five for Imperativo, required section kinds present, unique
  IDs, every catalogue entry has a loader). A spot-check test asserts a sample of known forms per
  tense (e.g. `tener` → `tuve`, `hacer` → `hizo`, `poner` → `pondría`).
- **Rationale**: Principle I. Structure is fully testable; correctness is spot-checked by tests and
  reviewed by hand.
