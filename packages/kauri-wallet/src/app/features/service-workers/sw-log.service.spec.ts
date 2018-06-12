import { TestBed, inject } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SwLogService } from './sw-log.service';

describe('SwLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwLogService],
      imports: [
        ServiceWorkerModule.register('', { enabled: false })
      ]
    });
  });

  it('should be created', inject([SwLogService], (service: SwLogService) => {
    expect(service).toBeTruthy();
  }));
});
