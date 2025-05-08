// src/app/app.routes.ts

import { MainhomeComponent } from './components/mainhome/mainhome.component';
import { MasterlayoutComponent } from './components/masterlayout/masterlayout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'contact', loadComponent: () => import('./Pages/contact/contact.component').then(c => c.ContactComponent) },
  { path: 'Project', loadComponent: () => import('./Pages/contact/contact.component').then(c => c.ContactComponent) },
  { path: 'shop', loadComponent: () => import('./Pages/shop/shop.component').then(c => c.ShopComponent) },
  { path: 'home', component: MainhomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];