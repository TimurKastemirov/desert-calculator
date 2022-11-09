import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './view/components/route/ingredient-list/ingredient-list.component';
import { IngredientListResolverService } from './domain/services/ingredient-list.resolver.service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IngredientListComponent,
        resolve: {
            ingredients: IngredientListResolverService,
        },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngredientsRoutingModule {
}
