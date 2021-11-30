import { Component, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../profile-menu/profile-menu.service";
export class ProfileDisplayComponent {
    constructor(service) {
        this.service = service;
        this.openStatusSubscription = undefined;
        this.user = null;
        this.openStatus$ = this.service.openStatus$;
    }
    ngOnInit() {
    }
    toggleDropdown() {
        this.openStatusSubscription = this.openStatus$.pipe(take(1))
            .subscribe(status => {
            this.service.changeOpenStatus(!status);
        });
    }
    ngOnDestroy() {
        var _a;
        this.openStatusSubscription && ((_a = this.openStatusSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe());
    }
}
ProfileDisplayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileDisplayComponent, deps: [{ token: i1.ProfileMenuService }], target: i0.ɵɵFactoryTarget.Component });
ProfileDisplayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: ProfileDisplayComponent, selector: "app-profile-display", inputs: { user: "user" }, ngImport: i0, template: `
        <div class="profile-display">
            <button (click)="toggleDropdown()" type="button" class="profile-display__button" id="profile-menu-button"
                    aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open profile menu</span>
                <span class="profile-display__welcome">Welcome {{ user?.firstName }}</span>
                <!-- <h1 *ngIf="user">Welcome {{ user?.firstName }}</h1> -->
            </button>
        </div>
    `, isInline: true, styles: ["\n        .profile-display {\n            @apply relative z-10;\n\n            &__button {\n                @apply flex items-center space-x-4 bg-gray-800 rounded-full focus:outline-none ring-0;\n            }\n\n            &__welcome {\n                //hover:bg-gray-700\n                @apply text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium;\n            }\n        }\n    "] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileDisplayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-profile-display',
                    template: `
        <div class="profile-display">
            <button (click)="toggleDropdown()" type="button" class="profile-display__button" id="profile-menu-button"
                    aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open profile menu</span>
                <span class="profile-display__welcome">Welcome {{ user?.firstName }}</span>
                <!-- <h1 *ngIf="user">Welcome {{ user?.firstName }}</h1> -->
            </button>
        </div>
    `,
                    styles: [`
        .profile-display {
            @apply relative z-10;

            &__button {
                @apply flex items-center space-x-4 bg-gray-800 rounded-full focus:outline-none ring-0;
            }

            &__welcome {
                //hover:bg-gray-700
                @apply text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium;
            }
        }
    `]
                }]
        }], ctorParameters: function () { return [{ type: i1.ProfileMenuService }]; }, propDecorators: { user: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1kaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi9zcmMvbGliL3Byb2ZpbGUtZGlzcGxheS9wcm9maWxlLWRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUdwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQStCdEMsTUFBTSxPQUFPLHVCQUF1QjtJQU9oQyxZQUNZLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTC9CLDJCQUFzQixHQUE2QixTQUFTLENBQUM7UUFFNUQsU0FBSSxHQUFpQixJQUFJLENBQUM7UUFLL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNoRCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RCxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFdBQVc7O1FBQ1AsSUFBSSxDQUFDLHNCQUFzQixLQUFJLE1BQUEsSUFBSSxDQUFDLHNCQUFzQiwwQ0FBRSxXQUFXLEVBQUUsQ0FBQSxDQUFDO0lBQzlFLENBQUM7O3FIQXpCUSx1QkFBdUI7eUdBQXZCLHVCQUF1QixxRkF6QnRCOzs7Ozs7Ozs7S0FTVDs0RkFnQlEsdUJBQXVCO2tCQTNCbkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7Ozs7Ozs7OztLQVNUO29CQUNELE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0tBYVIsQ0FBQztpQkFDTDt5R0FNWSxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJ0Bjb3JlbGliJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlTWVudVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlLW1lbnUvcHJvZmlsZS1tZW51LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1wcm9maWxlLWRpc3BsYXknLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsZS1kaXNwbGF5XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9maWxlLWRpc3BsYXlfX2J1dHRvblwiIGlkPVwicHJvZmlsZS1tZW51LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPk9wZW4gcHJvZmlsZSBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9maWxlLWRpc3BsYXlfX3dlbGNvbWVcIj5XZWxjb21lIHt7IHVzZXI/LmZpcnN0TmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGgxICpuZ0lmPVwidXNlclwiPldlbGNvbWUge3sgdXNlcj8uZmlyc3ROYW1lIH19PC9oMT4gLS0+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAucHJvZmlsZS1kaXNwbGF5IHtcclxuICAgICAgICAgICAgQGFwcGx5IHJlbGF0aXZlIHotMTA7XHJcblxyXG4gICAgICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBiZy1ncmF5LTgwMCByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHJpbmctMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fd2VsY29tZSB7XHJcbiAgICAgICAgICAgICAgICAvL2hvdmVyOmJnLWdyYXktNzAwXHJcbiAgICAgICAgICAgICAgICBAYXBwbHkgdGV4dC1ncmF5LTMwMCAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVEaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgb3BlblN0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICBwcml2YXRlIG9wZW5TdGF0dXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBASW5wdXQoKSB1c2VyOiBJVXNlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2VydmljZTogUHJvZmlsZU1lbnVTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm9wZW5TdGF0dXMkID0gdGhpcy5zZXJ2aWNlLm9wZW5TdGF0dXMkO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURyb3Bkb3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3BlblN0YXR1c1N1YnNjcmlwdGlvbiA9IHRoaXMub3BlblN0YXR1cyQucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlT3BlblN0YXR1cyghc3RhdHVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcGVuU3RhdHVzU3Vic2NyaXB0aW9uICYmIHRoaXMub3BlblN0YXR1c1N1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19