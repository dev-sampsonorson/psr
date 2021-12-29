import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@psr/core';
import { ISkill } from '@psr/skill/data-access';
import { Subject } from 'rxjs';

@Injectable()
export class SkillRatingService {

    private _rateSkillSubject = new Subject<ISkill>();


    get onSkillRating$() {
        return this._rateSkillSubject.asObservable();

    }

    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }
}
