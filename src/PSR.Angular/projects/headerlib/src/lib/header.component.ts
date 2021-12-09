import { Component, Inject, Input, OnInit } from '@angular/core';
import { IUser } from '@corelib';
import { MenuItem } from '@sharedlib';

import { PRIMARY_MENU_TOKEN, PROFILE_MENU_TOKEN } from './tokens';

@Component({
    selector: 'hdr-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public isMobileMenuOpen: boolean = false;

    private _showSignInOrSignUp: boolean = false;
    @Input() set showSignInOrSignUp(value: boolean | null) {
        this._showSignInOrSignUp = !(value ?? false);
    };
    @Input() user: IUser | null = null;

    get showSignInOrSignUp(): boolean {
        return this._showSignInOrSignUp;
    }

    constructor(
        @Inject(PRIMARY_MENU_TOKEN) public primaryMenu: MenuItem[],
        @Inject(PROFILE_MENU_TOKEN) public profileMenu: MenuItem[]
    ) { }

    ngOnInit(): void {
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

}
