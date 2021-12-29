import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageTitleService } from '@psr/shared/util';
import { ISkillCategory } from '@psr/skill/data-access';

import { MySkillRoutes } from '../../constants';

@Component({
    selector: 'psr-skl-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
    categories: ISkillCategory[] = [];


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageTitle: PageTitleService
    ) {
        this.pageTitle.updatePageTitle("Skill Categories");
        this.pageTitle.updatePageSubTitle("Choose a skill category from the list below to see sub categories");
    }

    ngOnInit(): void {
        this.route.data.subscribe(({ categories }) => {
            this.categories = categories;
        });
    }

    onCardClick(category: ISkillCategory) {
        this.router.navigate(MySkillRoutes.ListSubcategories(category.id));
    }


}
