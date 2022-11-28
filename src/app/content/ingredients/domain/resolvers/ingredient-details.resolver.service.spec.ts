import { TestBed } from '@angular/core/testing';

import { IngredientDetailsResolverService } from './ingredient-details.resolver.service';

describe('IngredientDetailsResolverService', () => {
  let service: IngredientDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
