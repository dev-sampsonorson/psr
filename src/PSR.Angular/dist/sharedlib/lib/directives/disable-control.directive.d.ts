import { OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DisableControlDirective implements OnInit {
    private ngControl;
    disabled: boolean | undefined;
    set disableControl(condition: boolean);
    constructor(ngControl: NgControl);
    ngOnInit(): void;
    toggleControl(condition: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DisableControlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DisableControlDirective, "[disableControl]", never, { "disableControl": "disableControl"; }, {}, never>;
}
export declare class DisableControlModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DisableControlModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DisableControlModule, [typeof DisableControlDirective], never, [typeof DisableControlDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DisableControlModule>;
}
