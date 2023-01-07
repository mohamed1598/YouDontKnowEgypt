import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGovernrateComponent } from './edit-governrate.component';

describe('EditGovernrateComponent', () => {
  let component: EditGovernrateComponent;
  let fixture: ComponentFixture<EditGovernrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGovernrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGovernrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
