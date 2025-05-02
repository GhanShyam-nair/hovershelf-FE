// src/app/app.routes.ts

import { MasterlayoutComponent } from './components/masterlayout/masterlayout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: MasterlayoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];