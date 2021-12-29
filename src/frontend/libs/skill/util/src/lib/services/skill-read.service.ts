import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SkillReadService {

    private _onCloseSubject = new Subject<void>();

    public onCloseSkillRead$ = this._onCloseSubject.asObservable();

    public closeSkillRead() {
        this._onCloseSubject.next();
    }
}
