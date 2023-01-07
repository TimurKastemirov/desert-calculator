import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Product } from '@content/recipes/domain/models/product';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductDetailsComponentService } from '@content/recipes/view/services/product-details.component.service';
import { Ingredient } from '@content/ingredients/domain/models/ingredient';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    product!: Product;
    ingredients!: Ingredient[];
    form!: FormGroup<Record<keyof Product, AbstractControl>>;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private componentService: ProductDetailsComponentService,
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((d: Data) => {
            this.product = d['product'];
            this.ingredients = d['ingredients'];
        });
    }

    formChange(form: FormGroup<Record<keyof Product, AbstractControl>>): void {
        this.form = form;
    }

    goBack() {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute }).then();
    }

    saveProduct($event: MouseEvent): void {
        $event.stopPropagation();
        const product: Product = this.form.value as unknown as Product;
        this.componentService.save(product)
            .pipe(take(1))
            .subscribe(() => {
                this.router.navigate(['../'], { relativeTo: this.activatedRoute }).then();
            });
    }
}
