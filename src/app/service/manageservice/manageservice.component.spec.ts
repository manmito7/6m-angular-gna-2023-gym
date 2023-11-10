import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageserviceComponent } from './manageservice.component';

describe('ManageserviceComponent', () => {
  let component: ManageserviceComponent;
  let fixture: ComponentFixture<ManageserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageserviceComponent]
    });
    fixture = TestBed.createComponent(ManageserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
