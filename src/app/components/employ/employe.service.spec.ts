import { TestBed } from '@angular/core/testing';

import { EmployService } from './employe.service';

describe('EmployService', () => {
  let service: EmployService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
