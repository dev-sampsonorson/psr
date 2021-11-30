import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../link-icon/link-icon.component";
import * as i2 from "@angular/common";
export class ContextMenuComponent {
    constructor() {
        this.menuItems = [];
        this.menuItemClick = new EventEmitter();
    }
    ngOnInit() {
        if (!this.handle) {
            throw 'A handle is required for the context menu';
        }
    }
    onLinkClick(menuItem) {
        if (this.handle)
            this.menuItemClick.emit({ menuItem, handle: this.handle });
    }
}
ContextMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ContextMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContextMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: ContextMenuComponent, selector: "app-context-menu", inputs: { handle: "handle", menuItems: "menuItems" }, outputs: { menuItemClick: "menuItemClick" }, ngImport: i0, template: `
    <!--  -->
    <div class="mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
         role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
        <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <!-- -->
            <ng-container *ngFor="let item of menuItems">
                <app-link-icon (linkClick)="onLinkClick(item)" [menuItem]="item" [iconClass]="'mr-3 opacity-70'"
                               class="text-gray-700 hover:text-indigo-700">
                </app-link-icon>
            </ng-container>
        </div>
    </div>
  `, isInline: true, styles: ["\n      :host {\n        @apply block z-20;\n      }\n    "], components: [{ type: i1.LinkIconComponent, selector: "app-link-icon", inputs: ["menuItem", "iconClass"], outputs: ["linkClick"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ContextMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-context-menu',
                    template: `
    <!--  -->
    <div class="mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
         role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
        <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <!-- -->
            <ng-container *ngFor="let item of menuItems">
                <app-link-icon (linkClick)="onLinkClick(item)" [menuItem]="item" [iconClass]="'mr-3 opacity-70'"
                               class="text-gray-700 hover:text-indigo-700">
                </app-link-icon>
            </ng-container>
        </div>
    </div>
  `,
                    styles: [
                        `
      :host {
        @apply block z-20;
      }
    `
                    ],
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { handle: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], menuItemClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi9zcmMvbGliL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUErQi9FLE1BQU0sT0FBTyxvQkFBb0I7SUFNN0I7UUFIUyxjQUFTLEdBQWUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7SUFFekQsQ0FBQztJQUVqQixRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxNQUFNLDJDQUEyQyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFrQjtRQUMxQixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7O2tIQWhCUSxvQkFBb0I7c0dBQXBCLG9CQUFvQiwySkF4Qm5COzs7Ozs7Ozs7Ozs7OztHQWNYOzRGQVVVLG9CQUFvQjtrQkExQmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNYO29CQUNDLE1BQU0sRUFBRTt3QkFDSjs7OztLQUlIO3FCQUNBO29CQUNELG1EQUFtRDtpQkFDdEQ7MEVBR1ksTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0ksYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51L21lbnUubW9kZWwnO1xuaW1wb3J0IHsgSUNvbnRleHRNZW51SXRlbUNsaWNrRXZlbnQgfSBmcm9tICcuL2NvbnRleHQtbWVudS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNvbnRleHQtbWVudScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8IS0tICAtLT5cbiAgICA8ZGl2IGNsYXNzPVwibXQtMiBvcmlnaW4tdG9wLXJpZ2h0IGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LWxnIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICByb2xlPVwibWVudVwiIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGFyaWEtbGFiZWxsZWRieT1cIm1lbnUtMC1idXR0b25cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJweS0xXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICAgIDwhLS0gQWN0aXZlOiBcImJnLWdyYXktMTAwIHRleHQtZ3JheS05MDBcIiwgTm90IEFjdGl2ZTogXCJ0ZXh0LWdyYXktNzAwXCIgLS0+XG4gICAgICAgICAgICA8IS0tIC0tPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtZW51SXRlbXNcIj5cbiAgICAgICAgICAgICAgICA8YXBwLWxpbmstaWNvbiAobGlua0NsaWNrKT1cIm9uTGlua0NsaWNrKGl0ZW0pXCIgW21lbnVJdGVtXT1cIml0ZW1cIiBbaWNvbkNsYXNzXT1cIidtci0zIG9wYWNpdHktNzAnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1pbmRpZ28tNzAwXCI+XG4gICAgICAgICAgICAgICAgPC9hcHAtbGluay1pY29uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSBibG9jayB6LTIwO1xuICAgICAgfVxuICAgIGBcbiAgICBdLFxuICAgIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBoYW5kbGU6IFN5bWJvbCB8IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBtZW51SXRlbXM6IE1lbnVJdGVtW10gPSBbXTtcbiAgICBAT3V0cHV0KCkgbWVudUl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8SUNvbnRleHRNZW51SXRlbUNsaWNrRXZlbnQ+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYW5kbGUpIHtcbiAgICAgICAgICAgIHRocm93ICdBIGhhbmRsZSBpcyByZXF1aXJlZCBmb3IgdGhlIGNvbnRleHQgbWVudSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxpbmtDbGljayhtZW51SXRlbTogTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlKSB0aGlzLm1lbnVJdGVtQ2xpY2suZW1pdCh7IG1lbnVJdGVtLCBoYW5kbGU6IHRoaXMuaGFuZGxlIH0pO1xuICAgIH1cblxufVxuIl19