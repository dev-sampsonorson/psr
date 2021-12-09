import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

import { BREADCRUMB_CONFIG_TOKEN } from './breadcrumb-config.token';
import { IBreadcrumb } from './breadcrumb.model';




@Injectable()
export class BreadcrumbService extends Observable<IBreadcrumb[]> {

    private readonly _breadcrumbs$ = new BehaviorSubject<IBreadcrumb[]>([]);
    private _breadcrumbsSub: Subscription | undefined;
    private _routeEventSub: Subscription | undefined;

    private _paramPattern = /\:([a-zA-Z]+)/g;

    private _routerEvent$(config: IBreadcrumb[]) {
        return this.router.events.pipe(
            // Filter the NavigationEnd events as the breadcrumb is
            // updated only when the route reaches its end
            filter((event) => event instanceof NavigationEnd),
            map(() => this.route),
            map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            distinctUntilChanged(),
            switchMap(route => {
                return route.data.pipe(
                    map(data => {
                        let index = config.findIndex(x => x.name === data.breadcrumb);
                        return this.updateWithParams(config.slice(0, index + 1), route.snapshot.params);
                    })
                );
            }),
            tap(breadcrumb => {
                this._breadcrumbs$.next(breadcrumb);
            })
        );
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        @Inject(BREADCRUMB_CONFIG_TOKEN) private breadcrumbConfig: IBreadcrumb[]
    ) {
        super(subscriber => {
            // console.log('subscriber');
            // this._routerEvent$.subscribe(subscriber);
            this._breadcrumbsSub = this._breadcrumbs$.asObservable().subscribe(subscriber);
            this._routeEventSub = this._routerEvent$(this.breadcrumbConfig).subscribe();

            return () => {
                this._routeEventSub?.unsubscribe();
                this._breadcrumbsSub?.unsubscribe();
            };
        });
        // console.log('constructor');
        this._routeEventSub = this._routerEvent$(this.breadcrumbConfig).subscribe();



    }

    private updateWithParams(breadcrumb: IBreadcrumb[], params: Params) {
        let result: any;

        let breadcrumbCopy: IBreadcrumb[] = JSON.parse(JSON.stringify(breadcrumb));
        // let first = breadcrumbCopy[0];

        breadcrumbCopy.forEach((b: IBreadcrumb) => {
            let routeToUpdate = b.newRoute;
            while ((result = this._paramPattern.exec(routeToUpdate)) != null) {
                routeToUpdate = routeToUpdate.replace(result[0], params[result[1]] ?? result[0]);
            }

            if (routeToUpdate.indexOf(':') > -1)
                console.error(`Unable to update parameters of route: ${b.newRoute}`);

            b.newRoute = routeToUpdate;
        });

        return breadcrumbCopy;
    }
}
