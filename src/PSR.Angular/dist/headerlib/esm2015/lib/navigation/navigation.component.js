import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export class NavigationComponent {
    constructor() {
        this.menu = [];
        this.stacked = false;
    }
    ngOnInit() {
    }
    cssClass() {
        const classes = ['menu__item'];
        if (this.stacked) {
            classes.push('menu__item--stacked');
        }
        return classes.join(' ');
    }
}
NavigationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: NavigationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavigationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: NavigationComponent, selector: "app-navigation", inputs: { menu: "menu", stacked: "stacked" }, ngImport: i0, template: `
        <a [routerLink]="menuItem.routerLink()" routerLinkActive="menu__item--active"  class="{{ cssClass() }}" *ngFor="let menuItem of menu">
            {{menuItem.label}}
        </a>
    `, isInline: true, styles: ["\n        :host-context(.desktop-menu) {\n            @apply flex space-x-4;\n        }\n\n        :host-context(.mobile-menu) {\n            @apply block px-2 pt-2 pb-3 space-y-1;\n        }\n\n        .menu {\n            &__item {\n                @apply px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white;\n\n                &--active {\n                    @apply bg-gray-900 text-white;\n                }\n\n                &--stacked {\n                    @apply block text-base;\n                }\n            }\n        }\n\n    "], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: NavigationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-navigation',
                    template: `
        <a [routerLink]="menuItem.routerLink()" routerLinkActive="menu__item--active"  class="{{ cssClass() }}" *ngFor="let menuItem of menu">
            {{menuItem.label}}
        </a>
    `,
                    styles: [`
        :host-context(.desktop-menu) {
            @apply flex space-x-4;
        }

        :host-context(.mobile-menu) {
            @apply block px-2 pt-2 pb-3 space-y-1;
        }

        .menu {
            &__item {
                @apply px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white;

                &--active {
                    @apply bg-gray-900 text-white;
                }

                &--stacked {
                    @apply block text-base;
                }
            }
        }

    `]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { menu: [{
                type: Input
            }], stacked: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZWFkZXJsaWIvc3JjL2xpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBbUN6RCxNQUFNLE9BQU8sbUJBQW1CO0lBSzVCO1FBSFMsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO0lBRWxCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUvQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdkM7UUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7aUhBbEJRLG1CQUFtQjtxR0FBbkIsbUJBQW1CLG9HQTlCbEI7Ozs7S0FJVDs0RkEwQlEsbUJBQW1CO2tCQWhDL0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Ozs7S0FJVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QlIsQ0FBQztpQkFDTDswRUFHWSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnQHNoYXJlZGxpYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLW5hdmlnYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJtZW51SXRlbS5yb3V0ZXJMaW5rKClcIiByb3V0ZXJMaW5rQWN0aXZlPVwibWVudV9faXRlbS0tYWN0aXZlXCIgIGNsYXNzPVwie3sgY3NzQ2xhc3MoKSB9fVwiICpuZ0Zvcj1cImxldCBtZW51SXRlbSBvZiBtZW51XCI+XHJcbiAgICAgICAgICAgIHt7bWVudUl0ZW0ubGFiZWx9fVxyXG4gICAgICAgIDwvYT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgOmhvc3QtY29udGV4dCguZGVza3RvcC1tZW51KSB7XHJcbiAgICAgICAgICAgIEBhcHBseSBmbGV4IHNwYWNlLXgtNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpob3N0LWNvbnRleHQoLm1vYmlsZS1tZW51KSB7XHJcbiAgICAgICAgICAgIEBhcHBseSBibG9jayBweC0yIHB0LTIgcGItMyBzcGFjZS15LTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgQGFwcGx5IHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS0zMDAgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICYtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGFwcGx5IGJnLWdyYXktOTAwIHRleHQtd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi0tc3RhY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGFwcGx5IGJsb2NrIHRleHQtYmFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCkgbWVudTogTWVudUl0ZW1bXSA9IFtdO1xyXG4gICAgQElucHV0KCkgc3RhY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgY3NzQ2xhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsnbWVudV9faXRlbSddO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnbWVudV9faXRlbS0tc3RhY2tlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==