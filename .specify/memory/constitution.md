<!--
Sync Impact Report
- Version change: (template, unversioned) → 1.0.0
- Modified principles: all placeholders replaced (initial adoption)
  - [PRINCIPLE_1_NAME] → I. Content Accuracy (NON-NEGOTIABLE)
  - [PRINCIPLE_2_NAME] → II. Tables-First, Ukrainian-First Pedagogy
  - [PRINCIPLE_3_NAME] → III. Modern Angular Only
  - [PRINCIPLE_4_NAME] → IV. Narrowest-Scope Structure
  - [PRINCIPLE_5_NAME] → V. Readable & Accessible Dark UI
  - Added: VI. Local-Only Simplicity
- Added sections: Technology Constraints, Development Workflow & Quality Gates
- Removed sections: none
- Templates: plan/spec/tasks templates read the constitution at runtime; no edits required
- Deferred TODOs: none
-->

# Español Tenses Constitution

## Core Principles

### I. Content Accuracy (NON-NEGOTIABLE)

Every Spanish form shown in the app MUST be grammatically correct for Peninsular Spanish,
including vosotros forms and written accents. Content that exists in the reference cheat sheet
(`Часи.md`) MUST match it; content beyond it MUST be checked against a standard grammar source
(e.g. RAE / Instituto Cervantes conjugation). Lesson content MUST live as typed data, separate
from components, and MUST be covered by automated tests that check its structural completeness
(every tense has every required block, every table row has six persons).

Rationale: a learning tool that teaches a wrong form does more harm than no tool at all.

### II. Tables-First, Ukrainian-First Pedagogy

All explanations, headings and interface text MUST be in Ukrainian; Spanish appears only as
forms, verbs and examples. Endings, conjugations and irregular verbs MUST be presented as tables
with the changing part emphasised. Each tense page follows one fixed section order, so a learner
always knows where to look.

Rationale: the learner reads Ukrainian, and the user named tables as the key format.

### III. Modern Angular Only

Code MUST use Angular 22 idioms: standalone components, zoneless change detection, signals
(`signal`, `computed`, `input`, `output`) for all state, `inject()` for DI, built-in control flow
(`@if`, `@for`), `OnPush`-compatible components, and lazy-loaded routes. NgModules, zone.js,
`*ngIf`/`*ngFor`, constructor injection and `.component.ts` / `.service.ts` suffixes are
forbidden. The `angular-developer` skill is the reference for naming and API usage.

Rationale: one consistent, current style keeps a small codebase easy to change.

### IV. Narrowest-Scope Structure

File placement MUST follow the `angular-project-structure` skill: `core/`, `shared/`,
`features/<domain>/`, `features/<domain>/pages/<page>/`, at the narrowest scope that has a real
consumer, one folder per kind, one exported shape per file with its kind suffix
(`.interface.ts`, `.enum.ts`, `.types.ts`, `.helper.ts`, `.properties.ts`). No `models/` or
`utils/` folders. Promotion to a wider scope happens only when a second consumer appears.

Rationale: placement rules decided once prevent drift as content and features grow.

### V. Readable & Accessible Dark UI

The UI MUST be dark-themed with WCAG AA contrast (4.5:1 body text), a Cyrillic- and
Spanish-complete typeface at ≥16px body size, keyboard-operable controls with accessible labels,
visible focus states, and no page-level horizontal scroll at 360px width (wide tables scroll
inside their own container). Styles are SCSS; colours, spacing and type sizes MUST come from
shared design tokens, never ad-hoc literals in component styles.

Rationale: the learner reads dense tables for long stretches; legibility is the product.

### VI. Local-Only Simplicity

The app has no backend, accounts or network calls at runtime: all content ships in the bundle,
and per-user state (pins, learned marks, sidebar state) lives in `localStorage`, accessed only
through one service that tolerates missing, corrupt or unavailable storage. New dependencies
MUST be justified in the plan; prefer the platform and Angular over libraries (YAGNI).

Rationale: a personal study tool must work offline and stay trivial to maintain.

## Technology Constraints

- Angular 22 (`@angular/build`), TypeScript ~6.0, SCSS, Vitest + jsdom via `ng test`.
- Formatting: Prettier per `.prettierrc` (100 cols, single quotes).
- Production budgets in `angular.json` MUST NOT be raised without a recorded justification.
- No server-side rendering, analytics, or third-party tracking.

## Development Workflow & Quality Gates

- Work follows the Spec Kit flow: specify → clarify → plan → tasks → analyze → implement.
- A change is done only when `ng build` succeeds with no budget errors and `ng test` passes.
- Logic (storage, ordering of pinned tenses, content integrity) MUST have unit tests; components
  with behaviour (sidebar collapse, pin/learned toggles, answer reveal) MUST have component tests.
- Plans MUST include a Constitution Check against Principles I–VI; any violation MUST be listed
  in the plan's Complexity Tracking with the simpler alternative that was rejected and why.

## Governance

This constitution supersedes other practices in this repository. Amendments are made by editing
this file through `/speckit-constitution`, with a Sync Impact Report and a version bump:
MAJOR for removing or redefining a principle, MINOR for adding a principle or materially
expanding guidance, PATCH for wording fixes. Every plan and review MUST verify compliance with
the principles above. Runtime development guidance lives in `CLAUDE.md` and the project skills
under `.claude/skills/`.

**Version**: 1.0.0 | **Ratified**: 2026-10-03 | **Last Amended**: 2026-10-03
