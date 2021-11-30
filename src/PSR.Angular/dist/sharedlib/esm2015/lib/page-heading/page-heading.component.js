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
PageHeadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageHeadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PageHeadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: PageHeadingComponent, selector: "app-page-heading", inputs: { title: "title", description: "description", xSize: ["x-size", "xSize"], xColor: ["x-color", "xColor"] }, ngImport: i0, template: `
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  `, isInline: true, styles: ["\n      :host {\n        display: block;\n      }\n\n      :host([x-size=large]) {\n          & h1 {\n              @apply text-3xl font-bold;\n          }\n\n          & p {\n              @apply text-lg font-normal;\n          }\n      }\n\n      :host([x-size=medium]) {\n          & h1 {\n              @apply text-lg font-medium leading-6;\n          }\n\n          & p {\n              @apply max-w-2xl mt-1 text-sm;\n          }\n      }\n\n      :host([x-color=black]) {\n          & h1, & p {\n              @apply text-gray-900;\n          }\n      }\n\n      :host([x-color=indigo]) {\n          & h1, & p {\n              @apply text-indigo-900;\n          }\n      }\n    "] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageHeadingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-page-heading',
                    template: `
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  `,
                    styles: [
                        `
      :host {
        display: block;
      }

      :host([x-size=large]) {
          & h1 {
              @apply text-3xl font-bold;
          }

          & p {
              @apply text-lg font-normal;
          }
      }

      :host([x-size=medium]) {
          & h1 {
              @apply text-lg font-medium leading-6;
          }

          & p {
              @apply max-w-2xl mt-1 text-sm;
          }
      }

      :host([x-color=black]) {
          & h1, & p {
              @apply text-gray-900;
          }
      }

      :host([x-color=indigo]) {
          & h1, & p {
              @apply text-indigo-900;
          }
      }
    `
                    ]
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
PageHeadingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageHeadingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageHeadingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageHeadingModule, declarations: [PageHeadingComponent], exports: [PageHeadingComponent] });
PageHeadingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageHeadingModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PageHeadingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PageHeadingComponent],
                    exports: [PageHeadingComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi9zcmMvbGliL3BhZ2UtaGVhZGluZy9wYWdlLWhlYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFnRG5FLE1BQU0sT0FBTyxvQkFBb0I7SUFPN0I7UUFMUyxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUF1QixPQUFPLENBQUM7UUFDbkMsV0FBTSxHQUF1QixPQUFPLENBQUM7UUFHbkQsaUNBQWlDO1FBQ2pDLDZDQUE2QztJQUNqRCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7O2tIQWJRLG9CQUFvQjtzR0FBcEIsb0JBQW9CLDJLQTVDbkI7OztHQUdYOzRGQXlDVSxvQkFBb0I7a0JBOUNoQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7O0dBR1g7b0JBQ0MsTUFBTSxFQUFFO3dCQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvQ0g7cUJBQ0E7aUJBQ0o7MEVBR1ksS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ1csS0FBSztzQkFBckIsS0FBSzt1QkFBQyxRQUFRO2dCQUNHLE1BQU07c0JBQXZCLEtBQUs7dUJBQUMsU0FBUzs7QUFpQnBCLE1BQU0sT0FBTyxpQkFBaUI7OytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkF0QmpCLG9CQUFvQixhQUFwQixvQkFBb0I7Z0hBc0JwQixpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFKN0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1wYWdlLWhlYWRpbmcnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGgxPnt7dGl0bGV9fTwvaDE+XG4gICAgPHA+e3tkZXNjcmlwdGlvbn19PC9wPlxuICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbeC1zaXplPWxhcmdlXSkge1xuICAgICAgICAgICYgaDEge1xuICAgICAgICAgICAgICBAYXBwbHkgdGV4dC0zeGwgZm9udC1ib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYgcCB7XG4gICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWxnIGZvbnQtbm9ybWFsO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3gtc2l6ZT1tZWRpdW1dKSB7XG4gICAgICAgICAgJiBoMSB7XG4gICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWxnIGZvbnQtbWVkaXVtIGxlYWRpbmctNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIHAge1xuICAgICAgICAgICAgICBAYXBwbHkgbWF4LXctMnhsIG10LTEgdGV4dC1zbTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt4LWNvbG9yPWJsYWNrXSkge1xuICAgICAgICAgICYgaDEsICYgcCB7XG4gICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWdyYXktOTAwO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3gtY29sb3I9aW5kaWdvXSkge1xuICAgICAgICAgICYgaDEsICYgcCB7XG4gICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWluZGlnby05MDA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBudWxsID0gJyc7XG4gICAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyB8IG51bGwgPSAnJztcbiAgICBASW5wdXQoJ3gtc2l6ZScpIHhTaXplOiBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiID0gXCJsYXJnZVwiO1xuICAgIEBJbnB1dCgneC1jb2xvcicpIHhDb2xvcjogXCJpbmRpZ29cIiB8IFwiYmxhY2tcIiA9IFwiYmxhY2tcIjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLnRpdGxlID0gdGhpcy50aXRsZSA/PyAnJztcbiAgICAgICAgLy8gdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb24gPz8gJyc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtQYWdlSGVhZGluZ0NvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1BhZ2VIZWFkaW5nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGluZ01vZHVsZSB7XG5cbn0iXX0=