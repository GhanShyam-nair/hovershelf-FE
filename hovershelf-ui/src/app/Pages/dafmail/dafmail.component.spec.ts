import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DafmailComponent } from './dafmail.component';

describe('DafmailComponent', () => {
  let component: DafmailComponent;
  let fixture: ComponentFixture<DafmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DafmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DafmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
