import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
    selector: 'psr-skl-rate-myskill',
    templateUrl: './rate-myskill.component.html',
    styleUrls: ['./rate-myskill.component.scss']
})
export class RateMyskillComponent implements OnInit {

    public currentEmployeeId = '';
    public currentSkillId = '';

    constructor(
        private route: ActivatedRoute
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

}
