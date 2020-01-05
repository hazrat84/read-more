import { TestBed } from '@angular/core/testing';

import { ReadMoreService } from './read-more.service';

describe('ReadMoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadMoreService = TestBed.get(ReadMoreService);
    expect(service).toBeTruthy();
  });
});
