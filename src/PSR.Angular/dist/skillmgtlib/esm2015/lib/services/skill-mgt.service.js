import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN } from '@corelib';
import { Subject } from 'rxjs';
import { SkillMgtEndpoints } from '../skill-mgt.endpoints';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SkillMgtService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this._saveSkillSubject = new Subject();
        this._updateSkillSubject = new Subject();
        this._deleteSkillSubject = new Subject();
    }
    get onSkillSave$() {
        return this._saveSkillSubject.asObservable();
    }
    get onSkillUpdate$() {
        return this._updateSkillSubject.asObservable();
    }
    // know what skill was delete
    get onSkillDelete$() {
        return this._deleteSkillSubject.asObservable();
    }
    notifySkillSave(skill) {
        this._saveSkillSubject.next(skill);
    }
    notifySkillUpdate(skill) {
        this._updateSkillSubject.next(skill);
    }
    // tell subscribers what skill was deleted
    notifySkillDelete(skill) {
        this._deleteSkillSubject.next(skill);
    }
    addSkill(skill) {
        return this.http.post(SkillMgtEndpoints.AddSkill(this.appConfig), skill).pipe(
        // shareReplay()
        );
    }
    updateSkill(skill) {
        return this.http.put(SkillMgtEndpoints.UpdateSkill(this.appConfig), skill).pipe(
        // shareReplay()
        );
    }
    deleteSkill(skillId) {
        return this.http.delete(SkillMgtEndpoints.DeleteSkill(this.appConfig, skillId));
    }
}
SkillMgtService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtService, deps: [{ token: i1.HttpClient }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
SkillMgtService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillMgtService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtbWd0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL3NlcnZpY2VzL3NraWxsLW1ndC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBYyxNQUFNLFVBQVUsQ0FBQztBQUV4RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFHM0QsTUFBTSxPQUFPLGVBQWU7SUFtQnhCLFlBQ1ksSUFBZ0IsRUFDVSxTQUFxQjtRQUQvQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ1UsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQW5CbkQsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUMxQyx3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQzVDLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUFrQmhELENBQUM7SUFoQkwsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELElBQUksY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCw2QkFBNkI7SUFDN0IsSUFBSSxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQU9NLGVBQWUsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMENBQTBDO0lBQ25DLGlCQUFpQixDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQWE7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUk7UUFDakYsZ0JBQWdCO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWE7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUk7UUFDbkYsZ0JBQWdCO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBRU0sV0FBVyxDQUFDLE9BQWU7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7OzZHQW5EUSxlQUFlLDRDQXFCWixnQkFBZ0I7aUhBckJuQixlQUFlOzRGQUFmLGVBQWU7a0JBRDNCLFVBQVU7OzBCQXNCRixNQUFNOzJCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBUFBfQ09ORklHX1RPS0VOLCBJQXBwQ29uZmlnIH0gZnJvbSAnQGNvcmVsaWInO1xyXG5pbXBvcnQgeyBJU2tpbGwgfSBmcm9tICdAc2tpbGxsaWInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBTa2lsbE1ndEVuZHBvaW50cyB9IGZyb20gJy4uL3NraWxsLW1ndC5lbmRwb2ludHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2tpbGxNZ3RTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9zYXZlU2tpbGxTdWJqZWN0ID0gbmV3IFN1YmplY3Q8SVNraWxsPigpO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlU2tpbGxTdWJqZWN0ID0gbmV3IFN1YmplY3Q8SVNraWxsPigpO1xyXG4gICAgcHJpdmF0ZSBfZGVsZXRlU2tpbGxTdWJqZWN0ID0gbmV3IFN1YmplY3Q8SVNraWxsPigpO1xyXG5cclxuICAgIGdldCBvblNraWxsU2F2ZSQoKTogT2JzZXJ2YWJsZTxJU2tpbGw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZVNraWxsU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25Ta2lsbFVwZGF0ZSQoKTogT2JzZXJ2YWJsZTxJU2tpbGw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2tpbGxTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGtub3cgd2hhdCBza2lsbCB3YXMgZGVsZXRlXHJcbiAgICBnZXQgb25Ta2lsbERlbGV0ZSQoKTogT2JzZXJ2YWJsZTxJU2tpbGw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZXRlU2tpbGxTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBASW5qZWN0KEFQUF9DT05GSUdfVE9LRU4pIHByaXZhdGUgYXBwQ29uZmlnOiBJQXBwQ29uZmlnXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBub3RpZnlTa2lsbFNhdmUoc2tpbGw6IElTa2lsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NhdmVTa2lsbFN1YmplY3QubmV4dChza2lsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vdGlmeVNraWxsVXBkYXRlKHNraWxsOiBJU2tpbGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVTa2lsbFN1YmplY3QubmV4dChza2lsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGVsbCBzdWJzY3JpYmVycyB3aGF0IHNraWxsIHdhcyBkZWxldGVkXHJcbiAgICBwdWJsaWMgbm90aWZ5U2tpbGxEZWxldGUoc2tpbGw6IElTa2lsbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RlbGV0ZVNraWxsU3ViamVjdC5uZXh0KHNraWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU2tpbGwoc2tpbGw6IElTa2lsbCk6IE9ic2VydmFibGU8SVNraWxsPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PElTa2lsbD4oU2tpbGxNZ3RFbmRwb2ludHMuQWRkU2tpbGwodGhpcy5hcHBDb25maWcpLCBza2lsbCkucGlwZShcclxuICAgICAgICAgICAgLy8gc2hhcmVSZXBsYXkoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVNraWxsKHNraWxsOiBJU2tpbGwpOiBPYnNlcnZhYmxlPElTa2lsbD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PElTa2lsbD4oU2tpbGxNZ3RFbmRwb2ludHMuVXBkYXRlU2tpbGwodGhpcy5hcHBDb25maWcpLCBza2lsbCkucGlwZShcclxuICAgICAgICAgICAgLy8gc2hhcmVSZXBsYXkoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVNraWxsKHNraWxsSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihTa2lsbE1ndEVuZHBvaW50cy5EZWxldGVTa2lsbCh0aGlzLmFwcENvbmZpZywgc2tpbGxJZCkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==