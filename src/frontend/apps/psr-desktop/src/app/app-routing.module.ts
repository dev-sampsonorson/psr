import { NgModule } from '@angular/core';
import { ROUTER_CONFIGURATION, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@psr/home/feature-shell';

import { LayoutComponent } from './layout.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            {
                path: 'skills',
                loadChildren: () => import('@psr/skill/feature-skill-mgt').then(m => m.SkillFeatureSkillMgtModule)
            },
            { path: 'secret', loadChildren: () => import('@psr/secret/feature-shell').then(m => m.SecretFeatureShellModule) },
            // { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import("@psr/auth").then(m => m.AuthModule)
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
