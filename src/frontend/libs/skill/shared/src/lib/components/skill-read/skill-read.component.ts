import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISkill } from '@psr/skill/data-access';

@Component({
    selector: 'psr-skl-read',
    templateUrl: './skill-read.component.html',
    styleUrls: ['./skill-read.component.scss']
})
export class SkillReadComponent implements OnInit {

    skill: ISkill | undefined;

    title: string = 'Skill Information';
    description: string = 'Detils of the skill.';

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe(({ skill }) => {
            this.skill = skill;
        });
    }

    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
}
