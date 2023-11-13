import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from '@content/recipes/domain/models/product';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IngredientPackageUnit, IngredientPackageUnitMap } from '@core/models/ingredient-package-unit';
import { debounceTime, Subscription, tap } from 'rxjs';
import { RecipePart } from '@content/recipes/domain/models/recipe';
import { Ingredient } from '@content/ingredients/domain/models/ingredient';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
    @Input() product!: Product;
    @Input() ingredients!: Ingredient[];
    @Output() formChange: EventEmitter<FormGroup<Record<keyof Product, AbstractControl>>> =
        new EventEmitter<FormGroup<Record<keyof Product, AbstractControl>>>();

    weightPattern = /^\d{1,10}(\.\d{1,3})?$/;
    unitOptions = IngredientPackageUnitMap;

    form: FormGroup<Record<keyof Product, AbstractControl>> = new FormGroup<Record<keyof Product, AbstractControl>>({
        id: new FormControl<number | null>(null),
        name: new FormControl<string>('', [Validators.required]),
        recipe: new FormArray([]),
    });

    private subscription: Subscription = new Subscription();

    constructor() {
    }

    get recipe(): FormArray<FormGroup> {
        return this.form.get('recipe') as FormArray;
    }

    ngOnInit(): void {
        this.initiateForm();
        this.initSubscriptions();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    addRecipePart() {
        this.recipe.insert(
            0,
            new FormGroup<Record < keyof RecipePart, AbstractControl>>({
                ingredientId: new FormControl<number | null>(null, [Validators.required]),
                amount: new FormControl<number | null>(
                    null,
                    [
                        Validators.required,
                        Validators.min(0),
                        Validators.pattern(this.weightPattern),
                    ]
                ),
                unit: new FormControl<IngredientPackageUnit | null>(null, [Validators.required])
            }),
        )
    }

    removeRecipePart(index: number) {
        this.recipe.removeAt(index);
    }

    private initiateForm(): void {
        this.product.recipe.forEach(() => this.addRecipePart());
        this.form.patchValue(this.product || {});
        this.formChange.emit(this.form);
    }

    private initSubscriptions(): void {
        const formChangeSubscription: Subscription = this.form.valueChanges
            .pipe(
                debounceTime(300),
                tap(() => this.formChange.emit(this.form)),
            )
            .subscribe();

        this.subscription.add(formChangeSubscription);
    }
}
