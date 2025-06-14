import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspotifyComponent } from './aspotify.component';

describe('AspotifyComponent', () => {
  let component: AspotifyComponent;
  let fixture: ComponentFixture<AspotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AspotifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
