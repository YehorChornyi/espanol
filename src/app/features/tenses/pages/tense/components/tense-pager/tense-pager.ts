import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdjacentTenses } from '../../../../helpers/tense-navigation.helper';

@Component({
  selector: 'app-tense-pager',
  imports: [RouterLink],
  templateUrl: './tense-pager.html',
  styleUrl: './tense-pager.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TensePager {
  readonly adjacent = input.required<AdjacentTenses>();
}
