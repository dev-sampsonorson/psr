import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LogoModule } from '@psr/shared/ui';

import { HamburgerModule } from './hamburger';
import { HeaderComponent } from './header.component';
import { NavigationModule } from './navigation';
import { ProfileDisplayModule } from './profile-display';
import { ProfileMenuModule } from './profile-menu';
import { PRIMARY_MENU_TOKEN, PROFILE_MENU_TOKEN } from './tokens';

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
export class SharedUiHeaderModule {
    static withConfig(primaryMenu: any, profileMenu: any): ModuleWithProviders<SharedUiHeaderModule> {
        return {
            ngModule: SharedUiHeaderModule,
            providers: [
                { provide: PRIMARY_MENU_TOKEN, useValue: primaryMenu },
                { provide: PROFILE_MENU_TOKEN, useValue: profileMenu }
            ]
        }
    }
}
