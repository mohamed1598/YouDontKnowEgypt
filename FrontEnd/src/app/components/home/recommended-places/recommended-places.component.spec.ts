import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedPlacesComponent } from './recommended-places.component';

describe('RecommendedPlacesComponent', () => {
  let component: RecommendedPlacesComponent;
  let fixture: ComponentFixture<RecommendedPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
