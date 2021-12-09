import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, concat, of } from 'rxjs';
import { distinctUntilKeyChanged, filter, switchMap, take, tap } from 'rxjs/operators';
import { EMPTY_USER } from '../models';
import { USER_STORAGE_KEY_TOKEN } from '../tokens';
import * as i0 from "@angular/core";
import * as i1 from "./storage.service";
/**
 * This service is responsible for holding in-memory user data,
 * notifying subscribers when user data changes, and persisting
 * user data to storage.
 *
 * This service makes it possible to remove the dependency on
 * Auth Service and in turn the Authlib.
 */
export class UserStorageService {
    constructor(storage, userStorageKey) {
        this.storage = storage;
        this.userStorageKey = userStorageKey;
        this._userSubject = new BehaviorSubject(null);
    }
    getUser() {
        let source$ = concat(this._userSubject.pipe(
        // take will trigger the `subject` observable
        // to complete so that the next observable in
        // concat is subscribed to
        take(1), 
        // filter out null values (false)
        // convert null to false
        filter(user => !!user)), 
        // the `of` observable will automatically complete
        // so the next observable in concate will be
        // subscribed to
        of(this.storage.getItem(this.userStorageKey)).pipe(filter(user => !!user), 
        // tap(x => console.log('storage => ', x)),
        // we will get here if the value is not null
        // update the user subject
        tap(user => this._userSubject.next(user))), this._userSubject.asObservable()).pipe(
        // here to allow distinctUntilKeyChanged to work
        switchMap(user => of(user !== null && user !== void 0 ? user : EMPTY_USER)), distinctUntilKeyChanged('id'), 
        // transform back to null
        switchMap(user => of(user.id === EMPTY_USER.id ? null : user)));
        return source$;
    }
    setUser(user) {
        this._userSubject.next(user);
    }
    storeUser(item) {
        this.storage.saveItem(this.userStorageKey, item);
    }
    removeUser() {
        this.storage.removeItem(this.userStorageKey);
    }
    retrieveUser() {
        return this.storage.getItem(this.userStorageKey);
    }
}
UserStorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UserStorageService, deps: [{ token: i1.StorageService }, { token: USER_STORAGE_KEY_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
UserStorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UserStorageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: UserStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [USER_STORAGE_KEY_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlbGliL3NyYy9saWIvc2VydmljZXMvdXNlci1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsVUFBVSxFQUFTLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBR25EOzs7Ozs7O0dBT0c7QUFLSCxNQUFNLE9BQU8sa0JBQWtCO0lBSTNCLFlBQ1ksT0FBdUIsRUFDUyxjQUFzQjtRQUR0RCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUNTLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBSjFELGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDLENBQUM7SUFLM0QsQ0FBQztJQUVFLE9BQU87UUFDVixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNsQiw2Q0FBNkM7UUFDN0MsNkNBQTZDO1FBQzdDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRVAsaUNBQWlDO1FBQ2pDLHdCQUF3QjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ3pCO1FBRUQsa0RBQWtEO1FBQ2xELDRDQUE0QztRQUM1QyxnQkFBZ0I7UUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUV0QiwyQ0FBMkM7UUFFM0MsNENBQTRDO1FBQzVDLDBCQUEwQjtRQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUM1QyxFQUNELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQ25DLENBQUMsSUFBSTtRQUNGLGdEQUFnRDtRQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFKLElBQUksY0FBSixJQUFJLEdBQUksVUFBVSxDQUFDLENBQUMsRUFDekMsdUJBQXVCLENBQUMsSUFBSSxDQUFDO1FBQzdCLHlCQUF5QjtRQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ2pFLENBQUM7UUFFRixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0sT0FBTyxDQUFDLElBQWtCO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxTQUFTLENBQUMsSUFBVztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxVQUFVO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0hBNURRLGtCQUFrQixnREFNZixzQkFBc0I7b0hBTnpCLGtCQUFrQixjQUZmLE1BQU07NEZBRVQsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBT1EsTUFBTTsyQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29uY2F0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQsIGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVNUFRZX1VTRVIsIElVc2VyIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IFVTRVJfU1RPUkFHRV9LRVlfVE9LRU4gfSBmcm9tICcuLi90b2tlbnMnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uuc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIGlzIHJlc3BvbnNpYmxlIGZvciBob2xkaW5nIGluLW1lbW9yeSB1c2VyIGRhdGEsXG4gKiBub3RpZnlpbmcgc3Vic2NyaWJlcnMgd2hlbiB1c2VyIGRhdGEgY2hhbmdlcywgYW5kIHBlcnNpc3RpbmdcbiAqIHVzZXIgZGF0YSB0byBzdG9yYWdlLlxuICpcbiAqIFRoaXMgc2VydmljZSBtYWtlcyBpdCBwb3NzaWJsZSB0byByZW1vdmUgdGhlIGRlcGVuZGVuY3kgb25cbiAqIEF1dGggU2VydmljZSBhbmQgaW4gdHVybiB0aGUgQXV0aGxpYi5cbiAqL1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTdG9yYWdlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF91c2VyU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVVzZXIgfCBudWxsPihudWxsKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KFVTRVJfU1RPUkFHRV9LRVlfVE9LRU4pIHByaXZhdGUgdXNlclN0b3JhZ2VLZXk6IHN0cmluZyxcbiAgICApIHsgfVxuXG4gICAgcHVibGljIGdldFVzZXIoKTogT2JzZXJ2YWJsZTxJVXNlciB8IG51bGw+IHtcbiAgICAgICAgbGV0IHNvdXJjZSQgPSBjb25jYXQoXG4gICAgICAgICAgICB0aGlzLl91c2VyU3ViamVjdC5waXBlKFxuICAgICAgICAgICAgICAgIC8vIHRha2Ugd2lsbCB0cmlnZ2VyIHRoZSBgc3ViamVjdGAgb2JzZXJ2YWJsZVxuICAgICAgICAgICAgICAgIC8vIHRvIGNvbXBsZXRlIHNvIHRoYXQgdGhlIG5leHQgb2JzZXJ2YWJsZSBpblxuICAgICAgICAgICAgICAgIC8vIGNvbmNhdCBpcyBzdWJzY3JpYmVkIHRvXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcblxuICAgICAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgbnVsbCB2YWx1ZXMgKGZhbHNlKVxuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgbnVsbCB0byBmYWxzZVxuICAgICAgICAgICAgICAgIGZpbHRlcih1c2VyID0+ICEhdXNlcilcbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIC8vIHRoZSBgb2ZgIG9ic2VydmFibGUgd2lsbCBhdXRvbWF0aWNhbGx5IGNvbXBsZXRlXG4gICAgICAgICAgICAvLyBzbyB0aGUgbmV4dCBvYnNlcnZhYmxlIGluIGNvbmNhdGUgd2lsbCBiZVxuICAgICAgICAgICAgLy8gc3Vic2NyaWJlZCB0b1xuICAgICAgICAgICAgb2YodGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy51c2VyU3RvcmFnZUtleSkpLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKHVzZXIgPT4gISF1c2VyKSxcblxuICAgICAgICAgICAgICAgIC8vIHRhcCh4ID0+IGNvbnNvbGUubG9nKCdzdG9yYWdlID0+ICcsIHgpKSxcblxuICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgZ2V0IGhlcmUgaWYgdGhlIHZhbHVlIGlzIG5vdCBudWxsXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSB1c2VyIHN1YmplY3RcbiAgICAgICAgICAgICAgICB0YXAodXNlciA9PiB0aGlzLl91c2VyU3ViamVjdC5uZXh0KHVzZXIpKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRoaXMuX3VzZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIC8vIGhlcmUgdG8gYWxsb3cgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQgdG8gd29ya1xuICAgICAgICAgICAgc3dpdGNoTWFwKHVzZXIgPT4gb2YodXNlciA/PyBFTVBUWV9VU0VSKSksXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCgnaWQnKSxcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybSBiYWNrIHRvIG51bGxcbiAgICAgICAgICAgIHN3aXRjaE1hcCh1c2VyID0+IG9mKHVzZXIuaWQgPT09IEVNUFRZX1VTRVIuaWQgPyBudWxsIDogdXNlcikpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHNvdXJjZSQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVzZXIodXNlcjogSVVzZXIgfCBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3VzZXJTdWJqZWN0Lm5leHQodXNlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3JlVXNlcihpdGVtOiBJVXNlcikge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2F2ZUl0ZW0odGhpcy51c2VyU3RvcmFnZUtleSwgaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZVVzZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMudXNlclN0b3JhZ2VLZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXRyaWV2ZVVzZXIoKTogSVVzZXIgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKHRoaXMudXNlclN0b3JhZ2VLZXkpO1xuICAgIH1cbn1cbiJdfQ==