import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DessertsRoutingModule } from './desserts-routing.module';
import { DessertListComponent } from './view/components/route/dessert-list/dessert-list.component';
import { DessertDetailComponent } from './view/components/route/dessert-detail/dessert-detail.component';
import { DessertCardComponent } from './view/components/ui/dessert-card/dessert-card.component';


@NgModule({
  declarations: [
    DessertListComponent,
    DessertDetailComponent,
    DessertCardComponent
  ],
  imports: [
    CommonModule,
    DessertsRoutingModule
  ]
})
export class DessertsModule { }
