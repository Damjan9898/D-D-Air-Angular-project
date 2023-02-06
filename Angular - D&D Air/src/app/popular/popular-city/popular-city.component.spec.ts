import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCityComponent } from './popular-city.component';

describe('PopularCityComponent', () => {
  let component: PopularCityComponent;
  let fixture: ComponentFixture<PopularCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
