import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb } from '@shared/breadcrumb/breadcrumb.model';
import { BreadcrumbService } from '@shared/breadcrumb/breadcrumb.service';
import { SecondaryHeaderService } from '@shared/secondary-header/secondary-header.service';
import { Observable, Subscription } from 'rxjs';

import { PageTitleService } from '../services/page-title.service';
import { ISkillCategory } from '../skill.model';

@Component({
    selector: 'app-index',
    template: `
    <!-- <app-page-heading-layout>
        <h1 class="text-3xl font-bold text-gray-900">
          {{ pageTitle$ | async}}
        </h1>
    </app-page-heading-layout> -->
    <app-two-column-layout [isSecondaryContentVisible]="isSecondaryContentVisible" (hamburgerMenuClick)="hamburgerMenuClickHandler()">
    <!-- border-2 border-gray-200 border-dashed rounded-lg -->
    <!-- flex justify-between items-center -->
        <app-page-heading x-size="large" x-color="black" [title]="pageTitle$ | async" [description]="pageSubTitle$ | async"></app-page-heading>
        <div header-content class="">
            <h1 class="text-3xl font-bold text-gray-900">
              {{ pageTitle$ | async}}
            </h1>
            <p id="message-heading" class="text-lg font-normal text-gray-900">
              {{ pageSubTitle$ | async}}
            </p>
            <!-- <app-skill-filter [categories]="categories"></app-skill-filter> -->
        </div>
        <app-breadcrumb breadcrumb-content></app-breadcrumb>
        <router-outlet main-content
                (activate)="onPrimaryRouterOutletActivate()"
                (deactivate)="onPrimaryRouterOutletDeactivate()"></router-outlet>
        <router-outlet secondary-content
                (activate)="onDetailsRouterOutletActivate()"
                (deactivate)="onDetailsRouterOutletDeactivate()"
                name="details"></router-outlet>
    </app-two-column-layout>
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

    constructor(
        private pageTitle: PageTitleService,
        private route: ActivatedRoute,
        private router: Router,
        private breadcrumbService: BreadcrumbService,
        private secondaryHeaderService: SecondaryHeaderService
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
