import { Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class ElementHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ElementHostDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ElementHostDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ElementHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.11", type: ElementHostDirective, selector: "[appElementHost]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ElementHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appElementHost]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
export class ElementHostModule {
}
ElementHostModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ElementHostModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ElementHostModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ElementHostModule, declarations: [ElementHostDirective], exports: [ElementHostDirective] });
ElementHostModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ElementHostModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ElementHostModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ElementHostDirective],
                    exports: [ElementHostDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi9zcmMvbGliL2RpcmVjdGl2ZXMvZWxlbWVudC1ob3N0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBb0IsTUFBTSxlQUFlLENBQUM7O0FBS3RFLE1BQU0sT0FBTyxvQkFBb0I7SUFDN0IsWUFBbUIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDOztrSEFEakQsb0JBQW9CO3NHQUFwQixvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs7QUFTRCxNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBUmpCLG9CQUFvQixhQUFwQixvQkFBb0I7Z0hBUXBCLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUo3QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE5nTW9kdWxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2FwcEVsZW1lbnRIb3N0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRIb3N0RGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0VsZW1lbnRIb3N0RGlyZWN0aXZlXSxcclxuICAgIGV4cG9ydHM6IFtFbGVtZW50SG9zdERpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRIb3N0TW9kdWxlIHsgfVxyXG4iXX0=