import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillReadComponent } from '@psr/skill/ui';
import {
    IndexPageResolver,
    SelectedCategoryResolver,
    SelectedSubcategoryResolver,
    SkillAddResolver,
    SkillCategoryResolver,
    SkillListResolver,
    SkillResolver,
    SkillSubcategoryResolver,
} from '@psr/skill/util';

import { SkillAddComponent } from './components/skill-add/skill-add.component';
import { SkillCategoryListComponent } from './components/skill-category-list/skill-category-list.component';
import { SkillEditComponent } from './components/skill-edit/skill-edit.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillSubcategoryListComponent } from './components/skill-subcategory-list/skill-subcategory-list.component';
import { IndexComponent } from './pages/index.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: 'categories', component: SkillCategoryListComponent, resolve: { categories: SkillCategoryResolver }, data: { breadcrumb: 'categories' } },
            { path: 'categories/:categoryId/subcategories', component: SkillSubcategoryListComponent, resolve: { subcategories: SkillSubcategoryResolver }, data: { breadcrumb: 'subcategories' } },
            { path: 'categories/:categoryId/subcategories/:subcategoryId/list', component: SkillListComponent, resolve: { skills: SkillListResolver, selectedCategory: SelectedCategoryResolver, selectedSubcategory: SelectedSubcategoryResolver }, data: { breadcrumb: 'list' } },
            { path: 'read/:id', component: SkillReadComponent, outlet: 'details', resolve: { skill: SkillResolver } },
            { path: 'edit/:id', component: SkillEditComponent, outlet: 'details', resolve: { skill: SkillResolver, categories: SkillCategoryResolver } },
            { path: 'add/:categoryId/:subcategoryId', component: SkillAddComponent, outlet: 'details', resolve: { categories: SkillAddResolver } },
            { path: '**', redirectTo: 'categories', pathMatch: 'full' }
        ],
        resolve: { resolverResult: IndexPageResolver }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SkillMgtRoutingModule { }
