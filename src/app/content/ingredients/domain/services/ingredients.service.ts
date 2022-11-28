import { Injectable } from '@angular/core';
import { IngredientsApiService } from '../../application/api/ingredients.api.service';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';

@Injectable()
export class IngredientsService {
    constructor(private apiService: IngredientsApiService) {}

    getList(): Observable<Ingredient[]> {
        return this.apiService.getList();
    }

    getById(id: number): Observable<Ingredient> {
        return this.apiService.getById(id);
    }

    addItem(ingredient: Ingredient): Observable<Ingredient> {
        return this.apiService.addItem(ingredient);
    }

    updateItem(id: number, ingredient: Partial<Ingredient>): Observable<Ingredient> {
        return this.apiService.updateItem(id, ingredient);
    }

    deleteItem(id: number): Observable<Ingredient> {
        return this.apiService.deleteItem(id);
    }
}
