import { TestBed, inject } from '@angular/core/testing';

import { SwLogService } from './sw-log.service';

describe('SwLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwLogService]
    });
  });

  it('should be created', inject([SwLogService], (service: SwLogService) => {
    expect(service).toBeTruthy();
  }));
});
