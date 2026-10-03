# Feature Specification: Spanish Tenses Guide (Ukrainian)

**Feature Branch**: `001-spanish-tenses-guide`

**Created**: 2026-10-03

**Status**: Draft

**Input**: User description: "I need to create simple web app for me to learn spanish tenses in Ukrainian language. I need to be able to select a tense and understand how it builds, all the rules and irregural verbs. /Users/jabko/Downloads/Часи.md example of the good explanaintion. tables is important. What I want to see is the sidebar with all of the tenses + functionality to pin/save/mark the tenses that I have learnt (if pnned -> they automaticaly go to top of the list) this way first of all I will see the list of tenses that I am stydying now, save this in localsortage. Sidebar should be colapsible. Thats pretty much it, you can use any scss framework to build the webstite, I want to have it in dark theme, with good and readable font"

## Clarifications

### Session 2026-10-03

- Q: When the sidebar is collapsed, should it disappear completely or shrink to a narrow strip? → A: It disappears completely; a toggle button stays visible in the top bar on every screen size.
- Q: In what order are unpinned tenses listed, and are they grouped? → A: A single flat list in this fixed teaching order: Presente, Estar + gerundio, Ir a + infinitivo, Pretérito perfecto, Pretérito indefinido, Pretérito imperfecto, Pretérito pluscuamperfecto, Futuro simple, Futuro perfecto, Condicional simple, Condicional compuesto, Imperativo, Presente de subjuntivo, Pretérito imperfecto de subjuntivo.
- Q: Does marking a tense as learned also unpin it? → A: No. Pinned and learned are independent; the learner unpins manually.
- Q: How are Imperativo forms shown, given it has no "yo" form? → A: Two tables, affirmative and negative, for the five persons tú, usted, nosotros, vosotros, ustedes; the six-person rule applies to every other tense.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Study one tense in depth (Priority: P1)

The learner opens the app, picks a tense from the sidebar, and reads a full explanation in Ukrainian: when the tense is used, its formula, the regular endings for -ar / -er / -ir, a fully conjugated example for each verb group, all common irregular verbs grouped by type of irregularity, signal words, and example sentences with Ukrainian translations. Tables are the main way of presenting forms, in the style of the reference cheat sheet (`Часи.md`).

**Why this priority**: Explaining tenses is the whole point of the app. Without it, the sidebar and pinning have nothing to organise.

**Independent Test**: Open the app, select any tense, and confirm that the page shows every required content block (see FR-004) with correctly conjugated forms. Delivers value even with no sidebar state at all.

**Acceptance Scenarios**:

1. **Given** the app is open, **When** the learner selects "Pretérito indefinido", **Then** the main area shows its usage explanation, endings table, full conjugation of hablar / comer / vivir, and every irregular group (stem in -u-, -i-, -j-, fully irregular, e→i / o→u stem change, i→y, spelling change in yo), each as a table.
2. **Given** a tense page is shown, **When** the learner reads a conjugation table, **Then** the ending that changes is visually emphasised in every form (e.g. habl**é**).
3. **Given** a tense page is shown, **When** the learner reads it, **Then** all explanatory text is in Ukrainian and all Spanish forms and examples are in Spanish, with Ukrainian translations for example sentences.
4. **Given** the learner opens a direct link to a specific tense, **When** the page loads, **Then** that tense is displayed and highlighted in the sidebar.

---

### User Story 2 - Navigate tenses with a sidebar (Priority: P1)

The learner sees every available tense in a sidebar and can switch between them with one click. The sidebar can be collapsed to give the content more room and expanded again.

**Why this priority**: The sidebar is how every tense is reached. Collapsing was requested explicitly, and it matters on narrow screens where tables need the width.

**Independent Test**: Click through every sidebar entry and confirm the content changes. Collapse and expand the sidebar, then reload and confirm the state is kept.

**Acceptance Scenarios**:

1. **Given** the app is open, **When** the learner looks at the sidebar, **Then** every tense in scope is listed by its Spanish name, with a short Ukrainian hint (e.g. "Pretérito indefinido · закрите минуле").
2. **Given** the sidebar is expanded, **When** the learner activates the collapse control, **Then** the sidebar hides completely, the content area takes the full width, and the toggle stays visible in the top bar.
3. **Given** the sidebar was collapsed, **When** the learner reloads the page, **Then** the sidebar is still collapsed.
4. **Given** a narrow (phone-width) screen, **When** the app loads, **Then** the sidebar starts collapsed and opens as an overlay that closes after a tense is chosen.

---

### User Story 3 - Pin tenses being studied and mark tenses as learned (Priority: P2)

The learner pins the tenses they are currently studying; pinned tenses move to the top of the sidebar automatically, so the current study set is always visible first. Separately, the learner can mark a tense as learned. All of this is remembered on the device between visits.

**Why this priority**: Requested explicitly. It turns a reference into a personal study tool, but the content is still useful without it.

**Independent Test**: Pin two tenses and mark one other as learned. Confirm the sidebar order and indicators, then reload and confirm nothing changed.

**Acceptance Scenarios**:

1. **Given** no tenses are pinned, **When** the learner pins "Condicional simple", **Then** it moves to a "Вивчаю зараз" group at the top of the sidebar.
2. **Given** several tenses are pinned, **When** the sidebar is shown, **Then** pinned tenses appear first in the order they were pinned, followed by all other tenses in their default order.
3. **Given** a tense is pinned, **When** the learner unpins it, **Then** it returns to its default position in the list.
4. **Given** any tense, **When** the learner marks it as learned, **Then** it shows a visible "learned" indicator in the sidebar and on its page, without changing its position or its pinned state.
5. **Given** pins and learned marks exist, **When** the learner closes the browser and returns later on the same device, **Then** all pins and learned marks are restored.
6. **Given** a tense is both pinned and learned, **When** the sidebar is shown, **Then** it stays in the pinned group and also shows the learned indicator.

---

### User Story 4 - Choose the right tense and compare similar ones (Priority: P3)

Besides individual tense pages, the learner can open an overview page with a quick "how to choose a tense" decision guide and a tense map table (tense, example form, when to use it, English equivalent, signal words). Tense pairs that are easily confused (e.g. Perfecto vs Indefinido) have a side-by-side comparison.

**Why this priority**: The reference cheat sheet opens with exactly this. It is valuable, but only once individual tenses exist.

**Independent Test**: Open the overview page and confirm the decision guide and tense map list every tense in scope, each linking to its page.

**Acceptance Scenarios**:

1. **Given** the app is opened with no tense selected, **When** it loads, **Then** the overview page with the decision guide and tense map is shown.
2. **Given** the tense map is shown, **When** the learner clicks a tense row, **Then** that tense's page opens.
3. **Given** the Pretérito perfecto or Pretérito indefinido page, **When** the learner scrolls to the comparison section, **Then** a two-column table of signal words and paired examples is shown.

---

### User Story 5 - Self-check and typical mistakes (Priority: P3)

Each tense page ends with a list of typical mistakes (wrong → right → why) and a few self-check exercises whose answers stay hidden until the learner reveals them.

**Why this priority**: Helps learning stick, as in the reference cheat sheet, but is not required to understand a tense.

**Independent Test**: Open a tense page, reveal a hidden answer, and confirm it matches the expected form.

**Acceptance Scenarios**:

1. **Given** a tense page, **When** the learner reaches the end, **Then** a "Типові помилки" table and at least 5 self-check sentences are shown.
2. **Given** a self-check sentence, **When** the learner activates "show answer", **Then** the correct form appears for that sentence only.

---

### Edge Cases

- Saved data on the device is missing, corrupted, or refers to a tense that no longer exists: the app ignores the invalid entries and starts from defaults without errors.
- Browser storage is unavailable (private mode, blocked): the app works normally, and pins and marks last only for the current session.
- The learner pins every tense: the pinned group shows all tenses and the "other" group is hidden rather than shown empty.
- Wide conjugation tables (7 columns: verb + 6 persons) on a phone-width screen: the table scrolls horizontally inside its own container; the page itself never scrolls sideways.
- An unknown tense link is opened: the learner is shown the overview page.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The app MUST include the following tenses, each with its own page: Presente, Estar + gerundio, Ir a + infinitivo, Pretérito perfecto, Pretérito indefinido, Pretérito imperfecto, Pretérito pluscuamperfecto, Futuro simple, Futuro perfecto, Condicional simple, Condicional compuesto, Imperativo, Presente de subjuntivo, Pretérito imperfecto de subjuntivo. (Full indicative set + common periphrases + imperative + the two main subjunctive tenses; see Assumptions.)
- **FR-002**: All explanations, headings, labels and interface text MUST be in Ukrainian; Spanish forms, verbs and example sentences MUST be in Spanish.
- **FR-003**: Conjugation patterns, endings and irregular verbs MUST be presented as tables, with the changing part of each form visually emphasised.
- **FR-004**: Each tense page MUST contain, where applicable to that tense: (a) when to use it, with a Ukrainian description and an English equivalent; (b) the formula of how it is built; (c) a regular endings table for -ar / -er / -ir; (d) a full conjugation example of hablar, comer, vivir for all six persons (for Imperativo: affirmative and negative tables for tú, usted, nosotros, vosotros, ustedes); (e) irregular verbs grouped by type of irregularity, each group in its own table with a one-line rule; (f) signal words; (g) at least 3 example sentences with Ukrainian translations; (h) usage notes and pitfalls.
- **FR-005**: The irregular-verb coverage per tense MUST include at least every irregular verb listed for that tense in the reference cheat sheet (`Часи.md`); for tenses not in the cheat sheet, at least the 10 most common irregular verbs for that tense.
- **FR-006**: The app MUST show a sidebar listing every tense in scope plus an entry for the overview page.
- **FR-007**: The sidebar MUST be collapsible and expandable, and its collapsed/expanded state MUST be remembered on the device.
- **FR-008**: Learners MUST be able to pin and unpin any tense from the sidebar and from the tense page.
- **FR-009**: Pinned tenses MUST be shown at the top of the sidebar, in a labelled group, in the order they were pinned; unpinned tenses MUST follow as one flat list in the default order given in FR-001.
- **FR-010**: Learners MUST be able to mark and unmark any tense as learned; learned tenses MUST show a visible indicator in the sidebar and on their page and MUST NOT change position because of it.
- **FR-011**: Pins, learned marks and sidebar state MUST be kept on the learner's device across reloads and browser restarts, with no account or server.
- **FR-012**: Each tense MUST be reachable by its own shareable/bookmarkable link, and the currently open tense MUST be highlighted in the sidebar.
- **FR-013**: The app MUST provide an overview page with a "how to choose a tense" decision guide and a tense map table linking to each tense.
- **FR-014**: Each tense page MUST end with a typical-mistakes table and self-check exercises with answers hidden until revealed.
- **FR-015**: The app MUST use a dark colour theme only, with text contrast meeting WCAG AA (4.5:1 for body text).
- **FR-016**: The app MUST use a highly readable typeface with full Cyrillic and Spanish character support (á, é, í, ó, ú, ñ, ü, ¿, ¡), a body size of at least 16px, and comfortable line spacing.
- **FR-017**: The app MUST be usable on desktop and phone-width screens with no page-level horizontal scrolling.
- **FR-018**: All controls (collapse, pin, learned, reveal answer) MUST be operable by keyboard and have accessible labels.

### Key Entities

- **Tense**: A Spanish tense or construction. Attributes: stable identifier, Spanish name, short Ukrainian hint, default position in the list, and its content (usage, formula, endings, example conjugations, irregular verb groups, signal words, examples, notes, typical mistakes, self-check items).
- **Irregular verb group**: A named type of irregularity within one tense (e.g. "Основа на -j-"). Attributes: title, one-line rule, and a table of verbs with their forms.
- **Study progress** (per device): The ordered list of pinned tenses, the set of learned tenses, and the sidebar collapsed/expanded state.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: From opening the app, the learner reaches any tense's content in at most 2 clicks or taps.
- **SC-002**: 100% of the tenses listed in FR-001 have a page containing every applicable content block from FR-004.
- **SC-003**: Every conjugated form and irregular verb in the app matches standard Peninsular Spanish grammar (verified against the reference cheat sheet and a standard grammar source): zero known errors at release.
- **SC-004**: After pinning, unpinning or marking a tense, the sidebar reflects the change immediately, and 100% of pins and marks survive a browser restart.
- **SC-005**: All text meets WCAG AA contrast on the dark theme, and at 360px width no content requires page-level horizontal scrolling.
- **SC-006**: The learner can use the app for a full study session with no internet connection after the first load (all content is part of the app).

## Assumptions

- **Single user, single device**: The app is for one learner. There are no accounts, no sync between devices, and no server; progress lives in the browser on the device.
- **Tense scope**: "All of the tenses" is read as the full indicative set plus the constructions from the cheat sheet (estar + gerundio, ir a + infinitivo), the imperative, and the two most-used subjunctive tenses. Rarer forms (pretérito anterior, futuro de subjuntivo, compound subjuntivo tenses) are out of scope for v1 and can be added later.
- **"Pin" vs "learned"**: The request mentions pinning, saving and marking tenses as learned. This spec treats them as two independent markers. "Pin" means "studying now" and moves the tense to the top. "Learned" is a checkmark that doesn't change the order.
- **Variant of Spanish**: Peninsular Spanish (Spain) is the reference, including vosotros forms. Latin American differences are mentioned in notes where they matter (e.g. perfecto vs indefinido usage), as in the cheat sheet.
- **Content authoring**: All tense content ships inside the app and is written by the project, using `Часи.md` as the model for tone, structure and depth. The six tenses already covered there reuse its content.
- **Dark theme only**: No light theme or theme switcher in v1.
- **Out of scope for v1**: Audio and pronunciation, spaced repetition, scoring or progress statistics, search, verb-conjugation generator for arbitrary verbs, user-editable content.
