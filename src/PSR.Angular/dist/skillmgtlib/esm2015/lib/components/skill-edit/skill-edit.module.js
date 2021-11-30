import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondaryHeaderModule } from '@sharedlib';
import { SkillFormModule } from '@skilllib';
import { SkillEditComponent } from './skill-edit.component';
import * as i0 from "@angular/core";
export class SkillEditModule {
}
SkillEditModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillEditModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditModule, declarations: [SkillEditComponent], imports: [CommonModule,
        SkillFormModule,
        SecondaryHeaderModule], exports: [SkillEditComponent] });
SkillEditModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditModule, imports: [[
            CommonModule,
            SkillFormModule,
            SecondaryHeaderModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SkillEditComponent
                    ],
                    imports: [
                        CommonModule,
                        SkillFormModule,
                        SecondaryHeaderModule
                    ],
                    exports: [SkillEditComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtZWRpdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtZWRpdC9za2lsbC1lZGl0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFnQjVELE1BQU0sT0FBTyxlQUFlOzs2R0FBZixlQUFlOzhHQUFmLGVBQWUsaUJBVnBCLGtCQUFrQixhQUdsQixZQUFZO1FBRVosZUFBZTtRQUNmLHFCQUFxQixhQUVmLGtCQUFrQjs4R0FFbkIsZUFBZSxZQVJmO1lBQ0wsWUFBWTtZQUVaLGVBQWU7WUFDZixxQkFBcUI7U0FDeEI7NEZBR1EsZUFBZTtrQkFaM0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysa0JBQWtCO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFFWixlQUFlO3dCQUNmLHFCQUFxQjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWNvbmRhcnlIZWFkZXJNb2R1bGUgfSBmcm9tICdAc2hhcmVkbGliJztcbmltcG9ydCB7IFNraWxsRm9ybU1vZHVsZSB9IGZyb20gJ0Bza2lsbGxpYic7XG5cbmltcG9ydCB7IFNraWxsRWRpdENvbXBvbmVudCB9IGZyb20gJy4vc2tpbGwtZWRpdC5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2tpbGxFZGl0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcblxuICAgICAgICBTa2lsbEZvcm1Nb2R1bGUsXG4gICAgICAgIFNlY29uZGFyeUhlYWRlck1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1NraWxsRWRpdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxFZGl0TW9kdWxlIHsgfVxuIl19