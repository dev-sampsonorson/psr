import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, AuthRoutePaths } from '@psr/auth';
import { AppRoutes, CoreModule } from '@psr/core';
import { HomeFeatureShellModule } from '@psr/home/feature-shell';
import { SecretFeatureShellModule } from '@psr/secret/feature-shell';
import { AlertModule, IconLogoutComponent, MenuItem, SharedModule } from '@psr/shared/ui';
import { SharedUiHeaderModule } from '@psr/shared/ui-header';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout.component';

// import { skillMgtConfig } from '@psr/desktop/config';
const _baseApiEndpoint = environment.baseApiEndpoint;

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
            baseApiEndpoint: `${_baseApiEndpoint}`,
            getUrl: (url) => {
                if (['/', '\\'].includes(url && url.slice(0, 1))) {
                    return `${_baseApiEndpoint}${url.slice(1)}`;
                }

                return `${_baseApiEndpoint}${url}`;
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
                new MenuItem({ name: 'primary-myskills', label: 'My Skills', routerLink: () => AppRoutes.MySkills() }),
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

        // SkillFeatureSkillMgtModule.withConfig(skillMgtConfig),
        // SkillFeatureMyskillModule.withConfig({})
    ],
    providers: [
        // { provide: SKILL_MGT_CONFIG_TOKEN, useValue: skillMgtConfig },
        // AppBreadcrumbConfigProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
