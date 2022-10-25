import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../../../domain/models/ingredient';

@Component({
    selector: 'app-ingredient-card',
    templateUrl: './ingredient-card.component.html',
    styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit {
    @Input() ingredient!: Ingredient;

    constructor() {}

    ngOnInit(): void {}
}
