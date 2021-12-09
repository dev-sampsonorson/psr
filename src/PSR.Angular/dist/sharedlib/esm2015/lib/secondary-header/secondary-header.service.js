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
SecondaryHeaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SecondaryHeaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: SecondaryHeaderService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kYXJ5LWhlYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3RlbXAvc3JjL2xpYi9zZWNvbmRhcnktaGVhZGVyL3NlY29uZGFyeS1oZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRy9CLE1BQU0sT0FBTyxzQkFBc0I7SUFRL0I7UUFOUSwwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBTXZDLENBQUM7SUFKakIsSUFBSSxlQUFlO1FBQ2YsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUlELFlBQVk7UUFDUixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7O29IQVpRLHNCQUFzQjt3SEFBdEIsc0JBQXNCOzRGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWNvbmRhcnlIZWFkZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX3N1YmplY3RDbG9zZUNsaWNrZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIGdldCBpc0Nsb3NlQ2xpY2tlZCQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJqZWN0Q2xvc2VDbGlja2VkJC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgY2xvc2VDbGlja2VkKCkge1xuICAgICAgICB0aGlzLl9zdWJqZWN0Q2xvc2VDbGlja2VkJC5uZXh0KHRydWUpO1xuICAgIH1cblxuXG59XG4iXX0=