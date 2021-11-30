import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBreadcrumb } from './breadcrumb.model';
import * as i0 from "@angular/core";
export declare class BreadcrumbService extends Observable<IBreadcrumb[]> {
    private route;
    private router;
    private breadcrumbConfig;
    private readonly _breadcrumbs$;
    private _breadcrumbsSub;
    private _routeEventSub;
    private _paramPattern;
    private _routerEvent$;
    constructor(route: ActivatedRoute, router: Router, breadcrumbConfig: IBreadcrumb[]);
    private updateWithParams;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BreadcrumbService>;
}
