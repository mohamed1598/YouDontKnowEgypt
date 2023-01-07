import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGovernratesComponent } from './admin-governrates.component';

describe('AdminGovernratesComponent', () => {
  let component: AdminGovernratesComponent;
  let fixture: ComponentFixture<AdminGovernratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGovernratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGovernratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
