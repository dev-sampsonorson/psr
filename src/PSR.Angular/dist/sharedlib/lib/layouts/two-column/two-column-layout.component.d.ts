import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TwoColumnLayoutComponent implements OnInit {
    isSecondaryContentVisible: boolean;
    hamburgerMenuClick: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    hamburgerMenuClickHandler(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwoColumnLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwoColumnLayoutComponent, "app-two-column-layout", never, { "isSecondaryContentVisible": "isSecondaryContentVisible"; }, { "hamburgerMenuClick": "hamburgerMenuClick"; }, never, ["[header-content]", "[breadcrumb-content]", "[main-content]", "[secondary-content]"]>;
}
