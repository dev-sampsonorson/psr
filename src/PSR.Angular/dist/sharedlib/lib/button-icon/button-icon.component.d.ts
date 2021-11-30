import { AfterContentInit, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonIconComponent implements OnInit, AfterContentInit {
    ariaLabel: string;
    buttonClick: EventEmitter<any>;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onClick(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonIconComponent, "app-button-icon", never, { "ariaLabel": "ariaLabel"; }, { "buttonClick": "buttonClick"; }, never, ["*"]>;
}
export declare class ButtonIconModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonIconModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ButtonIconModule, [typeof ButtonIconComponent], never, [typeof ButtonIconComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ButtonIconModule>;
}
