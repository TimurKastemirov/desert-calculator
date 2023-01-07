import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@content/recipes/domain/models/product';
import { ProductsService } from '@content/recipes/domain/services/products.service';

@Injectable()
export class ProductDetailsComponentService {
    constructor(private productsService: ProductsService) { }

    save(product: Product): Observable<Product> {
        if (product.id) {
            return this.productsService.updateItem(product.id, product);
        }

        return this.productsService.addItem(product);
    }
}
