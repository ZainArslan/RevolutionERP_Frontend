import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreenModalComponent } from './add-screen-modal.component';

describe('AddScreenModalComponent', () => {
  let component: AddScreenModalComponent;
  let fixture: ComponentFixture<AddScreenModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddScreenModalComponent]
    });
    fixture = TestBed.createComponent(AddScreenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
