import { NgModule } from '@angular/core';

import { AddSkillCardModule } from './components/add-skill-card/add-skill-card.module';
import { SkillCardModule } from './components/skill-card/skill-card.module';
import { SkillCategoryCardModule } from './components/skill-category-card/skill-category-card.module';
import { SkillFormModule } from './components/skill-form/skill-form.module';
import { SkillListDisplayModule } from './components/skill-list-display/skill-list-display.module';
import { SkillReadModule } from './components/skill-read/skill-read.module';
import { SkillSubcategoryCardModule } from './components/skill-subcategory-card/skill-subcategory-card.module';
import { SelectedCategoryResolver } from './resolvers/selected-category.resolver';
import { SelectedSubcategoryResolver } from './resolvers/selected-subcategory.resolver';
import { SkillAddResolver } from './resolvers/skill-add.resolver';
import { SkillCategoryResolver } from './resolvers/skill-category.resolver';
import { SkillListResolver } from './resolvers/skill-list.resolver';
import { SkillSubcategoryResolver } from './resolvers/skill-subcategory.resolver';
import { SkillResolver } from './resolvers/skill.resolver';
import { SkillCardContextMenuitemService } from './services/skill-card-context-menuitem.service';
import { SkillFormService } from './services/skill-form.service';
import { SkillsService } from './services/skills.service';



@NgModule({
    declarations: [
    ],
    imports: [
        AddSkillCardModule,
        SkillCardModule,
        SkillCategoryCardModule,
        SkillFormModule,
        SkillReadModule,
        SkillSubcategoryCardModule,
        SkillListDisplayModule
    ],
    exports: [
    ],
    providers: [
        SkillsService,
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
export class SkilllibModule { }
