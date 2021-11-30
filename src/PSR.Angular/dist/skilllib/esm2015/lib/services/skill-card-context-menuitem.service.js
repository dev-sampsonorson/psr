import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class SkillCardContextMenuitemService {
    constructor() {
        this._eventStartSubject = new Subject();
        this._eventCompleteSubject = new Subject();
    }
    get onEventStart$() {
        return this._eventStartSubject.asObservable();
    }
    get onEventComplete$() {
        return this._eventCompleteSubject.asObservable();
    }
    start(skillId, menuName) {
        this._eventStartSubject.next({ skillId, menuName });
    }
    complete(skillId, menuName) {
        this._eventCompleteSubject.next({ skillId, menuName });
    }
}
SkillCardContextMenuitemService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardContextMenuitemService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SkillCardContextMenuitemService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardContextMenuitemService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCardContextMenuitemService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtY2FyZC1jb250ZXh0LW1lbnVpdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL3NlcnZpY2VzL3NraWxsLWNhcmQtY29udGV4dC1tZW51aXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHL0IsTUFBTSxPQUFPLCtCQUErQjtJQXNCeEM7UUFwQlEsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQXlDLENBQUM7UUFDMUUsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQXlDLENBQUM7SUFtQnJFLENBQUM7SUFqQmpCLElBQVcsYUFBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBVyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFlLEVBQUUsUUFBZ0I7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxRQUFRLENBQUMsT0FBZSxFQUFFLFFBQWdCO1FBQzdDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs2SEFuQlEsK0JBQStCO2lJQUEvQiwrQkFBK0I7NEZBQS9CLCtCQUErQjtrQkFEM0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNraWxsQ2FyZENvbnRleHRNZW51aXRlbVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfZXZlbnRTdGFydFN1YmplY3QgPSBuZXcgU3ViamVjdDx7IHNraWxsSWQ6IHN0cmluZywgbWVudU5hbWU6IHN0cmluZyB9PigpO1xuICAgIHByaXZhdGUgX2V2ZW50Q29tcGxldGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8eyBza2lsbElkOiBzdHJpbmcsIG1lbnVOYW1lOiBzdHJpbmcgfT4oKTtcblxuICAgIHB1YmxpYyBnZXQgb25FdmVudFN0YXJ0JCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50U3RhcnRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb25FdmVudENvbXBsZXRlJCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50Q29tcGxldGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydChza2lsbElkOiBzdHJpbmcsIG1lbnVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRTdGFydFN1YmplY3QubmV4dCh7IHNraWxsSWQsIG1lbnVOYW1lIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wbGV0ZShza2lsbElkOiBzdHJpbmcsIG1lbnVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRDb21wbGV0ZVN1YmplY3QubmV4dCh7IHNraWxsSWQsIG1lbnVOYW1lIH0pO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==