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
ReadFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ReadFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: ReadFieldComponent, selector: "app-read-field", inputs: { fieldLabel: "fieldLabel", fieldValue: "fieldValue" }, ngImport: i0, template: "<ng-container *ngIf=\"isFieldVisible\">\r\n    <div class=\"text-sm font-medium text-indigo-900\">{{ fieldLabel }}</div>\r\n    <div class=\"mt-1 text-sm text-indigo-900\">{{ fieldValue }}</div>\r\n</ng-container>\r\n", styles: [":host{display:block}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-read-field',
                    templateUrl: './read-field.component.html',
                    styleUrls: ['./read-field.component.css'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { fieldLabel: [{
                type: Input
            }], fieldValue: [{
                type: Input
            }] } });
export class ReadFieldModule {
}
ReadFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ReadFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldModule, declarations: [ReadFieldComponent], imports: [CommonModule], exports: [ReadFieldComponent] });
ReadFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ReadFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ReadFieldComponent],
                    imports: [CommonModule],
                    exports: [ReadFieldComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL3JlYWQtZmllbGQvcmVhZC1maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL3JlYWQtZmllbGQvcmVhZC1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPM0QsTUFBTSxPQUFPLGtCQUFrQjtJQVMzQixnQkFBZ0IsQ0FBQztJQUpqQixJQUFJLGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDOztnSEFQUSxrQkFBa0I7b0dBQWxCLGtCQUFrQixzSENSL0IsMk5BSUE7NEZESWEsa0JBQWtCO2tCQUw5QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7b0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUM1QzswRUFHWSxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7O0FBY1YsTUFBTSxPQUFPLGVBQWU7OzZHQUFmLGVBQWU7OEdBQWYsZUFBZSxpQkFqQmYsa0JBQWtCLGFBY2pCLFlBQVksYUFkYixrQkFBa0I7OEdBaUJsQixlQUFlLFlBSGYsQ0FBQyxZQUFZLENBQUM7NEZBR2QsZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtcmVhZC1maWVsZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlYWQtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JlYWQtZmllbGQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZWFkRmllbGRDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgZmllbGRMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIGZpZWxkVmFsdWU6IGFueSB8IHVuZGVmaW5lZDtcblxuICAgIGdldCBpc0ZpZWxkVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGRMYWJlbCAmJiB0aGlzLmZpZWxkVmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtSZWFkRmllbGRDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtSZWFkRmllbGRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJlYWRGaWVsZE1vZHVsZSB7IH1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc0ZpZWxkVmlzaWJsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tOTAwXCI+e3sgZmllbGRMYWJlbCB9fTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTEgdGV4dC1zbSB0ZXh0LWluZGlnby05MDBcIj57eyBmaWVsZFZhbHVlIH19PC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=