import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUiModule, EmptyStateModule } from '@sharedlib';
import { AddSkillCardModule, SkillCardModule, SkillListDisplayModule } from '@skilllib';
import { SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN } from '../../tokens';
import { SkillListComponent } from './skill-list.component';
import * as i0 from "@angular/core";
export class SkillListModule {
    static withConfig(config) {
        return {
            ngModule: SkillListModule,
            providers: [
                {
                    provide: SKILL_CARD_CONTEXT_MENU_CONFIG_TOKEN,
                    useValue: config
                }
            ]
        };
    }
}
SkillListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkillListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListModule, declarations: [SkillListComponent], imports: [CommonModule,
        EmptyStateModule,
        SkillListDisplayModule,
        AddSkillCardModule,
        SkillCardModule,
        BlockUiModule], exports: [SkillListComponent] });
SkillListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListModule, imports: [[
            CommonModule,
            EmptyStateModule,
            SkillListDisplayModule,
            AddSkillCardModule,
            SkillCardModule,
            BlockUiModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkillListComponent],
                    imports: [
                        CommonModule,
                        EmptyStateModule,
                        SkillListDisplayModule,
                        AddSkillCardModule,
                        SkillCardModule,
                        BlockUiModule
                    ],
                    exports: [SkillListComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtbGlzdC9za2lsbC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBWSxNQUFNLFlBQVksQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXhGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFpQjVELE1BQU0sT0FBTyxlQUFlO0lBQ3hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBdUI7UUFDckMsT0FBTztZQUNILFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUsb0NBQW9DO29CQUM3QyxRQUFRLEVBQUUsTUFBTTtpQkFDbkI7YUFDSjtTQUNKLENBQUE7SUFDTCxDQUFDOzs2R0FYUSxlQUFlOzhHQUFmLGVBQWUsaUJBWlQsa0JBQWtCLGFBRTdCLFlBQVk7UUFFWixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsYUFBYSxhQUVQLGtCQUFrQjs4R0FFbkIsZUFBZSxZQVhmO1lBQ0wsWUFBWTtZQUVaLGdCQUFnQjtZQUNoQixzQkFBc0I7WUFDdEIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixhQUFhO1NBQ2hCOzRGQUdRLGVBQWU7a0JBYjNCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUVaLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsYUFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9ja1VpTW9kdWxlLCBFbXB0eVN0YXRlTW9kdWxlLCBNZW51SXRlbSB9IGZyb20gJ0BzaGFyZWRsaWInO1xuaW1wb3J0IHsgQWRkU2tpbGxDYXJkTW9kdWxlLCBTa2lsbENhcmRNb2R1bGUsIFNraWxsTGlzdERpc3BsYXlNb2R1bGUgfSBmcm9tICdAc2tpbGxsaWInO1xuXG5pbXBvcnQgeyBTS0lMTF9DQVJEX0NPTlRFWFRfTUVOVV9DT05GSUdfVE9LRU4gfSBmcm9tICcuLi8uLi90b2tlbnMnO1xuaW1wb3J0IHsgU2tpbGxMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9za2lsbC1saXN0LmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1NraWxsTGlzdENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG5cbiAgICAgICAgRW1wdHlTdGF0ZU1vZHVsZSxcbiAgICAgICAgU2tpbGxMaXN0RGlzcGxheU1vZHVsZSxcbiAgICAgICAgQWRkU2tpbGxDYXJkTW9kdWxlLFxuICAgICAgICBTa2lsbENhcmRNb2R1bGUsXG4gICAgICAgIEJsb2NrVWlNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtTa2lsbExpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNraWxsTGlzdE1vZHVsZSB7XG4gICAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBNZW51SXRlbTxhbnk+W10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNraWxsTGlzdE1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFNraWxsTGlzdE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogU0tJTExfQ0FSRF9DT05URVhUX01FTlVfQ09ORklHX1RPS0VOLFxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxuIl19