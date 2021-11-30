import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule, SecondaryHeaderModule } from '@sharedlib';
import { SkillFormModule } from '@skilllib';
import { SkillAddComponent } from './skill-add.component';
import * as i0 from "@angular/core";
export class SkillAddModule {
}
SkillAddModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillAddModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddModule, declarations: [SkillAddComponent], imports: [CommonModule,
        ReactiveFormsModule,
        DisableControlModule,
        SecondaryHeaderModule,
        SkillFormModule], exports: [SkillAddComponent] });
SkillAddModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            DisableControlModule,
            SecondaryHeaderModule,
            SkillFormModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillAddModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillAddComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DisableControlModule,
                        SecondaryHeaderModule,
                        SkillFormModule
                    ],
                    exports: [SkillAddComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtYWRkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbWd0bGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1hZGQvc2tpbGwtYWRkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFlMUQsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7NkdBQWQsY0FBYyxpQkFWUixpQkFBaUIsYUFFNUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLGVBQWUsYUFFVCxpQkFBaUI7NkdBRWxCLGNBQWMsWUFUZDtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixlQUFlO1NBQ2xCOzRGQUdRLGNBQWM7a0JBWDFCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpc2FibGVDb250cm9sTW9kdWxlLCBTZWNvbmRhcnlIZWFkZXJNb2R1bGUgfSBmcm9tICdAc2hhcmVkbGliJztcbmltcG9ydCB7IFNraWxsRm9ybU1vZHVsZSB9IGZyb20gJ0Bza2lsbGxpYic7XG5cbmltcG9ydCB7IFNraWxsQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9za2lsbC1hZGQuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbU2tpbGxBZGRDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBEaXNhYmxlQ29udHJvbE1vZHVsZSxcbiAgICAgICAgU2Vjb25kYXJ5SGVhZGVyTW9kdWxlLFxuICAgICAgICBTa2lsbEZvcm1Nb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtTa2lsbEFkZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxBZGRNb2R1bGUgeyB9XG4iXX0=