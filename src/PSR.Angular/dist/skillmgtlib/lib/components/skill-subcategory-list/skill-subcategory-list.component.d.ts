import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISkillSubCategory } from '@skilllib';
import { PageTitleService } from '../../services';
import * as i0 from "@angular/core";
export declare class SkillSubcategoryListComponent implements OnInit {
    private route;
    private router;
    private pageTitle;
    subcategories: ISkillSubCategory[];
    constructor(route: ActivatedRoute, router: Router, pageTitle: PageTitleService);
    ngOnInit(): void;
    onCardClick(subcategory: ISkillSubCategory): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillSubcategoryListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkillSubcategoryListComponent, "sklmgt-subcategory-list", never, {}, {}, never, never>;
}
