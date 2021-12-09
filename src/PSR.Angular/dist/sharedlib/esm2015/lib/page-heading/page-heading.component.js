import { Component, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class PageHeadingComponent {
    constructor() {
        this.title = '';
        this.description = '';
        this.xSize = "large";
        this.xColor = "black";
        // this.title = this.title ?? '';
        // this.description = this.description ?? '';
    }
    ngOnInit() {
    }
}
PageHeadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PageHeadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: PageHeadingComponent, selector: "app-page-heading", inputs: { title: "title", description: "description", xSize: ["x-size", "xSize"], xColor: ["x-color", "xColor"] }, ngImport: i0, template: "<h1>{{title}}</h1>\r\n<p>{{description}}</p>\r\n", styles: [":host{display:block}:host([x-size=large]) h1{font-size:1.875rem;line-height:2.25rem;font-weight:700}:host([x-size=large]) p{font-size:1.125rem;line-height:1.75rem;font-weight:400}:host([x-size=medium]) h1{font-size:1.125rem;line-height:1.75rem;font-weight:500;line-height:1.5rem}:host([x-size=medium]) p{margin-top:.25rem;max-width:42rem;font-size:.875rem;line-height:1.25rem}:host([x-color=black]) h1,:host([x-color=black]) p{--tw-text-opacity: 1;color:rgba(17,24,39,var(--tw-text-opacity))}:host([x-color=indigo]) h1,:host([x-color=indigo]) p{--tw-text-opacity: 1;color:rgba(49,46,129,var(--tw-text-opacity))}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-page-heading',
                    templateUrl: './page-heading.component.html',
                    styleUrls: ['./page-heading.component.css'],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], xSize: [{
                type: Input,
                args: ['x-size']
            }], xColor: [{
                type: Input,
                args: ['x-color']
            }] } });
export class PageHeadingModule {
}
PageHeadingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageHeadingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingModule, declarations: [PageHeadingComponent], exports: [PageHeadingComponent] });
PageHeadingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: PageHeadingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PageHeadingComponent],
                    exports: [PageHeadingComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi90ZW1wL3NyYy9saWIvcGFnZS1oZWFkaW5nL3BhZ2UtaGVhZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL3BhZ2UtaGVhZGluZy9wYWdlLWhlYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQU9uRSxNQUFNLE9BQU8sb0JBQW9CO0lBTzdCO1FBTFMsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ3hCLFVBQUssR0FBdUIsT0FBTyxDQUFDO1FBQ25DLFdBQU0sR0FBdUIsT0FBTyxDQUFDO1FBR25ELGlDQUFpQztRQUNqQyw2Q0FBNkM7SUFDakQsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOztrSEFiUSxvQkFBb0I7c0dBQXBCLG9CQUFvQiwyS0NQakMsa0RBRUE7NEZES2Esb0JBQW9CO2tCQUxoQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM5QzswRUFHWSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDVyxLQUFLO3NCQUFyQixLQUFLO3VCQUFDLFFBQVE7Z0JBQ0csTUFBTTtzQkFBdkIsS0FBSzt1QkFBQyxTQUFTOztBQWlCcEIsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQXRCakIsb0JBQW9CLGFBQXBCLG9CQUFvQjtnSEFzQnBCLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUo3QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXBhZ2UtaGVhZGluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGluZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnZS1oZWFkaW5nLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IG51bGwgPSAnJztcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbCA9ICcnO1xuICAgIEBJbnB1dCgneC1zaXplJykgeFNpemU6IFwibWVkaXVtXCIgfCBcImxhcmdlXCIgPSBcImxhcmdlXCI7XG4gICAgQElucHV0KCd4LWNvbG9yJykgeENvbG9yOiBcImluZGlnb1wiIHwgXCJibGFja1wiID0gXCJibGFja1wiO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMudGl0bGUgPSB0aGlzLnRpdGxlID8/ICcnO1xuICAgICAgICAvLyB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbiA/PyAnJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1BhZ2VIZWFkaW5nQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbUGFnZUhlYWRpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkaW5nTW9kdWxlIHtcblxufSIsIjxoMT57e3RpdGxlfX08L2gxPlxyXG48cD57e2Rlc2NyaXB0aW9ufX08L3A+XHJcbiJdfQ==