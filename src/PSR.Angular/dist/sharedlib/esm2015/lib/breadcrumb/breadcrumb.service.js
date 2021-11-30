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
BreadcrumbService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BreadcrumbService, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }, { token: BREADCRUMB_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
BreadcrumbService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BreadcrumbService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BreadcrumbService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [BREADCRUMB_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3NyYy9saWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFrQixhQUFhLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBT3BFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUF5QjtJQW1DNUQsWUFDWSxLQUFxQixFQUNyQixNQUFjLEVBQ21CLGdCQUErQjtRQUV4RSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDZiw2QkFBNkI7WUFDN0IsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRTVFLE9BQU8sR0FBRyxFQUFFOztnQkFDUixNQUFBLElBQUksQ0FBQyxjQUFjLDBDQUFFLFdBQVcsRUFBRSxDQUFDO2dCQUNuQyxNQUFBLElBQUksQ0FBQyxlQUFlLDBDQUFFLFdBQVcsRUFBRSxDQUFDO1lBQ3hDLENBQUMsQ0FBQztRQUNOLENBQUMs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LENBQUM7OytHQTdFUSxpQkFBaUIsc0VBc0NkLHVCQUF1QjttSEF0QzFCLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkF1Q0YsTUFBTTsyQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQlJFQURDUlVNQl9DT05GSUdfVE9LRU4gfSBmcm9tICcuL2JyZWFkY3J1bWItY29uZmlnLnRva2VuJztcbmltcG9ydCB7IElCcmVhZGNydW1iIH0gZnJvbSAnLi9icmVhZGNydW1iLm1vZGVsJztcblxuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJTZXJ2aWNlIGV4dGVuZHMgT2JzZXJ2YWJsZTxJQnJlYWRjcnVtYltdPiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9icmVhZGNydW1icyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElCcmVhZGNydW1iW10+KFtdKTtcbiAgICBwcml2YXRlIF9icmVhZGNydW1ic1N1YjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3JvdXRlRXZlbnRTdWI6IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIHByaXZhdGUgX3BhcmFtUGF0dGVybiA9IC9cXDooW2EtekEtWl0rKS9nO1xuXG4gICAgcHJpdmF0ZSBfcm91dGVyRXZlbnQkKGNvbmZpZzogSUJyZWFkY3J1bWJbXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICAgICAgICAvLyBGaWx0ZXIgdGhlIE5hdmlnYXRpb25FbmQgZXZlbnRzIGFzIHRoZSBicmVhZGNydW1iIGlzXG4gICAgICAgICAgICAvLyB1cGRhdGVkIG9ubHkgd2hlbiB0aGUgcm91dGUgcmVhY2hlcyBpdHMgZW5kXG4gICAgICAgICAgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgICAgICAgbWFwKCgpID0+IHRoaXMucm91dGUpLFxuICAgICAgICAgICAgbWFwKHJvdXRlID0+IHtcbiAgICAgICAgICAgICAgICB3aGlsZSAocm91dGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSA9IHJvdXRlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChyb3V0ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlLmRhdGEucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gY29uZmlnLmZpbmRJbmRleCh4ID0+IHgubmFtZSA9PT0gZGF0YS5icmVhZGNydW1iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVdpdGhQYXJhbXMoY29uZmlnLnNsaWNlKDAsIGluZGV4ICsgMSksIHJvdXRlLnNuYXBzaG90LnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFwKGJyZWFkY3J1bWIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JyZWFkY3J1bWJzJC5uZXh0KGJyZWFkY3J1bWIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIEBJbmplY3QoQlJFQURDUlVNQl9DT05GSUdfVE9LRU4pIHByaXZhdGUgYnJlYWRjcnVtYkNvbmZpZzogSUJyZWFkY3J1bWJbXVxuICAgICkge1xuICAgICAgICBzdXBlcihzdWJzY3JpYmVyID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWJzY3JpYmVyJyk7XG4gICAgICAgICAgICAvLyB0aGlzLl9yb3V0ZXJFdmVudCQuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgdGhpcy5fYnJlYWRjcnVtYnNTdWIgPSB0aGlzLl9icmVhZGNydW1icyQuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgdGhpcy5fcm91dGVFdmVudFN1YiA9IHRoaXMuX3JvdXRlckV2ZW50JCh0aGlzLmJyZWFkY3J1bWJDb25maWcpLnN1YnNjcmliZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlRXZlbnRTdWI/LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnJlYWRjcnVtYnNTdWI/LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yJyk7XG4gICAgICAgIHRoaXMuX3JvdXRlRXZlbnRTdWIgPSB0aGlzLl9yb3V0ZXJFdmVudCQodGhpcy5icmVhZGNydW1iQ29uZmlnKS5zdWJzY3JpYmUoKTtcblxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVdpdGhQYXJhbXMoYnJlYWRjcnVtYjogSUJyZWFkY3J1bWJbXSwgcGFyYW1zOiBQYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xuXG4gICAgICAgIGxldCBicmVhZGNydW1iQ29weTogSUJyZWFkY3J1bWJbXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYnJlYWRjcnVtYikpO1xuICAgICAgICAvLyBsZXQgZmlyc3QgPSBicmVhZGNydW1iQ29weVswXTtcblxuICAgICAgICBicmVhZGNydW1iQ29weS5mb3JFYWNoKChiOiBJQnJlYWRjcnVtYikgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdXRlVG9VcGRhdGUgPSBiLm5ld1JvdXRlO1xuICAgICAgICAgICAgd2hpbGUgKChyZXN1bHQgPSB0aGlzLl9wYXJhbVBhdHRlcm4uZXhlYyhyb3V0ZVRvVXBkYXRlKSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdXRlVG9VcGRhdGUgPSByb3V0ZVRvVXBkYXRlLnJlcGxhY2UocmVzdWx0WzBdLCBwYXJhbXNbcmVzdWx0WzFdXSA/PyByZXN1bHRbMF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm91dGVUb1VwZGF0ZS5pbmRleE9mKCc6JykgPiAtMSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gdXBkYXRlIHBhcmFtZXRlcnMgb2Ygcm91dGU6ICR7Yi5uZXdSb3V0ZX1gKTtcblxuICAgICAgICAgICAgYi5uZXdSb3V0ZSA9IHJvdXRlVG9VcGRhdGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBicmVhZGNydW1iQ29weTtcbiAgICB9XG59XG4iXX0=