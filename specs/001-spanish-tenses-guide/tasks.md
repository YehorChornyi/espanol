---
description: "Task list for Spanish Tenses Guide (Ukrainian)"
---

# Tasks: Spanish Tenses Guide (Ukrainian)

**Input**: Design documents from `/specs/001-spanish-tenses-guide/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ (routes, storage, ui), quickstart.md

**Tests**: Included. The constitution (Development Workflow & Quality Gates) requires unit tests for logic
and component tests for behaviour, plus content integrity tests (Principle I).

**Conventions for every component task**: standalone, `changeDetection: ChangeDetectionStrategy.OnPush`, signal `input()`/`output()`, `inject()`, colours/spacing only from tokens.

**Organization**: Tasks are grouped by user story. All paths are relative to the repository root;
`T/` below abbreviates `src/app/features/tenses/`.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1–US5)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Dependencies, global styles, app config

- [X] T001 Install the self-hosted font: `npm install @fontsource-variable/inter` (updates package.json, package-lock.json)
- [X] T002 [P] Create design tokens as CSS custom properties on `:root` (dark palette: bg, surface, surface-2, border, text, text-muted, accent, accent-strong, success, warning; spacing scale; radii; type scale with body 17px / line-height 1.65, table 15px; sidebar width 300px; breakpoint 900px as SCSS variable) in src/styles/_tokens.scss. All text/background pairs MUST meet WCAG AA 4.5:1
- [X] T003 [P] Create base styles (box-sizing reset, `color-scheme: dark`, body bg/text/font `'Inter Variable', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`, `font-feature-settings: 'tnum'` for tables, visible `:focus-visible` outline, `.visually-hidden`, dark scrollbars) in src/styles/_base.scss
- [X] T004 [P] Create typography styles (h1–h3 scale, prose max-width ~72ch, `strong` in accent colour, `em` in muted italic for Spanish examples, lists, note callouts `.note--tip` / `.note--warning`) in src/styles/_typography.scss
- [X] T005 [P] Create table styles (`.table-scroll` wrapper with `overflow-x: auto`, full-width tables, zebra rows, sticky first column for person labels, `th[scope=row]` muted, caption styling, compact padding at < 600px) in src/styles/_tables.scss
- [X] T006 Rewrite src/styles.scss to `@use` the font package (`@fontsource-variable/inter` with cyrillic + latin + latin-ext subsets) and the four partials from T002–T005
- [X] T007 Replace the CLI placeholder: src/app/app.html becomes `<router-outlet />` only, empty src/app/app.scss, and update src/app/app.spec.ts to assert the app creates and contains a router outlet
- [X] T008 Configure src/app/app.config.ts: `provideZonelessChangeDetection()` (keep `provideBrowserGlobalErrorListeners()`), `provideRouter(routes, withComponentInputBinding(), withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }))`; set `<html lang="uk">` and `<title>Іспанські часи</title>` in src/index.html

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Types, helpers, storage, catalogue, routing skeleton, rendering primitives used by every story

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T009 [P] Create `TenseId` union of exactly these 14 slugs in default order — `presente`, `estar-gerundio`, `ir-a-infinitivo`, `preterito-perfecto`, `preterito-indefinido`, `preterito-imperfecto`, `preterito-pluscuamperfecto`, `futuro-simple`, `futuro-perfecto`, `condicional-simple`, `condicional-compuesto`, `imperativo`, `presente-subjuntivo`, `imperfecto-subjuntivo` — plus exported `TENSE_IDS` readonly array in T/types/tense-id.types.ts
- [X] T010 [P] Create `SectionKind` enum with order `Usage` → `Endings` → `Conjugation` → `Irregular` → `SignalWords` → `Examples` → `Comparison` → `Notes` in T/enums/section-kind.enum.ts
- [X] T011 [P] Create `RichText` (= string with `**strong**` / `*em*`, no nesting) in T/types/rich-text.types.ts and `ContentBlock` discriminated union (`paragraph`, `table` with `caption?`, `headers`, `rows`, `persons?`, `list`, `examples`, `note` with `tone: 'tip' | 'warning'`) in T/types/content-block.types.ts, plus exported `TableBlock` type
- [X] T012 [P] Create interfaces, one per file, in T/interfaces/: `tense-summary.interface.ts` (`id`, `name`, `hint` "Ukrainian, ≤ 30 chars", `exampleYo`, `when`, `english`, `markers: string[]`), `tense.interface.ts` (`id`, `intro`, `formula`, `sections`, `mistakes` "≥ 3", `selfCheck` "≥ 5"), `tense-section.interface.ts` (`kind`, `title`, `blocks` "≥ 1", `groups?`), `irregular-group.interface.ts` (`title`, `rule`, `table: TableBlock`), `example.interface.ts` (`es`, `uk`), `mistake.interface.ts` (`wrong`, `right`, `why`), `self-check-item.interface.ts` (`prompt`, `answer`), `text-segment.interface.ts` (`text`, `strong`, `em`), `decision-step.interface.ts` (`question`, `tenseId`, `example`), `study-progress.interface.ts` (`pinned: TenseId[]`, `learned: TenseId[]`)
- [X] T013 [P] Implement `parseRichText(text): TextSegment[]` (unmatched markers rendered literally) in T/helpers/rich-text.helper.ts with tests in T/helpers/rich-text.helper.spec.ts (plain, bold, italic, mixed, unmatched `**`, empty string)
- [X] T014 [P] Implement `isTenseId(value: unknown): value is TenseId` in T/helpers/tense-id.helper.ts with tests in T/helpers/tense-id.helper.spec.ts
- [X] T015 [P] Implement `LocalStorage` service (`providedIn: 'root'`) with `read<T>(key, validate: (raw: unknown) => T, fallback: T): T` and `write(key, value): void`; every access in try/catch; JSON parse errors → fallback, in src/app/core/services/local-storage.ts with tests (missing key, corrupt JSON, throwing storage, round-trip) in src/app/core/services/local-storage.spec.ts
- [X] T016 Create the catalogue `TENSE_CATALOGUE: readonly TenseSummary[]` with all 14 entries in `TENSE_IDS` order (Spanish name, Ukrainian hint, yo form of hablar — Imperativo: `habla (tú)`, Ukrainian `when`, English analogue, signal words; the six tenses from `Часи.md` copy its tense map row) in T/properties/tense-catalogue.properties.ts
- [X] T017 Create `TENSE_LOADERS: Record<TenseId, () => Promise<Tense>>` using dynamic `import('./tenses/<id>.properties').then(m => m.TENSE)` for all 14 IDs in T/properties/tense-loaders.properties.ts
- [X] T018 Implement `TenseContent` service exposing `catalogue`, `summary(id)`, and `load(id): Promise<Tense>` in T/services/tense-content.ts
- [X] T019 [P] Implement `RichTextView` component (selector `app-rich-text`, signal input `text: RichText`, renders segments with `@for` as `<strong>` / `<em>` / text; never `innerHTML`) in T/components/rich-text/rich-text.ts (+ .html, .scss) with test rich-text.spec.ts
- [X] T020 [P] Implement `ContentTable` component (input `block: TableBlock`, optional `label`): `.table-scroll` wrapper with `role="region"`, `tabindex="0"`, `aria-label` = caption ?? label; `<caption>`, `<th scope="col">` headers, first cell `<th scope="row">` when `persons`; cells via `app-rich-text`) in T/components/content-table/content-table.ts (+ .html, .scss) with test content-table.spec.ts
- [X] T021 Implement `tenseExistsGuard: CanMatchFn` (uses `isTenseId` on the first URL segment; returns `UrlTree` to `/` otherwise) in T/guards/tense-exists.guard.ts with test tense-exists.guard.spec.ts
- [X] T022 Create minimal `TensesLayout` component (top bar with app title link "Іспанські часи" → `/`, `<main>` with child `<router-outlet />`; sidebar slot added in US2) in T/components/tenses-layout/tenses-layout.ts (+ .html, .scss)
- [X] T023 Create T/tenses.routes.ts: parent route `TensesLayout` with children `''` → lazy overview page (`title: 'Іспанські часи'`), `':tenseId'` with `canMatch: [tenseExistsGuard]` → lazy tense page, `'**'` → redirect `''`; and src/app/app.routes.ts with `{ path: '', loadChildren: () => import('./features/tenses/tenses.routes') }`. Create placeholder `Overview` page in T/pages/overview/overview.ts (+ .html, .scss) so routing compiles

**Checkpoint**: `ng build` and `ng test` pass; `/` renders the layout with a placeholder overview.

---

## Phase 3: User Story 1 — Study one tense in depth (Priority: P1) 🎯 MVP

**Goal**: A full Ukrainian explanation page for each of the 14 tenses, tables first.

**Independent Test**: Open `/preterito-indefinido` directly; every FR-004 block is present with correct forms, the changing part emphasised.

### Tests for User Story 1

- [X] T024 [P] [US1] Content integrity test over all 14 loaders in T/properties/tenses/tenses-content.spec.ts: every `TENSE_IDS` entry loads and `tense.id` matches; sections are in `SectionKind` order with no duplicates; required kinds `Usage`, `Conjugation`, `Examples` everywhere; `Endings` everywhere except `estar-gerundio` and `ir-a-infinitivo`; `Irregular` (with ≥ 1 group) everywhere except `ir-a-infinitivo`; every table row length equals `headers.length`; `persons: true` tables have exactly 6 rows (5 for `imperativo`); ≥ 3 example sentences; `mistakes.length ≥ 3`; `selfCheck.length ≥ 5`; catalogue hints ≤ 30 chars
- [X] T025 [P] [US1] Known-form spot-check test in T/properties/tenses/tenses-forms.spec.ts asserting that the serialized content of each tense contains: presente `tengo`, `conozco`, `juego`; estar-gerundio `durmiendo`, `leyendo`; ir-a `voy`; perfecto `hecho`, `vuelto`; indefinido `tuve`, `hizo`, `dijeron`, `fueron`, `busqué`; imperfecto `iba`, `era`, `veía`; pluscuamperfecto `había`; futuro-simple `tendré`, `haré`, `diré`; futuro-perfecto `habré`; condicional-simple `pondría`, `diría`; condicional-compuesto `habría`; imperativo `ten`, `haz`, `pon`, `no tengas`; presente-subjuntivo `tenga`, `sea`, `vaya`, `haya`; imperfecto-subjuntivo `tuviera`, `fuera`, `hiciera`
- [X] T026 [P] [US1] Tense page component test in T/pages/tense/tense.spec.ts: renders h1 with the Spanish name, the formula, one `<section>` per content section with Ukrainian `<h2>`, irregular groups with `<h3>` and a table each; shows an error message with a retry button when the loader rejects

### Content for User Story 1 (each file exports `TENSE: Tense`; Ukrainian explanations, Spanish forms; Peninsular Spanish with vosotros)

- [X] T027 [P] [US1] Presente — port `Часи.md` "Presente" verbatim (endings, hablar/comer/vivir, 13 fully irregular verbs, yo-only irregulars, stem changes e→ie / o→ue / u→ue / e→i) plus usage, signal words, examples, mistakes, self-check, in T/properties/tenses/presente.properties.ts
- [X] T028 [P] [US1] Estar + gerundio — port `Часи.md` section (gerund endings incl. -yendo, irregular gerunds, estar table, notes on not using it for future) in T/properties/tenses/estar-gerundio.properties.ts
- [X] T029 [P] [US1] Ir a + infinitivo — port `Часи.md` section (ir table, "no irregulars" note, `a` reminder, `vamos a…`) in T/properties/tenses/ir-a-infinitivo.properties.ts
- [X] T030 [P] [US1] Pretérito perfecto — port `Часи.md` section (haber table, participle endings incl. -ído, 14 irregular participles, prefix rule, pronoun placement) in T/properties/tenses/preterito-perfecto.properties.ts
- [X] T031 [P] [US1] Pretérito indefinido — port `Часи.md` section (endings incl. strong-stem column, conjugation, groups 1–7: -u-, -i-, -j-, fully irregular, e→i/o→u, i→y, -car/-gar/-zar) in T/properties/tenses/preterito-indefinido.properties.ts
- [X] T032 [P] [US1] Pretérito imperfecto — endings -aba / -ía, conjugation, the only 3 irregulars (ser, ir, ver) full tables, usage (habits, descriptions, background), signal words (antes, siempre, de niño, mientras) in T/properties/tenses/preterito-imperfecto.properties.ts
- [X] T033 [P] [US1] Pretérito pluscuamperfecto — había + participio, haber imperfecto table, participle reuse incl. irregular participles, usage "минуле до минулого" in T/properties/tenses/preterito-pluscuamperfecto.properties.ts
- [X] T034 [P] [US1] Futuro simple — infinitive + -é/-ás/-á/-emos/-éis/-án, conjugation, the 12 irregular stems (same groups as condicional: podr-, querr-, sabr-, habr-, cabr-, tendr-, pondr-, saldr-, vendr-, valdr-, har-, dir-), futuro of probability in T/properties/tenses/futuro-simple.properties.ts
- [X] T035 [P] [US1] Futuro perfecto — habré + participio, haber futuro table, usage (completed by a future point; probability about the past) in T/properties/tenses/futuro-perfecto.properties.ts
- [X] T036 [P] [US1] Condicional simple — port `Часи.md` section (endings, conjugation, irregular stems grouped, 4 uses, si-clause warning) in T/properties/tenses/condicional-simple.properties.ts
- [X] T037 [P] [US1] Condicional compuesto — habría + participio, haber condicional table, usage (unrealised past hypotheses, "би зробив") in T/properties/tenses/condicional-compuesto.properties.ts
- [X] T038 [P] [US1] Imperativo — affirmative and negative tables for tú, usted, nosotros, vosotros, ustedes (5 persons, `persons: true`); irregular tú forms (di, haz, ve, pon, sal, sé, ten, ven); negative = presente de subjuntivo; pronoun attachment and accents (dímelo, no me lo digas) in T/properties/tenses/imperativo.properties.ts
- [X] T039 [P] [US1] Presente de subjuntivo — formation from yo of presente (opposite vowel endings), conjugation, irregulars (ser, estar, ir, haber, saber, dar), yo-stem verbs (tenga, haga, ponga, diga, venga, salga, conozca), stem changes incl. -ir nosotros/vosotros (durmamos, pidamos), spelling changes (-car/-gar/-zar), triggers (WEIRDO: querer que, ojalá, es importante que, cuando + future) in T/properties/tenses/presente-subjuntivo.properties.ts
- [X] T040 [P] [US1] Pretérito imperfecto de subjuntivo — formation from ellos of indefinido (−ron + -ra/-se), both -ra and -se tables, irregulars inherited from indefinido (tuviera, fuera, hiciera, dijera, pudiera, quisiera, supiera, estuviera), nosotros accent (habláramos), si-clauses with condicional in T/properties/tenses/imperfecto-subjuntivo.properties.ts

### Implementation for User Story 1

- [X] T041 [P] [US1] Implement `IrregularGroupView` (input `group: IrregularGroup`; `<h3>` title, rule via `app-rich-text`, `app-content-table`) in T/pages/tense/components/irregular-group/irregular-group.ts (+ .html, .scss)
- [X] T042 [US1] Implement `TensePage` (signal input `tenseId` bound from the route; `resource()` over `TenseContent.load`; header with h1 name, hint, intro, formula; sections rendered by block type with `@switch`: paragraph, table → `app-content-table`, list, examples (Spanish `<em>` + Ukrainian translation), note callouts; Irregular section renders groups; loading skeleton; error state "Не вдалося завантажити розділ" with "Спробувати ще раз" calling `reload()`), in T/pages/tense/tense.ts (+ .html, .scss)
- [X] T043 [US1] Add a `TitleStrategy` (or route `title` resolver) producing `«{name}» · Іспанські часи` for tense routes, in T/services/tense-title.strategy.ts wired in src/app/app.config.ts (contracts/routes.md)

**Checkpoint**: Every tense is readable at `/<tense-id>`; T024–T026 pass.

---

## Phase 4: User Story 2 — Navigate tenses with a sidebar (Priority: P1)

**Goal**: Sidebar listing all tenses; collapsible on desktop, drawer on phones; state persisted.

**Independent Test**: Click through all entries; collapse, reload, still collapsed; at 360px the drawer opens and closes after choosing.

### Tests for User Story 2

- [X] T044 [P] [US2] `SidebarState` service tests in T/services/sidebar-state.spec.ts: default expanded; `toggle()` on wide flips and persists `espanol.sidebar.v1` `{ collapsed }`; invalid stored value → `false`; on narrow `toggle()` opens the drawer without persisting; `closeDrawer()` on navigation
- [X] T045 [P] [US2] Sidebar + layout component tests in T/components/sidebar/sidebar.spec.ts and T/components/tenses-layout/tenses-layout.spec.ts: overview link plus 14 tense links with name and hint; active link has `aria-current="page"`; toggle button has `aria-expanded` / `aria-controls="sidebar"` and Ukrainian label; Escape closes the drawer

### Implementation for User Story 2

- [X] T046 [US2] Implement `SidebarState` service: `isNarrow` signal from `matchMedia('(max-width: 899.98px)')` (listener cleaned up with `DestroyRef`), `collapsed` (persisted via `LocalStorage`, wide only), `drawerOpen` (memory only, starts `false`), computed `visible`, `toggle()`, `closeDrawer()`, in T/services/sidebar-state.ts
- [X] T047 [US2] Implement `Sidebar` component (`<nav id="sidebar" aria-label="Часи">`, link "Огляд: як вибрати час" → `/`, then all catalogue entries in default order: `routerLink`, `routerLinkActive` + `ariaCurrentWhenActive="page"`, Spanish name + muted Ukrainian hint) in T/components/sidebar/sidebar.ts (+ .html, .scss)
- [X] T048 [US2] Extend `TensesLayout`: top-bar toggle button (labels "Сховати меню" / "Показати меню", `aria-expanded`, `aria-controls`), inline 300px sidebar on wide that hides completely when collapsed, overlay drawer + backdrop on narrow, close on `NavigationEnd` / backdrop click / Escape, focus into drawer on open and back to toggle on close; no page-level horizontal scroll at 360px, in T/components/tenses-layout/tenses-layout.ts (+ .html, .scss)

**Checkpoint**: US1 + US2 make a complete navigable reference.

---

## Phase 5: User Story 3 — Pin studied tenses, mark learned (Priority: P2)

**Goal**: "Вивчаю зараз" group at the top, learned ✓, persisted.

**Independent Test**: Pin Condicional simple then Presente, mark Presente learned, reload: order and marks intact.

### Tests for User Story 3

- [X] T049 [P] [US3] `StudyProgress` service tests in T/services/study-progress.spec.ts: `pinned` ordered oldest pin first, unique; unpin returns tense to catalogue position in `otherTenses`; learned independent of pinned (marking learned does not unpin); persistence to `espanol.progress.v1`; on load unknown IDs and duplicates dropped, non-object → `{ pinned: [], learned: [] }`; unavailable storage still works in memory
- [X] T050 [P] [US3] Sidebar grouping tests (extend T/components/sidebar/sidebar.spec.ts): "Вивчаю зараз" group hidden when empty; "Усі часи" hidden when every tense pinned; pin button `aria-pressed` + label "Закріпити «{name}»" / "Відкріпити «{name}»"; ✓ indicator with visually hidden "вивчено"

### Implementation for User Story 3

- [X] T051 [US3] Implement `StudyProgress` service (signals `pinned`, `learned`; computed `pinnedTenses`, `otherTenses`, `isPinned(id)`, `isLearned(id)`; `togglePinned`, `toggleLearned`; load-validate via `isTenseId`; persist with `effect()` through `LocalStorage`) in T/services/study-progress.ts
- [X] T052 [US3] Update `Sidebar` to render the two groups ("Вивчаю зараз" / "Усі часи") from `StudyProgress`, a pin toggle button per row and the learned ✓ indicator, in T/components/sidebar/sidebar.ts (+ .html, .scss)
- [X] T053 [US3] Add "Вивчаю" (pin) and "Вивчено" (learned) toggle buttons with `aria-pressed` to the tense page header in T/pages/tense/tense.ts (+ .html, .scss), and a test case in T/pages/tense/tense.spec.ts

**Checkpoint**: Personal study state works across reloads.

---

## Phase 6: User Story 4 — Choose the right tense and compare (Priority: P3)

**Goal**: Overview with decision guide + tense map; comparison sections.

**Independent Test**: `/` shows the guide and a 14-row map; clicking a row opens that tense.

- [X] T054 [P] [US4] Create `DECISION_GUIDE: DecisionStep[]` (port `Часи.md` "Як вибрати час за 5 секунд" six steps, extended with imperfecto, futuro simple, imperativo and subjuntivo steps) in T/properties/decision-guide.properties.ts
- [X] T055 [US4] Implement `Overview` page: h1, ordered decision guide (question → linked tense + example), tense map table from `TENSE_CATALOGUE` (columns Час / Форма (yo) / Коли / Аналог в англійській / Слова-маркери; tense name cell is a `routerLink`; inside `.table-scroll` region) in T/pages/overview/overview.ts (+ .html, .scss), with test T/pages/overview/overview.spec.ts (14 rows, each linking to `/<id>`)
- [X] T056 [P] [US4] Add `Comparison` section "Perfecto vs Indefinido — як вибрати" (port `Часи.md` two-column table and paired examples) to T/properties/tenses/preterito-perfecto.properties.ts and T/properties/tenses/preterito-indefinido.properties.ts
- [X] T057 [P] [US4] Add `Comparison` section "Indefinido vs Imperfecto" (two-column table: completed event vs background/habit, paired examples) to T/properties/tenses/preterito-imperfecto.properties.ts
- [X] T058 [US4] Extend the content integrity test T/properties/tenses/tenses-content.spec.ts: `Comparison` required for `preterito-perfecto`, `preterito-indefinido`, `preterito-imperfecto`

**Checkpoint**: Overview and comparisons in place.

---

## Phase 7: User Story 5 — Self-check and typical mistakes (Priority: P3)

**Goal**: Mistakes table and self-check with hidden answers on every tense page.

**Independent Test**: Reveal one answer; only that answer appears; "Показати всі" reveals the rest.

- [X] T059 [P] [US5] Implement `MistakesTable` (input `mistakes: Mistake[]`; table Неправильно / Правильно / Чому inside `.table-scroll`; wrong text struck-through in warning colour) in T/pages/tense/components/mistakes-table/mistakes-table.ts (+ .html, .scss)
- [X] T060 [P] [US5] Implement `SelfCheck` (input `items: SelfCheckItem[]`; ordered list; per-item "Показати відповідь" button with `aria-expanded` revealing the answer in place; "Показати всі" button; state is a signal `Set<number>`, reset when items change) in T/pages/tense/components/self-check/self-check.ts (+ .html, .scss), with test self-check.spec.ts
- [X] T061 [US5] Render "Типові помилки" and "Самоперевірка" sections at the end of `TensePage` in T/pages/tense/tense.html

**Checkpoint**: All five stories functional.

---

## Phase 8: Polish & Cross-Cutting Concerns

- [X] T062 [P] Verify contrast of every token pair used for text (≥ 4.5:1) and adjust src/styles/_tokens.scss; document the pairs in a comment
- [X] T063 [P] Responsive pass at 360px, 768px, 1280px: no page-level horizontal scroll; tables scroll in their region; top bar and drawer usable (src/styles/*.scss and component styles)
- [X] T064 Run `npm run build`; confirm no budget errors, per-tense chunks exist, initial bundle < 500kB; raise `anyComponentStyle` budget in angular.json only with a recorded reason
- [X] T065 Run `npm test -- --watch=false` and the manual walkthrough in specs/001-spanish-tenses-guide/quickstart.md; fix findings
- [X] T067 Add offline support (SC-006): `npm install @angular/service-worker`; add `provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000' })` in src/app/app.config.ts; create ngsw-config.json with an `app` asset group (`installMode: prefetch`) covering `/index.html`, `/*.css`, `/*.js` (all lazy tense chunks) and `/media/**` font files; set `"serviceWorker": "ngsw-config.json"` in the production build options in angular.json
- [X] T066 Update CLAUDE.md (architecture: tenses feature, content-as-data, storage keys) and remove the "placeholder" note

---

## Dependencies & Execution Order

- **Setup (T001–T008)** → **Foundational (T009–T023)** → user stories.
- **US1 (T024–T043)** depends only on Foundational. MVP.
- **US2 (T044–T048)** depends on Foundational; independent of US1 content (links still route).
- **US3 (T049–T053)** depends on US2's sidebar (T047) for grouping; T053 depends on US1's page (T042).
- **US4 (T054–T058)** depends on Foundational; T056–T057 edit US1 content files (T030, T031, T032).
- **US5 (T059–T061)** depends on US1's page (T042); data already exists from US1 content tasks.
- **Polish** after desired stories; T067 (service worker) is independent and can run any time after T008.

Within a story: tests first (should fail) → services → components → wiring.

## Parallel Example: User Story 1

```text
# After Foundational, all 14 content files are independent:
T027 presente … T040 imperfecto-subjuntivo   (14 parallel tasks)
# Tests in parallel with content:
T024, T025, T026
# Then:
T041 → T042 → T043
```

## Parallel Example: User Story 2 / 3

```text
T044, T045 in parallel → T046 → T047 → T048
T049, T050 in parallel → T051 → T052, T053
```

## Implementation Strategy

1. **MVP**: Setup + Foundational + US1 → every tense readable by URL. Validate with T024–T026.
2. **+US2**: sidebar navigation → complete reference app.
3. **+US3**: pins and learned marks → personal study tool (all explicitly requested features done).
4. **+US4, US5**: overview, comparisons, mistakes, self-check.
5. Polish and quickstart validation.
