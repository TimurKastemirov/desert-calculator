import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../domain/models/ingredient';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { IngredientDetailComponentService } from '../../../services/ingredient-detail.component.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-ingredient-details',
    templateUrl: './ingredient-details.component.html',
    styleUrls: ['./ingredient-details.component.scss'],
    providers: [
        IngredientDetailComponentService,
    ],
})
export class IngredientDetailsComponent implements OnInit {
    ingredient!: Ingredient;
    form!: FormGroup<Record<keyof Ingredient, AbstractControl>>;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private componentService: IngredientDetailComponentService,
    ) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((d: Data) => {
            this.ingredient = d['ingredient'];
        });
    }

    formChange(form: FormGroup<Record<keyof Ingredient, AbstractControl>>): void {
        this.form = form;
    }

    goBack() {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute }).then();
    }

    saveIngredient($event: MouseEvent): void {
        $event.stopPropagation();
        const ingredient: Ingredient = this.form.value as unknown as Ingredient;
        this.componentService.save(ingredient)
            .pipe(take(1))
            .subscribe(() => {
                this.router.navigate(['../'], { relativeTo: this.activatedRoute }).then();
            });
    }
}
