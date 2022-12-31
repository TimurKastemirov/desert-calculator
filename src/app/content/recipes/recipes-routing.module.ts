import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './view/components/route/product-list/product-list.component';
import { ProductDetailsComponent } from './view/components/route/product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent,
    },
    {
        path: 'new',
        component: ProductDetailsComponent,
        resolve: {
            product: () => Promise.resolve({}),
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {
}
