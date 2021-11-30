import { EventEmitter, OnInit } from '@angular/core';
import { ISkillSubCategory } from '../../models/skill.model';
import * as i0 from "@angular/core";
export declare class SkillSubcategoryCardComponent implements OnInit {
    subcategory: ISkillSubCategory | undefined;
    onCardClick: EventEmitter<ISkillSubCategory>;
    constructor();
    ngOnInit(): void;
    onCardClickHandler(subcategory: ISkillSubCategory): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillSubcategoryCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkillSubcategoryCardComponent, "skl-subcategory-card", never, { "subcategory": "subcategory"; }, { "onCardClick": "onCardClick"; }, never, never>;
}
