import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageTitleService } from '../../services/page-title.service';
import { SkillMgtRoutes } from '../../skill-mgt-constants';
import { ISkillCategory } from '../../skill.model';

@Component({
    selector: 'app-skill-category-list',
    templateUrl: './skill-category-list.component.html',
    styleUrls: ['./skill-category-list.component.scss']
})
export class SkillCategoryListComponent implements OnInit {
    categories: ISkillCategory[] = [];


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageTitle: PageTitleService,
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
        this.router.navigate(SkillMgtRoutes.ListSubcategories(category.id));
    }

}
