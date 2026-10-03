import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdjacentTenses } from '../../helpers/tense-navigation.helper';
import { SidebarState } from '../../services/sidebar-state';

/** Narrow screens: previous tense · menu · next tense, within thumb reach. */
@Component({
  selector: 'app-bottom-bar',
  imports: [RouterLink],
  templateUrl: './bottom-bar.html',
  styleUrl: './bottom-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomBar {
  readonly adjacent = input.required<AdjacentTenses>();

  protected readonly sidebar = inject(SidebarState);
}
