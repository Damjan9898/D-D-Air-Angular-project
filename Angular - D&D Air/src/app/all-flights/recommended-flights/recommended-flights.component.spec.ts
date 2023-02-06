import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedFlightsComponent } from './recommended-flights.component';

describe('RecommendedFlightsComponent', () => {
  let component: RecommendedFlightsComponent;
  let fixture: ComponentFixture<RecommendedFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
