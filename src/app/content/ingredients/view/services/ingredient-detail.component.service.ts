import { Injectable } from '@angular/core';
import { Ingredient } from '../../domain/models/ingredient';
import { Observable } from 'rxjs';
import { IngredientsService } from '../../domain/services/ingredients.service';

@Injectable()
export class IngredientDetailComponentService {
    constructor(
        private ingredientsService: IngredientsService,
    ) {
    }

    save(ingredient: Ingredient): Observable<Ingredient> {
        if (ingredient.id) {
            return this.ingredientsService.updateItem(ingredient.id, ingredient);
        }

        return this.ingredientsService.addItem(ingredient);
    }
}
