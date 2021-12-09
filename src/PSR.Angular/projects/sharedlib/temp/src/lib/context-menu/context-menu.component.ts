import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../menu/menu.model';
import { IContextMenuItemClickEvent } from './context-menu.model';

@Component({
    selector: 'app-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent implements OnInit {

    @Input() handle: Symbol | undefined;
    @Input() menuItems: MenuItem[] = [];
    @Output() menuItemClick = new EventEmitter<IContextMenuItemClickEvent>();

    constructor() { }

    ngOnInit(): void {
        if (!this.handle) {
            throw 'A handle is required for the context menu';
        }
    }

    onLinkClick(menuItem: MenuItem): void {
        if (this.handle) this.menuItemClick.emit({ menuItem, handle: this.handle });
    }

}
