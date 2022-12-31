export type IngredientPackageUnit = 'g' | 'kg' | 'ml' | 'l' | 'sht';

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
    {
        name: 'Штук',
        value: 'sht',
    },
];

export enum IngredientPackageUnitMultiplier {
    g = 1,
    kg = 1000,
    ml = 1,
    l = 1000,
    sht = 1,
}
