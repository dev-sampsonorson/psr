import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '@psr/skill/data-access';
import { map, switchMap } from 'rxjs';

@Component({
    selector: 'psr-skl-rate-myskill',
    templateUrl: './rate-myskill.component.html',
    styleUrls: ['./rate-myskill.component.scss']
})
export class RateMyskillComponent implements OnInit {

    public currentEmployeeId = '';
    public currentSkillId = '';

    public minSkillRating = 0;
    public maxSkillRating = 5;

    constructor(
        private route: ActivatedRoute,
        private skillService: SkillsService
    ) { }

    ngOnInit(): void {
        this.route.data.pipe(
            switchMap(({ employeeId }) => {
                return this.route.params.pipe(
                    map(({ id }) => ({
                        employeeId,
                        skillId: id,
                    }))
                )
            })
        ).subscribe(({ skillId, employeeId }) => {
            this.currentEmployeeId = employeeId;
            this.currentSkillId = skillId;
        });
    }

    onSaveRating(rating: number) {
        // this.skillService.rateSkill(this.currentEmployeeId, this.currentSkillId, rating).subscribe();
    }



}
