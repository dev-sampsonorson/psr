import { NgModule } from '@angular/core';

import { BaseIconComponent } from './base-icon.component';
import { IconCloseComponent } from './icon-close.component';
import { IconDotVerticalComponent } from './icon-dot-vertical.component';
import { IconEyeComponent } from './icon-eye.component';
import { IconLoginComponent } from './icon-login.component';
import { IconLogoutComponent } from './icon-logout.component';
import { IconPencilComponent } from './icon-pencil.component';
import { IconTrashComponent } from './icon-trash.component';



@NgModule({
    declarations: [
        IconCloseComponent,
        IconDotVerticalComponent,
        IconEyeComponent,
        IconPencilComponent,
        IconTrashComponent,
        IconLoginComponent,
        IconLogoutComponent,
        BaseIconComponent
    ],
    exports: [
        IconCloseComponent,
        IconDotVerticalComponent,
        IconEyeComponent,
        IconPencilComponent,
        IconTrashComponent,
        IconLoginComponent,
        IconLogoutComponent,
        BaseIconComponent
    ],
    imports: []
})
export class IconsModule { }