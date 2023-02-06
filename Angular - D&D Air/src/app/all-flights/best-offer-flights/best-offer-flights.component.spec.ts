import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfferFlightsComponent } from './best-offer-flights.component';

describe('BestOfferFlightsComponent', () => {
  let component: BestOfferFlightsComponent;
  let fixture: ComponentFixture<BestOfferFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestOfferFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestOfferFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
