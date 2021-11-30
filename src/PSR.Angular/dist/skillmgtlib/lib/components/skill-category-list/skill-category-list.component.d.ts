import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISkillCategory } from '@skilllib';
import { PageTitleService } from '../../services';
import * as i0 from "@angular/core";
export declare class SkillCategoryListComponent implements OnInit {
    private route;
    private router;
    private pageTitle;
    categories: ISkillCategory[];
    constructor(route: ActivatedRoute, router: Router, pageTitle: PageTitleService);
    ngOnInit(): void;
    onCardClick(category: ISkillCategory): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillCategoryListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkillCategoryListComponent, "sklmgt-category-list", never, {}, {}, never, never>;
}
