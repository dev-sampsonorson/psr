import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenuModule, DropdownMenuModule } from '@sharedlib';

import { ProfileDisplayModule } from '../profile-display/profile-display.module';
import { ProfileMenuComponent } from './profile-menu.component';



@NgModule({
    declarations: [ProfileMenuComponent],
    imports: [
        CommonModule,
        ProfileDisplayModule,
        DropdownMenuModule,
        ContextMenuModule
    ],
    exports: [ProfileMenuComponent]
})
export class ProfileMenuModule { }
