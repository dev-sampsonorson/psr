import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISkillCategory, ISkillSubCategory } from '@skilllib';
import * as i0 from "@angular/core";
export declare class SkillFilterComponent implements OnInit {
    private fb;
    categories: ISkillCategory[];
    subCategories: ISkillSubCategory[];
    isSubcategoryDisabled: boolean;
    form: FormGroup | undefined;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    filterSkillsHandler(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkillFilterComponent, "app-skill-filter", never, { "categories": "categories"; }, {}, never, never>;
}
