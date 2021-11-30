import * as i0 from '@angular/core';
import { EventEmitter, Component, Output, NgModule, Input, Injectable, HostListener, Inject, InjectionToken } from '@angular/core';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import * as i4 from '@sharedlib';
import { DropdownMenuModule, ContextMenuModule, PRIMARY_MENU_TOKEN as PRIMARY_MENU_TOKEN$1, PROFILE_MENU_TOKEN as PROFILE_MENU_TOKEN$1, LogoModule } from '@sharedlib';

class HamburgerComponent {
    constructor() {
        this.clicked = new EventEmitter();
    }
    ngOnInit() {
    }
    onClick() {
        this.clicked.emit();
    }
}
HamburgerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HamburgerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HamburgerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: HamburgerComponent, selector: "app-hamburger", outputs: { clicked: "clicked" }, ngImport: i0, template: "<!-- Mobile menu button-->\r\n<button (click)=\"onClick()\" type=\"button\"\r\n        class=\"inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\"\r\n        aria-controls=\"mobile-menu\" aria-expanded=\"false\">\r\n    <span class=\"sr-only\">Open main menu</span>\r\n    <!--\r\nIcon when menu is closed.\r\n\r\nHeroicon name: outline/menu\r\n\r\nMenu open: \"hidden\", Menu closed: \"block\"\r\n-->\r\n    <svg class=\"block w-6 h-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"\r\n         aria-hidden=\"true\">\r\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\" />\r\n    </svg>\r\n    <!--\r\nIcon when menu is open.\r\n\r\nHeroicon name: outline/x\r\n\r\nMenu open: \"block\", Menu closed: \"hidden\"\r\n-->\r\n    <svg class=\"hidden w-6 h-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"\r\n         aria-hidden=\"true\">\r\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\r\n    </svg>\r\n</button>\r\n", styles: [":host{@apply absolute inset-y-0 left-0 flex items-center sm:hidden;}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HamburgerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-hamburger',
                    templateUrl: './hamburger.component.html',
                    styleUrls: ['./hamburger.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { clicked: [{
                type: Output
            }] } });

class HamburgerModule {
}
HamburgerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HamburgerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HamburgerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HamburgerModule, declarations: [HamburgerComponent], imports: [CommonModule], exports: [HamburgerComponent] });
HamburgerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HamburgerModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HamburgerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HamburgerComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [HamburgerComponent]
                }]
        }] });

class NavigationComponent {
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
    `, isInline: true, styles: ["\n        :host-context(.desktop-menu) {\n            @apply flex space-x-4;\n        }\n\n        :host-context(.mobile-menu) {\n            @apply block px-2 pt-2 pb-3 space-y-1;\n        }\n\n        .menu {\n            &__item {\n                @apply px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white;\n\n                &--active {\n                    @apply bg-gray-900 text-white;\n                }\n\n                &--stacked {\n                    @apply block text-base;\n                }\n            }\n        }\n\n    "], directives: [{ type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }] });
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

class NavigationModule {
}
NavigationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: NavigationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NavigationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: NavigationModule, declarations: [NavigationComponent], imports: [CommonModule,
        RouterModule], exports: [NavigationComponent, RouterModule] });
NavigationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: NavigationModule, imports: [[
            CommonModule,
            RouterModule
        ], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: NavigationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NavigationComponent],
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    exports: [NavigationComponent, RouterModule]
                }]
        }] });

class ProfileMenuService {
    constructor() {
        this.subject = new BehaviorSubject(false);
    }
    get openStatus$() {
        return this.subject.asObservable();
    }
    changeOpenStatus(status) {
        this.subject.next(status);
    }
}
ProfileMenuService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ProfileMenuService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ProfileDisplayComponent {
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
ProfileDisplayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileDisplayComponent, deps: [{ token: ProfileMenuService }], target: i0.ɵɵFactoryTarget.Component });
ProfileDisplayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: ProfileDisplayComponent, selector: "app-profile-display", inputs: { user: "user" }, ngImport: i0, template: `
        <div class="profile-display">
            <button (click)="toggleDropdown()" type="button" class="profile-display__button" id="profile-menu-button"
                    aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open profile menu</span>
                <span class="profile-display__welcome">Welcome {{ user?.firstName }}</span>
                <!-- <h1 *ngIf="user">Welcome {{ user?.firstName }}</h1> -->
            </button>
        </div>
    `, isInline: true, styles: ["\n        .profile-display {\n            @apply relative z-10;\n\n            &__button {\n                @apply flex items-center space-x-4 bg-gray-800 rounded-full focus:outline-none ring-0;\n            }\n\n            &__welcome {\n                //hover:bg-gray-700\n                @apply text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium;\n            }\n        }\n    "] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileDisplayComponent, decorators: [{
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
                    styles: [`
        .profile-display {
            @apply relative z-10;

            &__button {
                @apply flex items-center space-x-4 bg-gray-800 rounded-full focus:outline-none ring-0;
            }

            &__welcome {
                //hover:bg-gray-700
                @apply text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium;
            }
        }
    `]
                }]
        }], ctorParameters: function () { return [{ type: ProfileMenuService }]; }, propDecorators: { user: [{
                type: Input
            }] } });

class ProfileDisplayModule {
}
ProfileDisplayModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileDisplayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileDisplayModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileDisplayModule, declarations: [ProfileDisplayComponent], imports: [CommonModule], exports: [ProfileDisplayComponent] });
ProfileDisplayModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileDisplayModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileDisplayModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ProfileDisplayComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [ProfileDisplayComponent]
                }]
        }] });

// (isDropdownOpen)="toggleDropdown($event)"
class ProfileMenuComponent {
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
ProfileMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuComponent, deps: [{ token: ProfileMenuService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
ProfileMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: ProfileMenuComponent, selector: "app-profile-menu", inputs: { user: "user", menuItems: "menuItems" }, host: { listeners: { "document:keydown": "onHandleEscape($event)" } }, ngImport: i0, template: `
        <app-profile-display *ngIf="user" [user]="user"></app-profile-display>
        <button *ngIf="isDropdownOpen" (click)="onHideDropdown()" class="close-overlay" tabindex="-1"></button>
        <app-context-menu
            *ngIf="isDropdownOpen"
            [menuItems]="menuItems"
            (menuItemClick)="onMenuItemClick($event)"
            class="absolute right-0 w-48">
        </app-context-menu>
    `, isInline: true, styles: ["\n        :host {\n            @apply relative;\n        }\n    "], components: [{ type: ProfileDisplayComponent, selector: "app-profile-display", inputs: ["user"] }, { type: i4.ContextMenuComponent, selector: "app-context-menu", inputs: ["handle", "menuItems"], outputs: ["menuItemClick"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
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
        }], ctorParameters: function () { return [{ type: ProfileMenuService }, { type: i2.Router }]; }, propDecorators: { user: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], onHandleEscape: [{
                type: HostListener,
                args: ['document:keydown', ['$event']]
            }] } });

class ProfileMenuModule {
}
ProfileMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuModule, declarations: [ProfileMenuComponent], imports: [CommonModule,
        ProfileDisplayModule,
        DropdownMenuModule,
        ContextMenuModule], exports: [ProfileMenuComponent] });
ProfileMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuModule, imports: [[
            CommonModule,
            ProfileDisplayModule,
            DropdownMenuModule,
            ContextMenuModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ProfileMenuComponent],
                    imports: [
                        CommonModule,
                        ProfileDisplayModule,
                        DropdownMenuModule,
                        ContextMenuModule
                    ],
                    exports: [ProfileMenuComponent]
                }]
        }] });

// import { APP_CONFIG_TOKEN, IAppConfig } from '@config/app.config';
class HeaderComponent {
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
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderComponent, deps: [{ token: PRIMARY_MENU_TOKEN$1 }, { token: PROFILE_MENU_TOKEN$1 }], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: HeaderComponent, selector: "app-header", inputs: { showSignInOrSignUp: "showSignInOrSignUp", user: "user" }, ngImport: i0, template: "<nav class=\"bg-gray-800\">\r\n    <div class=\"px-2 mx-auto max-w-7xl sm:px-6 lg:px-8\">\r\n        <div class=\"relative flex items-center justify-between h-16\">\r\n            <app-hamburger (clicked)=\"toggleMobileMenu()\"></app-hamburger>\r\n            <div class=\"flex items-center justify-center flex-1 sm:items-stretch sm:justify-start\">\r\n                <app-logo></app-logo>\r\n                <div class=\"hidden sm:block sm:ml-12\">\r\n                    <app-navigation class=\"desktop-menu\" [menu]=\"primaryMenu\" [stacked]=\"false\">\r\n                    </app-navigation>\r\n                </div>\r\n            </div>\r\n            <div class=\"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0\">\r\n                <app-profile-menu [menuItems]=\"profileMenu\" [user]=\"user\"></app-profile-menu>\r\n                <!-- <a href=\"#\"\r\n                   class=\"inline-flex items-center px-4 py-2 ml-6 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">\r\n                    Sigin\r\n                </a>\r\n                <a href=\"#\"\r\n                   class=\"inline-flex items-center px-4 py-2 ml-6 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">\r\n                    Register\r\n                </a> -->\r\n                <div *ngIf=\"showSignInOrSignUp\" class=\"flex mt-4 md:mt-0 md:ml-4\">\r\n                    <button type=\"button\"\r\n                            class=\"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500\">\r\n                        Sign in\r\n                    </button>\r\n                    <button type=\"button\"\r\n                            class=\"inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500\">\r\n                        Sign up\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Mobile menu, show/hide based on menu state. -->\r\n    <div class=\"sm:hidden\" *ngIf=\"isMobileMenuOpen\">\r\n        <app-navigation class=\"mobile-menu\" [menu]=\"primaryMenu\" [stacked]=\"true\"></app-navigation>\r\n    </div>\r\n</nav>\r\n", styles: [":host{display:block}\n"], components: [{ type: HamburgerComponent, selector: "app-hamburger", outputs: ["clicked"] }, { type: i4.LogoComponent, selector: "app-logo" }, { type: NavigationComponent, selector: "app-navigation", inputs: ["menu", "stacked"] }, { type: ProfileMenuComponent, selector: "app-profile-menu", inputs: ["user", "menuItems"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIMARY_MENU_TOKEN$1]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PROFILE_MENU_TOKEN$1]
                }] }]; }, propDecorators: { showSignInOrSignUp: [{
                type: Input
            }], user: [{
                type: Input
            }] } });

const PRIMARY_MENU_TOKEN = new InjectionToken('PRIMARY_MENU_TOKEN', {
    providedIn: 'root',
    factory: () => []
});
const PROFILE_MENU_TOKEN = new InjectionToken('PROFILE_MENU_TOKEN', {
    providedIn: 'root',
    factory: () => []
});

class HeaderlibModule {
    static withConfig(primaryMenu, profileMenu) {
        return {
            ngModule: HeaderlibModule,
            providers: [
                { provide: PRIMARY_MENU_TOKEN, useValue: primaryMenu },
                { provide: PROFILE_MENU_TOKEN, useValue: profileMenu }
            ]
        };
    }
}
HeaderlibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderlibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HeaderlibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderlibModule, declarations: [HeaderComponent], imports: [CommonModule,
        LogoModule,
        HamburgerModule,
        NavigationModule,
        ProfileMenuModule,
        ProfileDisplayModule], exports: [HeaderComponent] });
HeaderlibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderlibModule, imports: [[
            CommonModule,
            LogoModule,
            HamburgerModule,
            NavigationModule,
            ProfileMenuModule,
            ProfileDisplayModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderlibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HeaderComponent
                    ],
                    exports: [HeaderComponent],
                    imports: [
                        CommonModule,
                        LogoModule,
                        HamburgerModule,
                        NavigationModule,
                        ProfileMenuModule,
                        ProfileDisplayModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { HamburgerComponent, HamburgerModule, HeaderComponent, HeaderlibModule, NavigationComponent, NavigationModule, PRIMARY_MENU_TOKEN, PROFILE_MENU_TOKEN, ProfileDisplayComponent, ProfileDisplayModule, ProfileMenuComponent, ProfileMenuModule, ProfileMenuService };
//# sourceMappingURL=headerlib.js.map
