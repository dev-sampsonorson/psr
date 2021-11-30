import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../menu/menu.model';
import { IContextMenuItemClickEvent } from './context-menu.model';

@Component({
    selector: 'app-context-menu',
    template: `
    <!--  -->
    <div class="mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
         role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
        <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <!-- -->
            <ng-container *ngFor="let item of menuItems">
                <app-link-icon (linkClick)="onLinkClick(item)" [menuItem]="item" [iconClass]="'mr-3 opacity-70'"
                               class="text-gray-700 hover:text-indigo-700">
                </app-link-icon>
            </ng-container>
        </div>
    </div>
  `,
    styles: [
        `
      :host {
        @apply block z-20;
      }
    `
    ],
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
