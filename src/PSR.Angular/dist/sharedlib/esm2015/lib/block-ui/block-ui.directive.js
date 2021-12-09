import { Directive, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class BlockUiDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.targetElement = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.appBlockUi = false;
        this._overlayRemoved = true;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        /* if (this.target && !this.target.getBlockableElement) {
            throw 'Target of BlockUI must implement IBlockableUi interface';
        } */
        if (!this.maskTpl) {
            throw 'Mask element must be provided to BlockUI directive';
        }
        this.setupOverlay();
        // console.log('this.target.getBlockableElement()', this.target!.getBlockableElement());
        // console.log('this.el', this.el.nativeElement);
    }
    ngOnChanges(changes) {
        if (changes.appBlockUi.currentValue) {
            // console.log('Block UI');
            this.block();
        }
        else {
            // console.log('Unblock UI');
            this.unblock();
        }
    }
    toggleBlockUi(state) {
        // console.log('toggleBlockUi');
        if (state) {
            console.log('Block UI');
            this.block();
        }
        else {
            // console.log('Unblock UI');
            this.unblock();
        }
    }
    setupOverlay() {
        this._overlayEl = this.maskTpl.createEmbeddedView(null).rootNodes[0];
        this.renderer.setStyle(this._overlayEl, 'display', 'none');
        this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
        this.renderer.setStyle(this._overlayEl, 'display', 'flex');
        this.renderer.setStyle(this._overlayEl, 'justify-content', 'center');
        this.renderer.setStyle(this._overlayEl, 'align-items', 'center');
        this.renderer.setStyle(this._overlayEl, 'position', 'absolute');
        this.renderer.setStyle(this._overlayEl, 'top', '0px');
        this.renderer.setStyle(this._overlayEl, 'right', '0px');
        this.renderer.setStyle(this._overlayEl, 'bottom', '0px');
        this.renderer.setStyle(this._overlayEl, 'left', '0px');
        this.renderer.setStyle(this._overlayEl, 'background-color', 'var(--eui-blockui-background-color)');
        this.renderer.setStyle(this._overlayEl, 'cursor', 'var(--eui-blockui-cursor)');
        this.renderer.setStyle(this._overlayEl, 'border-radius', 'var(--eui-blockui-overlay-border-radius)');
    }
    block() {
        console.log('block', this._overlayEl);
        if (!this._overlayEl)
            return;
        // if (this.target) {
        if (this.targetElement) {
            this.renderer.appendChild(this.el.nativeElement, this._overlayEl);
        }
        else {
            this.renderer.appendChild(document.body, this._overlayEl);
        }
        if (this.autoZIndex && this._overlayEl) {
            this.renderer.setStyle(this._overlayEl, 'z-index', String(this.baseZIndex + 1000));
            // this._overlayEl.style.zIndex = String(this.baseZIndex + 1000); //(++DomHandler.zindex)
        }
        this._overlayRemoved = false;
    }
    unblock() {
        // this.mask?.nativeElement && this.el.nativeElement.appendChild(this.mask?.nativeElement);
        // this._overlayEl && this.renderer.removeChild(this.target?.getBlockableElement() || document.body, this._overlayEl);
        !this._overlayRemoved && this._overlayEl && this.renderer.removeChild(this.targetElement ? this.el.nativeElement : document.body, this._overlayEl);
        this._overlayRemoved = true;
    }
    ngOnDestroy() {
        this.unblock();
    }
}
BlockUiDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BlockUiDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
BlockUiDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.14", type: BlockUiDirective, selector: "[x-blockui]", inputs: { targetElement: ["x-target-el", "targetElement"], autoZIndex: ["x-auto-zindex", "autoZIndex"], baseZIndex: ["x-base-zindex", "baseZIndex"], appBlockUi: ["x-blockui", "appBlockUi"], maskTpl: ["x-overlay-tpl", "maskTpl"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.14", ngImport: i0, type: BlockUiDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[x-blockui]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { targetElement: [{
                type: Input,
                args: ['x-target-el']
            }], autoZIndex: [{
                type: Input,
                args: ['x-auto-zindex']
            }], baseZIndex: [{
                type: Input,
                args: ['x-base-zindex']
            }], appBlockUi: [{
                type: Input,
                args: ['x-blockui']
            }], maskTpl: [{
                type: Input,
                args: ['x-overlay-tpl']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3RlbXAvc3JjL2xpYi9ibG9jay11aS9ibG9jay11aS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVILFNBQVMsRUFFVCxLQUFLLEdBT1IsTUFBTSxlQUFlLENBQUM7O0FBS3ZCLE1BQU0sT0FBTyxnQkFBZ0I7SUFXekIsWUFDWSxFQUFjLEVBQ2QsUUFBbUI7UUFEbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFYVCxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM1QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUl4QyxvQkFBZSxHQUFZLElBQUksQ0FBQztJQUtwQyxDQUFDO0lBRUwsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ1g7O1lBRUk7UUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE1BQU0sb0RBQW9ELENBQUM7U0FDOUQ7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsd0ZBQXdGO1FBQ3hGLGlEQUFpRDtJQUNyRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7WUFDakMsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjthQUFNO1lBQ0gsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYztRQUN4QixnQ0FBZ0M7UUFDaEMsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUs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QyxDQUFDLENBQUM7WUFDbkYseUZBQXlGO1NBQzVGO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVPLE9BQU87UUFDWCwyRkFBMkY7UUFDM0Ysc0hBQXNIO1FBQ3RILENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuSixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs4R0F2R1EsZ0JBQWdCO2tHQUFoQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtpQkFDMUI7eUhBR3lCLGFBQWE7c0JBQWxDLEtBQUs7dUJBQUMsYUFBYTtnQkFDSSxVQUFVO3NCQUFqQyxLQUFLO3VCQUFDLGVBQWU7Z0JBQ0UsVUFBVTtzQkFBakMsS0FBSzt1QkFBQyxlQUFlO2dCQUNGLFVBQVU7c0JBQTdCLEtBQUs7dUJBQUMsV0FBVztnQkFDTSxPQUFPO3NCQUE5QixLQUFLO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgUmVuZGVyZXIyLFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t4LWJsb2NrdWldJ1xufSlcbmV4cG9ydCBjbGFzcyBCbG9ja1VpRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoJ3gtdGFyZ2V0LWVsJykgdGFyZ2V0RWxlbWVudDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCd4LWF1dG8temluZGV4JykgYXV0b1pJbmRleDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCd4LWJhc2UtemluZGV4JykgYmFzZVpJbmRleDogbnVtYmVyID0gMDtcbiAgICBASW5wdXQoJ3gtYmxvY2t1aScpIGFwcEJsb2NrVWk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoJ3gtb3ZlcmxheS10cGwnKSBtYXNrVHBsOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUVsOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9vdmVybGF5UmVtb3ZlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogaWYgKHRoaXMudGFyZ2V0ICYmICF0aGlzLnRhcmdldC5nZXRCbG9ja2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyAnVGFyZ2V0IG9mIEJsb2NrVUkgbXVzdCBpbXBsZW1lbnQgSUJsb2NrYWJsZVVpIGludGVyZmFjZSc7XG4gICAgICAgIH0gKi9cblxuICAgICAgICBpZiAoIXRoaXMubWFza1RwbCkge1xuICAgICAgICAgICAgdGhyb3cgJ01hc2sgZWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIHRvIEJsb2NrVUkgZGlyZWN0aXZlJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0dXBPdmVybGF5KCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMudGFyZ2V0LmdldEJsb2NrYWJsZUVsZW1lbnQoKScsIHRoaXMudGFyZ2V0IS5nZXRCbG9ja2FibGVFbGVtZW50KCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5lbCcsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy5hcHBCbG9ja1VpLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0Jsb2NrIFVJJyk7XG4gICAgICAgICAgICB0aGlzLmJsb2NrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVW5ibG9jayBVSScpO1xuICAgICAgICAgICAgdGhpcy51bmJsb2NrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVCbG9ja1VpKHN0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b2dnbGVCbG9ja1VpJyk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Jsb2NrIFVJJyk7XG4gICAgICAgICAgICB0aGlzLmJsb2NrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVW5ibG9jayBVSScpO1xuICAgICAgICAgICAgdGhpcy51bmJsb2NrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwT3ZlcmxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheUVsID0gdGhpcy5tYXNrVHBsIS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCkucm9vdE5vZGVzWzBdO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fb3ZlcmxheUVsLCAnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fb3ZlcmxheUVsLCAnanVzdGlmeS1jb250ZW50JywgJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ2FsaWduLWl0ZW1zJywgJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fb3ZlcmxheUVsLCAndG9wJywgJzBweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ3JpZ2h0JywgJzBweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ2JvdHRvbScsICcwcHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdsZWZ0JywgJzBweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tZXVpLWJsb2NrdWktYmFja2dyb3VuZC1jb2xvciknKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdjdXJzb3InLCAndmFyKC0tZXVpLWJsb2NrdWktY3Vyc29yKScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ2JvcmRlci1yYWRpdXMnLCAndmFyKC0tZXVpLWJsb2NrdWktb3ZlcmxheS1ib3JkZXItcmFkaXVzKScpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBibG9jaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Jsb2NrJywgdGhpcy5fb3ZlcmxheUVsKTtcbiAgICAgICAgaWYgKCF0aGlzLl9vdmVybGF5RWwpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9vdmVybGF5RWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCB0aGlzLl9vdmVybGF5RWwpO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIGlmICh0aGlzLmF1dG9aSW5kZXggJiYgdGhpcy5fb3ZlcmxheUVsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ3otaW5kZXgnLCBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgMTAwMCkpO1xuICAgICAgICAgICAgLy8gdGhpcy5fb3ZlcmxheUVsLnN0eWxlLnpJbmRleCA9IFN0cmluZyh0aGlzLmJhc2VaSW5kZXggKyAxMDAwKTsgLy8oKytEb21IYW5kbGVyLnppbmRleClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vdmVybGF5UmVtb3ZlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5ibG9jaygpIHtcbiAgICAgICAgLy8gdGhpcy5tYXNrPy5uYXRpdmVFbGVtZW50ICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm1hc2s/Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvLyB0aGlzLl9vdmVybGF5RWwgJiYgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnRhcmdldD8uZ2V0QmxvY2thYmxlRWxlbWVudCgpIHx8IGRvY3VtZW50LmJvZHksIHRoaXMuX292ZXJsYXlFbCk7XG4gICAgICAgICF0aGlzLl9vdmVybGF5UmVtb3ZlZCAmJiB0aGlzLl9vdmVybGF5RWwgJiYgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnRhcmdldEVsZW1lbnQgPyB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgOiBkb2N1bWVudC5ib2R5LCB0aGlzLl9vdmVybGF5RWwpO1xuICAgICAgICB0aGlzLl9vdmVybGF5UmVtb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5ibG9jaygpO1xuICAgIH1cblxufVxuIl19