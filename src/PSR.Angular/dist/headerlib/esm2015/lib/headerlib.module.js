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
HeaderlibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: HeaderlibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HeaderlibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: HeaderlibModule, declarations: [HeaderComponent], imports: [CommonModule,
        LogoModule,
        HamburgerModule,
        NavigationModule,
        ProfileMenuModule,
        ProfileDisplayModule], exports: [HeaderComponent] });
HeaderlibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: HeaderlibModule, imports: [[
            CommonModule,
            LogoModule,
            HamburgerModule,
            NavigationModule,
            ProfileMenuModule,
            ProfileDisplayModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: HeaderlibModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVybGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi90ZW1wL3NyYy9saWIvaGVhZGVybGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQWdCbEUsTUFBTSxPQUFPLGVBQWU7SUFDeEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFnQixFQUFFLFdBQWdCO1FBQ2hELE9BQU87WUFDSCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDdEQsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUN6RDtTQUNKLENBQUE7SUFDTCxDQUFDOzs2R0FUUSxlQUFlOzhHQUFmLGVBQWUsaUJBWnBCLGVBQWUsYUFJZixZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG9CQUFvQixhQVBkLGVBQWU7OEdBVWhCLGVBQWUsWUFUZjtZQUNMLFlBQVk7WUFDWixVQUFVO1lBQ1YsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsb0JBQW9CO1NBQ3ZCOzRGQUVRLGVBQWU7a0JBZDNCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixvQkFBb0I7cUJBQ3ZCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dvTW9kdWxlIH0gZnJvbSAnQHNoYXJlZGxpYic7XG5cbmltcG9ydCB7IEhhbWJ1cmdlck1vZHVsZSB9IGZyb20gJy4vaGFtYnVyZ2VyJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IFByb2ZpbGVEaXNwbGF5TW9kdWxlIH0gZnJvbSAnLi9wcm9maWxlLWRpc3BsYXknO1xuaW1wb3J0IHsgUHJvZmlsZU1lbnVNb2R1bGUgfSBmcm9tICcuL3Byb2ZpbGUtbWVudSc7XG5pbXBvcnQgeyBQUklNQVJZX01FTlVfVE9LRU4sIFBST0ZJTEVfTUVOVV9UT0tFTiB9IGZyb20gJy4vdG9rZW5zJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbSGVhZGVyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTG9nb01vZHVsZSxcbiAgICAgICAgSGFtYnVyZ2VyTW9kdWxlLFxuICAgICAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgICAgICBQcm9maWxlTWVudU1vZHVsZSxcbiAgICAgICAgUHJvZmlsZURpc3BsYXlNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlcmxpYk1vZHVsZSB7XG4gICAgc3RhdGljIHdpdGhDb25maWcocHJpbWFyeU1lbnU6IGFueSwgcHJvZmlsZU1lbnU6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SGVhZGVybGliTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogSGVhZGVybGliTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBQUklNQVJZX01FTlVfVE9LRU4sIHVzZVZhbHVlOiBwcmltYXJ5TWVudSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogUFJPRklMRV9NRU5VX1RPS0VOLCB1c2VWYWx1ZTogcHJvZmlsZU1lbnUgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxuIl19