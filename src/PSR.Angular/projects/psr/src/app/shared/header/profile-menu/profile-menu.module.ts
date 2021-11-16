import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenuModule } from '@shared/context-menu/context-menu.module';
import { DropdownMenuModule } from '@shared/dropdown-menu/dropdown-menu.module';

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
