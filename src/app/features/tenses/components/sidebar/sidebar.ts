import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StudyProgress } from '../../services/study-progress';

@Component({
  selector: 'app-sidebar',
  imports: [NgTemplateOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  protected readonly progress = inject(StudyProgress);
}
