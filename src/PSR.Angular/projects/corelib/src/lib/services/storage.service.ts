import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private storage: any;

    constructor() {
        this.storage = localStorage; // localStorage, sessionStorage;
    }

    saveItem<T>(key: string, item: T) {
        this.storage.setItem(key, JSON.stringify(item));
    }

    getItem(key: string): any {
        // JSON.parse(null) === null
        // localStorage.getItem(key) === null if cannot find item
        return JSON.parse(this.storage.getItem(key)!);
        /* let item = this.storage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return; */
    }

    removeItem(key: string): void {
        this.storage.removeItem(key);
    }
}
