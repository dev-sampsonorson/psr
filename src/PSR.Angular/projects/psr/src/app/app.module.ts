import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { SecretComponent } from './secret/secret.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SecretComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        CoreModule,
        SharedModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
