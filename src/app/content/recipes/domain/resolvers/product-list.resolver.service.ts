import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '@content/recipes/domain/models/product';
import { Observable } from 'rxjs';
import { ProductsService } from '@content/recipes/domain/services/products.service';

@Injectable()
export class ProductListResolverService implements Resolve<Product[]>{
    constructor(private productsService: ProductsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
        return this.productsService.getList();
    }
}
