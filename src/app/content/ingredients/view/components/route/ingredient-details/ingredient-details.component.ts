import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../domain/models/ingredient';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-ingredient-details',
    templateUrl: './ingredient-details.component.html',
    styleUrls: ['./ingredient-details.component.scss']
})
export class IngredientDetailsComponent implements OnInit {
    ingredient: Ingredient = {} as Ingredient;
    form!: FormGroup<Record<keyof Ingredient, AbstractControl>>;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
    }

    formChange(form: FormGroup<Record<keyof Ingredient, AbstractControl>>): void {
        console.log(form);
        this.form = form;
    }

    goBack() {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute }).then();
    }

    saveIngredient($event: MouseEvent) {
        $event.stopPropagation();
        const ingredient: Ingredient = this.form.value as unknown as Ingredient;
        console.log(ingredient);
    }
}
