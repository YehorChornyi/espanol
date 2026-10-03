import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { isTenseId } from '../helpers/tense-id.helper';
import { TENSE_CATALOGUE } from '../properties/tense-catalogue.properties';

const APP_TITLE = 'Іспанські часи';

/** `«Pretérito indefinido» · Іспанські часи` on tense pages, the app title elsewhere. */
@Injectable({ providedIn: 'root' })
export class TenseTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const id = route.paramMap.get('tenseId');
    const tense = isTenseId(id) ? TENSE_CATALOGUE.find((t) => t.id === id) : undefined;
    this.title.setTitle(tense ? `«${tense.name}» · ${APP_TITLE}` : APP_TITLE);
  }
}
