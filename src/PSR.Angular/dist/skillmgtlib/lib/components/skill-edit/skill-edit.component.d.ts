import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@sharedlib';
import { ISkill, ISkillCategory, ISkillSubCategory, SkillFormService, SkillsService } from '@skilllib';
import { SkillMgtService } from '../../services';
import * as i0 from "@angular/core";
export declare class SkillEditComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private skillService;
    private skillMgtService;
    private skillFormService;
    private alert;
    title: string;
    description: string;
    buttonLabel: string;
    skill: ISkill | undefined;
    categories: ISkillCategory[];
    subcategories: ISkillSubCategory[];
    private _routeDataSub;
    get isFormVisible(): boolean;
    constructor(route: ActivatedRoute, router: Router, skillService: SkillsService, skillMgtService: SkillMgtService, skillFormService: SkillFormService, alert: AlertService);
    ngOnInit(): void;
    onUpdateSkill(skill: ISkill): void;
    onCloseClick(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkillEditComponent, "app-skill-edit", never, {}, {}, never, never>;
}
