import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementHostModule } from '../directives';
import { AlertContainerComponent } from './components/alert-container/alert-container.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';
import { ALERT_CONFIG_TOKEN } from './tokens/alert-config.token';
import * as i0 from "@angular/core";
export class AlertModule {
    static forRoot(config) {
        return {
            ngModule: AlertModule,
            providers: [
                AlertService,
                { provide: ALERT_CONFIG_TOKEN, useValue: config }
            ]
        };
    }
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertModule, declarations: [AlertContainerComponent, AlertComponent], imports: [CommonModule, ElementHostModule], exports: [AlertContainerComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertModule, imports: [[CommonModule, ElementHostModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlertContainerComponent, AlertComponent],
                    imports: [CommonModule, ElementHostModule],
                    exports: [AlertContainerComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3RlbXAvc3JjL2xpYi9hbGVydC9hbGVydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQVNqRSxNQUFNLE9BQU8sV0FBVztJQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXFCO1FBQ2hDLE9BQU87WUFDSCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3BEO1NBQ0osQ0FBQztJQUNOLENBQUM7O3lHQVRRLFdBQVc7MEdBQVgsV0FBVyxpQkFKTCx1QkFBdUIsRUFBRSxjQUFjLGFBQzVDLFlBQVksRUFBRSxpQkFBaUIsYUFDL0IsdUJBQXVCOzBHQUV4QixXQUFXLFlBSFgsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7NEZBR2pDLFdBQVc7a0JBTHZCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsY0FBYyxDQUFDO29CQUN2RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQzFDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50SG9zdE1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMnO1xyXG5pbXBvcnQgeyBJQWxlcnRPcHRpb25zIH0gZnJvbSAnLi9hbGVydC5tb2RlbCc7XHJcbmltcG9ydCB7IEFsZXJ0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0LWNvbnRhaW5lci9hbGVydC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUxFUlRfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi90b2tlbnMvYWxlcnQtY29uZmlnLnRva2VuJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0FsZXJ0Q29udGFpbmVyQ29tcG9uZW50LCBBbGVydENvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBFbGVtZW50SG9zdE1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbQWxlcnRDb250YWluZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc6IElBbGVydE9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFsZXJ0TW9kdWxlPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEFsZXJ0TW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIEFsZXJ0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQUxFUlRfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19