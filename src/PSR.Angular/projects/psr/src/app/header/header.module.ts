import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { SharedModule } from '@psr/shared/shared.module';
import { ProfileDisplayComponent } from './profile-menu/profile-display.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        HeaderComponent,
        HamburgerComponent,
        ProfileMenuComponent,
        ProfileDisplayComponent,
        NavigationComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class HeaderModule { }
