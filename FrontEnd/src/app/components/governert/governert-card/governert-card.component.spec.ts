import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernertCardComponent } from './governert-card.component';

describe('GovernertCardComponent', () => {
  let component: GovernertCardComponent;
  let fixture: ComponentFixture<GovernertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernertCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
