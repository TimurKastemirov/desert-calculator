import { TestBed } from '@angular/core/testing';

import { IngredientsApiService } from './ingredients.api.service';

describe('IngredientsApiService', () => {
  let service: IngredientsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
