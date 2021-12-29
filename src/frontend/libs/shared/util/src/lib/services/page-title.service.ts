import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IPageTitle } from '../models';
import { PAGE_TITLE_TOKEN } from '../tokens';

@Injectable()
export class PageTitleService {

    private _pageTitle$;
    private _pageSubTitle$;

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

    constructor(
        @Inject(PAGE_TITLE_TOKEN) private pageTitle: IPageTitle
    ) {
        this._pageTitle$ = new BehaviorSubject<string>(this.pageTitle.title);
        this._pageSubTitle$ = new BehaviorSubject<string>(this.pageTitle.description);
    }
}
