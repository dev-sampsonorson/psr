import { Component, Inject, Input } from '@angular/core';
import { PRIMARY_MENU_TOKEN, PROFILE_MENU_TOKEN } from './tokens';
import * as i0 from "@angular/core";
import * as i1 from "./hamburger/hamburger.component";
import * as i2 from "@sharedlib";
import * as i3 from "./navigation/navigation.component";
import * as i4 from "@angular/common";
export class HeaderComponent {
    constructor(primaryMenu, profileMenu) {
        this.primaryMenu = primaryMenu;
        this.profileMenu = profileMenu;
        this.isMobileMenuOpen = false;
        this._showSignInOrSignUp = false;
        this.user = null;
    }
    set showSignInOrSignUp(value) {
        this._showSignInOrSignUp = !(value !== null && value !== void 0 ? value : false);
    }
    ;
    get showSignInOrSignUp() {
        return this._showSignInOrSignUp;
    }
    ngOnInit() {
    }
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: HeaderComponent, deps: [{ token: PRIMARY_MENU_TOKEN }, { token: PROFILE_MENU_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: HeaderComponent, selector: "hdr-header", inputs: { showSignInOrSignUp: "showSignInOrSignUp", user: "user" }, ngImport: i0, template: "<nav class=\"bg-gray-800\">\r\n    <div class=\"px-2 mx-auto max-w-7xl sm:px-6 lg:px-8\">\r\n        <div class=\"relative flex items-center justify-between h-16\">\r\n            <div class=\"flex items-center\">\r\n                <app-hamburger (clicked)=\"toggleMobileMenu()\"></app-hamburger>\r\n                <app-logo class=\"flex-shrink-0\"></app-logo>\r\n                <div class=\"hidden sm:block sm:ml-12\">\r\n                    <app-navigation class=\"desktop-menu\" [menu]=\"primaryMenu\" [stacked]=\"false\">\r\n                    </app-navigation>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex items-center\">\r\n                <div class=\"flex-shrink-0\">\r\n                    <button type=\"button\"\r\n                            class=\"relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500\">\r\n                        <!-- Heroicon name: solid/plus-sm -->\r\n                        <svg class=\"w-5 h-5 mr-2 -ml-1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"\r\n                             fill=\"currentColor\" aria-hidden=\"true\">\r\n                            <path fill-rule=\"evenodd\"\r\n                                  d=\"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z\"\r\n                                  clip-rule=\"evenodd\" />\r\n                        </svg>\r\n                        <span>New Job</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0\">\r\n                <app-profile-menu [menuItems]=\"profileMenu\" [user]=\"user\"></app-profile-menu>\r\n                <div *ngIf=\"showSignInOrSignUp\" class=\"flex mt-4 md:mt-0 md:ml-4\">\r\n                    <button type=\"button\"\r\n                            class=\"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500\">\r\n                        Sign in\r\n                    </button>\r\n                    <button type=\"button\"\r\n                            class=\"inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500\">\r\n                        Sign up\r\n                    </button>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Mobile menu, show/hide based on menu state. -->\r\n    <div class=\"sm:hidden\" *ngIf=\"isMobileMenuOpen\">\r\n        <app-navigation class=\"mobile-menu\" [menu]=\"primaryMenu\" [stacked]=\"true\"></app-navigation>\r\n    </div>\r\n</nav>\r\n", styles: [":host{display:block}\n"], components: [{ type: i1.HamburgerComponent, selector: "app-hamburger", outputs: ["clicked"] }, { type: i2.LogoComponent, selector: "app-logo" }, { type: i3.NavigationComponent, selector: "app-navigation", inputs: ["menu", "stacked"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'hdr-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.css']
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIMARY_MENU_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PROFILE_MENU_TOKEN]
                }] }]; }, propDecorators: { showSignInOrSignUp: [{
                type: Input
            }], user: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi90ZW1wL3NyYy9saWIvaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi90ZW1wL3NyYy9saWIvaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUlqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7OztBQU9sRSxNQUFNLE9BQU8sZUFBZTtJQWN4QixZQUN1QyxXQUF1QixFQUN2QixXQUF1QjtRQUR2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWR2RCxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFakMsd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBSXBDLFNBQUksR0FBaUIsSUFBSSxDQUFDO0lBUy9CLENBQUM7SUFaTCxJQUFhLGtCQUFrQixDQUFDLEtBQXFCO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUFBLENBQUM7SUFHRixJQUFJLGtCQUFrQjtRQUNsQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQyxDQUFDO0lBT0QsUUFBUTtJQUNSLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQzs7NkdBeEJRLGVBQWUsa0JBZVosa0JBQWtCLGFBQ2xCLGtCQUFrQjtpR0FoQnJCLGVBQWUsc0hDWDVCLDBvR0ErQ0E7NEZEcENhLGVBQWU7a0JBTDNCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN4Qzs7MEJBZ0JRLE1BQU07MkJBQUMsa0JBQWtCOzswQkFDekIsTUFBTTsyQkFBQyxrQkFBa0I7NENBWGpCLGtCQUFrQjtzQkFBOUIsS0FBSztnQkFHRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJ0Bjb3JlbGliJztcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdAc2hhcmVkbGliJztcclxuXHJcbmltcG9ydCB7IFBSSU1BUllfTUVOVV9UT0tFTiwgUFJPRklMRV9NRU5VX1RPS0VOIH0gZnJvbSAnLi90b2tlbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hkci1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBpc01vYmlsZU1lbnVPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvd1NpZ25Jbk9yU2lnblVwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzZXQgc2hvd1NpZ25Jbk9yU2lnblVwKHZhbHVlOiBib29sZWFuIHwgbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX3Nob3dTaWduSW5PclNpZ25VcCA9ICEodmFsdWUgPz8gZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIEBJbnB1dCgpIHVzZXI6IElVc2VyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgZ2V0IHNob3dTaWduSW5PclNpZ25VcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hvd1NpZ25Jbk9yU2lnblVwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBJbmplY3QoUFJJTUFSWV9NRU5VX1RPS0VOKSBwdWJsaWMgcHJpbWFyeU1lbnU6IE1lbnVJdGVtW10sXHJcbiAgICAgICAgQEluamVjdChQUk9GSUxFX01FTlVfVE9LRU4pIHB1YmxpYyBwcm9maWxlTWVudTogTWVudUl0ZW1bXVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2JpbGVNZW51KCkge1xyXG4gICAgICAgIHRoaXMuaXNNb2JpbGVNZW51T3BlbiA9ICF0aGlzLmlzTW9iaWxlTWVudU9wZW47XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIjxuYXYgY2xhc3M9XCJiZy1ncmF5LTgwMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInB4LTIgbXgtYXV0byBtYXgtdy03eGwgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1oYW1idXJnZXIgKGNsaWNrZWQpPVwidG9nZ2xlTW9iaWxlTWVudSgpXCI+PC9hcHAtaGFtYnVyZ2VyPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1sb2dvIGNsYXNzPVwiZmxleC1zaHJpbmstMFwiPjwvYXBwLWxvZ28+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuIHNtOmJsb2NrIHNtOm1sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFwcC1uYXZpZ2F0aW9uIGNsYXNzPVwiZGVza3RvcC1tZW51XCIgW21lbnVdPVwicHJpbWFyeU1lbnVcIiBbc3RhY2tlZF09XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYXBwLW5hdmlnYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSGVyb2ljb24gbmFtZTogc29saWQvcGx1cy1zbSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInctNSBoLTUgbXItMiAtbWwtMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAgNWExIDEgMCAwMTEgMXYzaDNhMSAxIDAgMTEwIDJoLTN2M2ExIDEgMCAxMS0yIDB2LTNINmExIDEgMCAxMTAtMmgzVjZhMSAxIDAgMDExLTF6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV3IEpvYjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMiBzbTpzdGF0aWMgc206aW5zZXQtYXV0byBzbTptbC02IHNtOnByLTBcIj5cclxuICAgICAgICAgICAgICAgIDxhcHAtcHJvZmlsZS1tZW51IFttZW51SXRlbXNdPVwicHJvZmlsZU1lbnVcIiBbdXNlcl09XCJ1c2VyXCI+PC9hcHAtcHJvZmlsZS1tZW51PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dTaWduSW5PclNpZ25VcFwiIGNsYXNzPVwiZmxleCBtdC00IG1kOm10LTAgbWQ6bWwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWdyYXktNzAwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gaG92ZXI6YmctZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBtbC0zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIE1vYmlsZSBtZW51LCBzaG93L2hpZGUgYmFzZWQgb24gbWVudSBzdGF0ZS4gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwic206aGlkZGVuXCIgKm5nSWY9XCJpc01vYmlsZU1lbnVPcGVuXCI+XHJcbiAgICAgICAgPGFwcC1uYXZpZ2F0aW9uIGNsYXNzPVwibW9iaWxlLW1lbnVcIiBbbWVudV09XCJwcmltYXJ5TWVudVwiIFtzdGFja2VkXT1cInRydWVcIj48L2FwcC1uYXZpZ2F0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvbmF2PlxyXG4iXX0=