import { Component, Inject } from '@angular/core';
import { BREADCRUMB_CONFIG_TOKEN } from '@sharedlib';
import { PageTitleService } from '../services/page-title.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/page-title.service";
import * as i2 from "@angular/router";
import * as i3 from "@sharedlib";
import * as i4 from "@angular/common";
export class IndexComponent {
    constructor(pageTitle, route, router, breadcrumbService, secondaryHeaderService, breadcrumbConfig) {
        this.pageTitle = pageTitle;
        this.route = route;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.secondaryHeaderService = secondaryHeaderService;
        this.breadcrumbConfig = breadcrumbConfig;
        this.categories = [];
        this.isSecondaryContentVisible = false;
        this.pageTitle$ = this.pageTitle.pageTitle$;
        this.pageSubTitle$ = this.pageTitle.pageSubTitle$;
        this._breadcrumbs$ = this.breadcrumbService;
    }
    get isBreadcrumbVisible() {
        return this.breadcrumbConfig.length > 0;
    }
    ngOnInit() {
        this.route.data.subscribe(({ resolverResult: { categories } }) => {
            this.categories = categories;
        });
        this.secondaryHeaderService.isCloseClicked$.subscribe((isCloseClicked) => {
            if (isCloseClicked) {
                this.router.navigate(['/skills', { outlets: { details: null } }]);
            }
        });
    }
    onDetailsRouterOutletActivate() {
        this.isSecondaryContentVisible = true;
        // console.log('activate');
    }
    onDetailsRouterOutletDeactivate() {
        this.isSecondaryContentVisible = false;
    }
    onPrimaryRouterOutletActivate() {
        // console.log('activate');
    }
    onPrimaryRouterOutletDeactivate() {
        // console.log('deactivate');
    }
    hamburgerMenuClickHandler() {
        // console.log('hamburgerMenuClickHandler');
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this._routerEventSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this._routeDataSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
IndexComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexComponent, deps: [{ token: i1.PageTitleService }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: i3.BreadcrumbService }, { token: i3.SecondaryHeaderService }, { token: BREADCRUMB_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
IndexComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: IndexComponent, selector: "app-index", providers: [PageTitleService], ngImport: i0, template: `
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
        <nav breadcrumb-content *ngIf="isBreadcrumbVisible" class="flex px-4 py-4 mx-auto border-b-2 border-gray-200 border-dashed max-w-7xl sm:px-6 lg:px-8" aria-label="Breadcrumb">
            <app-breadcrumb></app-breadcrumb>
        </nav>
        <router-outlet main-content
                (activate)="onPrimaryRouterOutletActivate()"
                (deactivate)="onPrimaryRouterOutletDeactivate()"></router-outlet>
        <router-outlet secondary-content
                (activate)="onDetailsRouterOutletActivate()"
                (deactivate)="onDetailsRouterOutletDeactivate()"
                name="details"></router-outlet>
    </app-two-column-layout>
  `, isInline: true, styles: ["\n      :host {\n        display: flex;\n        flex-direction: column;\n        flex: 1 1 0%;\n        height: 0px;\n        @apply border-l-2 border-r-2 border-gray-200 border-dashed;\n      }\n    "], components: [{ type: i3.TwoColumnLayoutComponent, selector: "app-two-column-layout", inputs: ["isSecondaryContentVisible"], outputs: ["hamburgerMenuClick"] }, { type: i3.PageHeadingComponent, selector: "app-page-heading", inputs: ["title", "description", "x-size", "x-color"] }, { type: i3.BreadcrumbComponent, selector: "app-breadcrumb" }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexComponent, decorators: [{
            type: Component,
            args: [{
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
        <nav breadcrumb-content *ngIf="isBreadcrumbVisible" class="flex px-4 py-4 mx-auto border-b-2 border-gray-200 border-dashed max-w-7xl sm:px-6 lg:px-8" aria-label="Breadcrumb">
            <app-breadcrumb></app-breadcrumb>
        </nav>
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
                }]
        }], ctorParameters: function () { return [{ type: i1.PageTitleService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.BreadcrumbService }, { type: i3.SecondaryHeaderService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [BREADCRUMB_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2tpbGxtZ3RsaWIvc3JjL2xpYi9wYWdlcy9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSx1QkFBdUIsRUFBMEQsTUFBTSxZQUFZLENBQUM7QUFJN0csT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQWdEbEUsTUFBTSxPQUFPLGNBQWM7SUFpQnZCLFlBQ1ksU0FBMkIsRUFDM0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGlCQUFvQyxFQUNwQyxzQkFBOEMsRUFDYixnQkFBK0I7UUFMaEUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUNiLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZTtRQW5CNUUsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFFbEMsOEJBQXlCLEdBQVksS0FBSyxDQUFDO1FBbUJ2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEQsQ0FBQztJQWZELElBQUksbUJBQW1CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQWVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBdUIsRUFBRSxFQUFFO1lBQzlFLElBQUksY0FBYyxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNyRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZCQUE2QjtRQUN6QixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLDJCQUEyQjtJQUMvQixDQUFDO0lBRUQsK0JBQStCO1FBQzNCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUNELDZCQUE2QjtRQUN6QiwyQkFBMkI7SUFDL0IsQ0FBQztJQUVELCtCQUErQjtRQUMzQiw2QkFBNkI7SUFDakMsQ0FBQztJQUVELHlCQUF5QjtRQUNyQiw0Q0FBNEM7SUFDaEQsQ0FBQztJQUNELFdBQVc7O1FBQ1AsTUFBQSxJQUFJLENBQUMsZUFBZSwwQ0FBRSxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFBLElBQUksQ0FBQyxhQUFhLDBDQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7OzRHQWhFUSxjQUFjLDZLQXVCWCx1QkFBdUI7Z0dBdkIxQixjQUFjLG9DQUZaLENBQUMsZ0JBQWdCLENBQUMsMEJBMUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJYOzRGQWNVLGNBQWM7a0JBOUMxQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCWDtvQkFDQyxNQUFNLEVBQUU7d0JBQ0o7Ozs7Ozs7O0tBUUg7cUJBQ0E7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2hDOzswQkF3QlEsTUFBTTsyQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQlJFQURDUlVNQl9DT05GSUdfVE9LRU4sIEJyZWFkY3J1bWJTZXJ2aWNlLCBJQnJlYWRjcnVtYiwgU2Vjb25kYXJ5SGVhZGVyU2VydmljZSB9IGZyb20gJ0BzaGFyZWRsaWInO1xuaW1wb3J0IHsgSVNraWxsQ2F0ZWdvcnkgfSBmcm9tICdAc2tpbGxsaWInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBhZ2VUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wYWdlLXRpdGxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1pbmRleCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIDxhcHAtcGFnZS1oZWFkaW5nLWxheW91dD5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICB7eyBwYWdlVGl0bGUkIHwgYXN5bmN9fVxuICAgICAgICA8L2gxPlxuICAgIDwvYXBwLXBhZ2UtaGVhZGluZy1sYXlvdXQ+IC0tPlxuICAgIDxhcHAtdHdvLWNvbHVtbi1sYXlvdXQgW2lzU2Vjb25kYXJ5Q29udGVudFZpc2libGVdPVwiaXNTZWNvbmRhcnlDb250ZW50VmlzaWJsZVwiIChoYW1idXJnZXJNZW51Q2xpY2spPVwiaGFtYnVyZ2VyTWVudUNsaWNrSGFuZGxlcigpXCI+XG4gICAgPCEtLSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgYm9yZGVyLWRhc2hlZCByb3VuZGVkLWxnIC0tPlxuICAgIDwhLS0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIC0tPlxuICAgICAgICA8YXBwLXBhZ2UtaGVhZGluZyB4LXNpemU9XCJsYXJnZVwiIHgtY29sb3I9XCJibGFja1wiIFt0aXRsZV09XCJwYWdlVGl0bGUkIHwgYXN5bmNcIiBbZGVzY3JpcHRpb25dPVwicGFnZVN1YlRpdGxlJCB8IGFzeW5jXCI+PC9hcHAtcGFnZS1oZWFkaW5nPlxuICAgICAgICA8ZGl2IGhlYWRlci1jb250ZW50IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICB7eyBwYWdlVGl0bGUkIHwgYXN5bmN9fVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGlkPVwibWVzc2FnZS1oZWFkaW5nXCIgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtbm9ybWFsIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAge3sgcGFnZVN1YlRpdGxlJCB8IGFzeW5jfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwhLS0gPGFwcC1za2lsbC1maWx0ZXIgW2NhdGVnb3JpZXNdPVwiY2F0ZWdvcmllc1wiPjwvYXBwLXNraWxsLWZpbHRlcj4gLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IGJyZWFkY3J1bWItY29udGVudCAqbmdJZj1cImlzQnJlYWRjcnVtYlZpc2libGVcIiBjbGFzcz1cImZsZXggcHgtNCBweS00IG14LWF1dG8gYm9yZGVyLWItMiBib3JkZXItZ3JheS0yMDAgYm9yZGVyLWRhc2hlZCBtYXgtdy03eGwgc206cHgtNiBsZzpweC04XCIgYXJpYS1sYWJlbD1cIkJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgIDxhcHAtYnJlYWRjcnVtYj48L2FwcC1icmVhZGNydW1iPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQgbWFpbi1jb250ZW50XG4gICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cIm9uUHJpbWFyeVJvdXRlck91dGxldEFjdGl2YXRlKClcIlxuICAgICAgICAgICAgICAgIChkZWFjdGl2YXRlKT1cIm9uUHJpbWFyeVJvdXRlck91dGxldERlYWN0aXZhdGUoKVwiPjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQgc2Vjb25kYXJ5LWNvbnRlbnRcbiAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVwib25EZXRhaWxzUm91dGVyT3V0bGV0QWN0aXZhdGUoKVwiXG4gICAgICAgICAgICAgICAgKGRlYWN0aXZhdGUpPVwib25EZXRhaWxzUm91dGVyT3V0bGV0RGVhY3RpdmF0ZSgpXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGV0YWlsc1wiPjwvcm91dGVyLW91dGxldD5cbiAgICA8L2FwcC10d28tY29sdW1uLWxheW91dD5cbiAgYCxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4OiAxIDEgMCU7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICBAYXBwbHkgYm9yZGVyLWwtMiBib3JkZXItci0yIGJvcmRlci1ncmF5LTIwMCBib3JkZXItZGFzaGVkO1xuICAgICAgfVxuICAgIGBcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1BhZ2VUaXRsZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEluZGV4Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcGFnZVRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHBhZ2VTdWJUaXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBjYXRlZ29yaWVzOiBJU2tpbGxDYXRlZ29yeVtdID0gW107XG5cbiAgICBpc1NlY29uZGFyeUNvbnRlbnRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9yb3V0ZXJFdmVudFN1YiE6IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9yb3V0ZURhdGFTdWIhOiBTdWJzY3JpcHRpb247XG5cbiAgICBwcml2YXRlIF9icmVhZGNydW1icyQ6IE9ic2VydmFibGU8SUJyZWFkY3J1bWJbXT47XG5cbiAgICBnZXQgaXNCcmVhZGNydW1iVmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWRjcnVtYkNvbmZpZy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2VUaXRsZTogUGFnZVRpdGxlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYnJlYWRjcnVtYlNlcnZpY2U6IEJyZWFkY3J1bWJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNlY29uZGFyeUhlYWRlclNlcnZpY2U6IFNlY29uZGFyeUhlYWRlclNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoQlJFQURDUlVNQl9DT05GSUdfVE9LRU4pIHByaXZhdGUgYnJlYWRjcnVtYkNvbmZpZzogSUJyZWFkY3J1bWJbXSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5wYWdlVGl0bGUkID0gdGhpcy5wYWdlVGl0bGUucGFnZVRpdGxlJDtcbiAgICAgICAgdGhpcy5wYWdlU3ViVGl0bGUkID0gdGhpcy5wYWdlVGl0bGUucGFnZVN1YlRpdGxlJDtcbiAgICAgICAgdGhpcy5fYnJlYWRjcnVtYnMkID0gdGhpcy5icmVhZGNydW1iU2VydmljZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5kYXRhLnN1YnNjcmliZSgoeyByZXNvbHZlclJlc3VsdDogeyBjYXRlZ29yaWVzIH0gfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZWNvbmRhcnlIZWFkZXJTZXJ2aWNlLmlzQ2xvc2VDbGlja2VkJC5zdWJzY3JpYmUoKGlzQ2xvc2VDbGlja2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNDbG9zZUNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9za2lsbHMnLCB7IG91dGxldHM6IHsgZGV0YWlsczogbnVsbCB9IH1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EZXRhaWxzUm91dGVyT3V0bGV0QWN0aXZhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNTZWNvbmRhcnlDb250ZW50VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhY3RpdmF0ZScpO1xuICAgIH1cblxuICAgIG9uRGV0YWlsc1JvdXRlck91dGxldERlYWN0aXZhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNTZWNvbmRhcnlDb250ZW50VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBvblByaW1hcnlSb3V0ZXJPdXRsZXRBY3RpdmF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FjdGl2YXRlJyk7XG4gICAgfVxuXG4gICAgb25QcmltYXJ5Um91dGVyT3V0bGV0RGVhY3RpdmF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RlYWN0aXZhdGUnKTtcbiAgICB9XG5cbiAgICBoYW1idXJnZXJNZW51Q2xpY2tIYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaGFtYnVyZ2VyTWVudUNsaWNrSGFuZGxlcicpO1xuICAgIH1cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyRXZlbnRTdWI/LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX3JvdXRlRGF0YVN1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cbiJdfQ==