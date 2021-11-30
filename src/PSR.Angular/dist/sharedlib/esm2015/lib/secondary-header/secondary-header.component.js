import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { ButtonIconModule } from '../button-icon/button-icon.component';
import { IconsModule } from '../icons/icons.module';
import { PageHeadingModule } from '../page-heading/page-heading.component';
import { SecondaryHeaderService } from './secondary-header.service';
import * as i0 from "@angular/core";
import * as i1 from "../page-heading/page-heading.component";
import * as i2 from "../button-icon/button-icon.component";
import * as i3 from "../icons/icon-close.component";
export class SecondaryHeaderComponent {
    constructor() {
        this.title = '';
        this.description = '';
        this.closeClick = new EventEmitter();
    }
    ngOnInit() {
    }
    onButtonClick() {
        this.closeClick.emit();
    }
}
SecondaryHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SecondaryHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SecondaryHeaderComponent, selector: "app-secondary-header", inputs: { title: "title", description: "description" }, outputs: { closeClick: "closeClick" }, ngImport: i0, template: `
        <!-- <div>
            <h1 class="text-lg font-medium leading-6 text-indigo-900">
                Skill Information
            </h1>
            <p class="max-w-2xl mt-1 text-sm text-indigo-900">
                Detils of the skill.
            </p>
        </div> -->
        <app-page-heading x-size="medium" x-color="indigo" [title]="title" [description]="description"></app-page-heading>
        <app-button-icon (buttonClick)="onButtonClick()" class="text-indigo-900">
            <app-icon-close></app-icon-close>
        </app-button-icon>
        <!-- <app-page-heading x-size="medium" x-color="indigo"></app-page-heading> -->
        <!-- <div class="flex items-center ml-3 h-7">
            <button (click)="onCloseClick()" type="button"
                    class="text-indigo-800 bg-transparent rounded-md hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-indigo-900">
                <span class="sr-only">Close panel</span>
                <svg class="w-6 h-6" x-description="Heroicon name: outline/x"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div> -->
  `, isInline: true, styles: ["\n      :host {\n        @apply flex justify-between py-5 border-b border-gray-200;\n      }\n    "], components: [{ type: i1.PageHeadingComponent, selector: "app-page-heading", inputs: ["title", "description", "x-size", "x-color"] }, { type: i2.ButtonIconComponent, selector: "app-button-icon", inputs: ["ariaLabel"], outputs: ["buttonClick"] }, { type: i3.IconCloseComponent, selector: "app-icon-close" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-secondary-header',
                    template: `
        <!-- <div>
            <h1 class="text-lg font-medium leading-6 text-indigo-900">
                Skill Information
            </h1>
            <p class="max-w-2xl mt-1 text-sm text-indigo-900">
                Detils of the skill.
            </p>
        </div> -->
        <app-page-heading x-size="medium" x-color="indigo" [title]="title" [description]="description"></app-page-heading>
        <app-button-icon (buttonClick)="onButtonClick()" class="text-indigo-900">
            <app-icon-close></app-icon-close>
        </app-button-icon>
        <!-- <app-page-heading x-size="medium" x-color="indigo"></app-page-heading> -->
        <!-- <div class="flex items-center ml-3 h-7">
            <button (click)="onCloseClick()" type="button"
                    class="text-indigo-800 bg-transparent rounded-md hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-indigo-900">
                <span class="sr-only">Close panel</span>
                <svg class="w-6 h-6" x-description="Heroicon name: outline/x"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div> -->
  `,
                    styles: [
                        `
      :host {
        @apply flex justify-between py-5 border-b border-gray-200;
      }
    `
                    ]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], closeClick: [{
                type: Output
            }] } });
export class SecondaryHeaderModule {
}
SecondaryHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SecondaryHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderModule, declarations: [SecondaryHeaderComponent], imports: [ButtonIconModule, IconsModule, PageHeadingModule], exports: [SecondaryHeaderComponent] });
SecondaryHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderModule, providers: [SecondaryHeaderService], imports: [[ButtonIconModule, IconsModule, PageHeadingModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SecondaryHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SecondaryHeaderComponent],
                    imports: [ButtonIconModule, IconsModule, PageHeadingModule],
                    providers: [SecondaryHeaderService],
                    exports: [SecondaryHeaderComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kYXJ5LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvc3JjL2xpYi9zZWNvbmRhcnktaGVhZGVyL3NlY29uZGFyeS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUF1Q3BFLE1BQU0sT0FBTyx3QkFBd0I7SUFPakM7UUFMUyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTFCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztzSEFkUSx3QkFBd0I7MEdBQXhCLHdCQUF3QiwySkFuQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCWDs0RkFTVSx3QkFBd0I7a0JBckNwQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQlg7b0JBQ0MsTUFBTSxFQUFFO3dCQUNKOzs7O0tBSUg7cUJBQ0E7aUJBQ0o7MEVBR1ksS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksVUFBVTtzQkFBbkIsTUFBTTs7QUFvQlgsTUFBTSxPQUFPLHFCQUFxQjs7bUhBQXJCLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQXpCckIsd0JBQXdCLGFBcUJ2QixnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLGFBckJqRCx3QkFBd0I7b0hBeUJ4QixxQkFBcUIsYUFIbkIsQ0FBQyxzQkFBc0IsQ0FBQyxZQUQxQixDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQzs0RkFJbEQscUJBQXFCO2tCQU5qQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUM7b0JBQzNELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nTW9kdWxlLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCdXR0b25JY29uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uLWljb24vYnV0dG9uLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEljb25zTW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMvaWNvbnMubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VIZWFkaW5nTW9kdWxlIH0gZnJvbSAnLi4vcGFnZS1oZWFkaW5nL3BhZ2UtaGVhZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Vjb25kYXJ5SGVhZGVyU2VydmljZSB9IGZyb20gJy4vc2Vjb25kYXJ5LWhlYWRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtc2Vjb25kYXJ5LWhlYWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPCEtLSA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1pbmRpZ28tOTAwXCI+XG4gICAgICAgICAgICAgICAgU2tpbGwgSW5mb3JtYXRpb25cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1heC13LTJ4bCBtdC0xIHRleHQtc20gdGV4dC1pbmRpZ28tOTAwXCI+XG4gICAgICAgICAgICAgICAgRGV0aWxzIG9mIHRoZSBza2lsbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICA8YXBwLXBhZ2UtaGVhZGluZyB4LXNpemU9XCJtZWRpdW1cIiB4LWNvbG9yPVwiaW5kaWdvXCIgW3RpdGxlXT1cInRpdGxlXCIgW2Rlc2NyaXB0aW9uXT1cImRlc2NyaXB0aW9uXCI+PC9hcHAtcGFnZS1oZWFkaW5nPlxuICAgICAgICA8YXBwLWJ1dHRvbi1pY29uIChidXR0b25DbGljayk9XCJvbkJ1dHRvbkNsaWNrKClcIiBjbGFzcz1cInRleHQtaW5kaWdvLTkwMFwiPlxuICAgICAgICAgICAgPGFwcC1pY29uLWNsb3NlPjwvYXBwLWljb24tY2xvc2U+XG4gICAgICAgIDwvYXBwLWJ1dHRvbi1pY29uPlxuICAgICAgICA8IS0tIDxhcHAtcGFnZS1oZWFkaW5nIHgtc2l6ZT1cIm1lZGl1bVwiIHgtY29sb3I9XCJpbmRpZ29cIj48L2FwcC1wYWdlLWhlYWRpbmc+IC0tPlxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBtbC0zIGgtN1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DbG9zZUNsaWNrKClcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWluZGlnby04MDAgYmctdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBob3Zlcjp0ZXh0LWluZGlnby05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnRleHQtaW5kaWdvLTkwMFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkNsb3NlIHBhbmVsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02XCIgeC1kZXNjcmlwdGlvbj1cIkhlcm9pY29uIG5hbWU6IG91dGxpbmUveFwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PiAtLT5cbiAgYCxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgZmxleCBqdXN0aWZ5LWJldHdlZW4gcHktNSBib3JkZXItYiBib3JkZXItZ3JheS0yMDA7XG4gICAgICB9XG4gICAgYFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2Vjb25kYXJ5SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XG5cbiAgICBAT3V0cHV0KCkgY2xvc2VDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsb3NlQ2xpY2suZW1pdCgpO1xuICAgIH1cblxufVxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbU2Vjb25kYXJ5SGVhZGVyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQnV0dG9uSWNvbk1vZHVsZSwgSWNvbnNNb2R1bGUsIFBhZ2VIZWFkaW5nTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtTZWNvbmRhcnlIZWFkZXJTZXJ2aWNlXSxcbiAgICBleHBvcnRzOiBbU2Vjb25kYXJ5SGVhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZWNvbmRhcnlIZWFkZXJNb2R1bGUgeyB9XG4iXX0=