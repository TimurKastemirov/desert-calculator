import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListComponent } from './ingredient-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('IngredientListComponent', () => {
    let component: IngredientListComponent;
    let fixture: ComponentFixture<IngredientListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [IngredientListComponent],
        })
            .compileComponents();

        fixture = TestBed.createComponent(IngredientListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
