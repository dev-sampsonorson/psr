import { EventEmitter, TemplateRef } from '@angular/core';
import { MenuItem } from '@shared/menu.model';

export interface ISkill {
    id: string;
    name: string;
    slug: string;
    categoryId: string;
    categoryName: string;
    subcategoryId: string;
    subcategoryName: string;
    employees: number;
    teamCompetency: number;

    deleting?: boolean;
}

export interface ISkillCategory {
    id: string;
    name: string;
}

export interface ISkillSubCategory {
    id: string;
    name: string;
    categoryId: string;
    categoryName: string;
}

export interface IResolverResult {
    [key: string]: ISkillCategory[]
}

export interface ISkillCard {
    blockCard: boolean;
    // blockable: boolean;
    type: 'add' | 'overview' | 'personal';
    menuItems?: MenuItem<any>[];
    skill?: ISkill | undefined;
    contextMenuItemEvent?: EventEmitter<{ skillId: string, menuName: string, card: ISkillCard }>;

}

export interface IBlockableSkillCard {
    initView(): void;
    ngOnDestroy(): void;

    set targetElement(value: boolean);
    set autoZIndex(value: boolean);
    set baseZIndex(value: number);
    set maskTpl(value: TemplateRef<any> | undefined);

}

export interface IBlockUiDirective {
    ngAfterViewInit(): void;
    toggleBlockUi(state: boolean): void;
    ngOnDestroy(): void;

    set targetElement(value: boolean);
    set autoZIndex(value: boolean);
    set baseZIndex(value: number);
    set maskTpl(value: TemplateRef<any> | undefined);

}