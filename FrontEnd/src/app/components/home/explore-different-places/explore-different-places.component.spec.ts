import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDifferentPlacesComponent } from './explore-different-places.component';

describe('ExploreDifferentPlacesComponent', () => {
  let component: ExploreDifferentPlacesComponent;
  let fixture: ComponentFixture<ExploreDifferentPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreDifferentPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDifferentPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
