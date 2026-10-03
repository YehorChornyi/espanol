# Contract: localStorage schema

All access goes through `core/services/local-storage.ts` (Principle VI). Every read and write is
wrapped in try/catch; failures fall back to defaults and in-memory state.

## `espanol.progress.v1`

```json
{ "pinned": ["condicional-simple", "presente"], "learned": ["presente"] }
```

- `pinned`: ordered, oldest pin first; unique; only valid `TenseId`s.
- `learned`: unique; only valid `TenseId`s.
- Invalid entries are dropped on read; any other shape → `{ "pinned": [], "learned": [] }`.
- Written on every change.

## `espanol.sidebar.v1`

```json
{ "collapsed": false }
```

- Wide-screen collapsed state only. Missing or invalid → `false`.

## Versioning

A breaking shape change MUST use a new key suffix (`.v2`) with a one-time migration from the
previous key in the owning service; old keys are removed after migration.
