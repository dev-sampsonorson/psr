import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PageTitleService {

    private _pageTitle$ = new BehaviorSubject<string>('Skill Management');

    get pageTitle$() {
        return this._pageTitle$.asObservable();
    }

    constructor() { }
}
