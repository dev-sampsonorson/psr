import { OnInit } from '@angular/core';
import { MenuItem } from '@sharedlib';
import * as i0 from "@angular/core";
export declare class NavigationComponent implements OnInit {
    menu: MenuItem[];
    stacked: boolean;
    constructor();
    ngOnInit(): void;
    cssClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavigationComponent, "app-navigation", never, { "menu": "menu"; "stacked": "stacked"; }, {}, never, never>;
}
