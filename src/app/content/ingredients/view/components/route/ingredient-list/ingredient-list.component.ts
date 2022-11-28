import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../domain/models/ingredient';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientsService } from '../../../../domain/services/ingredients.service';
import { switchMap, take, tap } from 'rxjs';

@Component({
    selector: 'app-ingredient-list',
    templateUrl: './ingredient-list.component.html',
    styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
    list!: Ingredient[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private ingredientsService: IngredientsService,
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data
            .subscribe(data => {
                this.list = data['ingredients'];
            });
    }

    addIngredient(): void {
        this.router.navigate(['new'], { relativeTo: this.activatedRoute }).then();
    }

    editIngredient(id: number): void {
        this.router.navigate([id], { relativeTo: this.activatedRoute }).then();
    }

    deleteIngredient(id: number) {
        // todo add confirm dialog
        this.ingredientsService.deleteItem(id)
            .pipe(
                take(1),
                switchMap(() => this.ingredientsService.getList()),
                tap((list: Ingredient[]) => this.list = list),
            )
            .subscribe()
    }
}
