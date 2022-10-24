import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientListComponent } from './view/components/route/ingredient-list/ingredient-list.component';
import { IngredientDetailsComponent } from './view/components/route/ingredient-details/ingredient-details.component';
import { IngredientCardComponent } from './view/components/ui/ingredient-card/ingredient-card.component';


@NgModule({
    declarations: [
    IngredientListComponent,
    IngredientDetailsComponent,
    IngredientCardComponent
  ],
    imports: [
        CommonModule,
        IngredientsRoutingModule
    ]
})
export class IngredientsModule {
}
