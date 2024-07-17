import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListingComponent } from './company-listing.component';

describe('CompanyListingComponent', () => {
  let component: CompanyListingComponent;
  let fixture: ComponentFixture<CompanyListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompanyListingComponent]
    });
    fixture = TestBed.createComponent(CompanyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
