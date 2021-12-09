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
NavigationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: NavigationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavigationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: NavigationComponent, selector: "app-navigation", inputs: { menu: "menu", stacked: "stacked" }, ngImport: i0, template: `
        <a [routerLink]="menuItem.routerLink()" routerLinkActive="menu__item--active"  class="{{ cssClass() }}" *ngFor="let menuItem of menu">
            {{menuItem.label}}
        </a>
    `, isInline: true, styles: [":host-context(.desktop-menu){display:flex}:host-context(.desktop-menu)>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}:host-context(.mobile-menu){display:block}:host-context(.mobile-menu)>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}:host-context(.mobile-menu){padding:.5rem .5rem .75rem}.menu__item{border-radius:.375rem}.menu__item:hover{--tw-bg-opacity: 1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.menu__item{padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgba(209,213,219,var(--tw-text-opacity))}.menu__item:hover{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.menu__item--active{--tw-bg-opacity: 1;background-color:rgba(17,24,39,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.menu__item--stacked{display:block;font-size:1rem;line-height:1.5rem}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: NavigationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-navigation',
                    template: `
        <a [routerLink]="menuItem.routerLink()" routerLinkActive="menu__item--active"  class="{{ cssClass() }}" *ngFor="let menuItem of menu">
            {{menuItem.label}}
        </a>
    `,
                    styleUrls: ['./navigation.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { menu: [{
                type: Input
            }], stacked: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZWFkZXJsaWIvdGVtcC9zcmMvbGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZekQsTUFBTSxPQUFPLG1CQUFtQjtJQUs1QjtRQUhTLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUVsQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2lIQWxCUSxtQkFBbUI7cUdBQW5CLG1CQUFtQixvR0FQbEI7Ozs7S0FJVDs0RkFHUSxtQkFBbUI7a0JBVC9CLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFOzs7O0tBSVQ7b0JBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQzVDOzBFQUdZLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdAc2hhcmVkbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtbmF2aWdhdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIm1lbnVJdGVtLnJvdXRlckxpbmsoKVwiIHJvdXRlckxpbmtBY3RpdmU9XCJtZW51X19pdGVtLS1hY3RpdmVcIiAgY2xhc3M9XCJ7eyBjc3NDbGFzcygpIH19XCIgKm5nRm9yPVwibGV0IG1lbnVJdGVtIG9mIG1lbnVcIj5cclxuICAgICAgICAgICAge3ttZW51SXRlbS5sYWJlbH19XHJcbiAgICAgICAgPC9hPlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczogWycuL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBtZW51OiBNZW51SXRlbVtdID0gW107XHJcbiAgICBASW5wdXQoKSBzdGFja2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBjc3NDbGFzcygpIHtcclxuICAgICAgICBjb25zdCBjbGFzc2VzID0gWydtZW51X19pdGVtJ107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YWNrZWQpIHtcclxuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdtZW51X19pdGVtLS1zdGFja2VkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19