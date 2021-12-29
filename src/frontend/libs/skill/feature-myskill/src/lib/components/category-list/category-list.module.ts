import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillCategoryCardModule } from '@psr/skill/ui';

import { CategoryListComponent } from './category-list.component';



@NgModule({
    declarations: [
        CategoryListComponent
    ],
    imports: [
        CommonModule, SkillCategoryCardModule
    ],
    exports: [
        CategoryListComponent
    ]
})
export class CategoryListModule { }
