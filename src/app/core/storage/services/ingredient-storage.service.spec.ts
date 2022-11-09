import { TestBed } from '@angular/core/testing';

import { IngredientStorageService } from './ingredient-storage.service';

describe('IngredientStorageService', () => {
  let service: IngredientStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
