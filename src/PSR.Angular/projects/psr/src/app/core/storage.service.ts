import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { AuthConstants } from '../auth/auth.constants';
import { IUser } from '../auth/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private userSubject = new BehaviorSubject<IUser | null>(null);

    constructor() { }

    saveItem<T>(key: string, item: T) {
        localStorage.setItem(key, JSON.stringify(item));
    }

    getItem(key: string): any {
        // JSON.parse(null) === null
        // localStorage.getItem(key) === null if cannot find item
        return JSON.parse(localStorage.getItem(key)!);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
