import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthRoutePaths } from './auth.constants';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const authRoutes = [
    { path: AuthRoutePaths.Register, component: RegisterComponent },
    { path: AuthRoutePaths.Login, component: LoginComponent },
    { path: '**', redirectTo: AuthRoutePaths.Login, pathMatch: 'full' }
];
export class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
AuthRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthRoutingModule, imports: [[RouterModule.forChild(authRoutes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(authRoutes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2F1dGhsaWIvc3JjL2xpYi9hdXRoLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQUU3RSxNQUFNLFVBQVUsR0FBVztJQUN2QixFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Q0FDdEUsQ0FBQztBQU1GLE1BQU0sT0FBTyxpQkFBaUI7OytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQix3Q0FGaEIsWUFBWTtnSEFFYixpQkFBaUIsWUFIakIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ2xDLFlBQVk7NEZBRWIsaUJBQWlCO2tCQUo3QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzVDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBdXRoUm91dGVQYXRocyB9IGZyb20gJy4vYXV0aC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgYXV0aFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBBdXRoUm91dGVQYXRocy5SZWdpc3RlciwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LCAvLyByZWdpc3RlclxyXG4gICAgeyBwYXRoOiBBdXRoUm91dGVQYXRocy5Mb2dpbiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LCAvLyBsb2dpblxyXG4gICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiBBdXRoUm91dGVQYXRocy5Mb2dpbiwgcGF0aE1hdGNoOiAnZnVsbCcgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoYXV0aFJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=