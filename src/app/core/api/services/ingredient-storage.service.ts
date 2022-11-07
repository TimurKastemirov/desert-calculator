import { Inject, Injectable } from '@angular/core';
import { IMyStorage, MyStorage } from '../../storage/my-storage';
import { storageInjectionToken } from '../../storage/storage-injection-token';
import { Observable } from 'rxjs';
import { Ingredient } from '../../../content/ingredients/domain/models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientStorageService implements IMyStorage<Ingredient> {
    private storage!: MyStorage<Ingredient>;
    constructor(
        @Inject(storageInjectionToken) storageClass: (table: string) => MyStorage<Ingredient>,
    ) {
        this.storage = storageClass('ingredients');
    }

    add(ingredient: Partial<Ingredient>): Observable<Ingredient> {
        return this.storage.add(ingredient);
    }

    update(id: number, ingredient: Partial<Ingredient>): Observable<Ingredient> {
        return this.storage.update(id, ingredient);
    }

    getById(id: number): Observable<Ingredient> {
        return this.storage.getById(id);
    }

    getList(): Observable<Ingredient[]> {
        return this.storage.getList();
    }

    remove(id: number): Observable<Ingredient> {
        return this.storage.remove(id);
    }
}
