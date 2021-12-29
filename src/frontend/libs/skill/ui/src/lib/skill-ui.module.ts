import { NgModule } from '@angular/core';

import {
    AddSkillCardModule,
    SkillCardModule,
    SkillCategoryCardModule,
    SkillFormModule,
    SkillListDisplayModule,
    SkillReadModule,
    SkillSubcategoryCardModule,
} from './components';

@NgModule({
    exports: [
        AddSkillCardModule,
        SkillCardModule,
        SkillCategoryCardModule,
        SkillFormModule,
        SkillReadModule,
        SkillSubcategoryCardModule,
        SkillListDisplayModule
    ]
})
export class SkillUiModule { }
