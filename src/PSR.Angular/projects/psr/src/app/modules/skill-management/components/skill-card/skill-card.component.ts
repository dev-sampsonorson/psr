import { Component, Input, OnInit } from '@angular/core';

import { ISkill } from '../../skill.mode';

@Component({
    selector: 'app-skill-card',
    templateUrl: './skill-card.component.html',
    styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

    @Input() skill: ISkill | undefined;

    constructor() { }

    ngOnInit(): void {
    }

    getCategoryInfo(skill: ISkill): string {
        return `${skill.categoryName} / ${skill.subCategoryName}`;
    }

}
