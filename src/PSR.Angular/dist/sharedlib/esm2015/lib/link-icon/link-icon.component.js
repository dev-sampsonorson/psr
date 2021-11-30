import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, NgModule, Output, ViewChild, ViewContainerRef, } from '@angular/core';
import { IconTrashComponent } from '../icons/icon-trash.component';
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
LinkIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LinkIconComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
LinkIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: LinkIconComponent, selector: "app-link-icon", inputs: { menuItem: "menuItem", iconClass: "iconClass" }, outputs: { linkClick: "linkClick" }, queries: [{ propertyName: "icon", first: true, predicate: IconTrashComponent, descendants: true }], viewQueries: [{ propertyName: "iconViewContainerRef", first: true, predicate: ["container"], descendants: true, read: ViewContainerRef }, { propertyName: "tpl", first: true, predicate: ["tpl"], descendants: true }], ngImport: i0, template: `
    <a (click)="onLinkClick()" class="flex items-center px-4 py-2 text-sm cursor-pointer" role="menuitem" tabindex="-1">
        <ng-container #container *ngIf="menuItem?.isIconVisible"></ng-container>
        <span class="truncate">{{menuItem?.label}}</span>
    </a>
  `, isInline: true, styles: ["\n      :host {\n        display: block;\n      }\n    "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LinkIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-link-icon',
                    template: `
    <a (click)="onLinkClick()" class="flex items-center px-4 py-2 text-sm cursor-pointer" role="menuitem" tabindex="-1">
        <ng-container #container *ngIf="menuItem?.isIconVisible"></ng-container>
        <span class="truncate">{{menuItem?.label}}</span>
    </a>
  `,
                    styles: [
                        `
      :host {
        display: block;
      }
    `
                    ]
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
LinkIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LinkIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LinkIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LinkIconModule, declarations: [LinkIconComponent], imports: [CommonModule], exports: [LinkIconComponent] });
LinkIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LinkIconModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: LinkIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LinkIconComponent],
                    imports: [CommonModule],
                    exports: [LinkIconComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZGxpYi9zcmMvbGliL2xpbmstaWNvbi9saW5rLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBR0gsU0FBUyxFQUdULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFHUixNQUFNLEVBRU4sU0FBUyxFQUNULGdCQUFnQixHQUNuQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBbUJuRSxNQUFNLE9BQU8saUJBQWlCO0lBYTFCLFlBQ1ksUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFQckMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQU8vQyxrREFBa0Q7SUFDdEQsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsa0JBQWtCO1FBQ2Qsa0NBQWtDO0lBQ3RDLENBQUM7SUFFRCxlQUFlOztRQUNYLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtZQUM5QyxPQUFPO1FBRVgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQUEsSUFBSSxDQUFDLG9CQUFvQiwwQ0FBRSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV0RixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzNELE1BQUEsSUFBSSxDQUFDLGlCQUFpQiwwQ0FBRSxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM3RDtJQUVMLENBQUM7SUFFRCxXQUFXO1FBQ1AsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsV0FBVzs7UUFDUCxNQUFBLElBQUksQ0FBQyxpQkFBaUIsMENBQUUsT0FBTyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7K0dBL0NRLGlCQUFpQjttR0FBakIsaUJBQWlCLHNMQUlaLGtCQUFrQiw4SUFGQSxnQkFBZ0IsMEdBaEJ0Qzs7Ozs7R0FLWDs0RkFTVSxpQkFBaUI7a0JBaEI3QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7O0dBS1g7b0JBQ0MsTUFBTSxFQUFFO3dCQUNKOzs7O0tBSUg7cUJBQ0E7aUJBQ0o7K0dBR3VELG9CQUFvQjtzQkFBdkUsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ2hDLEdBQUc7c0JBQXBCLFNBQVM7dUJBQUMsS0FBSztnQkFDa0IsSUFBSTtzQkFBckMsWUFBWTt1QkFBQyxrQkFBa0I7Z0JBRXZCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFFSSxTQUFTO3NCQUFsQixNQUFNOztBQWdEWCxNQUFNLE9BQU8sY0FBYzs7NEdBQWQsY0FBYzs2R0FBZCxjQUFjLGlCQXpEZCxpQkFBaUIsYUFzRGhCLFlBQVksYUF0RGIsaUJBQWlCOzZHQXlEakIsY0FBYyxZQUhkLENBQUMsWUFBWSxDQUFDOzRGQUdkLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJY29uVHJhc2hDb21wb25lbnQgfSBmcm9tICcuLi9pY29ucy9pY29uLXRyYXNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4uL21lbnUvbWVudS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWxpbmstaWNvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8YSAoY2xpY2spPVwib25MaW5rQ2xpY2soKVwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gY3Vyc29yLXBvaW50ZXJcIiByb2xlPVwibWVudWl0ZW1cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgI2NvbnRhaW5lciAqbmdJZj1cIm1lbnVJdGVtPy5pc0ljb25WaXNpYmxlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidHJ1bmNhdGVcIj57e21lbnVJdGVtPy5sYWJlbH19PC9zcGFuPlxuICAgIDwvYT5cbiAgYCxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5rSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBpY29uVmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiB8IHVuZGVmaW5lZDtcbiAgICBAVmlld0NoaWxkKCd0cGwnKSB0cGwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoSWNvblRyYXNoQ29tcG9uZW50KSBpY29uOiBJY29uVHJhc2hDb21wb25lbnQgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBtZW51SXRlbTogTWVudUl0ZW0gfCB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgaWNvbkNsYXNzOiBzdHJpbmcgPSAnJztcblxuICAgIEBPdXRwdXQoKSBsaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1lbnVJdGVtPigpO1xuXG4gICAgcHJpdmF0ZSBfaWNvbkNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd2aWV3Q29udGFpbmVyUmVmJywgdmlld0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaWNvbicsIHRoaXMuaWNvbik7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5pY29uSG9zdCcsIHRoaXMuaWNvblZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICBpZiAoIXRoaXMubWVudUl0ZW0gfHwgIXRoaXMubWVudUl0ZW0uaWNvbkNvbXBvbmVudClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLm1lbnVJdGVtLmljb25Db21wb25lbnQpO1xuICAgICAgICB0aGlzLl9pY29uQ29tcG9uZW50UmVmID0gdGhpcy5pY29uVmlld0NvbnRhaW5lclJlZj8uY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pY29uQ29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9pY29uQ29tcG9uZW50UmVmLmluc3RhbmNlLmljb25DbGFzcyA9IHRoaXMuaWNvbkNsYXNzO1xuICAgICAgICAgICAgdGhpcy5faWNvbkNvbXBvbmVudFJlZj8uY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkxpbmtDbGljaygpIHtcbiAgICAgICAgLy8gdGhpcy5tZW51SXRlbT8uY29tbWFuZCgpO1xuICAgICAgICB0aGlzLmxpbmtDbGljay5lbWl0KHRoaXMubWVudUl0ZW0pO1xuICAgIH1cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faWNvbkNvbXBvbmVudFJlZj8uZGVzdHJveSgpO1xuICAgIH1cblxufVxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTGlua0ljb25Db21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtMaW5rSWNvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTGlua0ljb25Nb2R1bGUgeyB9Il19