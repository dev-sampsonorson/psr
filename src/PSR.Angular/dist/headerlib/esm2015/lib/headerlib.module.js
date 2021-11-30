import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoModule } from '@sharedlib';
import { HamburgerModule } from './hamburger';
import { HeaderComponent } from './header.component';
import { NavigationModule } from './navigation';
import { ProfileDisplayModule } from './profile-display';
import { ProfileMenuModule } from './profile-menu';
import { PRIMARY_MENU_TOKEN, PROFILE_MENU_TOKEN } from './tokens';
import * as i0 from "@angular/core";
export class HeaderlibModule {
    static withConfig(primaryMenu, profileMenu) {
        return {
            ngModule: HeaderlibModule,
            providers: [
                { provide: PRIMARY_MENU_TOKEN, useValue: primaryMenu },
                { provide: PROFILE_MENU_TOKEN, useValue: profileMenu }
            ]
        };
    }
}
HeaderlibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderlibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HeaderlibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderlibModule, declarations: [HeaderComponent], imports: [CommonModule,
        LogoModule,
        HamburgerModule,
        NavigationModule,
        ProfileMenuModule,
        ProfileDisplayModule], exports: [HeaderComponent] });
HeaderlibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderlibModule, imports: [[
            CommonModule,
            LogoModule,
            HamburgerModule,
            NavigationModule,
            ProfileMenuModule,
            ProfileDisplayModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: HeaderlibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HeaderComponent
                    ],
                    exports: [HeaderComponent],
                    imports: [
                        CommonModule,
                        LogoModule,
                        HamburgerModule,
                        NavigationModule,
                        ProfileMenuModule,
                        ProfileDisplayModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVybGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi9zcmMvbGliL2hlYWRlcmxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxZQUFZLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFnQmxFLE1BQU0sT0FBTyxlQUFlO0lBQ3hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBdUIsRUFBRSxXQUF1QjtRQUM5RCxPQUFPO1lBQ0gsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQ3RELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7YUFDekQ7U0FDSixDQUFBO0lBQ0wsQ0FBQzs7NkdBVFEsZUFBZTs4R0FBZixlQUFlLGlCQVpwQixlQUFlLGFBSWYsWUFBWTtRQUNaLFVBQVU7UUFDVixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixvQkFBb0IsYUFQZCxlQUFlOzhHQVVoQixlQUFlLFlBVGY7WUFDTCxZQUFZO1lBQ1osVUFBVTtZQUNWLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtTQUN2Qjs0RkFFUSxlQUFlO2tCQWQzQixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixlQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzFCLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsb0JBQW9CO3FCQUN2QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nb01vZHVsZSwgTWVudUl0ZW0gfSBmcm9tICdAc2hhcmVkbGliJztcblxuaW1wb3J0IHsgSGFtYnVyZ2VyTW9kdWxlIH0gZnJvbSAnLi9oYW1idXJnZXInO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgUHJvZmlsZURpc3BsYXlNb2R1bGUgfSBmcm9tICcuL3Byb2ZpbGUtZGlzcGxheSc7XG5pbXBvcnQgeyBQcm9maWxlTWVudU1vZHVsZSB9IGZyb20gJy4vcHJvZmlsZS1tZW51JztcbmltcG9ydCB7IFBSSU1BUllfTUVOVV9UT0tFTiwgUFJPRklMRV9NRU5VX1RPS0VOIH0gZnJvbSAnLi90b2tlbnMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIZWFkZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtIZWFkZXJDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBMb2dvTW9kdWxlLFxuICAgICAgICBIYW1idXJnZXJNb2R1bGUsXG4gICAgICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgICAgIFByb2ZpbGVNZW51TW9kdWxlLFxuICAgICAgICBQcm9maWxlRGlzcGxheU1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVybGliTW9kdWxlIHtcbiAgICBzdGF0aWMgd2l0aENvbmZpZyhwcmltYXJ5TWVudTogTWVudUl0ZW1bXSwgcHJvZmlsZU1lbnU6IE1lbnVJdGVtW10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEhlYWRlcmxpYk1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEhlYWRlcmxpYk1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogUFJJTUFSWV9NRU5VX1RPS0VOLCB1c2VWYWx1ZTogcHJpbWFyeU1lbnUgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFBST0ZJTEVfTUVOVV9UT0tFTiwgdXNlVmFsdWU6IHByb2ZpbGVNZW51IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==