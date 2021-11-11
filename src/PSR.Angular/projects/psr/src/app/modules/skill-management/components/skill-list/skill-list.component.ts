import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISkill } from '../../skill.mode';

@Component({
    selector: 'app-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

    skills: ISkill[] = [];

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.skills = this.route.snapshot.data.skills;
    }

}
