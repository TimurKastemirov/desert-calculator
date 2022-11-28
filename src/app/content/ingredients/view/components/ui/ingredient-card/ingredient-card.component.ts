import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../../../domain/models/ingredient';

@Component({
    selector: 'app-ingredient-card',
    templateUrl: './ingredient-card.component.html',
    styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit {
    @Input() ingredient!: Ingredient;
    @Output() editIngredient: EventEmitter<number> = new EventEmitter<number>();
    @Output() deleteIngredient: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    ngOnInit(): void {}

    editItem($event: MouseEvent) {
        $event.stopPropagation();
        this.editIngredient.emit(this.ingredient.id);
    }

    deleteItem($event: MouseEvent) {
        $event.stopPropagation();
        this.deleteIngredient.emit(this.ingredient.id);
    }
}
