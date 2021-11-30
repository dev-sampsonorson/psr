import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth/auth.module';
import { skillMgtConfig } from '@config/skill-mgt.config';
import { environment, environment } from '@env/environment';
import { HomeComponent } from '@features/home/home.component';
import { SecretModule } from '@features/secret/secret.module';
import { SkillManagementModule } from '@features/skill-management/skill-mgt.module';
import { AlertModule } from '@shared/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from './shared/shared.module';

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
        AuthModule,
        CoreModule.withConig({
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
        SharedModule,
        HeaderlibModule.withConig(
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
                    routerLink: () => AuthRoutes.RevokeToken()
                })
            ]
        )

        AlertModule.forRoot(environment.alertOptions),

        SecretModule,

        SkillManagementModule.withConfig(skillMgtConfig)
    ],
    providers: [
        // { provide: SKILL_MGT_CONFIG_TOKEN, useValue: skillMgtConfig },
        // AppBreadcrumbConfigProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
