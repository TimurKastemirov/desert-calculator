import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './view/components/route/product-list/product-list.component';
import { ProductDetailsComponent } from './view/components/route/product-details/product-details.component';
import { ProductListResolverService } from '@content/recipes/domain/resolvers/product-list.resolver.service';
import { ProductDetailsResolverService } from '@content/recipes/domain/resolvers/product-details.resolver.service';
import { IngredientListResolverService } from '@content/ingredients/domain/resolvers/ingredient-list.resolver.service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent,
        resolve: {
            products: ProductListResolverService,
            ingredients: IngredientListResolverService,
        }
    },
    {
        path: ':id',
        component: ProductDetailsComponent,
        resolve: {
            product: ProductDetailsResolverService,
            ingredients: IngredientListResolverService,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {
}
