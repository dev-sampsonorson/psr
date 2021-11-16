import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SecondaryHeaderService {

    private _subjectCloseClicked$ = new Subject<boolean>();

    get isCloseClicked$() {
        return this._subjectCloseClicked$.asObservable();
    }

    constructor() { }

    closeClicked() {
        this._subjectCloseClicked$.next(true);
    }


}
