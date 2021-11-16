import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoModule } from '@shared/logo';

import { HamburgerModule } from './hamburger/hamburger.module';
import { HeaderComponent } from './header.component';
import { NavigationModule } from './navigation/navigation.module';
import { ProfileDisplayModule } from './profile-display/profile-display.module';
import { ProfileMenuModule } from './profile-menu/profile-menu.module';



@NgModule({
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
})
export class HeaderModule { }
