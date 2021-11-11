import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillListComponent } from './components/skill-list/skill-list.component';
import { IndexComponent } from './pages/index.component';
import { SkillListResolver } from './services/skill-list.resolver';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: '', component: SkillListComponent, pathMatch: 'full' }
        ],
        resolve: { skills: SkillListResolver }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SkillMgtRoutingModule { }
