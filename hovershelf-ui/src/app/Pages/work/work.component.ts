import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { CommonModule } from '@angular/common';

// import { RouterModule } from '@angular/router';
// import { FooterComponent } from '../';


@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('slide', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition(':enter', [
        animate('1s ease-out', style({
          transform: 'translateX(0)'
        }))
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class WorkComponent implements OnInit {
  workItems = [
    { title: 'Cheddar ai - mcp ', imageUrl: '../../../assets/Cheddar.png' },
    { title: 'Cheddar AI', imageUrl: '../../../assets/Dafmail.png' },
    { title: 'ASPotify', imageUrl: '../../../assets/Aspotify.png' },
    { title: 'ASPotify', imageUrl: '../../../assets/Mangalyavedi.png' },
    { title: 'Mangalyavedi', imageUrl: '../../../assets/Sundress.png' },
    { title: 'Mangalyavedi', imageUrl: '../../../assets/Hovershelfshop.png' },
    { title: 'GHEEmail', imageUrl: '../../../assets/Flop.png' },
    { title: 'DaftMail', imageUrl: '../../../assets/Ape.png' }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }
}
