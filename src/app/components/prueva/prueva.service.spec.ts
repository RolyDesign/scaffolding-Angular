
import { TestBed } from '@angular/core/testing';
import { PruevaService } from './prueva.service';

describe('PruevaService', () => {
  let service: PruevaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruevaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
