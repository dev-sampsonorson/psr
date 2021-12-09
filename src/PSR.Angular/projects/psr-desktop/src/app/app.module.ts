import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthlibModule, AuthRoutePaths } from '@authlib';
import { skillMgtConfig } from '@config/skill-mgt.config';
import { AppRoutes, CorelibModule } from '@corelib';
import { environment } from '@env/environment';
import { HomeComponent } from '@features/home/home.component';
import { SecretModule } from '@features/secret/secret.module';
import { HeaderlibModule } from '@headerlib';
import { AlertModule, IconLogoutComponent, MenuItem, SharedlibModule } from '@sharedlib';
import { SkillmgtlibModule } from '@skillmgtlib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout.component';

const _baseUrl = environment.apiUrl;

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthlibModule,

        SharedlibModule,

        CorelibModule.withConfig({
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
        HeaderlibModule.withConfig(
            [
                new MenuItem({ name: 'primary-home', label: 'Home', routerLink: () => AppRoutes.Home() }),
                new MenuItem({ name: 'primary-skills', label: 'Skills', routerLink: () => AppRoutes.Skills() }),
                new MenuItem({ name: 'primary-secret', label: 'Secret', routerLink: () => AppRoutes.Secret() })
            ],
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

        SecretModule,

        SkillmgtlibModule.withConfig(skillMgtConfig)
    ],
    providers: [
        // { provide: SKILL_MGT_CONFIG_TOKEN, useValue: skillMgtConfig },
        // AppBreadcrumbConfigProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
