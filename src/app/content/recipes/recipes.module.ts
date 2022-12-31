import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { ProductCardComponent } from './view/components/ui/product-card/product-card.component';
import { ProductListComponent } from './view/components/route/product-list/product-list.component';
import { ProductDetailsComponent } from './view/components/route/product-details/product-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IngredientsModule } from '../ingredients/ingredients.module';

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
})
export class RecipesModule {
}
