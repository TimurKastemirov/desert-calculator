import { IngredientPackageUnit } from '../../../../core/models/ingredient-package-unit';

export interface Ingredient {
    id: number;
    name: string;
    price: number;
    package: {
        unit: IngredientPackageUnit;
        value: number;
    };
}
