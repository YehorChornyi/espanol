# Placement Examples

## Worked examples

| What you're building | Goes where | Why |
|---|---|---|
| Table row for the product list | `features/products/pages/product-list/components/product-row/` | One page uses it |
| Price formatter used by list *and* details | `features/products/pipes/` | 2+ pages, one domain |
| Card shown on the products list and the orders summary | `shared/components/` | 2+ domains, presentational |
| `interface Product` used only by product-details | `features/products/pages/product-details/interfaces/product.interface.ts` | One page |
| `interface Product` once orders also needs it | `shared/interfaces/product.interface.ts` | 2+ domains |
| `enum OrderStatus` used across the orders domain | `features/orders/enums/order-status.enum.ts` | Feature-wide |
| `type ProductFilter = 'all' \| 'active'` used by one page | `features/products/pages/product-list/types/product.types.ts` | One page |
| Pure `sortByPrice()` with no DI, used by one page | `features/products/pages/product-list/helpers/product-sort.helper.ts` | No dependencies and no state → helper, not service |
| `const STORAGE_KEY = 'cart'` used by one page | `features/cart/pages/cart/properties/storage-keys.properties.ts` | Constants get their own file, never inlined beside their first consumer |
| Auth token interceptor | `core/http/` | App-wide infrastructure |
| Guard blocking access to the whole orders domain | `core/auth/` | Applies app-wide, not to one page |
| Guard requiring an unsaved-changes confirm on product edit | `features/products/pages/product-edit/guards/` | One page |
| `truncate` pipe | `shared/pipes/` | Generic, no domain knowledge |
| Service calling `/api/products` | `features/products/services/products-data.ts` | Domain-specific, not app-wide — and in `services/`, not the feature root |
| Site header | `core/layout/` | Persistent shell |

## Scaffolding a new page

Creating `features/products/pages/product-list/`:

1. Create the page component — `product-list.ts`, `.html`, `.scss` — at the folder root. The page component is the one component that is *not* wrapped in its own folder, because the page folder already is that folder.
2. Add its route to `features/products/products.routes.ts`.
3. Create subfolders **only as real needs appear**. Do not pre-create empty `components/`, `services/`, `helpers/`, `interfaces/`, `enums/`, `types/`, `properties/`, `guards/`, `pipes/`.
4. Every new file starts in this page's folder. Promote later, only if a second consumer shows up.

## Scaffolding a new domain

Creating `features/orders/`:

1. `features/orders/orders.routes.ts` with the domain's routes.
2. Lazy-load it from `app.routes.ts`:
   ```ts
   {
     path: 'orders',
     loadChildren: () => import('./features/orders/orders.routes').then(m => m.routes),
   }
   ```
3. `features/orders/pages/<first-page>/` for the first route target.
4. Feature-level `components/`, `services/`, `helpers/`, `interfaces/` appear only when a second page needs to share something.

## Extraction: page component got too big

Extract downward first, not outward.

1. Pull the chunk into `pages/<page>/components/<child>/` — same page, narrower scope.
2. Only if a **second page in the same domain** needs it, move to `features/<domain>/components/`.
3. Only if a **second domain** needs it *and* it carries no business logic, move to `shared/components/`.

Skipping straight to `shared/` because reuse "seems likely" is the failure mode this structure exists to prevent.

## Promotion checklist

When a real second consumer appears:

1. Move the folder up exactly one rung.
2. Update imports at both consumers.
3. If promoting into `shared/`, strip domain knowledge — replace domain-typed inputs with generic ones. A `shared/` component that imports `features/products/interfaces/` has not actually been promoted.
4. Move the spec file with it.

## Demotion

Applies equally in reverse. A file in `shared/` with exactly one consumer is misplaced — move it down to that consumer's scope. Structure drifts upward over time unless demotion happens too.

## Signals something is misplaced

- A `core/` file importing from `features/` → invert the dependency, or the file is not really app-wide.
- A `shared/` file importing from `features/` → it is not shared, it is feature-specific.
- One feature importing another feature → promote the shared piece, or the domain boundary is wrong.
- A `shared/` component with domain-specific inputs (`product`, `order`) → it is presentational in name only; make the inputs generic or move it into the feature.
- An `interface`, `enum`, `type` or `const` declared inside a service or component file → move it to the matching folder; its first consumer is not its owner.
- A file in `helpers/` that calls `inject()` → it is a service, not a helper.
- A page-private folder whose contents are used by another page → promote it.
