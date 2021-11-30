import { Component, ViewChild } from '@angular/core';
import { ElementHostDirective } from '../../directives';
import { AlertComponent } from './alert.component';
import * as i0 from "@angular/core";
import * as i1 from "../services/alert.service";
import * as i2 from "../../directives/element-host.directive";
export class AlertContainerComponent {
    constructor(resolver, alertService) {
        this.resolver = resolver;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertSubscription = this.alertService.onAlert().subscribe(alert => {
            this.addAlert(alert);
        });
    }
    addAlert(alert) {
        const container = this.appElementHost.viewContainerRef;
        const componentFactory = this.resolver.resolveComponentFactory(AlertComponent);
        // container.clear();
        const componentRef = container.createComponent(componentFactory);
        componentRef.instance.alert = alert;
        componentRef.instance.closeAlert.subscribe((status) => {
            status && componentRef.destroy();
            // status && container.clear();
        });
    }
    ngOnDestroy() {
        this.alertSubscription.unsubscribe();
    }
}
AlertContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AlertContainerComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i1.AlertService }], target: i0.ɵɵFactoryTarget.Component });
AlertContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: AlertContainerComponent, selector: "app-alert-container", viewQueries: [{ propertyName: "appElementHost", first: true, predicate: ElementHostDirective, descendants: true, static: true }], ngImport: i0, template: `
      <ng-template appElementHost></ng-template>
  `, isInline: true, styles: ["\n        :host {\n            @apply flex flex-row flex-wrap fixed top-0 right-0 px-4 py-6 sm:p-6 max-w-sm items-end sm:items-end pointer-events-none;\n            @apply max-w-sm w-full z-20;\n        }\n    "], directives: [{ type: i2.ElementHostDirective, selector: "[appElementHost]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AlertContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-alert-container',
                    template: `
      <ng-template appElementHost></ng-template>
  `,
                    styles: [`
        :host {
            @apply flex flex-row flex-wrap fixed top-0 right-0 px-4 py-6 sm:p-6 max-w-sm items-end sm:items-end pointer-events-none;
            @apply max-w-sm w-full z-20;
        }
    `
                    ],
                    // providers: [AlertService]
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.AlertService }]; }, propDecorators: { appElementHost: [{
                type: ViewChild,
                args: [ElementHostDirective, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi9zcmMvbGliL2FsZXJ0L2NvbXBvbmVudHMvYWxlcnQtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUErQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBZ0JuRCxNQUFNLE9BQU8sdUJBQXVCO0lBS2hDLFlBQ1ksUUFBa0MsRUFDbEMsWUFBMEI7UUFEMUIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7SUFFbEMsQ0FBQztJQUVMLFFBQVE7UUFDSixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTyxRQUFRLENBQUMsS0FBWTtRQUN6QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRSxxQkFBcUI7UUFFckIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBa0IsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRixZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFcEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDM0QsTUFBTSxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQywrQkFBK0I7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDOztxSEFqQ1EsdUJBQXVCO3lHQUF2Qix1QkFBdUIsMkdBRXJCLG9CQUFvQiw4REFkckI7O0dBRVg7NEZBVVUsdUJBQXVCO2tCQWRuQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRTs7R0FFWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7S0FLUjtxQkFDQTtvQkFDRCw0QkFBNEI7aUJBQy9COzBJQUdzRCxjQUFjO3NCQUFoRSxTQUFTO3VCQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRWxlbWVudEhvc3REaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcclxuaW1wb3J0IHsgQWxlcnQsIElBbGVydENvbXBvbmVudCB9IGZyb20gJy4uL2FsZXJ0Lm1vZGVsJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1hbGVydC1jb250YWluZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLXRlbXBsYXRlIGFwcEVsZW1lbnRIb3N0PjwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgIEBhcHBseSBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBmaXhlZCB0b3AtMCByaWdodC0wIHB4LTQgcHktNiBzbTpwLTYgbWF4LXctc20gaXRlbXMtZW5kIHNtOml0ZW1zLWVuZCBwb2ludGVyLWV2ZW50cy1ub25lO1xyXG4gICAgICAgICAgICBAYXBwbHkgbWF4LXctc20gdy1mdWxsIHotMjA7XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG4gICAgXSxcclxuICAgIC8vIHByb3ZpZGVyczogW0FsZXJ0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoRWxlbWVudEhvc3REaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGFwcEVsZW1lbnRIb3N0ITogRWxlbWVudEhvc3REaXJlY3RpdmU7XHJcbiAgICBhbGVydFN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcclxuICAgICAgICAvLyBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFsZXJ0U3Vic2NyaXB0aW9uID0gdGhpcy5hbGVydFNlcnZpY2Uub25BbGVydCgpLnN1YnNjcmliZShhbGVydCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQWxlcnQoYWxlcnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRBbGVydChhbGVydDogQWxlcnQpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmFwcEVsZW1lbnRIb3N0LnZpZXdDb250YWluZXJSZWY7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQWxlcnRDb21wb25lbnQpO1xyXG4gICAgICAgIC8vIGNvbnRhaW5lci5jbGVhcigpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb250YWluZXIuY3JlYXRlQ29tcG9uZW50PElBbGVydENvbXBvbmVudD4oY29tcG9uZW50RmFjdG9yeSk7XHJcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmFsZXJ0ID0gYWxlcnQ7XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbG9zZUFsZXJ0LnN1YnNjcmliZSgoc3RhdHVzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXR1cyAmJiBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyBzdGF0dXMgJiYgY29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=