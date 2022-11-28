import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientListComponent } from './view/components/route/ingredient-list/ingredient-list.component';
import { IngredientDetailsComponent } from './view/components/route/ingredient-details/ingredient-details.component';
import { IngredientCardComponent } from './view/components/ui/ingredient-card/ingredient-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IngredientsApiService } from './application/api/ingredients.api.service';
import { IngredientListResolverService } from './domain/resolvers/ingredient-list.resolver.service';
import { IngredientFormComponent } from './view/components/ui/ingredient-form/ingredient-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IngredientsService } from './domain/services/ingredients.service';
import { IngredientDetailsResolverService } from './domain/resolvers/ingredient-details.resolver.service';


@NgModule({
    declarations: [
        IngredientListComponent,
        IngredientDetailsComponent,
        IngredientCardComponent,
        IngredientFormComponent
    ],
    imports: [
        CommonModule,
        IngredientsRoutingModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    providers: [
        IngredientsApiService,
        IngredientsService,
        IngredientListResolverService,
        IngredientDetailsResolverService,
    ],
})
export class IngredientsModule {
}
