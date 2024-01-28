import { TestBed } from '@angular/core/testing';

import { ReadMoreService } from './read-more.service';

describe('ReadMoreService', () => {
  let service: ReadMoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadMoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
