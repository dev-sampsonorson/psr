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
ButtonIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: ButtonIconComponent, selector: "app-button-icon", inputs: { ariaLabel: "ariaLabel" }, outputs: { buttonClick: "buttonClick" }, ngImport: i0, template: "<!-- text-indigo-800  rounded-md hover:text-indigo-900 focus:text-indigo-900 -->\r\n<button (click)=\"onClick($event)\" type=\"button\" class=\"bg-transparent\">\r\n    <span class=\"sr-only\">{{ ariaLabel }}</span>\r\n    <ng-content></ng-content>\r\n    <!-- <ng-template [ngTemplateOutlet]=\"outlet\"></ng-template> -->\r\n</button>\r\n", styles: [":host{display:flex;height:1.75rem;align-items:center;outline:2px solid transparent;outline-offset:2px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-button-icon',
                    templateUrl: './button-icon.component.html',
                    styleUrls: ['./button-icon.component.css']
                }]
        }], propDecorators: { ariaLabel: [{
                type: Input
            }], buttonClick: [{
                type: Output
            }] } });
export class ButtonIconModule {
}
ButtonIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconModule, declarations: [ButtonIconComponent], exports: [ButtonIconComponent] });
ButtonIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: ButtonIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonIconComponent],
                    exports: [ButtonIconComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3RlbXAvc3JjL2xpYi9idXR0b24taWNvbi9idXR0b24taWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL2J1dHRvbi1pY29uL2J1dHRvbi1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPM0csTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9hLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBYzlDO0lBWkcsK0RBQStEO0lBRS9ELFFBQVEsS0FBVyxDQUFDO0lBRXBCLGtCQUFrQjtRQUNkO29GQUM0RTtJQUNoRixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQU07UUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7O2lIQWhCUSxtQkFBbUI7cUdBQW5CLG1CQUFtQixvSUNQaEMscVZBTUE7NEZEQ2EsbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUM3Qzs4QkFHWSxTQUFTO3NCQUFqQixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU07O0FBb0JYLE1BQU0sT0FBTyxnQkFBZ0I7OzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkF2QmhCLG1CQUFtQixhQUFuQixtQkFBbUI7K0dBdUJuQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFKNUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtYnV0dG9uLWljb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24taWNvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWljb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvLyBAQ29udGVudENoaWxkKEljb25DbG9zZUNvbXBvbmVudCkgaWNvbiE6IEljb25DbG9zZUNvbXBvbmVudDtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qIGlmICghKHRoaXMuaWNvbiBpbnN0YW5jZW9mIEljb25DbG9zZUNvbXBvbmVudCkpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGNvbXBvbmVudCBwcm9qZWN0ZWQgaW4gQnV0dG9uSWNvbiBjb21wb25lbnQnKTsgKi9cbiAgICB9XG5cbiAgICBvbkNsaWNrKGU6IGFueSkge1xuICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQnV0dG9uSWNvbkNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0J1dHRvbkljb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkljb25Nb2R1bGUgeyB9XG4iLCI8IS0tIHRleHQtaW5kaWdvLTgwMCAgcm91bmRlZC1tZCBob3Zlcjp0ZXh0LWluZGlnby05MDAgZm9jdXM6dGV4dC1pbmRpZ28tOTAwIC0tPlxyXG48YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+e3sgYXJpYUxhYmVsIH19PC9zcGFuPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPCEtLSA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwib3V0bGV0XCI+PC9uZy10ZW1wbGF0ZT4gLS0+XHJcbjwvYnV0dG9uPlxyXG4iXX0=