# Data Model: Spanish Tenses Guide (Ukrainian)

All types live in `src/app/features/tenses/` (`interfaces/`, `enums/`, `types/`), one exported
shape per file. Content is static data; only **StudyProgress** and **SidebarPreferences** change at
runtime.

## TenseId (type)

String union of the 14 slugs, in default order (FR-001, Clarifications):

`presente`, `estar-gerundio`, `ir-a-infinitivo`, `preterito-perfecto`, `preterito-indefinido`,
`preterito-imperfecto`, `preterito-pluscuamperfecto`, `futuro-simple`, `futuro-perfecto`,
`condicional-simple`, `condicional-compuesto`, `imperativo`, `presente-subjuntivo`,
`imperfecto-subjuntivo`.

Validation: an `isTenseId(value: unknown): value is TenseId` helper is the only way to accept
external strings (route params, storage).

## TenseSummary (interface): catalogue entry, eager

| Field | Type | Rule |
|---|---|---|
| `id` | `TenseId` | unique |
| `name` | `string` | Spanish name, e.g. `Pretérito indefinido` |
| `hint` | `string` | Ukrainian, ≤ 30 chars, e.g. `закрите минуле` |
| `exampleYo` | `string` | yo form of hablar (`hablé`, `he hablado`); Imperativo uses tú (`habla (tú)`) |
| `when` | `string` | Ukrainian usage summary for the tense map |
| `english` | `string` | English analogue (`Past Simple`) or `—` |
| `markers` | `string[]` | signal words; may be empty |

The catalogue array order **is** the default order. Used by the sidebar and the overview tense map.

## Tense (interface): full content, lazy per tense

| Field | Type | Rule |
|---|---|---|
| `id` | `TenseId` | equals the catalogue entry |
| `intro` | `RichText` | one-paragraph Ukrainian summary |
| `formula` | `RichText` | e.g. `**haber (presente) + participio**` |
| `sections` | `TenseSection[]` | ordered by `SectionKind` order; no duplicate kinds |
| `mistakes` | `Mistake[]` | ≥ 3 |
| `selfCheck` | `SelfCheckItem[]` | ≥ 5 |

## SectionKind (enum): fixed order (Principle II)

`Usage` → `Endings` → `Conjugation` → `Irregular` → `SignalWords` → `Examples` → `Comparison` →
`Notes`

Required for every tense: `Usage`, `Conjugation`, `Examples`. `Endings` is required except for
periphrastic tenses whose page explains the auxiliary instead (`estar-gerundio`, `ir-a-infinitivo`,
compound tenses show the auxiliary table there). `Irregular` is required except for
`ir-a-infinitivo` (no irregulars, stated in `Notes`). `Comparison` is required for
`preterito-perfecto`, `preterito-indefinido`, `preterito-imperfecto`.

## TenseSection (interface)

| Field | Type | Rule |
|---|---|---|
| `kind` | `SectionKind` | |
| `title` | `string` | Ukrainian heading |
| `blocks` | `ContentBlock[]` | ≥ 1 |
| `groups` | `IrregularGroup[]` | only for `Irregular`; ≥ 1 there |

## ContentBlock (type): discriminated union on `type`

- `{ type: 'paragraph'; text: RichText }`
- `{ type: 'table'; caption?: string; headers: RichText[]; rows: RichText[][]; persons?: boolean }`:
  every row has `headers.length` cells. When `persons: true`, the first column is the person label
  and there are exactly 6 rows (5 for `imperativo`).
- `{ type: 'list'; items: RichText[] }`
- `{ type: 'examples'; items: Example[] }`
- `{ type: 'note'; tone: 'tip' | 'warning'; text: RichText }`

## IrregularGroup (interface)

| Field | Type | Rule |
|---|---|---|
| `title` | `string` | Ukrainian, e.g. `Основа на -j-` |
| `rule` | `RichText` | one-line rule |
| `table` | table `ContentBlock` | ≥ 1 row |

## Example (interface)

`{ es: RichText; uk: string }`: Spanish sentence with emphasis, Ukrainian translation.

## Mistake (interface)

`{ wrong: string; right: RichText; why: string }`

## SelfCheckItem (interface)

`{ prompt: RichText; answer: string }`: the answer is hidden until revealed (per-item UI state,
not persisted).

## RichText (type) and TextSegment (interface)

`RichText = string` using `**strong**` and `*em*` markup (no nesting). `parseRichText(text):
TextSegment[]` (`{ text: string; strong: boolean; em: boolean }`) is a pure helper; unmatched
markers are rendered literally.

## Overview content (properties)

`DecisionStep { question: string; tenseId: TenseId; example: RichText }`: the "Як вибрати час за
5 секунд" guide, ordered. Common mistakes across tenses stay on each tense page.

## StudyProgress (runtime, persisted)

| Field | Type | Rule |
|---|---|---|
| `pinned` | `TenseId[]` | unique, ordered by pin time (oldest first) |
| `learned` | `TenseId[]` | unique, unordered set semantics |

Transitions: `pin(id)` appends if absent; `unpin(id)` removes; `togglePinned`; `toggleLearned`.
Pinned and learned are independent (Clarifications). Derived (`computed`):
`pinnedTenses` = catalogue entries in `pinned` order; `otherTenses` = catalogue entries not pinned,
in catalogue order.

On load: unknown IDs and duplicates are dropped; a non-object or wrong-shaped value → empty state.

## SidebarPreferences (runtime, persisted)

`{ collapsed: boolean }`: applies to wide screens only. Default `false`. The narrow-screen drawer
open state is an in-memory signal starting `false`.
