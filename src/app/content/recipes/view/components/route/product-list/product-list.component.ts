import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../domain/models/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    list: Product[] = [
        {
            id: 1,
            name: 'merenga',
            recipe: [
                {ingredientId: 2, amount: 6, unit: 'sht'},
                {ingredientId: 4, amount: 100, unit: 'g'},
                {ingredientId: 5, amount: 50, unit: 'g'},
                {ingredientId: 6, amount: 15, unit: 'g'},
                {ingredientId: 7, amount: 300, unit: 'g'},
                {ingredientId: 8, amount: 250, unit: 'g'},
                {ingredientId: 9, amount: 50, unit: 'ml'},
                {ingredientId: 10, amount: 50, unit: 'g'},
            ],
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    addProduct() {

    }

    editProduct(productId: number) {
        console.log(productId);
    }

    deleteProduct(productId: number) {
        console.log(productId);
    }
}
