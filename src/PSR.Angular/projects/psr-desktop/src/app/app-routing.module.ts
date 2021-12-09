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
                // loadChildren: () => import('@skillmgtlib/skillmgtlib.module').then(m => m.SkillmgtlibModule)
                loadChildren: () => import('@skillmgtlib/skillmgtlib.module').then(m => m.SkillmgtlibModule)
            },
            { path: 'secret', loadChildren: () => import('@features/secret/secret.module').then(m => m.SecretModule) },
            // { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import("@authlib/authlib.module").then(m => m.AuthlibModule)
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
