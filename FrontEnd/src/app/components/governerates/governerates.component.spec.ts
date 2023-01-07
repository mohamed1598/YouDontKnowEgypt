import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverneratesComponent } from './governerates.component';

describe('GoverneratesComponent', () => {
  let component: GoverneratesComponent;
  let fixture: ComponentFixture<GoverneratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoverneratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoverneratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
