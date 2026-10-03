# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A dark-themed, Ukrainian-language study app for Spanish tenses (single Angular 22 project `espanol`). Built through the Spec Kit flow; the spec, plan, data model and contracts live in `specs/001-spanish-tenses-guide/`.

## Architecture

- `app.routes.ts` lazy-loads `features/tenses/tenses.routes.ts`. Its `TensesLayout` (top bar + sidebar + child outlet) wraps two pages: `pages/overview` (`/`) and `pages/tense` (`/:tenseId`, guarded by `tenseExistsGuard`, unknown slugs redirect to `/`).
- **Content is typed data, not templates.** `properties/tense-catalogue.properties.ts` is the eager list (name, hint, tense-map row) whose order is the sidebar order; each tense's full content is `properties/tenses/<id>.properties.ts` exporting `TENSE: Tense`, loaded lazily through `TENSE_LOADERS` (one chunk per tense) via `resource()`. Pages render generic block types (`paragraph`, `table`, `list`, `examples`, `note`) in fixed `SectionKind` order.
- Inline markup in content: `**x**` = the changing part of a form (accent colour), `*x*` = Spanish inside Ukrainian prose. Parsed by `parseRichText` and rendered by `app-rich-text` without `innerHTML`.
- Adding or editing content: `tenses-content.spec.ts` enforces structure (section order and required kinds, row widths, 6 person rows / 5 for Imperativo, ≥ 3 mistakes, ≥ 5 self-check items) and `tenses-forms.spec.ts` spot-checks known forms. Content must be Peninsular Spanish with vosotros; the user's reference cheat sheet is the style model.
- Persistence goes only through `core/services/local-storage.ts`: `espanol.progress.v1` (`{ pinned: TenseId[] oldest first, learned: TenseId[] }`, owned by `StudyProgress`) and `espanol.sidebar.v1` (`{ collapsed }`, wide screens only, owned by `SidebarState`). Below 900px the sidebar is an unpersisted overlay drawer.
- Production builds register the Angular service worker (`ngsw-config.json`), which prefetches all chunks and the Latin/Cyrillic font files for offline use. The font is self-hosted `@fontsource-variable/inter`, included via `angular.json` styles.
- Design tokens are CSS custom properties in `src/styles/_tokens.scss`; component styles use tokens, not colour literals. Dark theme only.

## Commands

- `npm start` (`ng serve`): dev server at http://localhost:4200, development config by default
- `npm run build` (`ng build`): production build to `dist/` (default config is production; budgets: 500kB warn / 1MB error initial bundle, 4kB / 8kB per component style)
- `npm run watch`: development build in watch mode
- `npm test` (`ng test`): unit tests via the `@angular/build:unit-test` builder, which runs Vitest in jsdom
- Single spec file: `ng test --include src/app/app.spec.ts`
- Generate code: `ng generate component <name>` (selector prefix `app`)

No linter or e2e framework is configured. Formatting is Prettier (`.prettierrc`: 100 char width, single quotes, Angular parser for `.html`).

## Architecture and conventions

- Standalone components, no NgModules. Bootstrapped in `src/main.ts` with `bootstrapApplication(App, appConfig)`; app-wide providers (router, global error listeners) live in `src/app/app.config.ts`.
- Zoneless: `zone.js` is not a dependency. Drive state with signals (`signal`, `computed`) so change detection works; in tests, use `await fixture.whenStable()` rather than relying on zone-based `detectChanges` timing.
- CLI 22 naming: files and classes have no `.component` suffix (`app.ts` / `class App`, not `app.component.ts` / `AppComponent`).
- Templates use built-in control flow (`@for`, `@if`) rather than structural directives.
- Specs use Vitest globals (`describe`, `it`, `expect`) with Angular `TestBed`.
- `tsconfig.json` enables `noPropertyAccessFromIndexSignature`, `noImplicitOverride`, `noImplicitReturns`, and Angular's `strictInjectionParameters` / `strictInputAccessModifiers`.
- Styles are SCSS (`inlineStyleLanguage: scss`, component schematic defaults to `scss`). Global partials live in `src/styles/` and are pulled in by `src/styles.scss`. Static assets go in `public/`.
- Components use `ChangeDetectionStrategy.OnPush`, signal `input()`s and `inject()`.

## Project skills (`.claude/skills/`)

- `angular-developer`: Angular v22 guidance (signals, Signal Forms, DI, routing, testing); owns **naming**.
- `angular-project-structure`: owns **file placement**. New code goes under `src/app/` in `core/`, `shared/`, `features/<domain>/`, or `features/<domain>/pages/<page>/`, at the narrowest scope used, with one folder per kind (`components/`, `services/`, `interfaces/`, `enums/`, `types/`, `helpers/`, `properties/`, ...). No `models/` or `utils/` folders, no `.model.ts`, no `.component.ts` / `.service.ts` suffixes. Each feature has a lazy-loaded `<domain>.routes.ts`. Where the two Angular skills disagree, this one wins on placement.
- `speckit-*`: Spec Kit workflow (`constitution` → `specify` → `clarify` → `plan` → `tasks` → `analyze` → `implement`). They use `.specify/` (scripts, templates, and the constitution in `memory/constitution.md`).
- `grill-me`: stress-tests a plan by asking questions.

<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan
at specs/001-spanish-tenses-guide/plan.md
<!-- SPECKIT END -->
