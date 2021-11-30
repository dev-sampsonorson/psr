import { EventEmitter, OnInit } from '@angular/core';
import { ISkillCategory } from '../../models/skill.model';
import * as i0 from "@angular/core";
export declare class SkillCategoryCardComponent implements OnInit {
    category: ISkillCategory | undefined;
    onCardClick: EventEmitter<ISkillCategory>;
    constructor();
    ngOnInit(): void;
    onCardClickHandler(category: ISkillCategory): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillCategoryCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkillCategoryCardComponent, "skl-category-card", never, { "category": "category"; }, { "onCardClick": "onCardClick"; }, never, never>;
}
