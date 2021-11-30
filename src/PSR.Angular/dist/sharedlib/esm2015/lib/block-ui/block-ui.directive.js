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
BlockUiDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BlockUiDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
BlockUiDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.11", type: BlockUiDirective, selector: "[x-blockui]", inputs: { targetElement: ["x-target-el", "targetElement"], autoZIndex: ["x-auto-zindex", "autoZIndex"], baseZIndex: ["x-base-zindex", "baseZIndex"], appBlockUi: ["x-blockui", "appBlockUi"], maskTpl: ["x-overlay-tpl", "maskTpl"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: BlockUiDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkbGliL3NyYy9saWIvYmxvY2stdWkvYmxvY2stdWkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCxTQUFTLEVBRVQsS0FBSyxHQU9SLE1BQU0sZUFBZSxDQUFDOztBQUt2QixNQUFNLE9BQU8sZ0JBQWdCO0lBV3pCLFlBQ1ksRUFBYyxFQUNkLFFBQW1CO1FBRG5CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBWFQsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDNUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFJeEMsb0JBQWUsR0FBWSxJQUFJLENBQUM7SUFLcEMsQ0FBQztJQUVMLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNYOztZQUVJO1FBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixNQUFNLG9EQUFvRCxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLHdGQUF3RjtRQUN4RixpREFBaUQ7SUFDckQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQ2pDLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNILDZCQUE2QjtZQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWM7UUFDeEIsZ0NBQWdDO1FBQ2hDLElBQUksS0FBSyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMs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QyxDQUFDO1lBQ25GLHlGQUF5RjtTQUM1RjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxPQUFPO1FBQ1gsMkZBQTJGO1FBQzNGLHNIQUFzSDtRQUN0SCxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkosSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OEdBdkdRLGdCQUFnQjtrR0FBaEIsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7aUJBQzFCO3lIQUd5QixhQUFhO3NCQUFsQyxLQUFLO3VCQUFDLGFBQWE7Z0JBQ0ksVUFBVTtzQkFBakMsS0FBSzt1QkFBQyxlQUFlO2dCQUNFLFVBQVU7c0JBQWpDLEtBQUs7dUJBQUMsZUFBZTtnQkFDRixVQUFVO3NCQUE3QixLQUFLO3VCQUFDLFdBQVc7Z0JBQ00sT0FBTztzQkFBOUIsS0FBSzt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIFJlbmRlcmVyMixcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbeC1ibG9ja3VpXSdcbn0pXG5leHBvcnQgY2xhc3MgQmxvY2tVaURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCd4LXRhcmdldC1lbCcpIHRhcmdldEVsZW1lbnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgneC1hdXRvLXppbmRleCcpIGF1dG9aSW5kZXg6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgneC1iYXNlLXppbmRleCcpIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCd4LWJsb2NrdWknKSBhcHBCbG9ja1VpOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCd4LW92ZXJsYXktdHBsJykgbWFza1RwbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIHByaXZhdGUgX292ZXJsYXlFbDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfb3ZlcmxheVJlbW92ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIC8qIGlmICh0aGlzLnRhcmdldCAmJiAhdGhpcy50YXJnZXQuZ2V0QmxvY2thYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgJ1RhcmdldCBvZiBCbG9ja1VJIG11c3QgaW1wbGVtZW50IElCbG9ja2FibGVVaSBpbnRlcmZhY2UnO1xuICAgICAgICB9ICovXG5cbiAgICAgICAgaWYgKCF0aGlzLm1hc2tUcGwpIHtcbiAgICAgICAgICAgIHRocm93ICdNYXNrIGVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB0byBCbG9ja1VJIGRpcmVjdGl2ZSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldHVwT3ZlcmxheSgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLnRhcmdldC5nZXRCbG9ja2FibGVFbGVtZW50KCknLCB0aGlzLnRhcmdldCEuZ2V0QmxvY2thYmxlRWxlbWVudCgpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZWwnLCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuYXBwQmxvY2tVaS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdCbG9jayBVSScpO1xuICAgICAgICAgICAgdGhpcy5ibG9jaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VuYmxvY2sgVUknKTtcbiAgICAgICAgICAgIHRoaXMudW5ibG9jaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQmxvY2tVaShzdGF0ZTogYm9vbGVhbikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndG9nZ2xlQmxvY2tVaScpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCbG9jayBVSScpO1xuICAgICAgICAgICAgdGhpcy5ibG9jaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VuYmxvY2sgVUknKTtcbiAgICAgICAgICAgIHRoaXMudW5ibG9jaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXR1cE92ZXJsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlFbCA9IHRoaXMubWFza1RwbCEuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpLnJvb3ROb2Rlc1swXTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ2p1c3RpZnktY29udGVudCcsICdjZW50ZXInKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdhbGlnbi1pdGVtcycsICdjZW50ZXInKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX292ZXJsYXlFbCwgJ3RvcCcsICcwcHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdyaWdodCcsICcwcHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdib3R0b20nLCAnMHB4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fb3ZlcmxheUVsLCAnbGVmdCcsICcwcHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3ZhcigtLWV1aS1ibG9ja3VpLWJhY2tncm91bmQtY29sb3IpJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fb3ZlcmxheUVsLCAnY3Vyc29yJywgJ3ZhcigtLWV1aS1ibG9ja3VpLWN1cnNvciknKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICdib3JkZXItcmFkaXVzJywgJ3ZhcigtLWV1aS1ibG9ja3VpLW92ZXJsYXktYm9yZGVyLXJhZGl1cyknKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYmxvY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdibG9jaycsIHRoaXMuX292ZXJsYXlFbCk7XG4gICAgICAgIGlmICghdGhpcy5fb3ZlcmxheUVsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fb3ZlcmxheUVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgdGhpcy5fb3ZlcmxheUVsKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBpZiAodGhpcy5hdXRvWkluZGV4ICYmIHRoaXMuX292ZXJsYXlFbCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9vdmVybGF5RWwsICd6LWluZGV4JywgU3RyaW5nKHRoaXMuYmFzZVpJbmRleCArIDEwMDApKTtcbiAgICAgICAgICAgIC8vIHRoaXMuX292ZXJsYXlFbC5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgMTAwMCk7IC8vKCsrRG9tSGFuZGxlci56aW5kZXgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlbW92ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVuYmxvY2soKSB7XG4gICAgICAgIC8vIHRoaXMubWFzaz8ubmF0aXZlRWxlbWVudCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5tYXNrPy5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgLy8gdGhpcy5fb3ZlcmxheUVsICYmIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXQ/LmdldEJsb2NrYWJsZUVsZW1lbnQoKSB8fCBkb2N1bWVudC5ib2R5LCB0aGlzLl9vdmVybGF5RWwpO1xuICAgICAgICAhdGhpcy5fb3ZlcmxheVJlbW92ZWQgJiYgdGhpcy5fb3ZlcmxheUVsICYmIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXRFbGVtZW50ID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50IDogZG9jdW1lbnQuYm9keSwgdGhpcy5fb3ZlcmxheUVsKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlbW92ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICB9XG5cbn1cbiJdfQ==