import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { AuthRoutingModule } from './routing/auth-routing.module';



@NgModule({
    declarations: [
        RegisterComponent,
        PasswordStrengthComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ],
    exports: []
})
export class AuthModule { }
