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
BreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BreadcrumbModule, declarations: [BreadcrumbComponent], imports: [CommonModule,
        RouterModule], exports: [BreadcrumbComponent] });
BreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BreadcrumbModule, providers: [BreadcrumbService], imports: [[
            CommonModule,
            RouterModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BreadcrumbModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvc3JjL2xpYi9icmVhZGNydW1iL2JyZWFkY3J1bWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBYXpELE1BQU0sT0FBTyxnQkFBZ0I7SUFDekIsTUFBTSxDQUFDLFVBQVUsQ0FDYixNQUFxQjtRQUVyQixPQUFPO1lBQ0gsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1A7b0JBQ0ksT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsUUFBUSxFQUFFLE1BQU0sSUFBSSxFQUFFO2lCQUN6QjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7OzhHQWJRLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQVJWLG1CQUFtQixhQUU5QixZQUFZO1FBQ1osWUFBWSxhQUdOLG1CQUFtQjsrR0FFcEIsZ0JBQWdCLGFBSGQsQ0FBQyxpQkFBaUIsQ0FBQyxZQUpyQjtZQUNMLFlBQVk7WUFDWixZQUFZO1NBQ2Y7NEZBSVEsZ0JBQWdCO2tCQVQ1QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixZQUFZO3FCQUNmO29CQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEJSRUFEQ1JVTUJfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9icmVhZGNydW1iLWNvbmZpZy50b2tlbic7XG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQnJlYWRjcnVtYiB9IGZyb20gJy4vYnJlYWRjcnVtYi5tb2RlbCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYnJlYWRjcnVtYi5zZXJ2aWNlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQnJlYWRjcnVtYkNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQnJlYWRjcnVtYlNlcnZpY2VdLFxuICAgIGV4cG9ydHM6IFtCcmVhZGNydW1iQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iTW9kdWxlIHtcbiAgICBzdGF0aWMgd2l0aENvbmZpZyhcbiAgICAgICAgY29uZmlnOiBJQnJlYWRjcnVtYltdXG4gICAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxCcmVhZGNydW1iTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQnJlYWRjcnVtYk1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogQlJFQURDUlVNQl9DT05GSUdfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcgfHwgW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19