import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernertComponent } from './governert.component';

describe('GovernertComponent', () => {
  let component: GovernertComponent;
  let fixture: ComponentFixture<GovernertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
