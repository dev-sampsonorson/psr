import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HamburgerComponent implements OnInit {
    clicked: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HamburgerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HamburgerComponent, "app-hamburger", never, {}, { "clicked": "clicked"; }, never, never>;
}
