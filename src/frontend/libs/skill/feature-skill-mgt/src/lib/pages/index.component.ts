import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BREADCRUMB_CONFIG_TOKEN, BreadcrumbService, IBreadcrumb, SecondaryHeaderService } from '@psr/shared/ui';
import { ISkillCategory } from '@psr/skill/data-access';
import { Observable, Subscription } from 'rxjs';

import { PageTitleService } from '../services/page-title.service';

@Component({
    selector: 'psr-skl-index',
    template: `
    <!-- <psr-ui-page-heading-layout>
        <h1 class="text-3xl font-bold text-gray-900">
          {{ pageTitle$ | async}}
        </h1>
    </psr-ui-page-heading-layout> -->
    <psr-ui-two-column-layout [isSecondaryContentVisible]="isSecondaryContentVisible" (hamburgerMenuClick)="hamburgerMenuClickHandler()">
    <!-- border-2 border-gray-200 border-dashed rounded-lg -->
    <!-- flex justify-between items-center -->
        <psr-ui-page-heading x-size="large" x-color="black" [title]="pageTitle$ | async" [description]="pageSubTitle$ | async"></psr-ui-page-heading>
        <div header-content class="">
            <h1 class="text-3xl font-bold text-gray-900">
              {{ pageTitle$ | async}}
            </h1>
            <p id="message-heading" class="text-lg font-normal text-gray-900">
              {{ pageSubTitle$ | async}}
            </p>
            <!-- <psr-skl-filter [categories]="categories"></psr-skl-filter> -->
        </div>
        <nav breadcrumb-content *ngIf="isBreadcrumbVisible" class="flex px-4 py-4 mx-auto border-b-2 border-gray-200 border-dashed max-w-7xl sm:px-6 lg:px-8" aria-label="Breadcrumb">
            <psr-ui-breadcrumb></psr-ui-breadcrumb>
        </nav>
        <router-outlet main-content
                (activate)="onPrimaryRouterOutletActivate()"
                (deactivate)="onPrimaryRouterOutletDeactivate()"></router-outlet>
        <router-outlet secondary-content
                (activate)="onDetailsRouterOutletActivate()"
                (deactivate)="onDetailsRouterOutletDeactivate()"
                name="details"></router-outlet>
    </psr-ui-two-column-layout>
  `,
    styles: [
        `
      :host {
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
        height: 0px;
        @apply border-l-2 border-r-2 border-gray-200 border-dashed;
      }
    `
    ],
    providers: [PageTitleService]
})
export class IndexComponent implements OnInit, OnDestroy {

    pageTitle$: Observable<string>;
    pageSubTitle$: Observable<string>;
    categories: ISkillCategory[] = [];

    isSecondaryContentVisible: boolean = false;

    private _routerEventSub!: Subscription;
    private _routeDataSub!: Subscription;

    private _breadcrumbs$: Observable<IBreadcrumb[]>;

    get isBreadcrumbVisible() {
        return this.breadcrumbConfig.length > 0;
    }

    constructor(
        private pageTitle: PageTitleService,
        private route: ActivatedRoute,
        private router: Router,
        private breadcrumbService: BreadcrumbService,
        private secondaryHeaderService: SecondaryHeaderService,
        @Inject(BREADCRUMB_CONFIG_TOKEN) private breadcrumbConfig: IBreadcrumb[],
    ) {
        this.pageTitle$ = this.pageTitle.pageTitle$;
        this.pageSubTitle$ = this.pageTitle.pageSubTitle$;
        this._breadcrumbs$ = this.breadcrumbService;
    }

    ngOnInit(): void {
        this.route.data.subscribe(({ resolverResult: { categories } }) => {
            this.categories = categories;
        });

        this.secondaryHeaderService.isCloseClicked$.subscribe((isCloseClicked: boolean) => {
            if (isCloseClicked) {
                this.router.navigate(['/skills', { outlets: { details: null } }]);
            }
        });
    }

    onDetailsRouterOutletActivate(): void {
        this.isSecondaryContentVisible = true;
        // console.log('activate');
    }

    onDetailsRouterOutletDeactivate(): void {
        this.isSecondaryContentVisible = false;
    }
    onPrimaryRouterOutletActivate(): void {
        // console.log('activate');
    }

    onPrimaryRouterOutletDeactivate(): void {
        // console.log('deactivate');
    }

    hamburgerMenuClickHandler(): void {
        // console.log('hamburgerMenuClickHandler');
    }
    ngOnDestroy(): void {
        this._routerEventSub?.unsubscribe();
        this._routeDataSub?.unsubscribe();
    }

}
