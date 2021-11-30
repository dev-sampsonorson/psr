import { NgModule } from '@angular/core';
import { AddSkillCardModule } from './components/add-skill-card/add-skill-card.module';
import { SkillCardModule } from './components/skill-card/skill-card.module';
import { SkillCategoryCardModule } from './components/skill-category-card/skill-category-card.module';
import { SkillFormModule } from './components/skill-form/skill-form.module';
import { SkillListDisplayModule } from './components/skill-list-display/skill-list-display.module';
import { SkillReadModule } from './components/skill-read/skill-read.module';
import { SkillSubcategoryCardModule } from './components/skill-subcategory-card/skill-subcategory-card.module';
import { SelectedCategoryResolver } from './resolvers/selected-category.resolver';
import { SelectedSubcategoryResolver } from './resolvers/selected-subcategory.resolver';
import { SkillAddResolver } from './resolvers/skill-add.resolver';
import { SkillCategoryResolver } from './resolvers/skill-category.resolver';
import { SkillListResolver } from './resolvers/skill-list.resolver';
import { SkillSubcategoryResolver } from './resolvers/skill-subcategory.resolver';
import { SkillResolver } from './resolvers/skill.resolver';
import { SkillCardContextMenuitemService } from './services/skill-card-context-menuitem.service';
import { SkillFormService } from './services/skill-form.service';
import { SkillsService } from './services/skills.service';
import * as i0 from "@angular/core";
export class SkilllibModule {
}
SkilllibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkilllibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkilllibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkilllibModule, imports: [AddSkillCardModule,
        SkillCardModule,
        SkillCategoryCardModule,
        SkillFormModule,
        SkillReadModule,
        SkillSubcategoryCardModule,
        SkillListDisplayModule] });
SkilllibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkilllibModule, providers: [
        SkillsService,
        SkillFormService,
        SkillCardContextMenuitemService,
        SkillListResolver,
        SkillResolver,
        SkillAddResolver,
        SkillCategoryResolver,
        SkillSubcategoryResolver,
        SelectedCategoryResolver,
        SelectedSubcategoryResolver
    ], imports: [[
            AddSkillCardModule,
            SkillCardModule,
            SkillCategoryCardModule,
            SkillFormModule,
            SkillReadModule,
            SkillSubcategoryCardModule,
            SkillListDisplayModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkilllibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        AddSkillCardModule,
                        SkillCardModule,
                        SkillCategoryCardModule,
                        SkillFormModule,
                        SkillReadModule,
                        SkillSubcategoryCardModule,
                        SkillListDisplayModule
                    ],
                    exports: [],
                    providers: [
                        SkillsService,
                        SkillFormService,
                        SkillCardContextMenuitemService,
                        SkillListResolver,
                        SkillResolver,
                        SkillAddResolver,
                        SkillCategoryResolver,
                        SkillSubcategoryResolver,
                        SelectedCategoryResolver,
                        SelectedSubcategoryResolver
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxsaWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2tpbGxsaWIvc3JjL2xpYi9za2lsbGxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQWdDMUQsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7NkdBQWQsY0FBYyxZQXhCbkIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGVBQWU7UUFDZiwwQkFBMEI7UUFDMUIsc0JBQXNCOzZHQWtCakIsY0FBYyxhQWRaO1FBQ1AsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQiwrQkFBK0I7UUFFL0IsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsMkJBQTJCO0tBQzlCLFlBdkJRO1lBQ0wsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsZUFBZTtZQUNmLGVBQWU7WUFDZiwwQkFBMEI7WUFDMUIsc0JBQXNCO1NBQ3pCOzRGQWlCUSxjQUFjO2tCQTVCMUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsRUFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLCtCQUErQjt3QkFFL0IsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsMkJBQTJCO3FCQUM5QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFkZFNraWxsQ2FyZE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9hZGQtc2tpbGwtY2FyZC9hZGQtc2tpbGwtY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2tpbGxDYXJkTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NraWxsLWNhcmQvc2tpbGwtY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2tpbGxDYXRlZ29yeUNhcmRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2tpbGwtY2F0ZWdvcnktY2FyZC9za2lsbC1jYXRlZ29yeS1jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTa2lsbEZvcm1Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2tpbGwtZm9ybS9za2lsbC1mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBTa2lsbExpc3REaXNwbGF5TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NraWxsLWxpc3QtZGlzcGxheS9za2lsbC1saXN0LWRpc3BsYXkubW9kdWxlJztcbmltcG9ydCB7IFNraWxsUmVhZE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9za2lsbC1yZWFkL3NraWxsLXJlYWQubW9kdWxlJztcbmltcG9ydCB7IFNraWxsU3ViY2F0ZWdvcnlDYXJkTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NraWxsLXN1YmNhdGVnb3J5LWNhcmQvc2tpbGwtc3ViY2F0ZWdvcnktY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0ZWRDYXRlZ29yeVJlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcnMvc2VsZWN0ZWQtY2F0ZWdvcnkucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRTdWJjYXRlZ29yeVJlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcnMvc2VsZWN0ZWQtc3ViY2F0ZWdvcnkucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2tpbGxBZGRSZXNvbHZlciB9IGZyb20gJy4vcmVzb2x2ZXJzL3NraWxsLWFkZC5yZXNvbHZlcic7XG5pbXBvcnQgeyBTa2lsbENhdGVnb3J5UmVzb2x2ZXIgfSBmcm9tICcuL3Jlc29sdmVycy9za2lsbC1jYXRlZ29yeS5yZXNvbHZlcic7XG5pbXBvcnQgeyBTa2lsbExpc3RSZXNvbHZlciB9IGZyb20gJy4vcmVzb2x2ZXJzL3NraWxsLWxpc3QucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2tpbGxTdWJjYXRlZ29yeVJlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcnMvc2tpbGwtc3ViY2F0ZWdvcnkucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2tpbGxSZXNvbHZlciB9IGZyb20gJy4vcmVzb2x2ZXJzL3NraWxsLnJlc29sdmVyJztcbmltcG9ydCB7IFNraWxsQ2FyZENvbnRleHRNZW51aXRlbVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NraWxsLWNhcmQtY29udGV4dC1tZW51aXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IFNraWxsRm9ybVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NraWxsLWZvcm0uc2VydmljZSc7XG5pbXBvcnQgeyBTa2lsbHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9za2lsbHMuc2VydmljZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBZGRTa2lsbENhcmRNb2R1bGUsXG4gICAgICAgIFNraWxsQ2FyZE1vZHVsZSxcbiAgICAgICAgU2tpbGxDYXRlZ29yeUNhcmRNb2R1bGUsXG4gICAgICAgIFNraWxsRm9ybU1vZHVsZSxcbiAgICAgICAgU2tpbGxSZWFkTW9kdWxlLFxuICAgICAgICBTa2lsbFN1YmNhdGVnb3J5Q2FyZE1vZHVsZSxcbiAgICAgICAgU2tpbGxMaXN0RGlzcGxheU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFNraWxsc1NlcnZpY2UsXG4gICAgICAgIFNraWxsRm9ybVNlcnZpY2UsXG4gICAgICAgIFNraWxsQ2FyZENvbnRleHRNZW51aXRlbVNlcnZpY2UsXG5cbiAgICAgICAgU2tpbGxMaXN0UmVzb2x2ZXIsXG4gICAgICAgIFNraWxsUmVzb2x2ZXIsXG4gICAgICAgIFNraWxsQWRkUmVzb2x2ZXIsXG4gICAgICAgIFNraWxsQ2F0ZWdvcnlSZXNvbHZlcixcbiAgICAgICAgU2tpbGxTdWJjYXRlZ29yeVJlc29sdmVyLFxuICAgICAgICBTZWxlY3RlZENhdGVnb3J5UmVzb2x2ZXIsXG4gICAgICAgIFNlbGVjdGVkU3ViY2F0ZWdvcnlSZXNvbHZlclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxsaWJNb2R1bGUgeyB9XG4iXX0=