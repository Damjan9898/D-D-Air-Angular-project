import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedFlightsComponent } from './finished-flights.component';

describe('FinishedFlightsComponent', () => {
  let component: FinishedFlightsComponent;
  let fixture: ComponentFixture<FinishedFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
