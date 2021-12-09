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
ContextMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ContextMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContextMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: ContextMenuComponent, selector: "app-context-menu", inputs: { handle: "handle", menuItems: "menuItems" }, outputs: { menuItemClick: "menuItemClick" }, ngImport: i0, template: "<div class=\"mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none\"\r\n     role=\"menu\" aria-orientation=\"vertical\" aria-labelledby=\"menu-0-button\" tabindex=\"-1\">\r\n    <div class=\"py-1\" role=\"none\">\r\n        <!-- Active: \"bg-gray-100 text-gray-900\", Not Active: \"text-gray-700\" -->\r\n        <!-- -->\r\n        <ng-container *ngFor=\"let item of menuItems\">\r\n            <app-link-icon (linkClick)=\"onLinkClick(item)\" [menuItem]=\"item\" [iconClass]=\"'mr-3 opacity-70'\"\r\n                           class=\"text-gray-700 hover:text-indigo-700\">\r\n            </app-link-icon>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n", styles: [":host{z-index:20;display:block}\n"], components: [{ type: i1.LinkIconComponent, selector: "app-link-icon", inputs: ["menuItem", "iconClass"], outputs: ["linkClick"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ContextMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-context-menu',
                    templateUrl: './context-menu.component.html',
                    styleUrls: ['./context-menu.component.css'],
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { handle: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], menuItemClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi90ZW1wL3NyYy9saWIvY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVcvRSxNQUFNLE9BQU8sb0JBQW9CO0lBTTdCO1FBSFMsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUE4QixDQUFDO0lBRXpELENBQUM7SUFFakIsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsTUFBTSwyQ0FBMkMsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDOztrSEFoQlEsb0JBQW9CO3NHQUFwQixvQkFBb0IsMkpDWGpDLDJzQkFZQTs0RkREYSxvQkFBb0I7a0JBTmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7b0JBQzNDLG1EQUFtRDtpQkFDdEQ7MEVBR1ksTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0ksYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51L21lbnUubW9kZWwnO1xuaW1wb3J0IHsgSUNvbnRleHRNZW51SXRlbUNsaWNrRXZlbnQgfSBmcm9tICcuL2NvbnRleHQtbWVudS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNvbnRleHQtbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5jc3MnXSxcbiAgICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaGFuZGxlOiBTeW1ib2wgfCB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgbWVudUl0ZW1zOiBNZW51SXRlbVtdID0gW107XG4gICAgQE91dHB1dCgpIG1lbnVJdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPElDb250ZXh0TWVudUl0ZW1DbGlja0V2ZW50PigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlKSB7XG4gICAgICAgICAgICB0aHJvdyAnQSBoYW5kbGUgaXMgcmVxdWlyZWQgZm9yIHRoZSBjb250ZXh0IG1lbnUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25MaW5rQ2xpY2sobWVudUl0ZW06IE1lbnVJdGVtKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZSkgdGhpcy5tZW51SXRlbUNsaWNrLmVtaXQoeyBtZW51SXRlbSwgaGFuZGxlOiB0aGlzLmhhbmRsZSB9KTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtdC0yIG9yaWdpbi10b3AtcmlnaHQgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICByb2xlPVwibWVudVwiIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGFyaWEtbGFiZWxsZWRieT1cIm1lbnUtMC1idXR0b25cIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHktMVwiIHJvbGU9XCJub25lXCI+XHJcbiAgICAgICAgPCEtLSBBY3RpdmU6IFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMFwiLCBOb3QgQWN0aXZlOiBcInRleHQtZ3JheS03MDBcIiAtLT5cclxuICAgICAgICA8IS0tIC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWVudUl0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxhcHAtbGluay1pY29uIChsaW5rQ2xpY2spPVwib25MaW5rQ2xpY2soaXRlbSlcIiBbbWVudUl0ZW1dPVwiaXRlbVwiIFtpY29uQ2xhc3NdPVwiJ21yLTMgb3BhY2l0eS03MCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1pbmRpZ28tNzAwXCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWxpbmstaWNvbj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19