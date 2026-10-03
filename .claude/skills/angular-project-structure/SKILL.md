---
name: angular-project-structure
description: Decides where a file belongs in this app's core/shared/features/pages hierarchy, and how to name model files. Trigger when creating a component, service, pipe, directive, guard, interface, enum, or route file; when asked where something should live; when moving, promoting, or extracting code between scopes; or when scaffolding a new feature or page.
---

# Angular Project Structure

Owns **file placement and scope** for this app. It does not restate naming rules for components, services, directives, or pipes — the `angular-developer` skill owns those (`references/naming-conventions.md`). Two deliberate overrides of that skill are listed under [Overrides](#overrides).

## The rule

**Keep code at the narrowest scope where it is used.** Start every new file at the narrowest scope that works, and promote only when a second consumer actually appears.

## The scope ladder

```
core/        → application-wide infrastructure
shared/      → reusable across features
features/<domain>/          → shared within one domain
features/<domain>/pages/<page>/  → private to one page
```

Read the ladder bottom-up when placing a file, top-down when promoting one.

## Where does this file go?

Answer in order; stop at the first `yes`.

1. **Used by exactly one page?** → `features/<domain>/pages/<page>/<kind>/`
2. **Used by 2+ pages in one domain?** → `features/<domain>/<kind>/`
3. **Used by 2+ domains, and has no business logic?** → `shared/<kind>/`
4. **Application-wide infrastructure — auth, interceptors, config, global layout, singleton services?** → `core/<area>/`

`<kind>` is `components` | `services` | `interfaces` | `enums` | `types` | `helpers` | `properties` | `pipes` | `directives` | `guards`.

If the answer to 3 is "used by 2+ domains **but it does** have business logic", that is a signal the domain boundary is wrong. Stop and raise it rather than dropping it in `shared/`.

## Promotion

Never pre-place a file at a wide scope in anticipation of reuse. Promote reactively, one rung at a time, when a real second consumer appears:

```
page-specific → feature-specific → shared → core
```

Promotion is a move plus an import update. Demote just as readily: if a `shared/` file ends up with one consumer, move it down.

## Overrides

`angular-developer/references/naming-conventions.md` also describes a `core/`/`shared/`/`features/` layout. Where it disagrees with this skill, **this skill wins on placement; that skill wins on naming.** The specific divergences:

1. **There is no `models/` folder.** Each kind gets its own folder and its own suffix, so the folder
   and the filename agree:

   | Folder | Suffix | Holds |
   |---|---|---|
   | `interfaces/` | `.interface.ts` | Interfaces and object shapes (`product.interface.ts` → `interface Product`) |
   | `enums/` | `.enum.ts` | Enums (`order-status.enum.ts` → `enum OrderStatus`) |
   | `types/` | `.types.ts` | Type aliases, unions, generics (`product.types.ts`) |
   | `helpers/` | `.helper.ts` | Pure functions — no Angular DI, no state (`price-format.helper.ts`) |
   | `properties/` | `.properties.ts` | Constants, lookup tables, static config (`storage-keys.properties.ts`) |

   Never `.model.ts`, and never a `models/` or `utils/` folder.

   **An exported interface, enum, type alias, helper or constant always lives in its own file under
   the matching folder — never declared inline in the service or component that happens to use it
   first.** One shape per `.interface.ts`; related unions may share a `.types.ts`. Declaring a shape
   beside its first consumer forces every later consumer to import *from that service*,
   manufacturing a dependency edge that has nothing to do with what the code actually needs.

   `helpers/` vs `services/`: if it has no dependencies and no state, it is a helper. The moment it
   needs `inject()`, it is a service.
2. **Styles are `.scss`**, not `.css`.
3. **Feature services live in `features/<domain>/services/`**, never at the feature root. That skill's `features/projects/projects-data.ts` example does not apply here.
4. **Route-level components live under `pages/`.** That skill's `features/profile/profile.ts` example does not apply — the equivalent here is `features/profile/pages/profile/profile.ts`. Only `<domain>.routes.ts` sits at a feature root.
5. **Every component gets its own folder**, including single-file ones: `components/product-row/product-row.ts`. That skill is internally inconsistent on this (flat at its line 47, foldered at its line 57); foldered always wins here.
6. **Never fall back to `.component.ts` / `.service.ts` suffixes.** That skill offers legacy suffixes as a safe default when the prevailing style is unclear. This repo is bare-name everywhere — there is nothing to be unsure about.

Its note about `user.ts` / `user.model.ts` namespace collisions is moot here: every non-component kind carries its own suffix, so none of them can collide with a component file.

Everything else — kebab-case filenames, filename/class matching, suffixless components and services, intent-based service names, unified `.ts`/`.html`/`.scss` base names — follows `angular-developer` unchanged.

## Routes

Each feature owns a `<domain>.routes.ts` at its root, lazy-loaded from `app.routes.ts`. Pages are the route targets; components under `components/` are not routed.

## References

- Full directory tree with per-folder responsibilities: [structure.md](references/structure.md)
- Worked placement examples, extraction and promotion walkthroughs: [placement.md](references/placement.md)
