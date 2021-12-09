import { Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class TemplateHandleDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TemplateHandleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
TemplateHandleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.14", type: TemplateHandleDirective, selector: "[appTemplateHandle]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appTemplateHandle]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
export class TemplateHandleModule {
}
TemplateHandleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TemplateHandleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleModule, declarations: [TemplateHandleDirective], exports: [TemplateHandleDirective] });
TemplateHandleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: TemplateHandleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TemplateHandleDirective],
                    exports: [TemplateHandleDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtaGFuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi90ZW1wL3NyYy9saWIvZGlyZWN0aXZlcy90ZW1wbGF0ZS1oYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQU1qRSxNQUFNLE9BQU8sdUJBQXVCO0lBQ2hDLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFJLENBQUM7O3FIQUQ1Qyx1QkFBdUI7eUdBQXZCLHVCQUF1Qjs0RkFBdkIsdUJBQXVCO2tCQUhuQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2xDOztBQVNELE1BQU0sT0FBTyxvQkFBb0I7O2tIQUFwQixvQkFBb0I7bUhBQXBCLG9CQUFvQixpQkFScEIsdUJBQXVCLGFBQXZCLHVCQUF1QjttSEFRdkIsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBSmhDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgTmdNb2R1bGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1thcHBUZW1wbGF0ZUhhbmRsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUhhbmRsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbVGVtcGxhdGVIYW5kbGVEaXJlY3RpdmVdLFxyXG4gICAgZXhwb3J0czogW1RlbXBsYXRlSGFuZGxlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVIYW5kbGVNb2R1bGUgeyB9Il19