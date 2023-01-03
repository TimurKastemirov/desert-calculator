import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { ProductCardComponent } from './view/components/ui/product-card/product-card.component';
import { ProductListComponent } from './view/components/route/product-list/product-list.component';
import { ProductDetailsComponent } from './view/components/route/product-details/product-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { ProductsApiService } from '@content/recipes/application/api/products.api.service';
import { ProductStorageService } from '@content/recipes/application/storage/product-storage.service';

@NgModule({
    imports: [
        CommonModule,
        RecipesRoutingModule,
        MatButtonModule,
        MatCardModule,
        IngredientsModule,
    ],
    declarations: [
        ProductCardComponent,
        ProductListComponent,
        ProductDetailsComponent
    ],
    providers: [
        ProductStorageService,
        ProductsApiService,
    ],
})
export class RecipesModule {
}
