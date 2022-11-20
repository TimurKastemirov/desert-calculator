export type IngredientPackageUnit = 'g' | 'kg' | 'ml' | 'l';

export const IngredientPackageUnitMap: { name: string, value: IngredientPackageUnit }[] = [
    {
        name: 'Грамм',
        value: 'g',
    },
    {
        name: 'Килограмм',
        value: 'kg',
    },
    {
        name: 'Милилитр',
        value: 'ml',
    },
    {
        name: 'Литр',
        value: 'l',
    },
];

export enum IngredientPackageUnitMultiplier {
    g = 1,
    kg = 1000,
    ml = 1,
    l = 1000,
}
