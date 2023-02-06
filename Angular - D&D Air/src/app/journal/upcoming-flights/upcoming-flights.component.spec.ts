import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingFlightsComponent } from './upcoming-flights.component';

describe('UpcomingFlightsComponent', () => {
  let component: UpcomingFlightsComponent;
  let fixture: ComponentFixture<UpcomingFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
