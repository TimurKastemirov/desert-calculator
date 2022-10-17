import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertListComponent } from './view/components/route/dessert-list/dessert-list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DessertListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DessertsRoutingModule {
}
