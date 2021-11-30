import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class SkillFormService {
    constructor() {
        this._resetFormSubject = new Subject();
    }
    get resetForm$() {
        return this._resetFormSubject.asObservable();
    }
    resetForm() {
        this._resetFormSubject.next();
    }
}
SkillFormService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SkillFormService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2tpbGxsaWIvc3JjL2xpYi9zZXJ2aWNlcy9za2lsbC1mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsvQixNQUFNLE9BQU8sZ0JBQWdCO0lBUXpCO1FBTlEsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQU1oQyxDQUFDO0lBSmpCLElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFJRCxTQUFTO1FBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7OzhHQVpRLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBRmIsTUFBTTs0RkFFVCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNraWxsRm9ybVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfcmVzZXRGb3JtU3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICBnZXQgcmVzZXRGb3JtJCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc2V0Rm9ybVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRGb3JtU3ViamVjdC5uZXh0KCk7XG4gICAgfVxufVxuIl19