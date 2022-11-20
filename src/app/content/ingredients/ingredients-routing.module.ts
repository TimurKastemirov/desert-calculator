import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './view/components/route/ingredient-list/ingredient-list.component';
import { IngredientListResolverService } from './domain/services/ingredient-list.resolver.service';
import { IngredientDetailsComponent } from './view/components/route/ingredient-details/ingredient-details.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IngredientListComponent,
        resolve: {
            ingredients: IngredientListResolverService,
        },
    },
    {
        path: 'new',
        component: IngredientDetailsComponent,
        resolve: {
            ingredient: () => Promise.resolve({}),
        }
    },
    {
        path: ':id',
        component: IngredientDetailsComponent,
        resolve: {
            ingredient: () => Promise.resolve({}),
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngredientsRoutingModule {
}
