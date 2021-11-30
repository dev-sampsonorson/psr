import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BlockUiDirective implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    targetElement: boolean;
    autoZIndex: boolean;
    baseZIndex: number;
    appBlockUi: boolean;
    maskTpl: TemplateRef<any> | undefined;
    private _overlayEl;
    private _overlayRemoved;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    toggleBlockUi(state: boolean): void;
    private setupOverlay;
    private block;
    private unblock;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUiDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BlockUiDirective, "[x-blockui]", never, { "targetElement": "x-target-el"; "autoZIndex": "x-auto-zindex"; "baseZIndex": "x-base-zindex"; "appBlockUi": "x-blockui"; "maskTpl": "x-overlay-tpl"; }, {}, never>;
}
