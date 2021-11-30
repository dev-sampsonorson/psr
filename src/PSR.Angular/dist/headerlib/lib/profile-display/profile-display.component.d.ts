import { OnDestroy, OnInit } from '@angular/core';
import { IUser } from '@corelib';
import { ProfileMenuService } from '../profile-menu/profile-menu.service';
import * as i0 from "@angular/core";
export declare class ProfileDisplayComponent implements OnInit, OnDestroy {
    private service;
    private openStatus$;
    private openStatusSubscription;
    user: IUser | null;
    constructor(service: ProfileMenuService);
    ngOnInit(): void;
    toggleDropdown(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileDisplayComponent, "app-profile-display", never, { "user": "user"; }, {}, never, never>;
}
