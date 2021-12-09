import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { IBreadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

    breadcrumbs$: Observable<IBreadcrumb[]>;
    breadcrumbs: IBreadcrumb[] = [];

    private _breadcrumbSub!: Subscription;

    get isBreadcrumbVisible(): boolean {
        return this.breadcrumbs.length > 0;
    }

    constructor(
        private breadcrumbService: BreadcrumbService,
        private router: Router
    ) {
        this.breadcrumbs$ = this.breadcrumbService;
    }

    ngOnInit(): void {
        // console.log('ngOnInit');
        this._breadcrumbSub = this.breadcrumbs$.subscribe(breadcrumbs => {
            this.breadcrumbs = breadcrumbs;
        });

    }

    onBreadcrumbMenuItemClick(item: IBreadcrumb): void {
        this.router.navigateByUrl(item.newRoute);
    }

    ngOnDestroy(): void {
        // console.log('ngOnDestroy');
        this._breadcrumbSub?.unsubscribe();
    }

}
