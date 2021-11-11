import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '@psr/shared/shared.module';

import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { IndexComponent } from './pages/index.component';
import { PageTitleService } from './services/page-title.service';
import { SkillListResolver } from './services/skill-list.resolver';
import { SkillsService } from './services/skills.service';
import { SkillMgtRoutingModule } from './skill-mgt-routing.module';
import { AddSkillCardComponent } from './components/add-skill-card/add-skill-card.component';



@NgModule({
    declarations: [
        SkillListComponent,
        IndexComponent,
        SkillCardComponent,
        AddSkillCardComponent
    ],
    imports: [
        SharedModule,
        SkillMgtRoutingModule,
        HttpClientModule
    ],
    providers: [
        PageTitleService,

        SkillsService,
        SkillListResolver
    ]
})
export class SkillManagementModule { }
