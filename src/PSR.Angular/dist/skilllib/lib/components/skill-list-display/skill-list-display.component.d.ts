import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ISkillCard } from '../../models';
import * as i0 from "@angular/core";
export declare class SkillListDisplayComponent implements OnInit, OnDestroy, AfterContentInit {
    cards: QueryList<ISkillCard> | undefined;
    isAddSkillCardVisible: boolean;
    isSkillsVisible: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillListDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkillListDisplayComponent, "skl-list-display", never, { "isAddSkillCardVisible": "isAddSkillCardVisible"; "isSkillsVisible": "isSkillsVisible"; }, {}, ["cards"], ["*"]>;
}
