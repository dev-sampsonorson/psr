import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillSubcategoryCardModule } from '@psr/skill/shared';

import { SkillSubcategoryListComponent } from './skill-subcategory-list.component';



@NgModule({
    declarations: [SkillSubcategoryListComponent],
    imports: [
        CommonModule,

        SkillSubcategoryCardModule
    ],
    exports: [SkillSubcategoryListComponent]
})
export class SkillSubcategoryListModule { }
