import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecategoryComponent } from './managecategory.component';

describe('ManagecategoryComponent', () => {
  let component: ManagecategoryComponent;
  let fixture: ComponentFixture<ManagecategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagecategoryComponent]
    });
    fixture = TestBed.createComponent(ManagecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
