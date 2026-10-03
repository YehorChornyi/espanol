# Implementation Plan: Spanish Tenses Guide (Ukrainian)

**Branch**: `001-spanish-tenses-guide` | **Date**: 2026-10-03 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-spanish-tenses-guide/spec.md`

## Summary

A dark-themed, Ukrainian-language Angular app that teaches 14 Spanish tenses. A collapsible sidebar
lists all tenses; pinned ("Вивчаю зараз") tenses float to the top, and tenses can be marked as
learned, persisted in `localStorage`. Each tense page renders typed, lazily loaded content
(endings, conjugations, grouped irregular verbs, signal words, examples, mistakes, self-check)
as tables, modelled on `Часи.md`. An overview page offers a "how to choose a tense" guide and a
tense map.

## Technical Context

**Language/Version**: TypeScript ~6.0, Angular 22.2 (standalone, zoneless, signals)

**Primary Dependencies**: `@angular/core`, `@angular/router`, `sass` (dev),
`@fontsource-variable/inter` (self-hosted font, new), `@angular/service-worker` (offline prefetch, new); no UI component library

**Storage**: Browser `localStorage` (two small versioned keys; see [contracts/storage.md](contracts/storage.md))

**Testing**: Vitest + jsdom through `ng test` (`@angular/build:unit-test`), Angular `TestBed`

**Target Platform**: Evergreen desktop and mobile browsers, static hosting

**Project Type**: Single-page web application (frontend only)

**Performance Goals**: Initial JS+CSS ≤ 500kB (existing warning budget); tense page renders
< 100ms after its chunk loads; per-tense content chunk ≤ 40kB gzipped

**Constraints**: Offline after first load, dark theme only, WCAG AA, no page-level horizontal
scroll at 360px, Ukrainian UI text

**Scale/Scope**: 1 user, 14 tenses, 2 routed pages, ~8 components

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Gate | Pre-design | Post-design |
|---|---|---|---|
| I. Content Accuracy | Content as typed data + integrity and spot-check tests; reuse `Часи.md` verbatim | ✅ | ✅ R3, R8, data-model |
| II. Tables-First, Ukrainian-First | Ukrainian UI, tables with emphasis, fixed section order | ✅ | ✅ `SectionKind` order, contracts/ui.md |
| III. Modern Angular Only | Standalone, zoneless, signals, `inject()`, control flow, lazy routes, no suffixes | ✅ | ✅ R6, structure below |
| IV. Narrowest-Scope Structure | Placement per skill; no `models/`/`utils/` | ✅ | ✅ layout in feature, storage in core (R6) |
| V. Readable & Accessible Dark UI | Tokens, AA contrast, ≥16px font, keyboard + ARIA, 360px | ✅ | ✅ R1, R2, R7, contracts/ui.md |
| VI. Local-Only Simplicity | No backend; one storage service; justify deps | ✅ | ✅ new deps justified: font package (R2), first-party service worker (R4) |

No violations; Complexity Tracking is empty.

## Project Structure

### Documentation (this feature)

```text
specs/001-spanish-tenses-guide/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── routes.md
│   ├── storage.md
│   └── ui.md
├── checklists/requirements.md
└── tasks.md            # created by /speckit-tasks
```

### Source Code (repository root)

```text
src/
├── styles.scss                         # imports the partials below + font
├── styles/
│   ├── _tokens.scss                    # colour, spacing, radius, type scale (CSS custom properties)
│   ├── _base.scss                      # reset, body, focus-visible, scrollbar
│   ├── _typography.scss                # headings, prose, strong/em accents
│   └── _tables.scss                    # .table-scroll wrapper + table styling
└── app/
    ├── app.ts / app.html / app.scss    # <router-outlet /> only
    ├── app.config.ts                   # zoneless, router (input binding, scrolling), title strategy
    ├── app.routes.ts                   # '' → loadChildren tenses.routes
    ├── core/
    │   └── services/
    │       └── local-storage.ts        # safe read/write wrapper
    └── features/
        └── tenses/
            ├── tenses.routes.ts        # layout + children: '', ':tenseId' (guarded), '**'
            ├── components/
            │   ├── tenses-layout/      # top bar + sidebar + child outlet + drawer backdrop
            │   ├── sidebar/            # groups, rows
            │   ├── rich-text/          # renders RichText segments
            │   └── content-table/      # renders a table ContentBlock in a scroll region
            ├── services/
            │   ├── study-progress.ts   # pinned/learned signals + persistence
            │   ├── sidebar-state.ts    # collapsed / drawer / isNarrow signals
            │   └── tense-content.ts    # catalogue + lazy loader lookup
            ├── guards/
            │   └── tense-exists.guard.ts
            ├── helpers/
            │   ├── rich-text.helper.ts # parseRichText
            │   └── tense-id.helper.ts  # isTenseId
            ├── interfaces/             # tense.interface.ts, tense-summary.interface.ts, …
            ├── enums/
            │   └── section-kind.enum.ts
            ├── types/
            │   ├── tense-id.types.ts
            │   └── content-block.types.ts
            ├── properties/
            │   ├── tense-catalogue.properties.ts
            │   ├── tense-loaders.properties.ts
            │   ├── decision-guide.properties.ts
            │   └── tenses/             # one <tense-id>.properties.ts per tense (14 files)
            └── pages/
                ├── overview/           # decision guide + tense map
                └── tense/              # tense page (resource() over loader)
                    └── components/
                        ├── irregular-group/
                        ├── mistakes-table/
                        └── self-check/
```

Tests sit next to their subjects as `*.spec.ts`; content tests in
`features/tenses/properties/tenses/tenses-content.spec.ts`.

**Structure Decision**: Single Angular app. Everything domain-specific lives in
`features/tenses/`, including the layout (every route uses the sidebar, and `core/` must not depend
on a feature). Only the generic `localStorage` wrapper is `core/`. `rich-text` and
`content-table` start in `features/tenses/components/` because only this feature uses them;
they are promoted to `shared/` only if a second domain appears.

## Complexity Tracking

None.
