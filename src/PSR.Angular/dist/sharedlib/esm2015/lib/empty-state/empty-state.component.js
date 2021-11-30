import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class EmptyStateComponent {
    constructor() {
        this.title = 'No item found';
        this.description = 'Get started by adding a new item';
        this.buttonLabel = 'Add New';
        this.addNewItem = new EventEmitter();
    }
    ngOnInit() {
    }
    onAddNewItem() {
        this.addNewItem.emit();
    }
}
EmptyStateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: EmptyStateComponent, selector: "app-empty-state", inputs: { title: "title", description: "description", buttonLabel: "buttonLabel" }, outputs: { addNewItem: "addNewItem" }, ngImport: i0, template: `
        <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
             aria-hidden="true">
            <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">{{ title }}</h3>
        <p class="mt-1 text-sm text-gray-500">
            {{ description }}
        </p>
        <div class="mt-6">
            <button (click)="onAddNewItem()" type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <!-- Heroicon name: solid/plus -->
                <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd" />
                </svg>
                {{ buttonLabel }}
            </button>
        </div>
  `, isInline: true, styles: ["\n      :host {\n        display: block;\n        @apply p-12 text-center border-2 border-gray-300;\n        @apply border-dashed rounded-lg hover:border-gray-400 focus:outline-none;\n      }\n    "] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-empty-state',
                    template: `
        <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
             aria-hidden="true">
            <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">{{ title }}</h3>
        <p class="mt-1 text-sm text-gray-500">
            {{ description }}
        </p>
        <div class="mt-6">
            <button (click)="onAddNewItem()" type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <!-- Heroicon name: solid/plus -->
                <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd" />
                </svg>
                {{ buttonLabel }}
            </button>
        </div>
  `,
                    styles: [
                        `
      :host {
        display: block;
        @apply p-12 text-center border-2 border-gray-300;
        @apply border-dashed rounded-lg hover:border-gray-400 focus:outline-none;
      }
    `
                    ]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], buttonLabel: [{
                type: Input
            }], addNewItem: [{
                type: Output
            }] } });
export class EmptyStateModule {
}
EmptyStateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: EmptyStateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EmptyStateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: EmptyStateModule, declarations: [EmptyStateComponent], exports: [EmptyStateComponent] });
EmptyStateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: EmptyStateModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: EmptyStateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EmptyStateComponent],
                    exports: [EmptyStateComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3NyYy9saWIvZW1wdHktc3RhdGUvZW1wdHktc3RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQXNDekYsTUFBTSxPQUFPLG1CQUFtQjtJQVE1QjtRQU5TLFVBQUssR0FBVyxlQUFlLENBQUM7UUFDaEMsZ0JBQVcsR0FBVyxrQ0FBa0MsQ0FBQztRQUN6RCxnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUUvQixlQUFVLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFFcEQsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7O2lIQWZRLG1CQUFtQjtxR0FBbkIsbUJBQW1CLGtMQWxDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJYOzRGQVdVLG1CQUFtQjtrQkFwQy9CLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCWDtvQkFDQyxNQUFNLEVBQUU7d0JBQ0o7Ozs7OztLQU1IO3FCQUNBO2lCQUNKOzBFQUdZLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksVUFBVTtzQkFBbkIsTUFBTTs7QUFpQlgsTUFBTSxPQUFPLGdCQUFnQjs7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQXZCaEIsbUJBQW1CLGFBQW5CLG1CQUFtQjsrR0F1Qm5CLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUo1QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nTW9kdWxlLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1lbXB0eS1zdGF0ZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHN2ZyBjbGFzcz1cInctMTIgaC0xMiBteC1hdXRvIHRleHQtZ3JheS00MDBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHBhdGggdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgZD1cIk05IDEzaDZtLTMtM3Y2bS05IDFWN2EyIDIgMCAwMTItMmg2bDIgMmg2YTIgMiAwIDAxMiAydjhhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0yelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8aDMgY2xhc3M9XCJtdC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAge3sgZGVzY3JpcHRpb24gfX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGROZXdJdGVtKClcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBIZXJvaWNvbiBuYW1lOiBzb2xpZC9wbHVzIC0tPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTUgaC01IG1yLTIgLW1sLTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwIDNhMSAxIDAgMDExIDF2NWg1YTEgMSAwIDExMCAyaC01djVhMSAxIDAgMTEtMiAwdi01SDRhMSAxIDAgMTEwLTJoNVY0YTEgMSAwIDAxMS0xelwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIHt7IGJ1dHRvbkxhYmVsIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBhcHBseSBwLTEyIHRleHQtY2VudGVyIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMDtcbiAgICAgICAgQGFwcGx5IGJvcmRlci1kYXNoZWQgcm91bmRlZC1sZyBob3Zlcjpib3JkZXItZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lO1xuICAgICAgfVxuICAgIGBcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICdObyBpdGVtIGZvdW5kJztcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gJ0dldCBzdGFydGVkIGJ5IGFkZGluZyBhIG5ldyBpdGVtJztcbiAgICBASW5wdXQoKSBidXR0b25MYWJlbDogc3RyaW5nID0gJ0FkZCBOZXcnO1xuXG4gICAgQE91dHB1dCgpIGFkZE5ld0l0ZW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkFkZE5ld0l0ZW0oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkTmV3SXRlbS5lbWl0KCk7XG4gICAgfVxuXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbRW1wdHlTdGF0ZUNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0VtcHR5U3RhdGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U3RhdGVNb2R1bGUgeyB9Il19