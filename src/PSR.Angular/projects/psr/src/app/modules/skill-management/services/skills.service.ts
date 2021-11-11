import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@psr/core/app.config';
import { Observable } from 'rxjs';

import { SkillMgtEndpoints } from '../skill-mgt-constants';
import { ISkill } from '../skill.mode';

@Injectable()
export class SkillsService {

    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    public getSkills(): Observable<ISkill[]> {
        return this.http.get<ISkill[]>(this.appConfig.getUrl(SkillMgtEndpoints.GetSkills)).pipe(
            // shareReplay()
        );
    }
}
