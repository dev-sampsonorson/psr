import { AfterContentInit, AfterViewInit, ComponentFactoryResolver, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { IconTrashComponent } from '../icons/icon-trash.component';
import { MenuItem } from '../menu/menu.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class LinkIconComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
    private resolver;
    iconViewContainerRef: ViewContainerRef | undefined;
    tpl: TemplateRef<any>;
    icon: IconTrashComponent | undefined;
    menuItem: MenuItem | undefined;
    iconClass: string;
    linkClick: EventEmitter<MenuItem<any>>;
    private _iconComponentRef;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    onLinkClick(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkIconComponent, "app-link-icon", never, { "menuItem": "menuItem"; "iconClass": "iconClass"; }, { "linkClick": "linkClick"; }, ["icon"], never>;
}
export declare class LinkIconModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkIconModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LinkIconModule, [typeof LinkIconComponent], [typeof i1.CommonModule], [typeof LinkIconComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LinkIconModule>;
}
