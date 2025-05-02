// src/app/app.component.ts

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';
import { MasterlayoutComponent } from './components/masterlayout/masterlayout.component';
import { SafePipe } from './pipes/safe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MasterlayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HoverShelf  Nav bar and Logo';
}