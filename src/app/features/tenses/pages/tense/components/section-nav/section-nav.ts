import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TenseSection } from '../../../../interfaces/tense-section.interface';

/** Chips that jump to a section of the page (one swipeable row on phones). */
@Component({
  selector: 'app-section-nav',
  imports: [RouterLink],
  templateUrl: './section-nav.html',
  styleUrl: './section-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionNav {
  readonly sections = input.required<TenseSection[]>();
}
