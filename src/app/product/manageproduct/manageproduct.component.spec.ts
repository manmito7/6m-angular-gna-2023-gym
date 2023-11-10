import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageproductComponent } from './manageproduct.component';

describe('ManageproductComponent', () => {
  let component: ManageproductComponent;
  let fixture: ComponentFixture<ManageproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageproductComponent]
    });
    fixture = TestBed.createComponent(ManageproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
