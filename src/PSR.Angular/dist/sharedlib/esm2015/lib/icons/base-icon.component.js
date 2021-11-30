import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseIconComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.iconClass = '';
    }
    ngOnChanges() {
        // console.log('ngOnChanges');
    }
    ngOnInit() {
        var _a;
        // console.log('ngOnInit');
        try {
            (_a = this.iconClass.match(/[^ ]+/g)) === null || _a === void 0 ? void 0 : _a.forEach((match) => {
                if (match && match.trim())
                    this.renderer.addClass(this.el.nativeElement, match);
            });
            // if (this.iconClass.trim())
        }
        catch (_b) { }
    }
}
BaseIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BaseIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BaseIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: BaseIconComponent, selector: "ng-component", usesOnChanges: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BaseIconComponent, decorators: [{
            type: Component,
            args: [{
                    template: ``
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi9zcmMvbGliL2ljb25zL2Jhc2UtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7O0FBS3pFLE1BQU0sT0FBTyxpQkFBaUI7SUFHMUIsWUFDYyxFQUFjLEVBQ2QsUUFBbUI7UUFEbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKakMsY0FBUyxHQUFXLEVBQUUsQ0FBQztJQUtuQixDQUFDO0lBRUwsV0FBVztRQUNQLDhCQUE4QjtJQUVsQyxDQUFDO0lBRUQsUUFBUTs7UUFDSiwyQkFBMkI7UUFDM0IsSUFBSTtZQUNBLE1BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLDBDQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM5QyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO29CQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQUMsQ0FBQztZQUVILDZCQUE2QjtTQUNoQztRQUFDLFdBQU0sR0FBRztJQUNmLENBQUM7OytHQXZCUSxpQkFBaUI7bUdBQWpCLGlCQUFpQix5RUFGaEIsRUFBRTs0RkFFSCxpQkFBaUI7a0JBSDdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLEVBQUU7aUJBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBCYXNlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7IH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbmdPbkNoYW5nZXMnKTtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbmdPbkluaXQnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuaWNvbkNsYXNzLm1hdGNoKC9bXiBdKy9nKT8uZm9yRWFjaCgobWF0Y2gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2gudHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgbWF0Y2gpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmljb25DbGFzcy50cmltKCkpXG4gICAgICAgIH0gY2F0Y2ggeyB9XG4gICAgfVxuXG59XG4iXX0=