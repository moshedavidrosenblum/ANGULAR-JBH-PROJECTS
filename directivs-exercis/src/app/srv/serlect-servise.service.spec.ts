import { TestBed } from '@angular/core/testing';

import { SerlectServiseService } from './serlect-servise.service';

describe('SerlectServiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerlectServiseService = TestBed.get(SerlectServiseService);
    expect(service).toBeTruthy();
  });
});
