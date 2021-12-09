import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, NgModule, Output, ViewChild, ViewContainerRef, } from '@angular/core';
import { IconTrashComponent } from '../icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class LinkIconComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.iconClass = '';
        this.linkClick = new EventEmitter();
        // console.log('viewContainerRef', viewContainer);
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        // console.log('icon', this.icon);
    }
    ngAfterViewInit() {
        var _a, _b;
        // console.log('this.iconHost', this.iconViewContainerRef);
        if (!this.menuItem || !this.menuItem.iconComponent)
            return;
        const componentFactory = this.resolver.resolveComponentFactory(this.menuItem.iconComponent);
        this._iconComponentRef = (_a = this.iconViewContainerRef) === null || _a === void 0 ? void 0 : _a.createComponent(componentFactory);
        if (this._iconComponentRef) {
            this._iconComponentRef.instance.iconClass = this.iconClass;
            (_b = this._iconComponentRef) === null || _b === void 0 ? void 0 : _b.changeDetectorRef.detectChanges();
        }
    }
    onLinkClick() {
        // this.menuItem?.command();
        this.linkClick.emit(this.menuItem);
    }
    ngOnDestroy() {
        var _a;
        (_a = this._iconComponentRef) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
LinkIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
LinkIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.14", type: LinkIconComponent, selector: "app-link-icon", inputs: { menuItem: "menuItem", iconClass: "iconClass" }, outputs: { linkClick: "linkClick" }, queries: [{ propertyName: "icon", first: true, predicate: IconTrashComponent, descendants: true }], viewQueries: [{ propertyName: "iconViewContainerRef", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }, { propertyName: "tpl", first: true, predicate: ["tpl"], descendants: true }], ngImport: i0, template: "<a (click)=\"onLinkClick()\" class=\"flex items-center px-4 py-2 text-sm cursor-pointer\" role=\"menuitem\" tabindex=\"-1\">\r\n    <ng-container #container *ngIf=\"menuItem?.isIconVisible\"></ng-container>\r\n    <span class=\"truncate\">{{menuItem?.label}}</span>\r\n</a>\r\n", styles: [":host{display:block}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-link-icon',
                    templateUrl: './link-icon.component.html',
                    styleUrls: ['./link-icon.component.css'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; }, propDecorators: { iconViewContainerRef: [{
                type: ViewChild,
                args: ['container', { read: ViewContainerRef }]
            }], tpl: [{
                type: ViewChild,
                args: ['tpl']
            }], icon: [{
                type: ContentChild,
                args: [IconTrashComponent]
            }], menuItem: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], linkClick: [{
                type: Output
            }] } });
export class LinkIconModule {
}
LinkIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LinkIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconModule, declarations: [LinkIconComponent], imports: [CommonModule], exports: [LinkIconComponent] });
LinkIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: LinkIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LinkIconComponent],
                    imports: [CommonModule],
                    exports: [LinkIconComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi90ZW1wL3NyYy9saWIvbGluay1pY29uL2xpbmstaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvdGVtcC9zcmMvbGliL2xpbmstaWNvbi9saW5rLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFHSCxTQUFTLEVBR1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUdSLE1BQU0sRUFFTixTQUFTLEVBQ1QsZ0JBQWdCLEdBQ25CLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBUTlDLE1BQU0sT0FBTyxpQkFBaUI7SUFhMUIsWUFDWSxRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQVByQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBTy9DLGtEQUFrRDtJQUN0RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxrQkFBa0I7UUFDZCxrQ0FBa0M7SUFDdEMsQ0FBQztJQUVELGVBQWU7O1FBQ1gsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1lBQzlDLE9BQU87UUFFWCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBQSxJQUFJLENBQUMsb0JBQW9CLDBDQUFFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXRGLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDM0QsTUFBQSxJQUFJLENBQUMsaUJBQWlCLDBDQUFFLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzdEO0lBRUwsQ0FBQztJQUVELFdBQVc7UUFDUCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxXQUFXOztRQUNQLE1BQUEsSUFBSSxDQUFDLGlCQUFpQiwwQ0FBRSxPQUFPLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzsrR0EvQ1EsaUJBQWlCO21HQUFqQixpQkFBaUIsc0xBSVosa0JBQWtCLDhJQUZBLGdCQUFnQiwwR0M3QnBELHVSQUlBOzRGRHVCYSxpQkFBaUI7a0JBTDdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUMzQzsrR0FHdUQsb0JBQW9CO3NCQUF2RSxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtnQkFDaEMsR0FBRztzQkFBcEIsU0FBUzt1QkFBQyxLQUFLO2dCQUNrQixJQUFJO3NCQUFyQyxZQUFZO3VCQUFDLGtCQUFrQjtnQkFFdkIsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVJLFNBQVM7c0JBQWxCLE1BQU07O0FBZ0RYLE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjOzZHQUFkLGNBQWMsaUJBekRkLGlCQUFpQixhQXNEaEIsWUFBWSxhQXREYixpQkFBaUI7NkdBeURqQixjQUFjLFlBSGQsQ0FBQyxZQUFZLENBQUM7NEZBR2QsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBDb21wb25lbnRSZWYsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEljb25UcmFzaENvbXBvbmVudCB9IGZyb20gJy4uL2ljb25zJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnLi4vbWVudS9tZW51Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtbGluay1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGluay1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9saW5rLWljb24uY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBpY29uVmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiB8IHVuZGVmaW5lZDtcbiAgICBAVmlld0NoaWxkKCd0cGwnKSB0cGwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoSWNvblRyYXNoQ29tcG9uZW50KSBpY29uOiBJY29uVHJhc2hDb21wb25lbnQgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBtZW51SXRlbTogTWVudUl0ZW0gfCB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgaWNvbkNsYXNzOiBzdHJpbmcgPSAnJztcblxuICAgIEBPdXRwdXQoKSBsaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1lbnVJdGVtPigpO1xuXG4gICAgcHJpdmF0ZSBfaWNvbkNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd2aWV3Q29udGFpbmVyUmVmJywgdmlld0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaWNvbicsIHRoaXMuaWNvbik7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5pY29uSG9zdCcsIHRoaXMuaWNvblZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICBpZiAoIXRoaXMubWVudUl0ZW0gfHwgIXRoaXMubWVudUl0ZW0uaWNvbkNvbXBvbmVudClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLm1lbnVJdGVtLmljb25Db21wb25lbnQpO1xuICAgICAgICB0aGlzLl9pY29uQ29tcG9uZW50UmVmID0gdGhpcy5pY29uVmlld0NvbnRhaW5lclJlZj8uY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pY29uQ29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9pY29uQ29tcG9uZW50UmVmLmluc3RhbmNlLmljb25DbGFzcyA9IHRoaXMuaWNvbkNsYXNzO1xuICAgICAgICAgICAgdGhpcy5faWNvbkNvbXBvbmVudFJlZj8uY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkxpbmtDbGljaygpIHtcbiAgICAgICAgLy8gdGhpcy5tZW51SXRlbT8uY29tbWFuZCgpO1xuICAgICAgICB0aGlzLmxpbmtDbGljay5lbWl0KHRoaXMubWVudUl0ZW0pO1xuICAgIH1cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faWNvbkNvbXBvbmVudFJlZj8uZGVzdHJveSgpO1xuICAgIH1cblxufVxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTGlua0ljb25Db21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtMaW5rSWNvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTGlua0ljb25Nb2R1bGUgeyB9IiwiPGEgKGNsaWNrKT1cIm9uTGlua0NsaWNrKClcIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiB0ZXh0LXNtIGN1cnNvci1wb2ludGVyXCIgcm9sZT1cIm1lbnVpdGVtXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAjY29udGFpbmVyICpuZ0lmPVwibWVudUl0ZW0/LmlzSWNvblZpc2libGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxzcGFuIGNsYXNzPVwidHJ1bmNhdGVcIj57e21lbnVJdGVtPy5sYWJlbH19PC9zcGFuPlxyXG48L2E+XHJcbiJdfQ==