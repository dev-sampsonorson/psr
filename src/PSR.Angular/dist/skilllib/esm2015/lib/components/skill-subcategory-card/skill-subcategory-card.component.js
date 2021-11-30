import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SkillSubcategoryCardComponent {
    constructor() {
        this.onCardClick = new EventEmitter();
    }
    ngOnInit() {
    }
    onCardClickHandler(subcategory) {
        this.onCardClick.emit(subcategory);
    }
}
SkillSubcategoryCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SkillSubcategoryCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillSubcategoryCardComponent, selector: "skl-subcategory-card", inputs: { subcategory: "subcategory" }, outputs: { onCardClick: "onCardClick" }, ngImport: i0, template: "<ng-container *ngIf=\"subcategory\">\n    <div tabindex=\"0\" (click)=\"onCardClickHandler(subcategory)\"\n         class=\"flex flex-col justify-between h-full p-4 space-y-4 text-left border border-gray-200 rounded-lg hover:border-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-500\">\n        <h3 class=\"text-lg font-medium text-gray-700\">{{ subcategory.name}}</h3>\n    </div>\n</ng-container>\n", styles: [":host{display:block;width:100%;cursor:pointer}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-subcategory-card',
                    templateUrl: './skill-subcategory-card.component.html',
                    styleUrls: ['./skill-subcategory-card.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { subcategory: [{
                type: Input
            }], onCardClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtc3ViY2F0ZWdvcnktY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtc3ViY2F0ZWdvcnktY2FyZC9za2lsbC1zdWJjYXRlZ29yeS1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1zdWJjYXRlZ29yeS1jYXJkL3NraWxsLXN1YmNhdGVnb3J5LWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUy9FLE1BQU0sT0FBTyw2QkFBNkI7SUFLdEM7UUFGVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO0lBRTlDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxXQUE4QjtRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzsySEFaUSw2QkFBNkI7K0dBQTdCLDZCQUE2Qiw2SUNUMUMsaWJBTUE7NEZER2EsNkJBQTZCO2tCQUx6QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSx5Q0FBeUM7b0JBQ3RELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2lCQUN6RDswRUFHWSxXQUFXO3NCQUFuQixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElTa2lsbFN1YkNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NraWxsLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdza2wtc3ViY2F0ZWdvcnktY2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NraWxsLXN1YmNhdGVnb3J5LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NraWxsLXN1YmNhdGVnb3J5LWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbFN1YmNhdGVnb3J5Q2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBzdWJjYXRlZ29yeTogSVNraWxsU3ViQ2F0ZWdvcnkgfCB1bmRlZmluZWQ7XG4gICAgQE91dHB1dCgpIG9uQ2FyZENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJU2tpbGxTdWJDYXRlZ29yeT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkNhcmRDbGlja0hhbmRsZXIoc3ViY2F0ZWdvcnk6IElTa2lsbFN1YkNhdGVnb3J5KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DYXJkQ2xpY2suZW1pdChzdWJjYXRlZ29yeSk7XG4gICAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1YmNhdGVnb3J5XCI+XG4gICAgPGRpdiB0YWJpbmRleD1cIjBcIiAoY2xpY2spPVwib25DYXJkQ2xpY2tIYW5kbGVyKHN1YmNhdGVnb3J5KVwiXG4gICAgICAgICBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGgtZnVsbCBwLTQgc3BhY2UteS00IHRleHQtbGVmdCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGZvY3VzLXdpdGhpbjpyaW5nLTEgZm9jdXMtd2l0aGluOnJpbmctaW5zZXQgZm9jdXMtd2l0aGluOnJpbmctaW5kaWdvLTUwMFwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj57eyBzdWJjYXRlZ29yeS5uYW1lfX08L2gzPlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=