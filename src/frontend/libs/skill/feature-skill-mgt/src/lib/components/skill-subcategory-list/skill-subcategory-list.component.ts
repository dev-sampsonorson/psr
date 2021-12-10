import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISkillSubCategory } from '@psr/skill/data-access';

import { PageTitleService } from '../../services';
import { SkillMgtRoutes } from '../../skill-mgt-constants';

@Component({
    selector: 'psr-skl-subcategory-list',
    templateUrl: './skill-subcategory-list.component.html',
    styleUrls: ['./skill-subcategory-list.component.scss']
})
export class SkillSubcategoryListComponent implements OnInit {
    subcategories: ISkillSubCategory[] = [];


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageTitle: PageTitleService
    ) {
        this.pageTitle.updatePageTitle("Skill Subcategories");
        this.pageTitle.updatePageSubTitle("Choose a skill subcategory from the list below to see skills");
    }

    ngOnInit(): void {
        this.route.data.subscribe(({ subcategories }) => {
            this.subcategories = subcategories;
        });
    }

    onCardClick(subcategory: ISkillSubCategory) {
        // console.log(SkillMgtRoutes.ListSubcategories(category.id));
        // console.log(SkillMgtRoutes.ListSkills(category.categoryId, category.id));
        this.router.navigate(SkillMgtRoutes.ListSkills(subcategory.categoryId, subcategory.id));
    }

}
