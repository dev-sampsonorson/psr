import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthModule } from '../password-strength';
import { RegisterComponent } from './register.component';
import * as i0 from "@angular/core";
export class RegisterModule {
}
RegisterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RegisterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterModule, declarations: [RegisterComponent], imports: [ReactiveFormsModule, PasswordStrengthModule], exports: [RegisterComponent] });
RegisterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterModule, imports: [[ReactiveFormsModule, PasswordStrengthModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: RegisterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [ReactiveFormsModule, PasswordStrengthModule],
                    declarations: [RegisterComponent],
                    exports: [RegisterComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGxpYi9zcmMvbGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBU3pELE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjOzZHQUFkLGNBQWMsaUJBSFIsaUJBQWlCLGFBRHRCLG1CQUFtQixFQUFFLHNCQUFzQixhQUUzQyxpQkFBaUI7NkdBRWxCLGNBQWMsWUFKZCxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDOzRGQUk3QyxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDO29CQUN0RCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBhc3N3b3JkU3RyZW5ndGhNb2R1bGUgfSBmcm9tICcuLi9wYXNzd29yZC1zdHJlbmd0aCc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JlYWN0aXZlRm9ybXNNb2R1bGUsIFBhc3N3b3JkU3RyZW5ndGhNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbUmVnaXN0ZXJDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1JlZ2lzdGVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJNb2R1bGUgeyB9Il19