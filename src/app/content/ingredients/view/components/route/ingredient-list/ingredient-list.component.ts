import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../domain/models/ingredient';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-ingredient-list',
    templateUrl: './ingredient-list.component.html',
    styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
    list!: Ingredient[];

    constructor(
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data
            .subscribe(data => {
                this.list = data['ingredients'];
            });
    }
}
