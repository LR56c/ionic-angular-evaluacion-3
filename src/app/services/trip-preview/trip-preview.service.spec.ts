import { TestBed } from '@angular/core/testing';

import { TripPreviewService } from './trip-preview.service';

describe('TripPreviewService', () => {
  let service: TripPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
