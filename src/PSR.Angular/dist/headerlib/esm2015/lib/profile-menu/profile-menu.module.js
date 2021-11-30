import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenuModule, DropdownMenuModule } from '@sharedlib';
import { ProfileDisplayModule } from '../profile-display/profile-display.module';
import { ProfileMenuComponent } from './profile-menu.component';
import * as i0 from "@angular/core";
export class ProfileMenuModule {
}
ProfileMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuModule, declarations: [ProfileMenuComponent], imports: [CommonModule,
        ProfileDisplayModule,
        DropdownMenuModule,
        ContextMenuModule], exports: [ProfileMenuComponent] });
ProfileMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuModule, imports: [[
            CommonModule,
            ProfileDisplayModule,
            DropdownMenuModule,
            ContextMenuModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ProfileMenuModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlYWRlcmxpYi9zcmMvbGliL3Byb2ZpbGUtbWVudS9wcm9maWxlLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFjaEUsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQVRYLG9CQUFvQixhQUUvQixZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixpQkFBaUIsYUFFWCxvQkFBb0I7Z0hBRXJCLGlCQUFpQixZQVJqQjtZQUNMLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtTQUNwQjs0RkFHUSxpQkFBaUI7a0JBVjdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixpQkFBaUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVNb2R1bGUsIERyb3Bkb3duTWVudU1vZHVsZSB9IGZyb20gJ0BzaGFyZWRsaWInO1xuXG5pbXBvcnQgeyBQcm9maWxlRGlzcGxheU1vZHVsZSB9IGZyb20gJy4uL3Byb2ZpbGUtZGlzcGxheS9wcm9maWxlLWRpc3BsYXkubW9kdWxlJztcbmltcG9ydCB7IFByb2ZpbGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlLW1lbnUuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUHJvZmlsZU1lbnVDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBQcm9maWxlRGlzcGxheU1vZHVsZSxcbiAgICAgICAgRHJvcGRvd25NZW51TW9kdWxlLFxuICAgICAgICBDb250ZXh0TWVudU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1Byb2ZpbGVNZW51Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlTWVudU1vZHVsZSB7IH1cbiJdfQ==