import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './view/components/route/ingredient-list/ingredient-list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IngredientListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngredientsRoutingModule {
}
