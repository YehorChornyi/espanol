import { TestBed } from '@angular/core/testing';
import { PartialMatchRouteSnapshot, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { tenseExistsGuard } from './tense-exists.guard';

describe('tenseExistsGuard', () => {
  const run = (path: string) =>
    TestBed.runInInjectionContext(() =>
      tenseExistsGuard({} as Route, [new UrlSegment(path, {})], {} as PartialMatchRouteSnapshot),
    );

  it('matches a known tense', () => {
    expect(run('presente')).toBe(true);
  });

  it('redirects an unknown tense to the overview', () => {
    const result = run('no-such-tense');
    expect(result).toBeInstanceOf(UrlTree);
    expect(TestBed.inject(Router).serializeUrl(result as UrlTree)).toBe('/');
  });
});
