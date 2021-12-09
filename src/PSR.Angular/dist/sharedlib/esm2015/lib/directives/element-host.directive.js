import { Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class ElementHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ElementHostDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ElementHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.14", type: ElementHostDirective, selector: "[appElementHost]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appElementHost]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
export class ElementHostModule {
}
ElementHostModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ElementHostModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostModule, declarations: [ElementHostDirective], exports: [ElementHostDirective] });
ElementHostModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ElementHostModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ElementHostDirective],
                    exports: [ElementHostDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi90ZW1wL3NyYy9saWIvZGlyZWN0aXZlcy9lbGVtZW50LWhvc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFvQixNQUFNLGVBQWUsQ0FBQzs7QUFLdEUsTUFBTSxPQUFPLG9CQUFvQjtJQUM3QixZQUFtQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7O2tIQURqRCxvQkFBb0I7c0dBQXBCLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9COztBQVNELE1BQU0sT0FBTyxpQkFBaUI7OytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkFSakIsb0JBQW9CLGFBQXBCLG9CQUFvQjtnSEFRcEIsaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBSjdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgTmdNb2R1bGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbYXBwRWxlbWVudEhvc3RdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWxlbWVudEhvc3REaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbRWxlbWVudEhvc3REaXJlY3RpdmVdLFxyXG4gICAgZXhwb3J0czogW0VsZW1lbnRIb3N0RGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWxlbWVudEhvc3RNb2R1bGUgeyB9XHJcbiJdfQ==