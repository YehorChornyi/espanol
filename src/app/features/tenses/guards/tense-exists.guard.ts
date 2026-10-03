import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { isTenseId } from '../helpers/tense-id.helper';

/** Unknown tense slugs go to the overview. */
export const tenseExistsGuard: CanMatchFn = (_route, segments) =>
  isTenseId(segments[0]?.path) || inject(Router).createUrlTree(['/']);
