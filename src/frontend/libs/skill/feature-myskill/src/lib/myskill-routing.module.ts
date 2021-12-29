import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillReadComponent } from '@psr/skill/ui';
import { SelectedCategoryResolver, SelectedSubcategoryResolver, SkillResolver } from '@psr/skill/util';

import { CategoryListComponent, ListComponent, RateMyskillComponent, SubcategoryListComponent } from './components';
import { IndexComponent } from './pages';
import { EmployeeIdResolver } from './resolvers/employee-id.resolver';
import { MyskillCategoryResolver } from './resolvers/myskill-category.resolver';
import { MyskillIndexPageResolver } from './resolvers/myskill-index-page.resolver';
import { MyskillListResolver } from './resolvers/myskill-list.resolver';
import { MyskillSubcategoryResolver } from './resolvers/myskill-subcategory.resolver';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: 'categories', component: CategoryListComponent, resolve: { categories: MyskillCategoryResolver }, data: { breadcrumb: 'categories' } },
            { path: 'categories/:categoryId/subcategories', component: SubcategoryListComponent, resolve: { subcategories: MyskillSubcategoryResolver }, data: { breadcrumb: 'subcategories' } },
            { path: 'categories/:categoryId/subcategories/:subcategoryId/list', component: ListComponent, resolve: { skills: MyskillListResolver, selectedCategory: SelectedCategoryResolver, selectedSubcategory: SelectedSubcategoryResolver }, data: { breadcrumb: 'list' } },
            { path: 'read/:id', component: SkillReadComponent, outlet: 'details', resolve: { skill: SkillResolver } },
            { path: 'rating/:id', component: RateMyskillComponent, outlet: 'details', resolve: { employeeId: EmployeeIdResolver } }, // resolve: { skill: SkillResolver, categories: SkillCategoryResolver }
            { path: '**', redirectTo: 'categories', pathMatch: 'full' }
        ],
        resolve: { resolverResult: MyskillIndexPageResolver }
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyskillRoutingModule { }
