import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepackageComponent } from './updatepackage.component';

describe('UpdatepackageComponent', () => {
  let component: UpdatepackageComponent;
  let fixture: ComponentFixture<UpdatepackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepackageComponent]
    });
    fixture = TestBed.createComponent(UpdatepackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
