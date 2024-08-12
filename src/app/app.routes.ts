import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ApiDataComponent } from './components/api-data/api-data.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'api-data',
    component: ApiDataComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
