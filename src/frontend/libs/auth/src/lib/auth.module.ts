import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthorizeInterceptor } from './auth.interceptor';
import { LoginModule } from './components/login';
import { PasswordStrengthModule } from './components/password-strength';
import { RegisterModule } from './components/register';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AuthRoutingModule,
    RegisterModule,
    PasswordStrengthModule,
    LoginModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  exports: []
})
export class AuthModule { }
