import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageTitleService } from '@psr/shared/util';
import { ISkillSubCategory } from '@psr/skill/data-access';
import { MySkillRoutes } from '@psr/skill/feature-myskill';

@Component({
    selector: 'psr-skl-subcategory-list',
    templateUrl: './subcategory-list.component.html',
    styleUrls: ['./subcategory-list.component.scss']
})
export class SubcategoryListComponent implements OnInit {
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
        this.router.navigate(MySkillRoutes.ListSkills(subcategory.categoryId, subcategory.id));
    }

}
