import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBookingComponent } from './popup-booking.component';

describe('PopupBookingComponent', () => {
  let component: PopupBookingComponent;
  let fixture: ComponentFixture<PopupBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
