import { Component, Inject, Input, OnInit } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@config/app.config';
import { MenuItem } from '@shared/menu.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public isMobileMenuOpen: boolean = false;
    public primaryMenu: MenuItem[] = this.appConfig.primaryMenu;
    public profileMenu: MenuItem[] = this.appConfig.profileMenu;

    private _showSignInOrSignUp: boolean = false;
    @Input() set showSignInOrSignUp(value: boolean | null) {
        this._showSignInOrSignUp = !(value ?? false);
    };

    get showSignInOrSignUp(): boolean {
        return this._showSignInOrSignUp;
    }

    constructor(
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    ngOnInit(): void {
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

}
