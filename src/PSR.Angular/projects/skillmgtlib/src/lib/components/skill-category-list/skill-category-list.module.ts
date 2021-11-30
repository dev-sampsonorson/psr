import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillCategoryCardModule } from '@skilllib';

import { SkillCategoryListComponent } from './skill-category-list.component';



@NgModule({
    declarations: [SkillCategoryListComponent],
    imports: [
        CommonModule,
        SkillCategoryCardModule
    ],
    exports: [SkillCategoryListComponent]
})
export class SkillCategoryListModule { }
