import { Routes } from "@angular/router";
import { AppComponent } from "@psr/app.component";
import { AuthGuard } from "@psr/auth/auth.guard";
import { MainComponent } from "@psr/main/main.component";
import { SecretComponent } from "@psr/secret/secret.component";
import { HomeComponent } from "../home/home.component";

export const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] },
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule)
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];