import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BREADCRUMB_CONFIG_TOKEN } from './breadcrumb-config.token';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';
import * as i0 from "@angular/core";
export class BreadcrumbModule {
    static withConfig(config) {
        return {
            ngModule: BreadcrumbModule,
            providers: [
                {
                    provide: BREADCRUMB_CONFIG_TOKEN,
                    useValue: config || []
                }
            ]
        };
    }
}
BreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbModule, declarations: [BreadcrumbComponent], imports: [CommonModule,
        RouterModule], exports: [BreadcrumbComponent] });
BreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbModule, providers: [BreadcrumbService], imports: [[
            CommonModule,
            RouterModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BreadcrumbComponent],
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    providers: [BreadcrumbService],
                    exports: [BreadcrumbComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFhekQsTUFBTSxPQUFPLGdCQUFnQjtJQUN6QixNQUFNLENBQUMsVUFBVSxDQUNiLE1BQXFCO1FBRXJCLE9BQU87WUFDSCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxRQUFRLEVBQUUsTUFBTSxJQUFJLEVBQUU7aUJBQ3pCO2FBQ0o7U0FDSixDQUFDO0lBQ04sQ0FBQzs7OEdBYlEsZ0JBQWdCOytHQUFoQixnQkFBZ0IsaUJBUlYsbUJBQW1CLGFBRTlCLFlBQVk7UUFDWixZQUFZLGFBR04sbUJBQW1COytHQUVwQixnQkFBZ0IsYUFIZCxDQUFDLGlCQUFpQixDQUFDLFlBSnJCO1lBQ0wsWUFBWTtZQUNaLFlBQVk7U0FDZjs0RkFJUSxnQkFBZ0I7a0JBVDVCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFlBQVk7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQlJFQURDUlVNQl9DT05GSUdfVE9LRU4gfSBmcm9tICcuL2JyZWFkY3J1bWItY29uZmlnLnRva2VuJztcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IElCcmVhZGNydW1iIH0gZnJvbSAnLi9icmVhZGNydW1iLm1vZGVsJztcbmltcG9ydCB7IEJyZWFkY3J1bWJTZXJ2aWNlIH0gZnJvbSAnLi9icmVhZGNydW1iLnNlcnZpY2UnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtCcmVhZGNydW1iQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtCcmVhZGNydW1iU2VydmljZV0sXG4gICAgZXhwb3J0czogW0JyZWFkY3J1bWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJNb2R1bGUge1xuICAgIHN0YXRpYyB3aXRoQ29uZmlnKFxuICAgICAgICBjb25maWc6IElCcmVhZGNydW1iW11cbiAgICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJyZWFkY3J1bWJNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBCcmVhZGNydW1iTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBCUkVBRENSVU1CX0NPTkZJR19UT0tFTixcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyB8fCBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=