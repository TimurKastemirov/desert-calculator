import { Injectable } from '@angular/core';
import { IngredientStorageService } from '../storage/ingredient-storage.service';
import { Ingredient } from '../../domain/models/ingredient';
import { BaseCrudApiService } from '@core/services/base-crud-api.service';

@Injectable()
export class IngredientsApiService extends BaseCrudApiService<Ingredient> {
    constructor(
        protected override storage: IngredientStorageService,
    ) {
        super(storage);
    }
}
