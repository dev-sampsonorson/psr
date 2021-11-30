import { EventEmitter, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menu.model';
import { IContextMenuItemClickEvent } from './context-menu.model';
import * as i0 from "@angular/core";
export declare class ContextMenuComponent implements OnInit {
    handle: Symbol | undefined;
    menuItems: MenuItem[];
    menuItemClick: EventEmitter<IContextMenuItemClickEvent>;
    constructor();
    ngOnInit(): void;
    onLinkClick(menuItem: MenuItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextMenuComponent, "app-context-menu", never, { "handle": "handle"; "menuItems": "menuItems"; }, { "menuItemClick": "menuItemClick"; }, never, never>;
}
