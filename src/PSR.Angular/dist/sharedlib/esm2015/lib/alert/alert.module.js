import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementHostModule } from '../directives';
import { AlertContainerComponent } from './components/alert-container.component';
import { AlertComponent } from './components/alert.component';
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
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AlertModule, declarations: [AlertContainerComponent, AlertComponent], imports: [CommonModule, ElementHostModule], exports: [AlertContainerComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AlertModule, imports: [[CommonModule, ElementHostModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlertContainerComponent, AlertComponent],
                    imports: [CommonModule, ElementHostModule],
                    exports: [AlertContainerComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3NyYy9saWIvYWxlcnQvYWxlcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFTakUsTUFBTSxPQUFPLFdBQVc7SUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFxQjtRQUNoQyxPQUFPO1lBQ0gsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUNwRDtTQUNKLENBQUM7SUFDTixDQUFDOzt5R0FUUSxXQUFXOzBHQUFYLFdBQVcsaUJBSkwsdUJBQXVCLEVBQUUsY0FBYyxhQUM1QyxZQUFZLEVBQUUsaUJBQWlCLGFBQy9CLHVCQUF1QjswR0FFeEIsV0FBVyxZQUhYLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDOzRGQUdqQyxXQUFXO2tCQUx2QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLGNBQWMsQ0FBQztvQkFDdkQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUMxQyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRWxlbWVudEhvc3RNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzJztcclxuaW1wb3J0IHsgSUFsZXJ0T3B0aW9ucyB9IGZyb20gJy4vYWxlcnQubW9kZWwnO1xyXG5pbXBvcnQgeyBBbGVydENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUxFUlRfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi90b2tlbnMvYWxlcnQtY29uZmlnLnRva2VuJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0FsZXJ0Q29udGFpbmVyQ29tcG9uZW50LCBBbGVydENvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBFbGVtZW50SG9zdE1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbQWxlcnRDb250YWluZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc6IElBbGVydE9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFsZXJ0TW9kdWxlPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEFsZXJ0TW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIEFsZXJ0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQUxFUlRfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19