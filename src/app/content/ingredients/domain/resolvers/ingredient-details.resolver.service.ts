import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs';
import { IngredientsService } from '../services/ingredients.service';

@Injectable()
export class IngredientDetailsResolverService implements Resolve<Ingredient>{
    constructor(private ingredientsService: IngredientsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient> | Ingredient {
        const id: string | null = route.paramMap.get('id');
        if (id) {
            return this.ingredientsService.getById(Number(id));
        }

        return {} as Ingredient;
    }
}
