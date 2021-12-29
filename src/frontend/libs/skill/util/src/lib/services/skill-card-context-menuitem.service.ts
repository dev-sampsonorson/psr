import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SkillCardContextMenuitemService {

    private _eventStartSubject = new Subject<{ skillId: string, menuName: string }>();
    private _eventCompleteSubject = new Subject<{ skillId: string, menuName: string }>();

    public get onEventStart$() {
        return this._eventStartSubject.asObservable();
    }

    public get onEventComplete$() {
        return this._eventCompleteSubject.asObservable();
    }

    public start(skillId: string, menuName: string) {
        this._eventStartSubject.next({ skillId, menuName });
    }

    public complete(skillId: string, menuName: string) {
        this._eventCompleteSubject.next({ skillId, menuName });
    }


    constructor() { }
}
