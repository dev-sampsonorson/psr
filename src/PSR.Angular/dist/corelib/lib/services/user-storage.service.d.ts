import { Observable } from 'rxjs';
import { IUser } from '../models';
import { StorageService } from './storage.service';
import * as i0 from "@angular/core";
/**
 * This service is responsible for holding in-memory user data,
 * notifying subscribers when user data changes, and persisting
 * user data to storage.
 *
 * This service makes it possible to remove the dependency on
 * Auth Service and in turn the Authlib.
 */
export declare class UserStorageService {
    private storage;
    private userStorageKey;
    private _userSubject;
    constructor(storage: StorageService, userStorageKey: string);
    getUser(): Observable<IUser | null>;
    setUser(user: IUser | null): void;
    storeUser(item: IUser): void;
    removeUser(): void;
    retrieveUser(): IUser | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserStorageService>;
}
