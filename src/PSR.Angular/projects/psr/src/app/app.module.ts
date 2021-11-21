import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth/auth.module';
import { skillMgtConfig } from '@config/skill-mgt.config';
import { environment } from '@env/environment';
import { HomeComponent } from '@features/home/home.component';
import { SecretModule } from '@features/secret/secret.module';
import { SkillManagementModule } from '@features/skill-management/skill-mgt.module';
import { AlertModule } from '@shared/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from './shared/shared.module';

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
        CoreModule,
        SharedModule,

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
