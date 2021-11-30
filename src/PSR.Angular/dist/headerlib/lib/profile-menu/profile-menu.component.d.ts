import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '@corelib';
import { IContextMenuItemClickEvent, MenuItem } from '@sharedlib';
import { ProfileMenuService } from './profile-menu.service';
import * as i0 from "@angular/core";
export declare class ProfileMenuComponent implements OnInit, OnDestroy {
    private service;
    private router;
    user: IUser | null;
    private getUserSub;
    private openStatus$;
    isDropdownOpen: boolean;
    menuItems: MenuItem[];
    constructor(service: ProfileMenuService, router: Router);
    ngOnInit(): void;
    onHideDropdown(): void;
    onMenuItemClick({ menuItem, handle }: IContextMenuItemClickEvent): void;
    onHandleEscape(e: KeyboardEvent): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileMenuComponent, "app-profile-menu", never, { "user": "user"; "menuItems": "menuItems"; }, {}, never, never>;
}
