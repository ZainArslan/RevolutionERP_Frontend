import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingHeaderComponent } from './listing-header.component';

describe('ListingHeaderComponent', () => {
  let component: ListingHeaderComponent;
  let fixture: ComponentFixture<ListingHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListingHeaderComponent]
    });
    fixture = TestBed.createComponent(ListingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
