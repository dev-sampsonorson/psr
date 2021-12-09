import { Component, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../profile-menu/profile-menu.service";
export class ProfileDisplayComponent {
    constructor(service) {
        this.service = service;
        this.openStatusSubscription = undefined;
        this.user = null;
        this.openStatus$ = this.service.openStatus$;
    }
    ngOnInit() {
    }
    toggleDropdown() {
        this.openStatusSubscription = this.openStatus$.pipe(take(1))
            .subscribe(status => {
            this.service.changeOpenStatus(!status);
        });
    }
    ngOnDestroy() {
        var _a;
        this.openStatusSubscription && ((_a = this.openStatusSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe());
    }
}
ProfileDisplayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ProfileDisplayComponent, deps: [{ token: i1.ProfileMenuService }], target: i0.ɵɵFactoryTarget.Component });
ProfileDisplayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: ProfileDisplayComponent, selector: "app-profile-display", inputs: { user: "user" }, ngImport: i0, template: `
        <div class="profile-display">
            <button (click)="toggleDropdown()" type="button" class="profile-display__button" id="profile-menu-button"
                    aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open profile menu</span>
                <span class="profile-display__welcome">Welcome {{ user?.firstName }}</span>
                <!-- <h1 *ngIf="user">Welcome {{ user?.firstName }}</h1> -->
            </button>
        </div>
    `, isInline: true, styles: [".profile-display{position:relative;z-index:10}.profile-display__button{display:flex;align-items:center}.profile-display__button>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.profile-display__button{border-radius:9999px;--tw-bg-opacity: 1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.profile-display__button:focus{outline:2px solid transparent;outline-offset:2px}.profile-display__button{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.profile-display__welcome{border-radius:.375rem;padding:.5rem .75rem;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgba(209,213,219,var(--tw-text-opacity))}.profile-display__welcome:hover{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ProfileDisplayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-profile-display',
                    template: `
        <div class="profile-display">
            <button (click)="toggleDropdown()" type="button" class="profile-display__button" id="profile-menu-button"
                    aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open profile menu</span>
                <span class="profile-display__welcome">Welcome {{ user?.firstName }}</span>
                <!-- <h1 *ngIf="user">Welcome {{ user?.firstName }}</h1> -->
            </button>
        </div>
    `,
                    styleUrls: ['./profile-display.component.css']
                }]
        }], ctorParameters: function () { return [{ type: i1.ProfileMenuService }]; }, propDecorators: { user: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1kaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi90ZW1wL3NyYy9saWIvcHJvZmlsZS1kaXNwbGF5L3Byb2ZpbGUtZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBR3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBa0J0QyxNQUFNLE9BQU8sdUJBQXVCO0lBT2hDLFlBQ1ksT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFML0IsMkJBQXNCLEdBQTZCLFNBQVMsQ0FBQztRQUU1RCxTQUFJLEdBQWlCLElBQUksQ0FBQztRQUsvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZELFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsV0FBVzs7UUFDUCxJQUFJLENBQUMsc0JBQXNCLEtBQUksTUFBQSxJQUFJLENBQUMsc0JBQXNCLDBDQUFFLFdBQVcsRUFBRSxDQUFBLENBQUM7SUFDOUUsQ0FBQzs7cUhBekJRLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLHFGQVp0Qjs7Ozs7Ozs7O0tBU1Q7NEZBR1EsdUJBQXVCO2tCQWRuQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7O0tBU1Q7b0JBQ0QsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQ2pEO3lHQU1ZLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnQGNvcmVsaWInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVNZW51U2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGUtbWVudS9wcm9maWxlLW1lbnUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXByb2ZpbGUtZGlzcGxheScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWRpc3BsYXlcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByb2ZpbGUtZGlzcGxheV9fYnV0dG9uXCIgaWQ9XCJwcm9maWxlLW1lbnUtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+T3BlbiBwcm9maWxlIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2ZpbGUtZGlzcGxheV9fd2VsY29tZVwiPldlbGNvbWUge3sgdXNlcj8uZmlyc3ROYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8aDEgKm5nSWY9XCJ1c2VyXCI+V2VsY29tZSB7eyB1c2VyPy5maXJzdE5hbWUgfX08L2gxPiAtLT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS1kaXNwbGF5LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZURpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIHByaXZhdGUgb3BlblN0YXR1c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIEBJbnB1dCgpIHVzZXI6IElVc2VyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBQcm9maWxlTWVudVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMub3BlblN0YXR1cyQgPSB0aGlzLnNlcnZpY2Uub3BlblN0YXR1cyQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcGVuU3RhdHVzU3Vic2NyaXB0aW9uID0gdGhpcy5vcGVuU3RhdHVzJC5waXBlKHRha2UoMSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2VPcGVuU3RhdHVzKCFzdGF0dXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wZW5TdGF0dXNTdWJzY3JpcHRpb24gJiYgdGhpcy5vcGVuU3RhdHVzU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=