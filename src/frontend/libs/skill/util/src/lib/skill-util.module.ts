import { NgModule } from '@angular/core';

import {
    SelectedCategoryResolver,
    SelectedSubcategoryResolver,
    SkillAddResolver,
    SkillCategoryResolver,
    SkillListResolver,
    SkillResolver,
    SkillSubcategoryResolver,
} from './resolvers';
import { SkillCardContextMenuitemService, SkillFormService } from './services';

@NgModule({
    providers: [
        SkillFormService,
        SkillCardContextMenuitemService,

        SkillListResolver,
        SkillResolver,
        SkillAddResolver,
        SkillCategoryResolver,
        SkillSubcategoryResolver,
        SelectedCategoryResolver,
        SelectedSubcategoryResolver
    ]
})
export class SkillUtilModule { }
