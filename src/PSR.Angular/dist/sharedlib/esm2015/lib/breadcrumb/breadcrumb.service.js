import { Inject, Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { BREADCRUMB_CONFIG_TOKEN } from './breadcrumb-config.token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class BreadcrumbService extends Observable {
    constructor(route, router, breadcrumbConfig) {
        super(subscriber => {
            // console.log('subscriber');
            // this._routerEvent$.subscribe(subscriber);
            this._breadcrumbsSub = this._breadcrumbs$.asObservable().subscribe(subscriber);
            this._routeEventSub = this._routerEvent$(this.breadcrumbConfig).subscribe();
            return () => {
                var _a, _b;
                (_a = this._routeEventSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                (_b = this._breadcrumbsSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
            };
        });
        this.route = route;
        this.router = router;
        this.breadcrumbConfig = breadcrumbConfig;
        this._breadcrumbs$ = new BehaviorSubject([]);
        this._paramPattern = /\:([a-zA-Z]+)/g;
        // console.log('constructor');
        this._routeEventSub = this._routerEvent$(this.breadcrumbConfig).subscribe();
    }
    _routerEvent$(config) {
        return this.router.events.pipe(
        // Filter the NavigationEnd events as the breadcrumb is
        // updated only when the route reaches its end
        filter((event) => event instanceof NavigationEnd), map(() => this.route), map(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), distinctUntilChanged(), switchMap(route => {
            return route.data.pipe(map(data => {
                let index = config.findIndex(x => x.name === data.breadcrumb);
                return this.updateWithParams(config.slice(0, index + 1), route.snapshot.params);
            }));
        }), tap(breadcrumb => {
            this._breadcrumbs$.next(breadcrumb);
        }));
    }
    updateWithParams(breadcrumb, params) {
        let result;
        let breadcrumbCopy = JSON.parse(JSON.stringify(breadcrumb));
        // let first = breadcrumbCopy[0];
        breadcrumbCopy.forEach((b) => {
            var _a;
            let routeToUpdate = b.newRoute;
            while ((result = this._paramPattern.exec(routeToUpdate)) != null) {
                routeToUpdate = routeToUpdate.replace(result[0], (_a = params[result[1]]) !== null && _a !== void 0 ? _a : result[0]);
            }
            if (routeToUpdate.indexOf(':') > -1)
                console.error(`Unable to update parameters of route: ${b.newRoute}`);
            b.newRoute = routeToUpdate;
        });
        return breadcrumbCopy;
    }
}
BreadcrumbService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbService, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }, { token: BREADCRUMB_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
BreadcrumbService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [BREADCRUMB_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3RlbXAvc3JjL2xpYi9icmVhZGNydW1iL2JyZWFkY3J1bWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWtCLGFBQWEsRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFPcEUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQXlCO0lBbUM1RCxZQUNZLEtBQXFCLEVBQ3JCLE1BQWMsRUFDbUIsZ0JBQStCO1FBRXhFLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLDZCQUE2QjtZQUM3Qiw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFNUUsT0FBTyxHQUFHLEVBQUU7O2dCQUNSLE1BQUEsSUFBSSxDQUFDLGNBQWMsMENBQUUsV0FBVyxFQUFFLENBQUM7Z0JBQ25DLE1BQUEsSUFBSSxDQUFDLGVBQWUsMENBQUUsV0FBVyxFQUFFLENBQUM7WUFDeEMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFkSyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ21CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZTtRQXBDM0Qsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsRUFBRSxDQUFDLENBQUM7UUFJaEUsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQztRQTZDckMsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUloRixDQUFDO0lBaERPLGFBQWEsQ0FBQyxNQUFxQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDMUIsdURBQXVEO1FBQ3ZELDhDQUE4QztRQUM5QyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsRUFDakQsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFO2dCQUNyQixLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzthQUM1QjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxFQUNGLG9CQUFvQixFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNkLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDUCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFDTixDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQXlCTyxnQkFBZ0IsQ0FBQyxVQUF5QixFQUFFLE1BQWM7UUFDOUQsSUFBSSxNQUFXLENBQUM7UUFFaEIsSUFBSSxjQUFjLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNFLGlDQUFpQztRQUVqQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBYyxFQUFFLEVBQUU7O1lBQ3RDLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDL0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDOUQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQ0FBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRjtZQUVELElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRXpFLENBQUMsQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQzs7K0dBN0VRLGlCQUFpQixzRUFzQ2QsdUJBQXVCO21IQXRDMUIsaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVU7OzBCQXVDRixNQUFNOzJCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCUkVBRENSVU1CX0NPTkZJR19UT0tFTiB9IGZyb20gJy4vYnJlYWRjcnVtYi1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgSUJyZWFkY3J1bWIgfSBmcm9tICcuL2JyZWFkY3J1bWIubW9kZWwnO1xuXG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYlNlcnZpY2UgZXh0ZW5kcyBPYnNlcnZhYmxlPElCcmVhZGNydW1iW10+IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2JyZWFkY3J1bWJzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SUJyZWFkY3J1bWJbXT4oW10pO1xuICAgIHByaXZhdGUgX2JyZWFkY3J1bWJzU3ViOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfcm91dGVFdmVudFN1YjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgcHJpdmF0ZSBfcGFyYW1QYXR0ZXJuID0gL1xcOihbYS16QS1aXSspL2c7XG5cbiAgICBwcml2YXRlIF9yb3V0ZXJFdmVudCQoY29uZmlnOiBJQnJlYWRjcnVtYltdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgICAgICAgIC8vIEZpbHRlciB0aGUgTmF2aWdhdGlvbkVuZCBldmVudHMgYXMgdGhlIGJyZWFkY3J1bWIgaXNcbiAgICAgICAgICAgIC8vIHVwZGF0ZWQgb25seSB3aGVuIHRoZSByb3V0ZSByZWFjaGVzIGl0cyBlbmRcbiAgICAgICAgICAgIGZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5yb3V0ZSksXG4gICAgICAgICAgICBtYXAocm91dGUgPT4ge1xuICAgICAgICAgICAgICAgIHdoaWxlIChyb3V0ZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJvdXRlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGUuZGF0YS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBjb25maWcuZmluZEluZGV4KHggPT4geC5uYW1lID09PSBkYXRhLmJyZWFkY3J1bWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlV2l0aFBhcmFtcyhjb25maWcuc2xpY2UoMCwgaW5kZXggKyAxKSwgcm91dGUuc25hcHNob3QucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YXAoYnJlYWRjcnVtYiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnJlYWRjcnVtYnMkLm5leHQoYnJlYWRjcnVtYik7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgQEluamVjdChCUkVBRENSVU1CX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBicmVhZGNydW1iQ29uZmlnOiBJQnJlYWRjcnVtYltdXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHN1YnNjcmliZXIgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N1YnNjcmliZXInKTtcbiAgICAgICAgICAgIC8vIHRoaXMuX3JvdXRlckV2ZW50JC5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICB0aGlzLl9icmVhZGNydW1ic1N1YiA9IHRoaXMuX2JyZWFkY3J1bWJzJC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZUV2ZW50U3ViID0gdGhpcy5fcm91dGVyRXZlbnQkKHRoaXMuYnJlYWRjcnVtYkNvbmZpZykuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVFdmVudFN1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9icmVhZGNydW1ic1N1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtcbiAgICAgICAgdGhpcy5fcm91dGVFdmVudFN1YiA9IHRoaXMuX3JvdXRlckV2ZW50JCh0aGlzLmJyZWFkY3J1bWJDb25maWcpLnN1YnNjcmliZSgpO1xuXG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlV2l0aFBhcmFtcyhicmVhZGNydW1iOiBJQnJlYWRjcnVtYltdLCBwYXJhbXM6IFBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XG5cbiAgICAgICAgbGV0IGJyZWFkY3J1bWJDb3B5OiBJQnJlYWRjcnVtYltdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShicmVhZGNydW1iKSk7XG4gICAgICAgIC8vIGxldCBmaXJzdCA9IGJyZWFkY3J1bWJDb3B5WzBdO1xuXG4gICAgICAgIGJyZWFkY3J1bWJDb3B5LmZvckVhY2goKGI6IElCcmVhZGNydW1iKSA9PiB7XG4gICAgICAgICAgICBsZXQgcm91dGVUb1VwZGF0ZSA9IGIubmV3Um91dGU7XG4gICAgICAgICAgICB3aGlsZSAoKHJlc3VsdCA9IHRoaXMuX3BhcmFtUGF0dGVybi5leGVjKHJvdXRlVG9VcGRhdGUpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcm91dGVUb1VwZGF0ZSA9IHJvdXRlVG9VcGRhdGUucmVwbGFjZShyZXN1bHRbMF0sIHBhcmFtc1tyZXN1bHRbMV1dID8/IHJlc3VsdFswXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyb3V0ZVRvVXBkYXRlLmluZGV4T2YoJzonKSA+IC0xKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byB1cGRhdGUgcGFyYW1ldGVycyBvZiByb3V0ZTogJHtiLm5ld1JvdXRlfWApO1xuXG4gICAgICAgICAgICBiLm5ld1JvdXRlID0gcm91dGVUb1VwZGF0ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJyZWFkY3J1bWJDb3B5O1xuICAgIH1cbn1cbiJdfQ==