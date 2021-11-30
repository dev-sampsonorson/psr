import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutePaths } from './auth.constants';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const authRoutes: Routes = [
    { path: AuthRoutePaths.Register, component: RegisterComponent }, // register
    { path: AuthRoutePaths.Login, component: LoginComponent }, // login
    { path: '**', redirectTo: AuthRoutePaths.Login, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
