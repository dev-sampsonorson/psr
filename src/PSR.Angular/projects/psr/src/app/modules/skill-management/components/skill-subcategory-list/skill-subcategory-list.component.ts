import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISkillSubCategory } from '../../models/skill.model';
import { PageTitleService } from '../../services/page-title.service';
import { SkillMgtRoutes } from '../../skill-mgt-constants';

@Component({
    selector: 'app-skill-subcategory-list',
    templateUrl: './skill-subcategory-list.component.html',
    styleUrls: ['./skill-subcategory-list.component.scss']
})
export class SkillSubcategoryListComponent implements OnInit {
    subcategories: ISkillSubCategory[] = [];


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageTitle: PageTitleService,
    ) {
        this.pageTitle.updatePageTitle("Skill Subcategories");
        this.pageTitle.updatePageSubTitle("Choose a skill subcategory from the list below to see skills");
    }

    ngOnInit(): void {
        this.route.data.subscribe(({ subcategories }) => {
            this.subcategories = subcategories;
        });
    }

    onCardClick(category: ISkillSubCategory) {
        // console.log(SkillMgtRoutes.ListSubcategories(category.id));
        // console.log(SkillMgtRoutes.ListSkills(category.categoryId, category.id));
        this.router.navigate(SkillMgtRoutes.ListSkills(category.categoryId, category.id));
    }

}
