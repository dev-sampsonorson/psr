import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SkillCategoryCardComponent {
    constructor() {
        this.onCardClick = new EventEmitter();
    }
    ngOnInit() {
    }
    onCardClickHandler(category) {
        this.onCardClick.emit(category);
    }
}
SkillCategoryCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SkillCategoryCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillCategoryCardComponent, selector: "skl-category-card", inputs: { category: "category" }, outputs: { onCardClick: "onCardClick" }, ngImport: i0, template: "<ng-container *ngIf=\"category\">\n    <div tabindex=\"0\" (click)=\"onCardClickHandler(category)\"\n         class=\"flex flex-col justify-between h-full p-4 space-y-4 text-left border border-gray-200 rounded-lg hover:border-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-500\">\n        <h3 class=\"text-lg font-medium text-gray-700\">{{ category.name}}</h3>\n    </div>\n</ng-container>\n", styles: [":host{display:block;width:100%;cursor:pointer}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-category-card',
                    templateUrl: './skill-category-card.component.html',
                    styleUrls: ['./skill-category-card.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { category: [{
                type: Input
            }], onCardClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtY2F0ZWdvcnktY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtY2F0ZWdvcnktY2FyZC9za2lsbC1jYXRlZ29yeS1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1jYXRlZ29yeS1jYXJkL3NraWxsLWNhdGVnb3J5LWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUy9FLE1BQU0sT0FBTywwQkFBMEI7SUFLbkM7UUFGVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBRTNDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxRQUF3QjtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzt3SEFaUSwwQkFBMEI7NEdBQTFCLDBCQUEwQixvSUNUdkMsd2FBTUE7NEZER2EsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFdBQVcsRUFBRSxzQ0FBc0M7b0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2lCQUN0RDswRUFHWSxRQUFRO3NCQUFoQixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElTa2lsbENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NraWxsLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdza2wtY2F0ZWdvcnktY2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NraWxsLWNhdGVnb3J5LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NraWxsLWNhdGVnb3J5LWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbENhdGVnb3J5Q2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBjYXRlZ29yeTogSVNraWxsQ2F0ZWdvcnkgfCB1bmRlZmluZWQ7XG4gICAgQE91dHB1dCgpIG9uQ2FyZENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJU2tpbGxDYXRlZ29yeT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBvbkNhcmRDbGlja0hhbmRsZXIoY2F0ZWdvcnk6IElTa2lsbENhdGVnb3J5KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DYXJkQ2xpY2suZW1pdChjYXRlZ29yeSk7XG4gICAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiY2F0ZWdvcnlcIj5cbiAgICA8ZGl2IHRhYmluZGV4PVwiMFwiIChjbGljayk9XCJvbkNhcmRDbGlja0hhbmRsZXIoY2F0ZWdvcnkpXCJcbiAgICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaC1mdWxsIHAtNCBzcGFjZS15LTQgdGV4dC1sZWZ0IGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBob3Zlcjpib3JkZXItZ3JheS0zMDAgZm9jdXMtd2l0aGluOnJpbmctMSBmb2N1cy13aXRoaW46cmluZy1pbnNldCBmb2N1cy13aXRoaW46cmluZy1pbmRpZ28tNTAwXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPnt7IGNhdGVnb3J5Lm5hbWV9fTwvaDM+XG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==