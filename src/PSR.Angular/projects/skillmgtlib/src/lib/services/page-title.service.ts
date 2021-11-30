import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PageTitleService {

    private _pageTitle$ = new BehaviorSubject<string>('Skill Management');
    private _pageSubTitle$ = new BehaviorSubject<string>('Manage skill categories, subcategories, and skills');

    get pageTitle$() {
        return this._pageTitle$.asObservable();
    }
    get pageSubTitle$() {
        return this._pageSubTitle$.asObservable();
    }

    updatePageTitle(title: string) {
        this._pageTitle$.next(title);
    }

    updatePageSubTitle(title: string) {
        this._pageSubTitle$.next(title);
    }

    constructor() { }
}
