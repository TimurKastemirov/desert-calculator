import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientListComponent } from './view/components/route/ingredient-list/ingredient-list.component';
import { IngredientDetailsComponent } from './view/components/route/ingredient-details/ingredient-details.component';
import { IngredientCardComponent } from './view/components/ui/ingredient-card/ingredient-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IngredientsApiService } from './application/api/ingredients.api.service';
import { IngredientListResolverService } from './domain/services/ingredient-list.resolver.service';


@NgModule({
    declarations: [
        IngredientListComponent,
        IngredientDetailsComponent,
        IngredientCardComponent
    ],
    imports: [
        CommonModule,
        IngredientsRoutingModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [
        IngredientsApiService,
        IngredientListResolverService,
    ],
})
export class IngredientsModule {
}
