import { Injectable } from '@angular/core';
import { IngredientStorageService } from '@core/storage/services/ingredient-storage.service';
import { Observable } from 'rxjs';
import { Ingredient } from '../../domain/models/ingredient';

@Injectable()
export class IngredientsApiService {
    constructor(
        private storage: IngredientStorageService,
    ) {}

    getList(): Observable<Ingredient[]> {
        return this.storage.getList();
    }

    getById(id: number): Observable<Ingredient> {
        return this.storage.getById(id);
    }

    addItem(ingredient: Ingredient): Observable<Ingredient> {
        return this.storage.add(ingredient);
    }

    updateItem(id: number, ingredient: Partial<Ingredient>): Observable<Ingredient> {
        return this.storage.update(id, ingredient);
    }

    deleteItem(id: number): Observable<Ingredient> {
        return this.storage.remove(id);
    }
}
