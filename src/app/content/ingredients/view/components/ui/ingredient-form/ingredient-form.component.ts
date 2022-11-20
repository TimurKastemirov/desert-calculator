import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Ingredient } from '../../../../domain/models/ingredient';
import { debounceTime, Subscription, tap } from 'rxjs';
import { IngredientPackageUnit, IngredientPackageUnitMap } from '@core/models/ingredient-package-unit';

@Component({
    selector: 'app-ingredient-form',
    templateUrl: './ingredient-form.component.html',
    styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit, OnDestroy {
    @Input() ingredient: Ingredient | null = null;
    @Output() formChange: EventEmitter<FormGroup<Record<keyof Ingredient, AbstractControl>>> =
        new EventEmitter<FormGroup<Record<keyof Ingredient, AbstractControl>>>();

    pricePattern = /^\d{1,10}(\.\d{1,2})?$/;
    weightPattern = /^\d{1,10}(\.\d{1,3})?$/;
    unitOptions = IngredientPackageUnitMap;
    form: FormGroup<Record<keyof Ingredient, AbstractControl>> = new FormGroup<Record<keyof Ingredient, AbstractControl>>({
        id: new FormControl<number | null>(null),
        name: new FormControl<string>('', [Validators.required]),
        price: new FormControl<number | null>(
            null,
            [
                Validators.required,
                Validators.min(0),
                Validators.pattern(this.pricePattern),
            ]
        ),
        package: new FormGroup<Record<keyof Ingredient['package'], AbstractControl>>({
            unit: new FormControl<IngredientPackageUnit | null>(null, [Validators.required]),
            value: new FormControl<number | null>(
                null,
                [
                    Validators.required,
                    Validators.min(0),
                    Validators.pattern(this.weightPattern),
                ]
            ),
        }),
    });

    private subscription: Subscription = new Subscription();

    constructor(
    ) {
    }

    ngOnInit(): void {
        this.form.patchValue(this.ingredient || {});
        this.formChange.emit(this.form);

        const formChangeSubscription: Subscription = this.form.valueChanges
            .pipe(
                debounceTime(300),
                tap(() => this.formChange.emit(this.form)),
            )
            .subscribe();

        this.subscription.add(formChangeSubscription);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
