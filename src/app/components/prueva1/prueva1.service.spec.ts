
import { TestBed } from '@angular/core/testing';
import { Prueva1Service } from './prueva1.service';

describe('Prueva1Service', () => {
  let service: Prueva1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prueva1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
