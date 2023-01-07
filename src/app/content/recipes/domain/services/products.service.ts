import { Injectable } from '@angular/core';
import { ProductsApiService } from '@content/recipes/application/api/products.api.service';
import { Observable } from 'rxjs';
import { Product } from '@content/recipes/domain/models/product';

@Injectable()
export class ProductsService {
    constructor(private apiService: ProductsApiService) { }

    getList(): Observable<Product[]> {
        return this.apiService.getList();
    }

    getById(id: number): Observable<Product> {
        return this.apiService.getById(id);
    }

    addItem(product: Product): Observable<Product> {
        return this.apiService.addItem(product);
    }

    updateItem(id: number, product: Partial<Product>): Observable<Product> {
        return this.apiService.updateItem(id, product);
    }

    deleteItem(id: number): Observable<Product> {
        return this.apiService.deleteItem(id);
    }
}
