import { Recipe } from './recipe';

export interface Product {
    id: number;
    name: string;
    recipe: Recipe;
}
