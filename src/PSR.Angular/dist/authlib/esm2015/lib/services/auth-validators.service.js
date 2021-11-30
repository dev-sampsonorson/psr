import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
export class AuthValidatorsService {
    constructor(auth) {
        this.auth = auth;
    }
    passwordMatchValidator(password, confirmPassword) {
        return (formGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];
            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }
            if (confirmPasswordControl.errors &&
                !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
                return true;
            }
            else {
                confirmPasswordControl.setErrors(null);
                return null;
            }
        };
    }
    /*
        RegEx	Description
        ^	The password string will start this way
        (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
        (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
        (?=.*[0-9])	The string must contain at least 1 numeric character
        (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
        (?=.{8,})	The string must be eight characters or longer

        by- Nic Raboy
    */
    passwordPatternValidator() {
        return (control) => {
            if (!control.value)
                return null;
            const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})');
            const valid = regex.test(control.value);
            return valid ? null : { passwordInvalid: true };
        };
    }
    emailAvailableValidator() {
        const subject = new BehaviorSubject('');
        const debouncedInput$ = subject.asObservable().pipe(distinctUntilChanged(), debounceTime(1000), switchMap(value => this.auth.checkEmailExists(value)), map((result, index) => {
            return result.value === 'invalid' ? { emailNotAvailable: true } : null;
        })).pipe(first());
        return (control) => {
            if (!control.value)
                return of(null);
            subject.next(control.value);
            return debouncedInput$;
        };
    }
}
AuthValidatorsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthValidatorsService, deps: [{ token: i1.AuthService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthValidatorsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthValidatorsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AuthValidatorsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC12YWxpZGF0b3JzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRobGliL3NyYy9saWIvc2VydmljZXMvYXV0aC12YWxpZGF0b3JzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU8zRixNQUFNLE9BQU8scUJBQXFCO0lBRTlCLFlBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBSSxDQUFDO0lBRTFDLHNCQUFzQixDQUFDLFFBQWdCLEVBQUUsZUFBdUI7UUFDNUQsT0FBTyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUM1QixNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sc0JBQXNCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuRSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7Z0JBQzdDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFFRCxJQUNJLHNCQUFzQixDQUFDLE1BQU07Z0JBQzdCLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUNqRDtnQkFDRSxPQUFPLElBQUksQ0FBQzthQUNmO1lBRUQsSUFBSSxlQUFlLENBQUMsS0FBSyxLQUFLLHNCQUFzQixDQUFDLEtBQUssRUFBRTtnQkFDeEQsc0JBQXNCLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7TUFVRTtJQUNGLHdCQUF3QjtRQUNwQixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7Z0JBQ2QsT0FBTyxJQUFJLENBQUM7WUFFaEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsa0VBQWtFLENBQUMsQ0FBQztZQUM3RixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNwRCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsdUJBQXVCO1FBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQy9DLG9CQUFvQixFQUFFLEVBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFDbEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUNyRCxHQUFHLENBQUMsQ0FBQyxNQUFXLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDL0IsT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUNMLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFaEIsT0FBTyxDQUFDLE9BQXdCLEVBQXVDLEVBQUU7WUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUNkLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUMsQ0FBQztJQUNOLENBQUM7O21IQXRFUSxxQkFBcUI7dUhBQXJCLHFCQUFxQixjQUZsQixNQUFNOzRGQUVULHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3JGbiwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFZhbGlkYXRvcnNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKHBhc3N3b3JkOiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChmb3JtR3JvdXA6IEZvcm1Hcm91cCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZENvbnRyb2wgPSBmb3JtR3JvdXAuY29udHJvbHNbcGFzc3dvcmRdO1xyXG4gICAgICAgICAgICBjb25zdCBjb25maXJtUGFzc3dvcmRDb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBhc3N3b3JkQ29udHJvbCB8fCAhY29uZmlybVBhc3N3b3JkQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZENvbnRyb2wuZXJyb3JzICYmXHJcbiAgICAgICAgICAgICAgICAhY29uZmlybVBhc3N3b3JkQ29udHJvbC5lcnJvcnMucGFzc3dvcmRNaXNtYXRjaFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmRDb250cm9sLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmRDb250cm9sLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRDb250cm9sLnNldEVycm9ycyh7IHBhc3N3b3JkTWlzbWF0Y2g6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZENvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgICAgUmVnRXhcdERlc2NyaXB0aW9uXHJcbiAgICAgICAgXlx0VGhlIHBhc3N3b3JkIHN0cmluZyB3aWxsIHN0YXJ0IHRoaXMgd2F5XHJcbiAgICAgICAgKD89LipbYS16XSlcdFRoZSBzdHJpbmcgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGFscGhhYmV0aWNhbCBjaGFyYWN0ZXJcclxuICAgICAgICAoPz0uKltBLVpdKVx0VGhlIHN0cmluZyBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSB1cHBlcmNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlclxyXG4gICAgICAgICg/PS4qWzAtOV0pXHRUaGUgc3RyaW5nIG11c3QgY29udGFpbiBhdCBsZWFzdCAxIG51bWVyaWMgY2hhcmFjdGVyXHJcbiAgICAgICAgKD89LipbIUAjJCVeJipdKVx0VGhlIHN0cmluZyBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyLCBidXQgd2UgYXJlIGVzY2FwaW5nIHJlc2VydmVkIFJlZ0V4IGNoYXJhY3RlcnMgdG8gYXZvaWQgY29uZmxpY3RcclxuICAgICAgICAoPz0uezgsfSlcdFRoZSBzdHJpbmcgbXVzdCBiZSBlaWdodCBjaGFyYWN0ZXJzIG9yIGxvbmdlclxyXG5cclxuICAgICAgICBieS0gTmljIFJhYm95XHJcbiAgICAqL1xyXG4gICAgcGFzc3dvcmRQYXR0ZXJuVmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb250cm9sLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkoPz0uKlshQCNcXCQlXFxeJlxcKlxcLl0pKD89Lns4LH0pJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gcmVnZXgudGVzdChjb250cm9sLnZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkID8gbnVsbCA6IHsgcGFzc3dvcmRJbnZhbGlkOiB0cnVlIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBlbWFpbEF2YWlsYWJsZVZhbGlkYXRvcigpOiBBc3luY1ZhbGlkYXRvckZuIHtcclxuICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcclxuICAgICAgICBjb25zdCBkZWJvdW5jZWRJbnB1dCQgPSBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSgxMDAwKSxcclxuICAgICAgICAgICAgc3dpdGNoTWFwKHZhbHVlID0+IHRoaXMuYXV0aC5jaGVja0VtYWlsRXhpc3RzKHZhbHVlKSksXHJcbiAgICAgICAgICAgIG1hcCgocmVzdWx0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudmFsdWUgPT09ICdpbnZhbGlkJyA/IHsgZW1haWxOb3RBdmFpbGFibGU6IHRydWUgfSA6IG51bGw7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS5waXBlKGZpcnN0KCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb250cm9sLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgc3ViamVjdC5uZXh0KGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVib3VuY2VkSW5wdXQkO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19