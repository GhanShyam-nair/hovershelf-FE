// src/app/app.routes.ts

import { MainhomeComponent } from './components/mainhome/mainhome.component';
import { MasterlayoutComponent } from './components/masterlayout/masterlayout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'contact', loadComponent: () => import('./Pages/contact/contact.component').then(c => c.ContactComponent) },
  { path: 'work', loadComponent: () => import('./Pages/work/work.component').then(c => c.WorkComponent) },
  { path: 'shop', loadComponent: () => import('./Pages/shop/shop.component').then(c => c.ShopComponent) },
  { path: 'cheddar', loadComponent: () => import('./Pages/cheddar/cheddar.component').then(c => c.CheddarComponent) },
  { path: 'dafmail', loadComponent: () => import('./Pages/dafmail/dafmail.component').then(c => c.DafmailComponent) },
  { path: 'aspotify', loadComponent: () => import('./Pages/aspotify/aspotify.component').then(c => c.AspotifyComponent) },
  { path: 'ape', loadComponent: () => import('./Pages/ape/ape.component').then(c => c.ApeComponent) },
  { path: 'home', component: MainhomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];