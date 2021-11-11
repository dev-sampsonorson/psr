import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/auth.guard';
import { HomeComponent } from '@modules/home/home.component';
import { SecretComponent } from '@modules/secret/secret.component';

import { LayoutComponent } from './layout.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            {
                path: 'skills',
                loadChildren: () => import('@psr/modules/skill-management/skill-mgt.module').then(m => m.SkillManagementModule)
            },
            { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import("@auth/auth.module").then(m => m.AuthModule)
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
