import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class SecondaryHeaderService {
    constructor() {
        this._subjectCloseClicked$ = new Subject();
    }
    get isCloseClicked$() {
        return this._subjectCloseClicked$.asObservable();
    }
    closeClicked() {
        this._subjectCloseClicked$.next(true);
    }
}
SecondaryHeaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SecondaryHeaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kYXJ5LWhlYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3NyYy9saWIvc2Vjb25kYXJ5LWhlYWRlci9zZWNvbmRhcnktaGVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUcvQixNQUFNLE9BQU8sc0JBQXNCO0lBUS9CO1FBTlEsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQU12QyxDQUFDO0lBSmpCLElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFJRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOztvSEFaUSxzQkFBc0I7d0hBQXRCLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vjb25kYXJ5SGVhZGVyU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9zdWJqZWN0Q2xvc2VDbGlja2VkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICBnZXQgaXNDbG9zZUNsaWNrZWQkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViamVjdENsb3NlQ2xpY2tlZCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGNsb3NlQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5fc3ViamVjdENsb3NlQ2xpY2tlZCQubmV4dCh0cnVlKTtcbiAgICB9XG5cblxufVxuIl19