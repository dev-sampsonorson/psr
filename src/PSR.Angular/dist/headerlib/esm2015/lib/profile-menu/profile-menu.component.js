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
ProfileMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuComponent, deps: [{ token: i1.ProfileMenuService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
ProfileMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: ProfileMenuComponent, selector: "app-profile-menu", inputs: { user: "user", menuItems: "menuItems" }, host: { listeners: { "document:keydown": "onHandleEscape($event)" } }, ngImport: i0, template: `
        <app-profile-display *ngIf="user" [user]="user"></app-profile-display>
        <button *ngIf="isDropdownOpen" (click)="onHideDropdown()" class="close-overlay" tabindex="-1"></button>
        <app-context-menu
            *ngIf="isDropdownOpen"
            [menuItems]="menuItems"
            (menuItemClick)="onMenuItemClick($event)"
            class="absolute right-0 w-48">
        </app-context-menu>
    `, isInline: true, styles: ["\n        :host {\n            @apply relative;\n        }\n    "], components: [{ type: i3.ProfileDisplayComponent, selector: "app-profile-display", inputs: ["user"] }, { type: i4.ContextMenuComponent, selector: "app-context-menu", inputs: ["handle", "menuItems"], outputs: ["menuItemClick"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-profile-menu',
                    template: `
        <app-profile-display *ngIf="user" [user]="user"></app-profile-display>
        <button *ngIf="isDropdownOpen" (click)="onHideDropdown()" class="close-overlay" tabindex="-1"></button>
        <app-context-menu
            *ngIf="isDropdownOpen"
            [menuItems]="menuItems"
            (menuItemClick)="onMenuItemClick($event)"
            class="absolute right-0 w-48">
        </app-context-menu>
    `,
                    styles: [`
        :host {
            @apply relative;
        }
    `]
                }]
        }], ctorParameters: function () { return [{ type: i1.ProfileMenuService }, { type: i2.Router }]; }, propDecorators: { user: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], onHandleEscape: [{
                type: HostListener,
                args: ['document:keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi9zcmMvbGliL3Byb2ZpbGUtbWVudS9wcm9maWxlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFRbEYsNENBQTRDO0FBbUI1QyxNQUFNLE9BQU8sb0JBQW9CO0lBVzdCLFlBQ1ksT0FBMkIsRUFDM0IsTUFBYztRQURkLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYakIsU0FBSSxHQUFpQixJQUFJLENBQUM7UUFLNUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFOUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQU1oQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSDs7O2tCQUdVO0lBQ2QsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxlQUFlLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUE4QjtRQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFHRCxjQUFjLENBQUMsQ0FBZ0I7UUFDM0IsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQzs7a0hBOUNRLG9CQUFvQjtzR0FBcEIsb0JBQW9CLGlMQWhCbkI7Ozs7Ozs7OztLQVNUOzRGQU9RLG9CQUFvQjtrQkFsQmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7S0FTVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQzs7OztLQUlSLENBQUM7aUJBQ0w7OEhBR1ksSUFBSTtzQkFBWixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBNkJOLGNBQWM7c0JBRGIsWUFBWTt1QkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdAY29yZWxpYic7XHJcbmltcG9ydCB7IElDb250ZXh0TWVudUl0ZW1DbGlja0V2ZW50LCBNZW51SXRlbSB9IGZyb20gJ0BzaGFyZWRsaWInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVNZW51U2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS1tZW51LnNlcnZpY2UnO1xyXG5cclxuLy8gKGlzRHJvcGRvd25PcGVuKT1cInRvZ2dsZURyb3Bkb3duKCRldmVudClcIlxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXByb2ZpbGUtbWVudScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhcHAtcHJvZmlsZS1kaXNwbGF5ICpuZ0lmPVwidXNlclwiIFt1c2VyXT1cInVzZXJcIj48L2FwcC1wcm9maWxlLWRpc3BsYXk+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzRHJvcGRvd25PcGVuXCIgKGNsaWNrKT1cIm9uSGlkZURyb3Bkb3duKClcIiBjbGFzcz1cImNsb3NlLW92ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGFwcC1jb250ZXh0LW1lbnVcclxuICAgICAgICAgICAgKm5nSWY9XCJpc0Ryb3Bkb3duT3BlblwiXHJcbiAgICAgICAgICAgIFttZW51SXRlbXNdPVwibWVudUl0ZW1zXCJcclxuICAgICAgICAgICAgKG1lbnVJdGVtQ2xpY2spPVwib25NZW51SXRlbUNsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgdy00OFwiPlxyXG4gICAgICAgIDwvYXBwLWNvbnRleHQtbWVudT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgICBAYXBwbHkgcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIHVzZXI6IElVc2VyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRVc2VyU3ViITogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgb3BlblN0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICBwdWJsaWMgaXNEcm9wZG93bk9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBtZW51SXRlbXM6IE1lbnVJdGVtW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNlcnZpY2U6IFByb2ZpbGVNZW51U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm9wZW5TdGF0dXMkID0gdGhpcy5zZXJ2aWNlLm9wZW5TdGF0dXMkO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3BlblN0YXR1cyQuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcm9wZG93bk9wZW4gPSBzdGF0dXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyogdGhpcy5nZXRVc2VyU3ViID0gdGhpcy5hdXRoLmdldFVzZXIoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgICAgICAgfSk7ICovXHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZU9wZW5TdGF0dXMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWVudUl0ZW1DbGljayh7IG1lbnVJdGVtLCBoYW5kbGUgfTogSUNvbnRleHRNZW51SXRlbUNsaWNrRXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlT3BlblN0YXR1cyhmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobWVudUl0ZW0ucm91dGVyTGluaygpIGFzIGFueVtdKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcclxuICAgIG9uSGFuZGxlRXNjYXBlKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlT3BlblN0YXR1cyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlclN1YiAmJiB0aGlzLmdldFVzZXJTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=