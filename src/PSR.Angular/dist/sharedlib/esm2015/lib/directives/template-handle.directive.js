import { Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class TemplateHandleDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TemplateHandleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TemplateHandleDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
TemplateHandleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.11", type: TemplateHandleDirective, selector: "[appTemplateHandle]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TemplateHandleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appTemplateHandle]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
export class TemplateHandleModule {
}
TemplateHandleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TemplateHandleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TemplateHandleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TemplateHandleModule, declarations: [TemplateHandleDirective], exports: [TemplateHandleDirective] });
TemplateHandleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TemplateHandleModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: TemplateHandleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TemplateHandleDirective],
                    exports: [TemplateHandleDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtaGFuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi9zcmMvbGliL2RpcmVjdGl2ZXMvdGVtcGxhdGUtaGFuZGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFNakUsTUFBTSxPQUFPLHVCQUF1QjtJQUNoQyxZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBSSxDQUFDOztxSEFENUMsdUJBQXVCO3lHQUF2Qix1QkFBdUI7NEZBQXZCLHVCQUF1QjtrQkFIbkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO2lCQUNsQzs7QUFTRCxNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO21IQUFwQixvQkFBb0IsaUJBUnBCLHVCQUF1QixhQUF2Qix1QkFBdUI7bUhBUXZCLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQUpoQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE5nTW9kdWxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbYXBwVGVtcGxhdGVIYW5kbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVIYW5kbGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1RlbXBsYXRlSGFuZGxlRGlyZWN0aXZlXSxcclxuICAgIGV4cG9ydHM6IFtUZW1wbGF0ZUhhbmRsZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSGFuZGxlTW9kdWxlIHsgfSJdfQ==