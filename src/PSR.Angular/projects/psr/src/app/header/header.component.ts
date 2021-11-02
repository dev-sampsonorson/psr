import { Component, Input, OnInit } from '@angular/core';
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
    public primaryMenu: MenuItem[] = [
        { label: 'Home', route: AppRoutes.Home }
    ];
    public profileMenu: MenuItem[] = [
        { label: 'Sign out', route: AuthRoutes.RevokeToken }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

}
