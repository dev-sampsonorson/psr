import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileMenuService {

    private subject = new BehaviorSubject<boolean>(false);

    constructor() { }

    get openStatus$() {
        return this.subject.asObservable();
    }

    public changeOpenStatus(status: boolean) {
        this.subject.next(status);
    }
}
