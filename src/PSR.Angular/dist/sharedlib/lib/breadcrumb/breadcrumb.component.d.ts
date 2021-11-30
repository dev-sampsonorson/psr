import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBreadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent implements OnInit, OnDestroy {
    private breadcrumbService;
    private router;
    breadcrumbs$: Observable<IBreadcrumb[]>;
    breadcrumbs: IBreadcrumb[];
    private _breadcrumbSub;
    get isBreadcrumbVisible(): boolean;
    constructor(breadcrumbService: BreadcrumbService, router: Router);
    ngOnInit(): void;
    onBreadcrumbMenuItemClick(item: IBreadcrumb): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "app-breadcrumb", never, {}, {}, never, never>;
}
