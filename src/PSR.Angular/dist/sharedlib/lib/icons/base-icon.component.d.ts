import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseIconComponent implements OnInit {
    protected el: ElementRef;
    protected renderer: Renderer2;
    iconClass: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseIconComponent, "ng-component", never, {}, {}, never, never>;
}
