import { Inject, Injectable } from '@angular/core';
import { MyStorage } from '@core/storage/my-storage';
import { storageInjectionToken } from '@core/storage/storage-injection-token';
import { Ingredient } from '../../domain/models/ingredient';
import { BaseStorageService } from '@core/storage/base-storage.service';

@Injectable()
export class IngredientStorageService extends BaseStorageService<Ingredient>{
    constructor(
        @Inject(storageInjectionToken) storageClass: (table: string) => MyStorage<Ingredient>,
    ) {
        super(storageClass('ingredients'));
    }
}
