import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ReadFieldComponent {
    constructor() { }
    get isFieldVisible() {
        return this.fieldLabel && this.fieldValue;
    }
}
ReadFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ReadFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ReadFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: ReadFieldComponent, selector: "app-read-field", inputs: { fieldLabel: "fieldLabel", fieldValue: "fieldValue" }, ngImport: i0, template: `
    <ng-container *ngIf="isFieldVisible">
        <div class="text-sm font-medium text-indigo-900">{{ fieldLabel }}</div>
        <div class="mt-1 text-sm text-indigo-900">{{ fieldValue }}</div>
    </ng-container>
  `, isInline: true, styles: ["\n      :host {\n        display: block;\n      }\n    "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ReadFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-read-field',
                    template: `
    <ng-container *ngIf="isFieldVisible">
        <div class="text-sm font-medium text-indigo-900">{{ fieldLabel }}</div>
        <div class="mt-1 text-sm text-indigo-900">{{ fieldValue }}</div>
    </ng-container>
  `,
                    styles: [
                        `
      :host {
        display: block;
      }
    `
                    ]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { fieldLabel: [{
                type: Input
            }], fieldValue: [{
                type: Input
            }] } });
export class ReadFieldModule {
}
ReadFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ReadFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ReadFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ReadFieldModule, declarations: [ReadFieldComponent], imports: [CommonModule], exports: [ReadFieldComponent] });
ReadFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ReadFieldModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ReadFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ReadFieldComponent],
                    imports: [CommonModule],
                    exports: [ReadFieldComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvc3JjL2xpYi9yZWFkLWZpZWxkL3JlYWQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWtCM0QsTUFBTSxPQUFPLGtCQUFrQjtJQVMzQixnQkFBZ0IsQ0FBQztJQUpqQixJQUFJLGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDOztnSEFQUSxrQkFBa0I7b0dBQWxCLGtCQUFrQixzSEFkakI7Ozs7O0dBS1g7NEZBU1Usa0JBQWtCO2tCQWhCOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Ozs7O0dBS1g7b0JBQ0MsTUFBTSxFQUFFO3dCQUNKOzs7O0tBSUg7cUJBQ0E7aUJBQ0o7MEVBR1ksVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLOztBQWNWLE1BQU0sT0FBTyxlQUFlOzs2R0FBZixlQUFlOzhHQUFmLGVBQWUsaUJBakJmLGtCQUFrQixhQWNqQixZQUFZLGFBZGIsa0JBQWtCOzhHQWlCbEIsZUFBZSxZQUhmLENBQUMsWUFBWSxDQUFDOzRGQUdkLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXJlYWQtZmllbGQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzRmllbGRWaXNpYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTkwMFwiPnt7IGZpZWxkTGFiZWwgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEgdGV4dC1zbSB0ZXh0LWluZGlnby05MDBcIj57eyBmaWVsZFZhbHVlIH19PC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVhZEZpZWxkQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGZpZWxkTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBmaWVsZFZhbHVlOiBhbnkgfCB1bmRlZmluZWQ7XG5cbiAgICBnZXQgaXNGaWVsZFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkTGFiZWwgJiYgdGhpcy5maWVsZFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUmVhZEZpZWxkQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbUmVhZEZpZWxkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBSZWFkRmllbGRNb2R1bGUgeyB9XG4iXX0=