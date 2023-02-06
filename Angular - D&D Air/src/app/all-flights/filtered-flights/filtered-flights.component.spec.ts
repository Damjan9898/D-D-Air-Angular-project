import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredFlightsComponent } from './filtered-flights.component';

describe('FilteredFlightsComponent', () => {
  let component: FilteredFlightsComponent;
  let fixture: ComponentFixture<FilteredFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
