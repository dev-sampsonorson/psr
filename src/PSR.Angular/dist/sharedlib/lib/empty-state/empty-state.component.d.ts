import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EmptyStateComponent implements OnInit {
    title: string;
    description: string;
    buttonLabel: string;
    addNewItem: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    onAddNewItem(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyStateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptyStateComponent, "app-empty-state", never, { "title": "title"; "description": "description"; "buttonLabel": "buttonLabel"; }, { "addNewItem": "addNewItem"; }, never, never>;
}
export declare class EmptyStateModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyStateModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EmptyStateModule, [typeof EmptyStateComponent], never, [typeof EmptyStateComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EmptyStateModule>;
}
