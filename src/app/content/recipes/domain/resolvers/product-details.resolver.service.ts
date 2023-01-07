import { Injectable } from '@angular/core';
import { ProductsService } from '@content/recipes/domain/services/products.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '@content/recipes/domain/models/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductDetailsResolverService implements Resolve<Product> {
    constructor(private productsService: ProductsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Product {
        const id: string | null = route.paramMap.get('id');
        if (id && id !== 'new') {
            return this.productsService.getById(Number(id));
        }

        return {} as Product;
    }


}
