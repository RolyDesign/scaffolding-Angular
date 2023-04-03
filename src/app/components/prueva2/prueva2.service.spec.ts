
import { TestBed } from '@angular/core/testing';
import { Prueva2Service } from './prueva2.service';

describe('Prueva2Service', () => {
  let service: Prueva2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prueva2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
