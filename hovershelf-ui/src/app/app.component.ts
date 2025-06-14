import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GlobalNavigationComponent } from './components/global-navigation/global-navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, CommonModule, GlobalNavigationComponent]
})
export class AppComponent implements OnInit, AfterViewInit {
  showVideo = true;
  navbarshow= false;
  @ViewChild('introVideo') introVideo!: ElementRef<HTMLVideoElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const videoPlayed = localStorage.getItem('introVideoPlayed');
    if (videoPlayed === 'true') {
      this.showVideo = false;
    }
    const currenturl = window.location.href;
    if (currenturl.includes('work') || currenturl.includes('home') || currenturl.includes('contact') || currenturl.includes('shop')) {
      this.navbarshow = true;
    }
  }

  ngAfterViewInit() {
    if (this.showVideo && this.introVideo && this.introVideo.nativeElement) {
      const video = this.introVideo.nativeElement;
      video.muted = true;


      video.onended = () => {
        this.showVideo = false;
        localStorage.setItem('introVideoPlayed', 'true');

        this.cdr.detectChanges();
      };

      video.play().catch(error => {
        console.error('Error attempting to play the video:', error);
        this.showVideo = false;
        this.cdr.detectChanges();
      });
    }
  }
}
