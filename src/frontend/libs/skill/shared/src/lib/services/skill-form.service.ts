import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SkillFormService {

    private _resetFormSubject = new Subject<void>();

    get resetForm$() {
        return this._resetFormSubject.asObservable();
    }

    constructor() { }

    resetForm() {
        this._resetFormSubject.next();
    }
}
