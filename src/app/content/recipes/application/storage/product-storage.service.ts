import { Inject, Injectable } from '@angular/core';
import { BaseStorageService } from '@core/storage/base-storage.service';
import { Product } from '../../domain/models/product';
import { storageInjectionToken } from '@core/storage/storage-injection-token';
import { MyStorage } from '@core/storage/my-storage';

@Injectable()
export class ProductStorageService extends BaseStorageService<Product> {
    constructor(
        @Inject(storageInjectionToken) storageClass: (table: string) => MyStorage<Product>
    ) {
        super(storageClass('products'));
    }
}
