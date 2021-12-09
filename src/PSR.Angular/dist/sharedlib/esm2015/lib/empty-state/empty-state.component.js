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
EmptyStateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmptyStateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: EmptyStateComponent, selector: "app-empty-state", inputs: { title: "title", description: "description", buttonLabel: "buttonLabel" }, outputs: { addNewItem: "addNewItem" }, ngImport: i0, template: "<svg class=\"w-12 h-12 mx-auto text-gray-400\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" aria-hidden=\"true\">\r\n    <path vector-effect=\"non-scaling-stroke\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\r\n          d=\"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z\" />\r\n</svg>\r\n<h3 class=\"mt-2 text-sm font-medium text-gray-900\">{{ title }}</h3>\r\n<p class=\"mt-1 text-sm text-gray-500\">\r\n    {{ description }}\r\n</p>\r\n<div class=\"mt-6\">\r\n    <button (click)=\"onAddNewItem()\" type=\"button\"\r\n            class=\"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">\r\n        <!-- Heroicon name: solid/plus -->\r\n        <svg class=\"w-5 h-5 mr-2 -ml-1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\"\r\n             aria-hidden=\"true\">\r\n            <path fill-rule=\"evenodd\"\r\n                  d=\"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z\"\r\n                  clip-rule=\"evenodd\" />\r\n        </svg>\r\n        {{ buttonLabel }}\r\n    </button>\r\n</div>\r\n", styles: [":host{display:block;border-width:2px;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding:3rem;text-align:center;border-radius:.5rem;border-style:dashed}:host:hover{--tw-border-opacity: 1;border-color:rgba(156,163,175,var(--tw-border-opacity))}:host:focus{outline:2px solid transparent;outline-offset:2px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-empty-state',
                    templateUrl: './empty-state.component.html',
                    styleUrls: ['./empty-state.component.css'],
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
EmptyStateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EmptyStateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateModule, declarations: [EmptyStateComponent], exports: [EmptyStateComponent] });
EmptyStateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: EmptyStateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EmptyStateComponent],
                    exports: [EmptyStateComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3RlbXAvc3JjL2xpYi9lbXB0eS1zdGF0ZS9lbXB0eS1zdGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL2VtcHR5LXN0YXRlL2VtcHR5LXN0YXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU96RixNQUFNLE9BQU8sbUJBQW1CO0lBUTVCO1FBTlMsVUFBSyxHQUFXLGVBQWUsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLGtDQUFrQyxDQUFDO1FBQ3pELGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBRS9CLGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVwRCxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7aUhBZlEsbUJBQW1CO3FHQUFuQixtQkFBbUIsa0xDUGhDLHd6Q0FxQkE7NEZEZGEsbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUM3QzswRUFHWSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLFVBQVU7c0JBQW5CLE1BQU07O0FBaUJYLE1BQU0sT0FBTyxnQkFBZ0I7OzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkF2QmhCLG1CQUFtQixhQUFuQixtQkFBbUI7K0dBdUJuQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFKNUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZW1wdHktc3RhdGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lbXB0eS1zdGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZW1wdHktc3RhdGUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFbXB0eVN0YXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnTm8gaXRlbSBmb3VuZCc7XG4gICAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyA9ICdHZXQgc3RhcnRlZCBieSBhZGRpbmcgYSBuZXcgaXRlbSc7XG4gICAgQElucHV0KCkgYnV0dG9uTGFiZWw6IHN0cmluZyA9ICdBZGQgTmV3JztcblxuICAgIEBPdXRwdXQoKSBhZGROZXdJdGVtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25BZGROZXdJdGVtKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZE5ld0l0ZW0uZW1pdCgpO1xuICAgIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0VtcHR5U3RhdGVDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtFbXB0eVN0YXRlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBFbXB0eVN0YXRlTW9kdWxlIHsgfSIsIjxzdmcgY2xhc3M9XCJ3LTEyIGgtMTIgbXgtYXV0byB0ZXh0LWdyYXktNDAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICA8cGF0aCB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICBkPVwiTTkgMTNoNm0tMy0zdjZtLTkgMVY3YTIgMiAwIDAxMi0yaDZsMiAyaDZhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ6XCIgLz5cclxuPC9zdmc+XHJcbjxoMyBjbGFzcz1cIm10LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e3sgdGl0bGUgfX08L2gzPlxyXG48cCBjbGFzcz1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICB7eyBkZXNjcmlwdGlvbiB9fVxyXG48L3A+XHJcbjxkaXYgY2xhc3M9XCJtdC02XCI+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkFkZE5ld0l0ZW0oKVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cclxuICAgICAgICA8IS0tIEhlcm9pY29uIG5hbWU6IHNvbGlkL3BsdXMgLS0+XHJcbiAgICAgICAgPHN2ZyBjbGFzcz1cInctNSBoLTUgbXItMiAtbWwtMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTAgM2ExIDEgMCAwMTEgMXY1aDVhMSAxIDAgMTEwIDJoLTV2NWExIDEgMCAxMS0yIDB2LTVINGExIDEgMCAxMTAtMmg1VjRhMSAxIDAgMDExLTF6XCJcclxuICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAge3sgYnV0dG9uTGFiZWwgfX1cclxuICAgIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19