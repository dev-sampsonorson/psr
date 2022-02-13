import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@psr/core';
import { ISkillRating } from '@psr/skill/data-access';
import { Observable } from 'rxjs';

import { MySkillEndpoints } from '../myskill.endpoints';

@Injectable({
    providedIn: 'root'
})
export class MyskillService {

    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    public getSkillRatingsByCategoryAndSubcategoryAndEmployee(categoryId: string, subcategoryId: string, employeeId: string): Observable<ISkillRating[]> {
        return this.http.get<ISkillRating[]>(MySkillEndpoints.GetSkillRatingsByCategoryAndSubcategoryAndEmployee(this.appConfig, categoryId, subcategoryId, employeeId)).pipe(
            // shareReplay()
        );
    }

    /* public rateSkill(skillId: string, employeeId: string, rating: number): Observable<IMySkill> {
        return this.http.post<IMySkill>(MySkillEndpoints.UpsertMySkillRating(this.appConfig), { skillId, employeeId, rating }).pipe(
            // shareReplay()
        );
    } */
}
