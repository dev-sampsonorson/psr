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
DisableControlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: DisableControlDirective, deps: [{ token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
DisableControlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.11", type: DisableControlDirective, selector: "[disableControl]", inputs: { disableControl: "disableControl" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: DisableControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[disableControl]'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl }]; }, propDecorators: { disableControl: [{
                type: Input
            }] } });
export class DisableControlModule {
}
DisableControlModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: DisableControlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DisableControlModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: DisableControlModule, declarations: [DisableControlDirective], exports: [DisableControlDirective] });
DisableControlModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: DisableControlModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: DisableControlModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DisableControlDirective],
                    exports: [DisableControlDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi9zcmMvbGliL2RpcmVjdGl2ZXMvZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU1uRSxNQUFNLE9BQU8sdUJBQXVCO0lBV2hDLFlBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDO0lBUDdDLElBQWEsY0FBYyxDQUFDLFNBQWtCO1FBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFJRCxRQUFROztRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBQSxJQUFJLENBQUMsUUFBUSxtQ0FBSSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsYUFBYSxDQUFDLFNBQWtCO1FBQzVCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQzs7cUhBdEJRLHVCQUF1Qjt5R0FBdkIsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBSG5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtpQkFDL0I7Z0dBS2dCLGNBQWM7c0JBQTFCLEtBQUs7O0FBMEJWLE1BQU0sT0FBTyxvQkFBb0I7O2tIQUFwQixvQkFBb0I7bUhBQXBCLG9CQUFvQixpQkE5QnBCLHVCQUF1QixhQUF2Qix1QkFBdUI7bUhBOEJ2QixvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFKaEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tkaXNhYmxlQ29udHJvbF0nXG59KVxuZXhwb3J0IGNsYXNzIERpc2FibGVDb250cm9sRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgc2V0IGRpc2FibGVDb250cm9sKGNvbmRpdGlvbjogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2woY29uZGl0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gY29uZGl0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbCh0aGlzLmRpc2FibGVkID8/IGZhbHNlKTtcbiAgICB9XG5cbiAgICB0b2dnbGVDb250cm9sKGNvbmRpdGlvbjogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBjb25kaXRpb24gPyAnZGlzYWJsZScgOiAnZW5hYmxlJztcbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2xbYWN0aW9uXSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbRGlzYWJsZUNvbnRyb2xEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtEaXNhYmxlQ29udHJvbERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgRGlzYWJsZUNvbnRyb2xNb2R1bGUgeyB9Il19