import { TestBed } from '@angular/core/testing';

import { PlusRecentService } from './plus-recent.service';

describe('PlusRecentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlusRecentService = TestBed.get(PlusRecentService);
    expect(service).toBeTruthy();
  });
});
