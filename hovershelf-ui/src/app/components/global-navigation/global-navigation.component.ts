import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-global-navigation',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './global-navigation.component.html',
  styleUrl: './global-navigation.component.scss'
})
export class GlobalNavigationComponent 
{
    isMenuOpen: boolean = false;
    navItems = [
      { label: 'Contact', path: '/contact', hasDropdown: false },
      { label: 'Projects', path: '/project', hasDropdown: true, dropdownItems: ["Ai Based Email SaaS cleaner ", "c# spotify Dashboard", "Cheddar"] }
    ];
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

}