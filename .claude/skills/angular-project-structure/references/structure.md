# Directory Structure

```text
src/
└── app/
    │
    ├── core/                         # Application-wide infrastructure
    │   ├── auth/                     # Authentication & authorization
    │   ├── http/                     # HTTP infrastructure & interceptors
    │   ├── services/                 # Global application services
    │   ├── config/                   # Application configuration
    │   └── layout/                   # Global layout
    │
    ├── shared/                       # Reusable across features
    │   ├── components/               # Generic UI components
    │   ├── directives/               # Reusable directives
    │   ├── pipes/                    # Reusable pipes
    │   ├── interfaces/               # Shapes used across domains
    │   ├── enums/                    # Enums used across domains
    │   ├── types/                    # Aliases and unions across domains
    │   ├── properties/               # Shared constants
    │   └── helpers/                  # Generic pure functions
    │
    ├── features/                     # Business/domain features
    │   │
    │   ├── products/                 # Products domain
    │   │   │
    │   │   ├── pages/                # Route-level pages
    │   │   │   │
    │   │   │   ├── product-list/
    │   │   │   │   ├── components/   # Private to product-list
    │   │   │   │   ├── services/     # Private to product-list
    │   │   │   │   ├── helpers/      # Private to product-list
    │   │   │   │   ├── interfaces/   # Private to product-list
    │   │   │   │   ├── types/        # Private to product-list
    │   │   │   │   ├── properties/   # Private to product-list
    │   │   │   │   ├── guards/       # Private to product-list
    │   │   │   │   ├── pipes/        # Private to product-list
    │   │   │   │   ├── product-list.ts
    │   │   │   │   ├── product-list.html
    │   │   │   │   └── product-list.scss
    │   │   │   │
    │   │   │   └── product-details/
    │   │   │       ├── components/   # Private to product-details
    │   │   │       ├── services/     # Private to product-details
    │   │   │       ├── interfaces/   # Private to product-details
    │   │   │       ├── product-details.ts
    │   │   │       ├── product-details.html
    │   │   │       └── product-details.scss
    │   │   │
    │   │   ├── components/            # Shared within products
    │   │   ├── services/              # Shared within products
    │   │   ├── helpers/               # Shared within products
    │   │   ├── interfaces/            # Shared within products
    │   │   ├── enums/                 # Shared within products
    │   │   ├── types/                 # Shared within products
    │   │   ├── properties/            # Shared within products
    │   │   ├── pipes/                 # Shared within products
    │   │   └── products.routes.ts
    │   │
    │   ├── orders/                    # Orders domain
    │   │   ├── pages/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── interfaces/
    │   │   └── orders.routes.ts
    │   │
    │   └── users/                     # Users domain
    │       ├── pages/
    │       ├── components/
    │       ├── services/
    │       ├── interfaces/
    │       └── users.routes.ts
    │
    ├── app.ts                         # Root component
    ├── app.html                       # Root template
    ├── app.scss                       # Root styles
    ├── app.config.ts                  # Application configuration
    └── app.routes.ts                  # Root routes
```

## Folder responsibilities

### `core/`

Instantiated once, lives for the app's lifetime. Nothing here is feature-specific.

| Folder | Holds |
|---|---|
| `auth/` | Session state, login/logout, token storage, auth guards, role checks |
| `http/` | Interceptors (auth headers, error mapping, retry, logging), base HTTP wrappers |
| `services/` | Singletons used app-wide — notifications, storage, feature flags, logging |
| `config/` | Environment-derived config, injection tokens, app constants |
| `layout/` | Persistent shell — header, footer, nav, page frame |

`core/` may be imported by anything. `core/` must not import from `features/`. A `core/` file that needs to know about a specific domain is misplaced.

### `shared/`

Reusable, **presentational, business-logic-free**. If it encodes a domain rule, it belongs in a feature.

| Folder | Holds |
|---|---|
| `components/` | Generic UI — button, spinner, modal, empty-state, pagination |
| `directives/` | Cross-cutting behaviors — autofocus, click-outside, tooltip |
| `pipes/` | Formatting — date, currency, truncate, file-size |
| `interfaces/` | Object shapes used across multiple domains |
| `enums/` | Enums used across multiple domains |
| `types/` | Aliases, unions and generics used across multiple domains |
| `properties/` | Constants and lookup tables used across multiple domains |
| `helpers/` | Pure functions — no Angular DI, no state |

`shared/` may import `core/`. `shared/` must not import from `features/`.

### `features/<domain>/`

One folder per business domain. Self-contained: a domain's files are imported by that domain and, ideally, nowhere else.

- `pages/` — route targets, one folder per route. See below.
- `components/`, `services/`, `helpers/`, `interfaces/`, `enums/`, `types/`, `properties/`, `pipes/` — shared **within this domain only**, used by 2+ of its pages.
- `<domain>.routes.ts` — the domain's route table, lazy-loaded from `app.routes.ts`.

Cross-feature imports are the main structural smell to watch for. If `orders/` needs something from `products/`, either promote it to `shared/` (if presentational) or reconsider the domain boundary (if it carries business rules).

### `features/<domain>/pages/<page>/`

The narrowest scope. The page component sits at the folder root; everything it privately owns sits in subfolders beside it.

Only create the subfolders a page actually needs — an empty `guards/` or `enums/` folder is noise. A page with no private pieces is just three files.

## File layout within a folder

Components always get their own folder, even single-file ones, so a component's `.ts`/`.html`/`.scss`/`.spec.ts` stay together:

```text
components/
├── product-row/
│   ├── product-row.ts
│   ├── product-row.html
│   ├── product-row.scss
│   └── product-row.spec.ts
└── product-badge/
    └── product-badge.ts        # inline template, still foldered
```

Everything that is not a component is a flat file in its folder — no wrapper folder. Each folder has one suffix, so the folder and the filename always agree:

```text
services/
├── products-data.ts
└── product-filters.ts
helpers/
├── price-format.helper.ts
└── product-sort.helper.ts
interfaces/
└── product.interface.ts
enums/
└── order-status.enum.ts
types/
└── product.types.ts
properties/
└── storage-keys.properties.ts
```

One shape per `.interface.ts` file. Related aliases and unions may share a single `.types.ts`.

## Import direction

```
core  ←  shared  ←  features
```

Arrows point toward what may be imported. Anything flowing right-to-left is a violation.
