import { Component, Inject, Input, OnInit } from '@angular/core';
import { APP_CONFIG_TOKEN, IAppConfig } from '@psr/app.config';
import { AuthRoutes } from '@psr/auth/auth.constants';
import { AppRoutes } from '@psr/shared/app.constants';
import { MenuItem } from '@psr/shared/menu.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public isMobileMenuOpen: boolean = false;
    public primaryMenu: MenuItem[] = this.appConfig.primaryMenu;
    public profileMenu: MenuItem[] = this.appConfig.profileMenu;

    constructor(
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    ngOnInit(): void {
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

}
