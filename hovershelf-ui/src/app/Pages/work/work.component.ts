import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { CommonModule } from '@angular/common';

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
    ]),
    // Add animations for the featured section
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(50px)'
        }),
        animate('0.7s ease-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ])
    ])
  ]
})
export class WorkComponent implements OnInit {
workItems = [
    { 
      title: 'Cheddar AI – News Verification Engine', 
      imageUrl: '../../../assets/Cheddar.png',
      description: 'Cheddar AI is an MCP-based fact-checking engine designed to verify the authenticity of trending news. By leveraging trusted sources and intelligent algorithms, it confirms whether a story is officially validated or not, empowering users to make informed decisions and avoid misinformation.'
    },
    { 
      title: 'DafMail – Smart Email Cleaner', 
      imageUrl: '../../../assets/Dafmail.png',
      description: 'DafMail is an AI-powered email decluttering plugin that helps users regain control of their inbox. It automatically filters out promotional content and subscription-based emails, organizing your messages for better visibility and reduced distraction, all while learning from your preferences.'
    },
    { 
      title: 'ASPotify – ASP.NET Spotify Auth Handler', 
      imageUrl: '../../../assets/Aspotify.png',
      description: 'ASPotify is an ASP.NET Core backend service that handles the OAuth Authorization Code workflow for integrating Spotify features. Ideal for developers, it simplifies secure user login and playback control, serving as a clean, extensible template for music app projects.'
    },
    { 
      title: 'Mangalyavedi – Nair Matrimony Platform', 
      imageUrl: '../../../assets/Mangalyavedi.png',
      description: 'Mangalyavedi is a culturally focused matrimonial platform built for the Nair community. Developed using PHP and AJAX-powered CMS tools, it provides a respectful, modern interface for profile creation, matchmaking, and communication—blending tradition with intuitive digital experiences.'
    },
    { 
      title: 'Sundress Studio – Animation & Illustration House', 
      imageUrl: '../../../assets/Sundress.png',
      description: 'Sundress Studio is a visual storytelling studio specializing in hand-drawn animations and original illustrations. With a passion for artistic expression, the studio creates emotionally resonant content for brands, campaigns, and independent narratives—designed for social media and beyond.'
    },
    { 
      title: 'Hovershelf – Smart Retail Experience', 
      imageUrl: '../../../assets/Hovershelfshop.png',
      description: 'Hovershelf is a next-gen retail platform that redefines how consumers shop online. By combining immersive UI/UX with innovative product displays and streamlined checkout processes, it offers a futuristic shopping journey tailored to tech-savvy customers.'
    },
    { 
      title: 'FlopStream – Intelligent Video Delivery',  
      imageUrl: '../../../assets/Flop.png',
      description: 'FlopStream is a smart video service platform built for seamless streaming and digital content sharing. Engineered for performance and reliability, it enhances how creators distribute videos and how users consume them, with features like adaptive quality and low-latency delivery.'
    },
    { 
      title: 'Ape Streetwear – Tech-Infused Fashion',  
      imageUrl: '../../../assets/Ape.png',
      description: 'Ape Streetwear is a fashion-forward brand that integrates technology into every thread. From product authentication to intelligent catalog browsing, it blends street culture with digital innovation, offering customers a secure and immersive shopping experience.'
    }
  ];
  defItem =     { 
    title: 'Hovershelf', 
    imageUrl: '../../../assets/think-again.png',
    description: 'Hovershelf is the parent brand behind a curated portfolio of forward-thinking products and services—spanning AI innovation, digital platforms, design studios, and tech-driven retail. It exists to empower groundbreaking ideas and shape the future through creativity, intelligence, and technology.'
  };
  selectedItem: any = null;

  constructor() { }

  ngOnInit(): void {
    
    this.selectedItem = this.defItem;
  }
  
  onPressItemClick(item: any, event: any) {
    
    if (this.selectedItem === item) {
      this.defItem = item;
    } else {
      this.selectedItem = item;
      const featuredSection = document.querySelector('.featured-image-container');
      if (featuredSection) {
        setTimeout(() => {
          featuredSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    }
  }

  onLaunchbuttonClick(item: any, event: any) {
    console.log('Launch button clicked for:', item.title);
  }
}