import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillSubcategoryCardModule } from '@psr/skill/ui';

import { SubcategoryListComponent } from './subcategory-list.component';



@NgModule({
    declarations: [
        SubcategoryListComponent
    ],
    imports: [
        CommonModule,
        SkillSubcategoryCardModule
    ],
    exports: [
        SubcategoryListComponent
    ]
})
export class SubcategoryListModule { }
