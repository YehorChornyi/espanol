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

  write(key: string, value: unknown): void {
    try {
      globalThis.localStorage?.setItem(key, JSON.stringify(value));
    } catch {
      // Storage unavailable or full: state stays in memory for this session.
    }
  }
}
