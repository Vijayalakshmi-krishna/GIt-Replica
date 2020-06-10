import { TestBed } from '@angular/core/testing';

import { GituserService } from './gituser.service';

describe('GituserService', () => {
  let service: GituserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GituserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
