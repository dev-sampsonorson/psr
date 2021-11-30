import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, concat, Observable, of } from 'rxjs';
import { distinctUntilKeyChanged, filter, switchMap, take, tap } from 'rxjs/operators';

import { EMPTY_USER, IUser } from '../models';
import { USER_STORAGE_KEY_TOKEN } from '../tokens';
import { StorageService } from './storage.service';

/**
 * This service is responsible for holding in-memory user data,
 * notifying subscribers when user data changes, and persisting
 * user data to storage.
 *
 * This service makes it possible to remove the dependency on
 * Auth Service and in turn the Authlib.
 */

@Injectable({
    providedIn: 'root'
})
export class UserStorageService {

    private _userSubject = new BehaviorSubject<IUser | null>(null);

    constructor(
        private storage: StorageService,
        @Inject(USER_STORAGE_KEY_TOKEN) private userStorageKey: string,
    ) { }

    public getUser(): Observable<IUser | null> {
        let source$ = concat(
            this._userSubject.pipe(
                // take will trigger the `subject` observable
                // to complete so that the next observable in
                // concat is subscribed to
                take(1),

                // filter out null values (false)
                // convert null to false
                filter(user => !!user)
            ),

            // the `of` observable will automatically complete
            // so the next observable in concate will be
            // subscribed to
            of(this.storage.getItem(this.userStorageKey)).pipe(
                filter(user => !!user),

                // tap(x => console.log('storage => ', x)),

                // we will get here if the value is not null
                // update the user subject
                tap(user => this._userSubject.next(user))
            ),
            this._userSubject.asObservable()
        ).pipe(
            // here to allow distinctUntilKeyChanged to work
            switchMap(user => of(user ?? EMPTY_USER)),
            distinctUntilKeyChanged('id'),
            // transform back to null
            switchMap(user => of(user.id === EMPTY_USER.id ? null : user))
        );

        return source$;
    }

    public setUser(user: IUser | null): void {
        this._userSubject.next(user);
    }

    public storeUser(item: IUser) {
        this.storage.saveItem(this.userStorageKey, item);
    }

    public removeUser(): void {
        this.storage.removeItem(this.userStorageKey);
    }

    public retrieveUser(): IUser | null {
        return this.storage.getItem(this.userStorageKey);
    }
}
