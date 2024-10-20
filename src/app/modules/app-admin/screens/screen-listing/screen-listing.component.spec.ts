import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenListingComponent } from './screen-listing.component';

describe('ScreenListingComponent', () => {
  let component: ScreenListingComponent;
  let fixture: ComponentFixture<ScreenListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScreenListingComponent]
    });
    fixture = TestBed.createComponent(ScreenListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
