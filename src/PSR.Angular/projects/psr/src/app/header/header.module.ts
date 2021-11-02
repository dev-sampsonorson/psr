import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { SharedModule } from '@psr/shared/shared.module';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';



@NgModule({
    declarations: [
        HeaderComponent,
        HamburgerComponent,
        ProfileMenuComponent,
        ProfileDisplayComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class HeaderModule { }
