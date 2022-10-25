import { IngredientPackageUnit } from '@core/models/ingredient-package-unit';

export interface RecipePart {
    ingredientId: number;
    unit: IngredientPackageUnit;
    amount: number;
}

export type Recipe = RecipePart[];
