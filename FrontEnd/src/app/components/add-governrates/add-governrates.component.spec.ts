import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGovernratesComponent } from './add-governrates.component';

describe('AddGovernratesComponent', () => {
  let component: AddGovernratesComponent;
  let fixture: ComponentFixture<AddGovernratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGovernratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGovernratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
