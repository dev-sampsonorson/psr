import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonIconComponent {
    constructor() {
        this.ariaLabel = '';
        this.buttonClick = new EventEmitter();
    }
    // @ContentChild(IconCloseComponent) icon!: IconCloseComponent;
    ngOnInit() { }
    ngAfterContentInit() {
        /* if (!(this.icon instanceof IconCloseComponent))
            console.error('Invalid component projected in ButtonIcon component'); */
    }
    onClick(e) {
        this.buttonClick.emit();
    }
}
ButtonIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ButtonIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: ButtonIconComponent, selector: "app-button-icon", inputs: { ariaLabel: "ariaLabel" }, outputs: { buttonClick: "buttonClick" }, ngImport: i0, template: `
        <!-- text-indigo-800  rounded-md hover:text-indigo-900 focus:text-indigo-900 -->
        <button (click)="onClick($event)" type="button" class="bg-transparent">
            <span class="sr-only">{{ ariaLabel }}</span>
            <ng-content></ng-content>
            <!-- <ng-template [ngTemplateOutlet]="outlet"></ng-template> -->
        </button>
  `, isInline: true, styles: ["\n      :host {\n        @apply flex items-center h-7 outline-none;\n      }\n    "] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ButtonIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-button-icon',
                    template: `
        <!-- text-indigo-800  rounded-md hover:text-indigo-900 focus:text-indigo-900 -->
        <button (click)="onClick($event)" type="button" class="bg-transparent">
            <span class="sr-only">{{ ariaLabel }}</span>
            <ng-content></ng-content>
            <!-- <ng-template [ngTemplateOutlet]="outlet"></ng-template> -->
        </button>
  `,
                    styles: [
                        `
      :host {
        @apply flex items-center h-7 outline-none;
      }
    `
                    ]
                }]
        }], propDecorators: { ariaLabel: [{
                type: Input
            }], buttonClick: [{
                type: Output
            }] } });
export class ButtonIconModule {
}
ButtonIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ButtonIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ButtonIconModule, declarations: [ButtonIconComponent], exports: [ButtonIconComponent] });
ButtonIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ButtonIconModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: ButtonIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonIconComponent],
                    exports: [ButtonIconComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3NyYy9saWIvYnV0dG9uLWljb24vYnV0dG9uLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFvQjNHLE1BQU0sT0FBTyxtQkFBbUI7SUFsQmhDO1FBb0JhLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBYzlDO0lBWkcsK0RBQStEO0lBRS9ELFFBQVEsS0FBVyxDQUFDO0lBRXBCLGtCQUFrQjtRQUNkO29GQUM0RTtJQUNoRixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQU07UUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7O2lIQWhCUSxtQkFBbUI7cUdBQW5CLG1CQUFtQixvSUFoQmxCOzs7Ozs7O0dBT1g7NEZBU1UsbUJBQW1CO2tCQWxCL0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUU7Ozs7Ozs7R0FPWDtvQkFDQyxNQUFNLEVBQUU7d0JBQ0o7Ozs7S0FJSDtxQkFDQTtpQkFDSjs4QkFHWSxTQUFTO3NCQUFqQixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU07O0FBb0JYLE1BQU0sT0FBTyxnQkFBZ0I7OzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkF2QmhCLG1CQUFtQixhQUFuQixtQkFBbUI7K0dBdUJuQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFKNUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtYnV0dG9uLWljb24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDwhLS0gdGV4dC1pbmRpZ28tODAwICByb3VuZGVkLW1kIGhvdmVyOnRleHQtaW5kaWdvLTkwMCBmb2N1czp0ZXh0LWluZGlnby05MDAgLS0+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj57eyBhcmlhTGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8IS0tIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJvdXRsZXRcIj48L25nLXRlbXBsYXRlPiAtLT5cbiAgICAgICAgPC9idXR0b24+XG4gIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIGgtNyBvdXRsaW5lLW5vbmU7XG4gICAgICB9XG4gICAgYFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vIEBDb250ZW50Q2hpbGQoSWNvbkNsb3NlQ29tcG9uZW50KSBpY29uITogSWNvbkNsb3NlQ29tcG9uZW50O1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogaWYgKCEodGhpcy5pY29uIGluc3RhbmNlb2YgSWNvbkNsb3NlQ29tcG9uZW50KSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY29tcG9uZW50IHByb2plY3RlZCBpbiBCdXR0b25JY29uIGNvbXBvbmVudCcpOyAqL1xuICAgIH1cblxuICAgIG9uQ2xpY2soZTogYW55KSB7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdCgpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtCdXR0b25JY29uQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQnV0dG9uSWNvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uSWNvbk1vZHVsZSB7IH1cbiJdfQ==