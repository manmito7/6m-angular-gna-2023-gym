import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTrainerComponent } from './manage-trainer.component';

describe('ManageTrainerComponent', () => {
  let component: ManageTrainerComponent;
  let fixture: ComponentFixture<ManageTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTrainerComponent]
    });
    fixture = TestBed.createComponent(ManageTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
