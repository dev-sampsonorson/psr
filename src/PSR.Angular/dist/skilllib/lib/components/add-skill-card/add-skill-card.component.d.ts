import { EventEmitter, OnInit } from '@angular/core';
import { ISkillCard } from '../../models';
import * as i0 from "@angular/core";
export declare class AddSkillCardComponent implements OnInit, ISkillCard {
    addSkillCardClick: EventEmitter<void>;
    blockCard: boolean;
    blockable: boolean;
    type: 'add' | 'overview' | 'personal';
    constructor();
    ngOnInit(): void;
    addSkillCardClickHandler(): void;
    onFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddSkillCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddSkillCardComponent, "skl-add-card", never, {}, { "addSkillCardClick": "addSkillCardClick"; }, never, never>;
}
