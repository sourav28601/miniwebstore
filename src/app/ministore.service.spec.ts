import { TestBed } from '@angular/core/testing';

import { MinistoreService } from './ministore.service';

describe('MinistoreService', () => {
  let service: MinistoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinistoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
