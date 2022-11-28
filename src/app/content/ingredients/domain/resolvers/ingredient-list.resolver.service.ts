import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs';
import { IngredientsService } from '../services/ingredients.service';

@Injectable()
export class IngredientListResolverService implements Resolve<Ingredient[]> {
    constructor(private ingredientsService: IngredientsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient[]> {
        return this.ingredientsService.getList();
    }
}
