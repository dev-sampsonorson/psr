import { Component, Input, OnInit } from '@angular/core';
import { AuthRoutes } from '@psr/auth/auth.constants';
import { MenuItem } from '@psr/shared/menu.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public menuItems: MenuItem[] = [
        { name: 'Sign out', route: AuthRoutes.RevokeToken }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
