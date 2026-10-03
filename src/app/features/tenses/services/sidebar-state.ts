import { computed, DestroyRef, effect, inject, Injectable, signal } from '@angular/core';
import { LocalStorage } from '../../../core/services/local-storage';

export const SIDEBAR_STORAGE_KEY = 'espanol.sidebar.v1';
export const NARROW_QUERY = '(max-width: 899.98px)';

const parseCollapsed = (raw: unknown): boolean =>
  typeof raw === 'object' && raw !== null && (raw as Record<string, unknown>)['collapsed'] === true;

/**
 * Wide screens: inline sidebar whose collapsed state is persisted.
 * Narrow screens: overlay drawer that starts closed and is never persisted.
 */
@Injectable({ providedIn: 'root' })
export class SidebarState {
  private readonly storage = inject(LocalStorage);

  readonly isNarrow = signal(false);
  readonly collapsed = signal(this.storage.read(SIDEBAR_STORAGE_KEY, parseCollapsed, false));
  readonly drawerOpen = signal(false);

  readonly visible = computed(() => (this.isNarrow() ? this.drawerOpen() : !this.collapsed()));

  constructor() {
    const media = globalThis.matchMedia?.(NARROW_QUERY);
    if (media) {
      this.isNarrow.set(media.matches);
      const onChange = (event: MediaQueryListEvent) => {
        this.isNarrow.set(event.matches);
        this.drawerOpen.set(false);
      };
      media.addEventListener('change', onChange);
      inject(DestroyRef).onDestroy(() => media.removeEventListener('change', onChange));
    }

    effect(() => this.storage.write(SIDEBAR_STORAGE_KEY, { collapsed: this.collapsed() }));
  }

  toggle(): void {
    if (this.isNarrow()) {
      this.drawerOpen.update((open) => !open);
    } else {
      this.collapsed.update((collapsed) => !collapsed);
    }
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
  }
}
