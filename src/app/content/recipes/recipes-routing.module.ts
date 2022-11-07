import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './view/components/route/product-list/product-list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {
}