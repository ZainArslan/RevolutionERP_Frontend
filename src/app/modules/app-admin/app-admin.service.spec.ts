import { TestBed } from '@angular/core/testing';

import { AppAdminService } from './app-admin.service';

describe('AppAdminService', () => {
  let service: AppAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
