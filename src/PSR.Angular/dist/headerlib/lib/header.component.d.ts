import { OnInit } from '@angular/core';
import { IUser } from '@corelib';
import { MenuItem } from '@sharedlib';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
    primaryMenu: MenuItem[];
    profileMenu: MenuItem[];
    isMobileMenuOpen: boolean;
    private _showSignInOrSignUp;
    set showSignInOrSignUp(value: boolean | null);
    user: IUser | null;
    get showSignInOrSignUp(): boolean;
    constructor(primaryMenu: MenuItem[], profileMenu: MenuItem[]);
    ngOnInit(): void;
    toggleMobileMenu(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "app-header", never, { "showSignInOrSignUp": "showSignInOrSignUp"; "user": "user"; }, {}, never, never>;
}
