# Contract: Routes (URL interface)

| URL | Renders | Notes |
|---|---|---|
| `/` | Overview page (decision guide + tense map) | Default landing (story 4, scenario 1) |
| `/:tenseId` | Tense page for a valid `TenseId` | Bookmarkable (FR-012); sidebar highlights the entry |
| `/:unknown` | Redirect to `/` | Guarded by `CanMatchFn` using `isTenseId` |
| any deeper path | Redirect to `/` | Wildcard `**` |

- Page `<title>`: `«{name}» · Іспанські часи` on a tense page, `Іспанські часи` on the overview
  (via a `TitleStrategy` or route `title` resolver).
- Navigation scrolls to top; in-page section anchors (`#nepravylni` etc.) are optional.
- On narrow screens, navigating closes the sidebar drawer.
