import { NgModule } from '@angular/core';

import { BaseIconComponent } from './base-icon/base-icon.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconDotVerticalComponent } from './icon-dot-vertical/icon-dot-vertical.component';
import { IconEyeComponent } from './icon-eye/icon-eye.component';
import { IconLoginComponent } from './icon-login/icon-login.component';
import { IconLogoutComponent } from './icon-logout/icon-logout.component';
import { IconPencilComponent } from './icon-pencil/icon-pencil.component';
import { IconTrashComponent } from './icon-trash/icon-trash.component';



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