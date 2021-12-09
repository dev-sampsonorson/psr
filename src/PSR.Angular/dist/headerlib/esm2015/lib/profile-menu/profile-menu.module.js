import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenuModule, DropdownMenuModule } from '@sharedlib';
import { ProfileDisplayModule } from '../profile-display/profile-display.module';
import { ProfileMenuComponent } from './profile-menu.component';
import * as i0 from "@angular/core";
export class ProfileMenuModule {
}
ProfileMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ProfileMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ProfileMenuModule, declarations: [ProfileMenuComponent], imports: [CommonModule,
        ProfileDisplayModule,
        DropdownMenuModule,
        ContextMenuModule], exports: [ProfileMenuComponent] });
ProfileMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ProfileMenuModule, imports: [[
            CommonModule,
            ProfileDisplayModule,
            DropdownMenuModule,
            ContextMenuModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ProfileMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ProfileMenuComponent],
                    imports: [
                        CommonModule,
                        ProfileDisplayModule,
                        DropdownMenuModule,
                        ContextMenuModule
                    ],
                    exports: [ProfileMenuComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi90ZW1wL3NyYy9saWIvcHJvZmlsZS1tZW51L3Byb2ZpbGUtbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQWNoRSxNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBVFgsb0JBQW9CLGFBRS9CLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGlCQUFpQixhQUVYLG9CQUFvQjtnSEFFckIsaUJBQWlCLFlBUmpCO1lBQ0wsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsaUJBQWlCO1NBQ3BCOzRGQUdRLGlCQUFpQjtrQkFWN0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250ZXh0TWVudU1vZHVsZSwgRHJvcGRvd25NZW51TW9kdWxlIH0gZnJvbSAnQHNoYXJlZGxpYic7XG5cbmltcG9ydCB7IFByb2ZpbGVEaXNwbGF5TW9kdWxlIH0gZnJvbSAnLi4vcHJvZmlsZS1kaXNwbGF5L3Byb2ZpbGUtZGlzcGxheS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZmlsZU1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUtbWVudS5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtQcm9maWxlTWVudUNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFByb2ZpbGVEaXNwbGF5TW9kdWxlLFxuICAgICAgICBEcm9wZG93bk1lbnVNb2R1bGUsXG4gICAgICAgIENvbnRleHRNZW51TW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUHJvZmlsZU1lbnVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVNZW51TW9kdWxlIHsgfVxuIl19