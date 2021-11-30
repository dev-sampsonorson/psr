import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthorizeInterceptor } from './auth.interceptor';
import { LoginModule } from './components/login';
import { PasswordStrengthModule } from './components/password-strength';
import { RegisterModule } from './components/register';
import * as i0 from "@angular/core";
export class AuthlibModule {
}
AuthlibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthlibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthlibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthlibModule, imports: [CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        RegisterModule,
        PasswordStrengthModule,
        LoginModule] });
AuthlibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthlibModule, providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
    ], imports: [[
            CommonModule,
            ReactiveFormsModule,
            AuthRoutingModule,
            RegisterModule,
            PasswordStrengthModule,
            LoginModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthlibModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRobGliL3NyYy9saWIvYXV0aGxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFvQnZELE1BQU0sT0FBTyxhQUFhOzsyR0FBYixhQUFhOzRHQUFiLGFBQWEsWUFibEIsWUFBWTtRQUNaLG1CQUFtQjtRQUVuQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHNCQUFzQjtRQUN0QixXQUFXOzRHQU9OLGFBQWEsYUFMWDtRQUNQLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0tBQzlFLFlBWFE7WUFDTCxZQUFZO1lBQ1osbUJBQW1CO1lBRW5CLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsc0JBQXNCO1lBQ3RCLFdBQVc7U0FDZDs0RkFNUSxhQUFhO2tCQWhCekIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUVuQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2Qsc0JBQXNCO3dCQUN0QixXQUFXO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtxQkFDOUU7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXV0aFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2F1dGgtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aG9yaXplSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGguaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4nO1xuaW1wb3J0IHsgUGFzc3dvcmRTdHJlbmd0aE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wYXNzd29yZC1zdHJlbmd0aCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlcic7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICAgICAgQXV0aFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFJlZ2lzdGVyTW9kdWxlLFxuICAgICAgICBQYXNzd29yZFN0cmVuZ3RoTW9kdWxlLFxuICAgICAgICBMb2dpbk1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBBdXRob3JpemVJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfVxuICAgIF0sXG4gICAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQXV0aGxpYk1vZHVsZSB7IH1cbiJdfQ==