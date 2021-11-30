import { NgModule } from '@angular/core';
import { BreadcrumbModule, SharedlibModule } from '@sharedlib';
import { SkillAddModule, SkillEditModule, SkillFilterModule, SkillListModule } from './components';
import { breadcrumbConfig, skillCardContextMenuConfig } from './config';
import { IndexModule } from './pages';
import { IndexResolver } from './resolvers';
import { PageTitleService } from './services';
import { SkillMgtRoutingModule } from './skill-mgt-routing.module';
import { SKILL_MGT_CONFIG_TOKEN } from './tokens';
import * as i0 from "@angular/core";
import * as i1 from "@sharedlib";
import * as i2 from "./components/skill-list/skill-list.module";
export class SkillmgtlibModule {
    static withConfig(config) {
        return {
            ngModule: BreadcrumbModule,
            providers: [
                {
                    provide: SKILL_MGT_CONFIG_TOKEN,
                    useValue: config || {}
                }
            ]
        };
    }
}
SkillmgtlibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillmgtlibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillmgtlibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillmgtlibModule, imports: [SharedlibModule, i1.BreadcrumbModule, SkillMgtRoutingModule,
        IndexModule,
        SkillAddModule,
        SkillEditModule,
        SkillFilterModule, i2.SkillListModule] });
SkillmgtlibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillmgtlibModule, providers: [
        PageTitleService,
        IndexResolver,
    ], imports: [[
            SharedlibModule,
            BreadcrumbModule.withConfig(breadcrumbConfig || []),
            SkillMgtRoutingModule,
            IndexModule,
            SkillAddModule,
            SkillEditModule,
            SkillFilterModule,
            SkillListModule.withConfig(skillCardContextMenuConfig)
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillmgtlibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        SharedlibModule,
                        BreadcrumbModule.withConfig(breadcrumbConfig || []),
                        SkillMgtRoutingModule,
                        IndexModule,
                        SkillAddModule,
                        SkillEditModule,
                        SkillFilterModule,
                        SkillListModule.withConfig(skillCardContextMenuConfig)
                    ],
                    providers: [
                        PageTitleService,
                        IndexResolver,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxtZ3RsaWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2tpbGxtZ3RsaWIvc3JjL2xpYi9za2lsbG1ndGxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBdUJsRCxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLE1BQU0sQ0FBQyxVQUFVLENBQ2IsTUFBdUI7UUFFdkIsT0FBTztZQUNILFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxNQUFNLElBQUksRUFBRTtpQkFDekI7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDOzsrR0FiUSxpQkFBaUI7Z0hBQWpCLGlCQUFpQixZQWZ0QixlQUFlLHVCQUVmLHFCQUFxQjtRQUVyQixXQUFXO1FBQ1gsY0FBYztRQUNkLGVBQWU7UUFDZixpQkFBaUI7Z0hBUVosaUJBQWlCLGFBTGY7UUFDUCxnQkFBZ0I7UUFDaEIsYUFBYTtLQUNoQixZQWRRO1lBQ0wsZUFBZTtZQUNmLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7WUFDbkQscUJBQXFCO1lBRXJCLFdBQVc7WUFDWCxjQUFjO1lBQ2QsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixlQUFlLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO1NBQ3pEOzRGQU1RLGlCQUFpQjtrQkFuQjdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLEVBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGVBQWU7d0JBQ2YsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQzt3QkFDbkQscUJBQXFCO3dCQUVyQixXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGVBQWUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7cUJBQ3pEO29CQUNELFNBQVMsRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGFBQWE7cUJBQ2hCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJNb2R1bGUsIFNoYXJlZGxpYk1vZHVsZSB9IGZyb20gJ0BzaGFyZWRsaWInO1xuXG5pbXBvcnQgeyBTa2lsbEFkZE1vZHVsZSwgU2tpbGxFZGl0TW9kdWxlLCBTa2lsbEZpbHRlck1vZHVsZSwgU2tpbGxMaXN0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IGJyZWFkY3J1bWJDb25maWcsIHNraWxsQ2FyZENvbnRleHRNZW51Q29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgSVNraWxsTWd0Q29uZmlnIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgSW5kZXhNb2R1bGUgfSBmcm9tICcuL3BhZ2VzJztcbmltcG9ydCB7IEluZGV4UmVzb2x2ZXIgfSBmcm9tICcuL3Jlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBTa2lsbE1ndFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NraWxsLW1ndC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTS0lMTF9NR1RfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi90b2tlbnMnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkbGliTW9kdWxlLFxuICAgICAgICBCcmVhZGNydW1iTW9kdWxlLndpdGhDb25maWcoYnJlYWRjcnVtYkNvbmZpZyB8fCBbXSksXG4gICAgICAgIFNraWxsTWd0Um91dGluZ01vZHVsZSxcblxuICAgICAgICBJbmRleE1vZHVsZSxcbiAgICAgICAgU2tpbGxBZGRNb2R1bGUsXG4gICAgICAgIFNraWxsRWRpdE1vZHVsZSxcbiAgICAgICAgU2tpbGxGaWx0ZXJNb2R1bGUsXG4gICAgICAgIFNraWxsTGlzdE1vZHVsZS53aXRoQ29uZmlnKHNraWxsQ2FyZENvbnRleHRNZW51Q29uZmlnKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFBhZ2VUaXRsZVNlcnZpY2UsXG4gICAgICAgIEluZGV4UmVzb2x2ZXIsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbG1ndGxpYk1vZHVsZSB7XG4gICAgc3RhdGljIHdpdGhDb25maWcoXG4gICAgICAgIGNvbmZpZzogSVNraWxsTWd0Q29uZmlnXG4gICAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTa2lsbG1ndGxpYk1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IFNLSUxMX01HVF9DT05GSUdfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcgfHwge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19