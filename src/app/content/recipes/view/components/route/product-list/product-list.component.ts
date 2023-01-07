import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../domain/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take, tap } from 'rxjs';
import { ProductsService } from '@content/recipes/domain/services/products.service';
import { Ingredient } from '@content/ingredients/domain/models/ingredient';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    list!: Product[];
    ingredients!: Ingredient[];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data
            .subscribe(data => {
                this.list = data['products'];
                this.ingredients = data['ingredients'];
            });
    }

    addProduct() {
        this.router.navigate(['new'], { relativeTo: this.activatedRoute }).then();
    }

    editProduct(productId: number) {
        this.router.navigate([productId], { relativeTo: this.activatedRoute }).then();
    }

    deleteProduct(productId: number) {
        const isDel: boolean = confirm('Are you sure?');
        if (isDel) {
            this.productsService.deleteItem(productId)
                .pipe(
                    take(1),
                    switchMap(() => this.productsService.getList()),
                    tap((list: Product[]) => this.list = list),
                )
                .subscribe()
            return;
        }
    }
}
