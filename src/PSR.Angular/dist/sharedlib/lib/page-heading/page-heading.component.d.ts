import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PageHeadingComponent implements OnInit {
    title: string | null;
    description: string | null;
    xSize: "medium" | "large";
    xColor: "indigo" | "black";
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageHeadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageHeadingComponent, "app-page-heading", never, { "title": "title"; "description": "description"; "xSize": "x-size"; "xColor": "x-color"; }, {}, never, never>;
}
export declare class PageHeadingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PageHeadingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PageHeadingModule, [typeof PageHeadingComponent], never, [typeof PageHeadingComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PageHeadingModule>;
}
