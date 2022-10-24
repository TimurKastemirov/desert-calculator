import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { ProductCardComponent } from './view/components/ui/product-card/product-card.component';
import { ProductListComponent } from './view/components/route/product-list/product-list.component';
import { ProductDetailsComponent } from './view/components/route/product-details/product-details.component';

@NgModule({
    imports: [
        CommonModule,
        RecipesRoutingModule
    ],
    declarations: [

    
    ProductCardComponent,
          ProductListComponent,
          ProductDetailsComponent
  ],
})
export class RecipesModule {
}
