import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, AuthRoutePaths } from '@psr/auth';
import { skillMgtConfig } from '@psr/config';
import { AppRoutes, CoreModule } from '@psr/core';
import { environment } from '@psr/env/environment';
import { HomeFeatureShellModule } from '@psr/home/feature-shell';
import { SecretFeatureShellModule } from '@psr/secret/feature-shell';
import { AlertModule, IconLogoutComponent, MenuItem, SharedModule } from '@psr/shared/ui';
import { SharedUiHeaderModule } from '@psr/shared/ui-header';
import { SkillFeatureSkillMgtModule } from '@psr/skill/feature-skill-mgt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout.component';

const _baseUrl = environment.apiUrl;

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,

        SharedModule,
        SecretFeatureShellModule,
        HomeFeatureShellModule,

        CoreModule.withConfig({
            baseUrl: `${_baseUrl}`,
            getUrl: (url) => {
                if (['/', '\\'].includes(url && url.slice(0, 1))) {
                    return `${_baseUrl}${url.slice(1)}`;
                }

                return `${_baseUrl}${url}`;
            },
            navigationPaths: {
                Home: '/home',
                Register: `/auth/${AuthRoutePaths.Register}`,
                Login: `/auth/${AuthRoutePaths.Login}`,
            }
        }),
        SharedUiHeaderModule.withConfig(
            /** Primary Menu */
            [
                new MenuItem({ name: 'primary-home', label: 'Home', routerLink: () => AppRoutes.Home() }),
                new MenuItem({ name: 'primary-skills', label: 'Skills', routerLink: () => AppRoutes.Skills() }),
                new MenuItem({ name: 'primary-secret', label: 'Secret', routerLink: () => AppRoutes.Secret() })
            ],
            /** Profile Menu */
            [
                new MenuItem({
                    name: 'primary-signout',
                    label: 'Sign out',
                    iconComponent: IconLogoutComponent,
                    isIconVisible: true,
                    routerLink: () => [`/auth/${AuthRoutePaths.Login}`]
                })
            ]
        ),
        AlertModule.forRoot(environment.alertOptions),

        SkillFeatureSkillMgtModule.withConfig(skillMgtConfig)
    ],
    providers: [
        // { provide: SKILL_MGT_CONFIG_TOKEN, useValue: skillMgtConfig },
        // AppBreadcrumbConfigProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
