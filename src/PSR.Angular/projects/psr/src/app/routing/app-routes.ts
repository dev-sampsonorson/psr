import { Routes } from "@angular/router";
import { AppComponent } from "@psr/app.component";
import { HomeComponent } from "../home/home.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'auth',
        loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule)
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];