import { Injectable } from '@angular/core';

/**
 * The only access point to `localStorage`. Every call tolerates missing, corrupt or blocked
 * storage (private mode, disabled site data) and falls back instead of throwing.
 */
@Injectable({ providedIn: 'root' })
export class LocalStorage {
  read<T>(key: string, validate: (raw: unknown) => T, fallback: T): T {
    try {
      const raw = globalThis.localStorage?.getItem(key);
      if (raw === null || raw === undefined) {
        return fallback;
      }
      return validate(JSON.parse(raw));
    } catch {
      return fallback;
    }
  }

  /**
   * Calls `onChange` when another tab of this app changes `key` (the browser fires `storage`
   * events only in the other tabs). Returns a function that stops watching.
   */
  watch<T>(
    key: string,
    validate: (raw: unknown) => T,
    fallback: T,
    onChange: (value: T) => void,
  ): () => void {
    const listener = (event: StorageEvent) => {
      // `key === null` means the whole storage was cleared.
      if (event.key !== key && event.key !== null) {
        return;
      }
      try {
        onChange(event.newValue === null ? fallback : validate(JSON.parse(event.newValue)));
      } catch {
        onChange(fallback);
      }
    };
    globalThis.addEventListener?.('storage', listener);
    return () => globalThis.removeEventListener?.('storage', listener);
  }

  write(key: string, value: unknown): void {
    try {
      globalThis.localStorage?.setItem(key, JSON.stringify(value));
    } catch {
      // Storage unavailable or full: state stays in memory for this session.
    }
  }
}
