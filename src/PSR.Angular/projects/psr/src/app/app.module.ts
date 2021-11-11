import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth/auth.module';
import { HomeComponent } from '@modules/home/home.component';
import { SecretComponent } from '@modules/secret/secret.component';
import { SkillManagementModule } from '@psr/modules/skill-management/skill-mgt.module';
import { AlertModule } from '@widgets/alert';
import { HeaderModule } from '@widgets/header';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SecretComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        CoreModule,
        SharedModule,

        // cleanup
        AlertModule,
        HeaderModule,
        SkillManagementModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
