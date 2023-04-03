
import { TestBed } from '@angular/core/testing';
import { LazaroService } from './lazaro.service';

describe('LazaroService', () => {
  let service: LazaroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazaroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
