import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class PageTitleService {
    constructor() {
        this._pageTitle$ = new BehaviorSubject('Skill Management');
        this._pageSubTitle$ = new BehaviorSubject('Manage skill categories, subcategories, and skills');
    }
    get pageTitle$() {
        return this._pageTitle$.asObservable();
    }
    get pageSubTitle$() {
        return this._pageSubTitle$.asObservable();
    }
    updatePageTitle(title) {
        this._pageTitle$.next(title);
    }
    updatePageSubTitle(title) {
        this._pageSubTitle$.next(title);
    }
}
PageTitleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageTitleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PageTitleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageTitleService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageTitleService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aXRsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2tpbGxtZ3RsaWIvc3JjL2xpYi9zZXJ2aWNlcy9wYWdlLXRpdGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd2QyxNQUFNLE9BQU8sZ0JBQWdCO0lBb0J6QjtRQWxCUSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFTLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBUyxvREFBb0QsQ0FBQyxDQUFDO0lBaUIzRixDQUFDO0lBZmpCLElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs4R0FsQlEsZ0JBQWdCO2tIQUFoQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZVRpdGxlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9wYWdlVGl0bGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCdTa2lsbCBNYW5hZ2VtZW50Jyk7XG4gICAgcHJpdmF0ZSBfcGFnZVN1YlRpdGxlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignTWFuYWdlIHNraWxsIGNhdGVnb3JpZXMsIHN1YmNhdGVnb3JpZXMsIGFuZCBza2lsbHMnKTtcblxuICAgIGdldCBwYWdlVGl0bGUkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZVRpdGxlJC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gICAgZ2V0IHBhZ2VTdWJUaXRsZSQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlU3ViVGl0bGUkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVBhZ2VUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VUaXRsZSQubmV4dCh0aXRsZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUGFnZVN1YlRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGFnZVN1YlRpdGxlJC5uZXh0KHRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19