import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownMenuModule } from '@widgets/dropdown-menu/dropdown-menu.module';
import { LogoModule } from '@widgets/logo';

import { HamburgerComponent } from './hamburger/hamburger.component';
import { HeaderComponent } from './header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileDisplayComponent } from './profile-menu/profile-display.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';



@NgModule({
    declarations: [
        HeaderComponent,
        HamburgerComponent,
        ProfileMenuComponent,
        ProfileDisplayComponent,
        NavigationComponent
    ],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        DropdownMenuModule,
        LogoModule
    ]
})
export class HeaderModule { }
