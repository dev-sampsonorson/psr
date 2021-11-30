import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUiModule, EmptyStateModule } from '@sharedlib';
import { AddSkillCardModule } from '../add-skill-card/add-skill-card.module';
import { SkillCardModule } from '../skill-card/skill-card.module';
import { SkillListDisplayComponent } from './skill-list-display.component';
import * as i0 from "@angular/core";
export class SkillListDisplayModule {
}
SkillListDisplayModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillListDisplayModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayModule, declarations: [SkillListDisplayComponent], imports: [CommonModule,
        BlockUiModule,
        EmptyStateModule,
        AddSkillCardModule,
        SkillCardModule], exports: [SkillListDisplayComponent] });
SkillListDisplayModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayModule, imports: [[
            CommonModule,
            BlockUiModule,
            EmptyStateModule,
            AddSkillCardModule,
            SkillCardModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListDisplayModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillListDisplayComponent],
                    imports: [
                        CommonModule,
                        BlockUiModule,
                        EmptyStateModule,
                        AddSkillCardModule,
                        SkillCardModule,
                    ],
                    exports: [SkillListDisplayComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtbGlzdC1kaXNwbGF5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1saXN0LWRpc3BsYXkvc2tpbGwtbGlzdC1kaXNwbGF5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFnQjNFLE1BQU0sT0FBTyxzQkFBc0I7O29IQUF0QixzQkFBc0I7cUhBQXRCLHNCQUFzQixpQkFYaEIseUJBQXlCLGFBRXBDLFlBQVk7UUFFWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixlQUFlLGFBRVQseUJBQXlCO3FIQUUxQixzQkFBc0IsWUFWdEI7WUFDTCxZQUFZO1lBRVosYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsZUFBZTtTQUNsQjs0RkFHUSxzQkFBc0I7a0JBWmxDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUVaLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmxvY2tVaU1vZHVsZSwgRW1wdHlTdGF0ZU1vZHVsZSB9IGZyb20gJ0BzaGFyZWRsaWInO1xuXG5pbXBvcnQgeyBBZGRTa2lsbENhcmRNb2R1bGUgfSBmcm9tICcuLi9hZGQtc2tpbGwtY2FyZC9hZGQtc2tpbGwtY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2tpbGxDYXJkTW9kdWxlIH0gZnJvbSAnLi4vc2tpbGwtY2FyZC9za2lsbC1jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTa2lsbExpc3REaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9za2lsbC1saXN0LWRpc3BsYXkuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbU2tpbGxMaXN0RGlzcGxheUNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG5cbiAgICAgICAgQmxvY2tVaU1vZHVsZSxcbiAgICAgICAgRW1wdHlTdGF0ZU1vZHVsZSxcbiAgICAgICAgQWRkU2tpbGxDYXJkTW9kdWxlLFxuICAgICAgICBTa2lsbENhcmRNb2R1bGUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbU2tpbGxMaXN0RGlzcGxheUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxMaXN0RGlzcGxheU1vZHVsZSB7IH1cbiJdfQ==