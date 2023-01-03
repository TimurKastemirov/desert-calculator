import { Injectable } from '@angular/core';
import { ProductStorageService } from '@content/recipes/application/storage/product-storage.service';
import { Product } from '@content/recipes/domain/models/product';
import { BaseCrudApiService } from '@core/services/base-crud-api.service';

@Injectable()
export class ProductsApiService extends BaseCrudApiService<Product> {
    constructor(
        protected override storage: ProductStorageService,
    ) {
        super(storage);
    }
}
