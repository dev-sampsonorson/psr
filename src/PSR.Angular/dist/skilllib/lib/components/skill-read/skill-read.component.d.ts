import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISkill } from '../../models/skill.model';
import * as i0 from "@angular/core";
export declare class SkillReadComponent implements OnInit {
    private route;
    private router;
    skill: ISkill | undefined;
    title: string;
    description: string;
    constructor(route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    onCloseClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillReadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkillReadComponent, "skl-read", never, {}, {}, never, never>;
}
