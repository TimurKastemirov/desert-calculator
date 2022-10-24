import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'recipes',
        loadChildren: () => import('./content/recipes/recipes.module').then(m => m.RecipesModule),
    },
    {
        path: 'ingredients',
        loadChildren: () => import('./content/ingredients/ingredients.module').then(m => m.IngredientsModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipes',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
