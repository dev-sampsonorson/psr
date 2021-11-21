import { NgModule } from '@angular/core';
import { ROUTER_CONFIGURATION, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';

import { LayoutComponent } from './layout.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            {
                path: 'skills',
                loadChildren: () => import('@features/skill-management/skill-mgt.module').then(m => m.SkillManagementModule)
            },
            { path: 'secret', loadChildren: () => import('@features/secret/secret.module').then(m => m.SecretModule) },
            // { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] },
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
    exports: [RouterModule],
    providers: [
        { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } }
    ]
})
export class AppRoutingModule { }
