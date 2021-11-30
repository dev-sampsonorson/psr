import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../button-icon/button-icon.component";
import * as i2 from "../icons/icons.module";
import * as i3 from "../page-heading/page-heading.component";
export declare class SecondaryHeaderComponent implements OnInit {
    title: string;
    description: string;
    closeClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onButtonClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecondaryHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecondaryHeaderComponent, "app-secondary-header", never, { "title": "title"; "description": "description"; }, { "closeClick": "closeClick"; }, never, never>;
}
export declare class SecondaryHeaderModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SecondaryHeaderModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SecondaryHeaderModule, [typeof SecondaryHeaderComponent], [typeof i1.ButtonIconModule, typeof i2.IconsModule, typeof i3.PageHeadingModule], [typeof SecondaryHeaderComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SecondaryHeaderModule>;
}
