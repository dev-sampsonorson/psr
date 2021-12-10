import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../menu/menu.model';

@Component({
    selector: 'psr-ui-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

    @Input() menus: MenuItem[] = [];

    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    constructor() { }

    ngOnInit(): void {

    }

    onMenuItemClick(menuItem: MenuItem) {
        this.menuItemClicked.emit(menuItem);
    }

}
