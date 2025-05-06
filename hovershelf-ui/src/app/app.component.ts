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
  @ViewChild('introVideo') introVideo!: ElementRef<HTMLVideoElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Check if the video has been played before
    const videoPlayed = localStorage.getItem('introVideoPlayed');

    // If video was already played, don't show it
    if (videoPlayed === 'true') {
      this.showVideo = false;
    }
  }

  ngAfterViewInit() {
    if (this.showVideo && this.introVideo && this.introVideo.nativeElement) {
      const video = this.introVideo.nativeElement;

      // Ensure the video is muted for autoplay to work in some browsers
      video.muted = true;

      // When video ends, hide it and show content
      video.onended = () => {
        this.showVideo = false;
        // Store that the video has been played
        localStorage.setItem('introVideoPlayed', 'true');

        // Force change detection
        this.cdr.detectChanges();
      };

      // Start playing the video
      video.play().catch(error => {
        console.error('Error attempting to play the video:', error);
        // Fallback: Hide the video and show content if autoplay fails
        this.showVideo = false;
        this.cdr.detectChanges();
      });
    }
  }
}
