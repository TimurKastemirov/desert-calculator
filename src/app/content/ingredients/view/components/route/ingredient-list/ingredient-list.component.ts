import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../domain/models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
    list: Ingredient[] = [
        {
            id: 1,
            name: 'Water',
            package: {
                unit: 'l',
                value: 20,
            },
            price: 40,
        },
        {
            id: 2,
            name: 'Flower',
            package: {
                unit: 'kg',
                value: 5,
            },
            price: 50,
        }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
