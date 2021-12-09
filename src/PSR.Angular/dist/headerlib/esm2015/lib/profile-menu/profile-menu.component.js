import { Component, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./profile-menu.service";
import * as i2 from "@angular/router";
import * as i3 from "../profile-display/profile-display.component";
import * as i4 from "@sharedlib";
import * as i5 from "@angular/common";
// (isDropdownOpen)="toggleDropdown($event)"
export class ProfileMenuComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.user = null;
        this.isDropdownOpen = false;
        this.contextMenuHandle = Symbol('profileMenuContextMenuHandle');
        this.menuItems = [];
        this.openStatus$ = this.service.openStatus$;
    }
    ngOnInit() {
        this.openStatus$.subscribe(status => {
            this.isDropdownOpen = status;
        });
        /* this.getUserSub = this.auth.getUser()
            .subscribe(user => {
                this.user = user;
            }); */
    }
    onHideDropdown() {
        this.service.changeOpenStatus(false);
    }
    onMenuItemClick({ menuItem, handle }) {
        this.service.changeOpenStatus(false);
        this.router.navigate(menuItem.routerLink());
    }
    onHandleEscape(e) {
        if (e.key === 'Esc' || e.key === 'Escape') {
            this.service.changeOpenStatus(false);
        }
    }
    ngOnDestroy() {
        this.getUserSub && this.getUserSub.unsubscribe();
    }
}
ProfileMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ProfileMenuComponent, deps: [{ token: i1.ProfileMenuService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
ProfileMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: ProfileMenuComponent, selector: "app-profile-menu", inputs: { user: "user", menuItems: "menuItems" }, host: { listeners: { "document:keydown": "onHandleEscape($event)" } }, ngImport: i0, template: `
        <app-profile-display *ngIf="user" [user]="user"></app-profile-display>
        <button *ngIf="isDropdownOpen" (click)="onHideDropdown()" class="close-overlay" tabindex="-1"></button>
        <app-context-menu
            *ngIf="isDropdownOpen"
            [handle]="contextMenuHandle"
            [menuItems]="menuItems"
            (menuItemClick)="onMenuItemClick($event)"
            class="absolute right-0 w-48">
        </app-context-menu>
    `, isInline: true, styles: [":host{position:relative}\n"], components: [{ type: i3.ProfileDisplayComponent, selector: "app-profile-display", inputs: ["user"] }, { type: i4.ContextMenuComponent, selector: "app-context-menu", inputs: ["handle", "menuItems"], outputs: ["menuItemClick"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ProfileMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-profile-menu',
                    template: `
        <app-profile-display *ngIf="user" [user]="user"></app-profile-display>
        <button *ngIf="isDropdownOpen" (click)="onHideDropdown()" class="close-overlay" tabindex="-1"></button>
        <app-context-menu
            *ngIf="isDropdownOpen"
            [handle]="contextMenuHandle"
            [menuItems]="menuItems"
            (menuItemClick)="onMenuItemClick($event)"
            class="absolute right-0 w-48">
        </app-context-menu>
    `,
                    styleUrls: ['./profile-menu.component.css']
                }]
        }], ctorParameters: function () { return [{ type: i1.ProfileMenuService }, { type: i2.Router }]; }, propDecorators: { user: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], onHandleEscape: [{
                type: HostListener,
                args: ['document:keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi90ZW1wL3NyYy9saWIvcHJvZmlsZS1tZW51L3Byb2ZpbGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVFsRiw0Q0FBNEM7QUFnQjVDLE1BQU0sT0FBTyxvQkFBb0I7SUFZN0IsWUFDWSxPQUEyQixFQUMzQixNQUFjO1FBRGQsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVpqQixTQUFJLEdBQWlCLElBQUksQ0FBQztRQUs1QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxzQkFBaUIsR0FBVyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUVqRSxjQUFTLEdBQWUsRUFBRSxDQUFDO1FBTWhDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDaEQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNIOzs7a0JBR1U7SUFDZCxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQThCO1FBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBVyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUdELGNBQWMsQ0FBQyxDQUFnQjtRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDOztrSEEvQ1Esb0JBQW9CO3NHQUFwQixvQkFBb0IsaUxBYm5COzs7Ozs7Ozs7O0tBVVQ7NEZBR1Esb0JBQW9CO2tCQWZoQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7OztLQVVUO29CQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM5Qzs4SEFHWSxJQUFJO3NCQUFaLEtBQUs7Z0JBUUcsU0FBUztzQkFBakIsS0FBSztnQkE2Qk4sY0FBYztzQkFEYixZQUFZO3VCQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJ0Bjb3JlbGliJztcclxuaW1wb3J0IHsgSUNvbnRleHRNZW51SXRlbUNsaWNrRXZlbnQsIE1lbnVJdGVtIH0gZnJvbSAnQHNoYXJlZGxpYic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZU1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9maWxlLW1lbnUuc2VydmljZSc7XHJcblxyXG4vLyAoaXNEcm9wZG93bk9wZW4pPVwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KVwiXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcHJvZmlsZS1tZW51JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGFwcC1wcm9maWxlLWRpc3BsYXkgKm5nSWY9XCJ1c2VyXCIgW3VzZXJdPVwidXNlclwiPjwvYXBwLXByb2ZpbGUtZGlzcGxheT5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNEcm9wZG93bk9wZW5cIiAoY2xpY2spPVwib25IaWRlRHJvcGRvd24oKVwiIGNsYXNzPVwiY2xvc2Utb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIj48L2J1dHRvbj5cclxuICAgICAgICA8YXBwLWNvbnRleHQtbWVudVxyXG4gICAgICAgICAgICAqbmdJZj1cImlzRHJvcGRvd25PcGVuXCJcclxuICAgICAgICAgICAgW2hhbmRsZV09XCJjb250ZXh0TWVudUhhbmRsZVwiXHJcbiAgICAgICAgICAgIFttZW51SXRlbXNdPVwibWVudUl0ZW1zXCJcclxuICAgICAgICAgICAgKG1lbnVJdGVtQ2xpY2spPVwib25NZW51SXRlbUNsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgdy00OFwiPlxyXG4gICAgICAgIDwvYXBwLWNvbnRleHQtbWVudT5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLW1lbnUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSB1c2VyOiBJVXNlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ2V0VXNlclN1YiE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIG9wZW5TdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgcHVibGljIGlzRHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY29udGV4dE1lbnVIYW5kbGU6IFN5bWJvbCA9IFN5bWJvbCgncHJvZmlsZU1lbnVDb250ZXh0TWVudUhhbmRsZScpO1xyXG5cclxuICAgIEBJbnB1dCgpIG1lbnVJdGVtczogTWVudUl0ZW1bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2VydmljZTogUHJvZmlsZU1lbnVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMub3BlblN0YXR1cyQgPSB0aGlzLnNlcnZpY2Uub3BlblN0YXR1cyQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcGVuU3RhdHVzJC5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0Ryb3Bkb3duT3BlbiA9IHN0YXR1cztcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKiB0aGlzLmdldFVzZXJTdWIgPSB0aGlzLmF1dGguZ2V0VXNlcigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICB9KTsgKi9cclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGVEcm9wZG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlT3BlblN0YXR1cyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NZW51SXRlbUNsaWNrKHsgbWVudUl0ZW0sIGhhbmRsZSB9OiBJQ29udGV4dE1lbnVJdGVtQ2xpY2tFdmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2VPcGVuU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShtZW51SXRlbS5yb3V0ZXJMaW5rKCkgYXMgYW55W10pO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxyXG4gICAgb25IYW5kbGVFc2NhcGUoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VzYycgfHwgZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2VPcGVuU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VyU3ViICYmIHRoaXMuZ2V0VXNlclN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==