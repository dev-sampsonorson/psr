import { EventEmitter, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menu.model';
import * as i0 from "@angular/core";
export declare class DropdownMenuComponent implements OnInit {
    menus: MenuItem[];
    menuItemClicked: EventEmitter<MenuItem<any>>;
    constructor();
    ngOnInit(): void;
    onMenuItemClick(menuItem: MenuItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownMenuComponent, "app-dropdown-menu", never, { "menus": "menus"; }, { "menuItemClicked": "menuItemClicked"; }, never, never>;
}
