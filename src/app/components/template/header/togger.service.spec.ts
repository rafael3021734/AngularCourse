import { TestBed } from '@angular/core/testing';

import { ToggerService } from './togger.service';

describe('ToggerService', () => {
  let service: ToggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
