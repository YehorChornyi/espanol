import { Routes } from '@angular/router';
import { TensesLayout } from './components/tenses-layout/tenses-layout';
import { tenseExistsGuard } from './guards/tense-exists.guard';

const routes: Routes = [
  {
    path: '',
    component: TensesLayout,
    children: [
      {
        path: '',
        title: 'Іспанські часи',
        loadComponent: () => import('./pages/overview/overview'),
      },
      {
        path: ':tenseId',
        canMatch: [tenseExistsGuard],
        loadComponent: () => import('./pages/tense/tense'),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

export default routes;
