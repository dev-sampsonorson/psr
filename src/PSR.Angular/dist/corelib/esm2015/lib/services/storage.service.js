import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class StorageService {
    constructor() {
        this.storage = localStorage; // localStorage, sessionStorage;
    }
    saveItem(key, item) {
        this.storage.setItem(key, JSON.stringify(item));
    }
    getItem(key) {
        // JSON.parse(null) === null
        // localStorage.getItem(key) === null if cannot find item
        return JSON.parse(this.storage.getItem(key));
        /* let item = this.storage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return; */
    }
    removeItem(key) {
        this.storage.removeItem(key);
    }
}
StorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: StorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: StorageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: StorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZWxpYi9zcmMvbGliL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sY0FBYztJQUl2QjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsZ0NBQWdDO0lBQ2pFLENBQUM7SUFFRCxRQUFRLENBQUksR0FBVyxFQUFFLElBQU87UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDZiw0QkFBNEI7UUFDNUIseURBQXlEO1FBQ3pELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDO1FBQzlDOzs7Ozs7a0JBTVU7SUFDZCxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7NEdBM0JRLGNBQWM7Z0hBQWQsY0FBYyxjQUZYLE1BQU07NEZBRVQsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgc3RvcmFnZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTsgLy8gbG9jYWxTdG9yYWdlLCBzZXNzaW9uU3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlSXRlbTxUPihrZXk6IHN0cmluZywgaXRlbTogVCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIC8vIEpTT04ucGFyc2UobnVsbCkgPT09IG51bGxcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID09PSBudWxsIGlmIGNhbm5vdCBmaW5kIGl0ZW1cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpISk7XHJcbiAgICAgICAgLyogbGV0IGl0ZW0gPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybjsgKi9cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxufVxyXG4iXX0=