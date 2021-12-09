import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./breadcrumb.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
export class BreadcrumbComponent {
    constructor(breadcrumbService, router) {
        this.breadcrumbService = breadcrumbService;
        this.router = router;
        this.breadcrumbs = [];
        this.breadcrumbs$ = this.breadcrumbService;
    }
    get isBreadcrumbVisible() {
        return this.breadcrumbs.length > 0;
    }
    ngOnInit() {
        // console.log('ngOnInit');
        this._breadcrumbSub = this.breadcrumbs$.subscribe(breadcrumbs => {
            this.breadcrumbs = breadcrumbs;
        });
    }
    onBreadcrumbMenuItemClick(item) {
        this.router.navigateByUrl(item.newRoute);
    }
    ngOnDestroy() {
        var _a;
        // console.log('ngOnDestroy');
        (_a = this._breadcrumbSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbComponent, deps: [{ token: i1.BreadcrumbService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: BreadcrumbComponent, selector: "app-breadcrumb", ngImport: i0, template: "<ol *ngIf=\"isBreadcrumbVisible\" role=\"list\" class=\"flex items-center space-x-4\">\n    <li>\n        <div>\n            <a [routerLink]=\"['/']\" class=\"text-gray-400 hover:text-gray-500\">\n                <!-- Heroicon name: solid/home -->\n                <svg class=\"flex-shrink-0 w-5 h-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"\n                     fill=\"currentColor\" aria-hidden=\"true\">\n                    <path\n                          d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\" />\n                </svg>\n                <span class=\"sr-only\">Home</span>\n            </a>\n        </div>\n    </li>\n\n    <ng-container *ngFor=\"let item of breadcrumbs\">\n        <li>\n            <div class=\"flex items-center\">\n                <svg class=\"flex-shrink-0 w-5 h-5 text-gray-300\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"\n                     viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n                    <path d=\"M5.555 17.776l8-16 .894.448-8 16-.894-.448z\" />\n                </svg>\n                <!-- <a [routerLink]=\"item.route\" class=\"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700\">{{\n                    item.label }}</a> -->\n                <!-- [item.newRoute, { outlets: { details: null } }] -->\n                <a routerLink=\"{{item.newRoute}}\"\n                   class=\"ml-4 text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700\">{{\n                    item.label }}</a>\n                <!-- <a (click)=\"onBreadcrumbMenuItemClick(item)\"\n                   class=\"ml-4 text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700\">{{\n                    item.label }}</a> -->\n            </div>\n        </li>\n    </ng-container>\n</ol>\n", styles: [":host{display:block}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-breadcrumb',
                    templateUrl: './breadcrumb.component.html',
                    styleUrls: ['./breadcrumb.component.css']
                }]
        }], ctorParameters: function () { return [{ type: i1.BreadcrumbService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFZN0QsTUFBTSxPQUFPLG1CQUFtQjtJQVc1QixZQUNZLGlCQUFvQyxFQUNwQyxNQUFjO1FBRGQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVjFCLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQVk1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0lBVEQsSUFBSSxtQkFBbUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVNELFFBQVE7UUFDSiwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxJQUFpQjtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVc7O1FBQ1AsOEJBQThCO1FBQzlCLE1BQUEsSUFBSSxDQUFDLGNBQWMsMENBQUUsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7aUhBakNRLG1CQUFtQjtxR0FBbkIsbUJBQW1CLHNEQ1poQywwNURBbUNBOzRGRHZCYSxtQkFBbUI7a0JBTC9CLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJQnJlYWRjcnVtYiB9IGZyb20gJy4vYnJlYWRjcnVtYi5tb2RlbCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYnJlYWRjcnVtYi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtYnJlYWRjcnVtYicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBicmVhZGNydW1icyQ6IE9ic2VydmFibGU8SUJyZWFkY3J1bWJbXT47XG4gICAgYnJlYWRjcnVtYnM6IElCcmVhZGNydW1iW10gPSBbXTtcblxuICAgIHByaXZhdGUgX2JyZWFkY3J1bWJTdWIhOiBTdWJzY3JpcHRpb247XG5cbiAgICBnZXQgaXNCcmVhZGNydW1iVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWRjcnVtYnMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBicmVhZGNydW1iU2VydmljZTogQnJlYWRjcnVtYlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5icmVhZGNydW1icyQgPSB0aGlzLmJyZWFkY3J1bWJTZXJ2aWNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbmdPbkluaXQnKTtcbiAgICAgICAgdGhpcy5fYnJlYWRjcnVtYlN1YiA9IHRoaXMuYnJlYWRjcnVtYnMkLnN1YnNjcmliZShicmVhZGNydW1icyA9PiB7XG4gICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gYnJlYWRjcnVtYnM7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgb25CcmVhZGNydW1iTWVudUl0ZW1DbGljayhpdGVtOiBJQnJlYWRjcnVtYik6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0ubmV3Um91dGUpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbmdPbkRlc3Ryb3knKTtcbiAgICAgICAgdGhpcy5fYnJlYWRjcnVtYlN1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cbiIsIjxvbCAqbmdJZj1cImlzQnJlYWRjcnVtYlZpc2libGVcIiByb2xlPVwibGlzdFwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgPGxpPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIiBjbGFzcz1cInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gSGVyb2ljb24gbmFtZTogc29saWQvaG9tZSAtLT5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZmxleC1zaHJpbmstMCB3LTUgaC01XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLjcwNyAyLjI5M2ExIDEgMCAwMC0xLjQxNCAwbC03IDdhMSAxIDAgMDAxLjQxNCAxLjQxNEw0IDEwLjQxNFYxN2ExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi0yYTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2MmExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi02LjU4NmwuMjkzLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0bC03LTd6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ib21lPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBicmVhZGNydW1ic1wiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZmxleC1zaHJpbmstMCB3LTUgaC01IHRleHQtZ3JheS0zMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS41NTUgMTcuNzc2bDgtMTYgLjg5NC40NDgtOCAxNi0uODk0LS40NDh6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8IS0tIDxhIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVcIiBjbGFzcz1cIm1sLTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIj57e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19PC9hPiAtLT5cbiAgICAgICAgICAgICAgICA8IS0tIFtpdGVtLm5ld1JvdXRlLCB7IG91dGxldHM6IHsgZGV0YWlsczogbnVsbCB9IH1dIC0tPlxuICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCJ7e2l0ZW0ubmV3Um91dGV9fVwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtbC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWdyYXktNzAwXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCB9fTwvYT5cbiAgICAgICAgICAgICAgICA8IS0tIDxhIChjbGljayk9XCJvbkJyZWFkY3J1bWJNZW51SXRlbUNsaWNrKGl0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtZ3JheS03MDBcIj57e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19PC9hPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9vbD5cbiJdfQ==