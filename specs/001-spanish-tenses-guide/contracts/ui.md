# Contract: UI behaviour

## Layout

- Top bar (always visible): sidebar toggle button (`aria-label` "Показати меню" / "Сховати меню",
  `aria-expanded`, `aria-controls="sidebar"`), app title linking to `/`.
- Sidebar (`<nav id="sidebar" aria-label="Часи">`):
  1. Link "Огляд: як вибрати час" → `/`.
  2. Group "Вивчаю зараз" (heading + list): pinned tenses in pin order. Hidden when empty.
  3. Group "Усі часи" (heading + list): unpinned tenses in catalogue order. Hidden when empty
     (every tense pinned).
- Each sidebar row: link (Spanish name + Ukrainian hint), learned indicator (✓, with visually
  hidden text "вивчено"), pin toggle button (`aria-pressed`, label "Закріпити «{name}»" /
  "Відкріпити «{name}»"). The active route row has `aria-current="page"`.

## Breakpoints

- ≥ 900px: inline sidebar 300px; toggle hides/shows it; state persisted.
- < 900px: overlay drawer with backdrop; starts closed; closes on navigation, backdrop click,
  Escape. Focus moves into the drawer on open and back to the toggle on close.

## Tense page

- Header: `<h1>` Spanish name, Ukrainian hint, formula, "Вивчаю" (pin) and "Вивчено" (learned)
  toggle buttons with `aria-pressed`.
- Sections in `SectionKind` order, each `<section>` with `<h2>`; irregular groups use `<h3>`.
- Tables: `<table>` with `<caption>` when given, `<th scope="col">` headers, `<th scope="row">`
  person labels; wrapped in a horizontally scrollable container (`tabindex="0"`, `role="region"`,
  `aria-label` = caption or section title).
- Emphasis: `**x**` → `<strong>` styled with accent colour; `*x*` → `<em>`.
- "Типові помилки" table: Неправильно / Правильно / Чому.
- "Самоперевірка": ordered list; each item has a "Показати відповідь" button (`aria-expanded`)
  revealing the answer in place; plus a "Показати всі" button.
- Loading a tense shows a lightweight skeleton; a failed chunk load shows a Ukrainian error
  message with a retry button.
