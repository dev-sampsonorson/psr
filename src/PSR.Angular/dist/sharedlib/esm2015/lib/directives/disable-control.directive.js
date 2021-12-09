import { Directive, Input, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class DisableControlDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    set disableControl(condition) {
        if (this.disabled !== undefined) {
            this.toggleControl(condition);
        }
        this.disabled = condition;
    }
    ngOnInit() {
        var _a;
        this.toggleControl((_a = this.disabled) !== null && _a !== void 0 ? _a : false);
    }
    toggleControl(condition) {
        const action = condition ? 'disable' : 'enable';
        if (this.ngControl.control) {
            this.ngControl.control[action]();
        }
    }
}
DisableControlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlDirective, deps: [{ token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
DisableControlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.14", type: DisableControlDirective, selector: "[disableControl]", inputs: { disableControl: "disableControl" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[disableControl]'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl }]; }, propDecorators: { disableControl: [{
                type: Input
            }] } });
export class DisableControlModule {
}
DisableControlModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DisableControlModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlModule, declarations: [DisableControlDirective], exports: [DisableControlDirective] });
DisableControlModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: DisableControlModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DisableControlDirective],
                    exports: [DisableControlDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi90ZW1wL3NyYy9saWIvZGlyZWN0aXZlcy9kaXNhYmxlLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBTW5FLE1BQU0sT0FBTyx1QkFBdUI7SUFXaEMsWUFBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFJLENBQUM7SUFQN0MsSUFBYSxjQUFjLENBQUMsU0FBa0I7UUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUlELFFBQVE7O1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFBLElBQUksQ0FBQyxRQUFRLG1DQUFJLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBa0I7UUFDNUIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDcEM7SUFDTCxDQUFDOztxSEF0QlEsdUJBQXVCO3lHQUF2Qix1QkFBdUI7NEZBQXZCLHVCQUF1QjtrQkFIbkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjtnR0FLZ0IsY0FBYztzQkFBMUIsS0FBSzs7QUEwQlYsTUFBTSxPQUFPLG9CQUFvQjs7a0hBQXBCLG9CQUFvQjttSEFBcEIsb0JBQW9CLGlCQTlCcEIsdUJBQXVCLGFBQXZCLHVCQUF1QjttSEE4QnZCLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQUpoQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2Rpc2FibGVDb250cm9sXSdcbn0pXG5leHBvcnQgY2xhc3MgRGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBzZXQgZGlzYWJsZUNvbnRyb2woY29uZGl0aW9uOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbChjb25kaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBjb25kaXRpb247XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVDb250cm9sKHRoaXMuZGlzYWJsZWQgPz8gZmFsc2UpO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbnRyb2woY29uZGl0aW9uOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNvbmRpdGlvbiA/ICdkaXNhYmxlJyA6ICdlbmFibGUnO1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbFthY3Rpb25dKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtEaXNhYmxlQ29udHJvbERpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0Rpc2FibGVDb250cm9sRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29udHJvbE1vZHVsZSB7IH0iXX0=