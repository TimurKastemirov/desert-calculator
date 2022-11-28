import { TestBed } from '@angular/core/testing';

import { IngredientDetailComponentService } from './ingredient-detail.component.service';

describe('IngredientDetailComponentService', () => {
  let service: IngredientDetailComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientDetailComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
