import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Renderer2,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';

@Directive({
    selector: '[x-blockui]'
})
export class BlockUiDirective implements OnChanges, OnInit, AfterViewInit, OnDestroy {

    @Input('x-target-el') targetElement: boolean = true;
    @Input('x-auto-zindex') autoZIndex: boolean = true;
    @Input('x-base-zindex') baseZIndex: number = 0;
    @Input('x-blockui') appBlockUi: boolean = false;
    @Input('x-overlay-tpl') maskTpl: TemplateRef<any> | undefined;

    private _overlayEl: HTMLElement | undefined;
    private _overlayRemoved: boolean = true;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
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

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.appBlockUi.currentValue) {
            // console.log('Block UI');
            this.block();
        } else {
            // console.log('Unblock UI');
            this.unblock();
        }
    }

    toggleBlockUi(state: boolean) {
        // console.log('toggleBlockUi');
        if (state) {
            console.log('Block UI');
            this.block();
        } else {
            // console.log('Unblock UI');
            this.unblock();
        }
    }

    private setupOverlay(): void {
        this._overlayEl = this.maskTpl!.createEmbeddedView(null).rootNodes[0];
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

    private block() {
        console.log('block', this._overlayEl);
        if (!this._overlayEl)
            return;

        // if (this.target) {
        if (this.targetElement) {
            this.renderer.appendChild(this.el.nativeElement, this._overlayEl);
        } else {
            this.renderer.appendChild(document.body, this._overlayEl);
        }



        if (this.autoZIndex && this._overlayEl) {
            this.renderer.setStyle(this._overlayEl, 'z-index', String(this.baseZIndex + 1000));
            // this._overlayEl.style.zIndex = String(this.baseZIndex + 1000); //(++DomHandler.zindex)
        }
        this._overlayRemoved = false;
    }

    private unblock() {
        // this.mask?.nativeElement && this.el.nativeElement.appendChild(this.mask?.nativeElement);
        // this._overlayEl && this.renderer.removeChild(this.target?.getBlockableElement() || document.body, this._overlayEl);
        !this._overlayRemoved && this._overlayEl && this.renderer.removeChild(this.targetElement ? this.el.nativeElement : document.body, this._overlayEl);
        this._overlayRemoved = true;
    }

    ngOnDestroy() {
        this.unblock();
    }

}
