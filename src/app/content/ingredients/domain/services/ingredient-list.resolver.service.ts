import { Injectable } from '@angular/core';
import { IngredientsApiService } from '../../application/api/ingredients.api.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs';

@Injectable()
export class IngredientListResolverService implements Resolve<Ingredient[]> {
    constructor(private ingredientsApiService: IngredientsApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient[]> {
        return this.ingredientsApiService.getList();
    }
}
