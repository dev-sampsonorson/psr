import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../menu.model';

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
    ]
})
export class ContextMenuComponent implements OnInit {

    @Input() menuItems: MenuItem[] = [];
    @Output() menuItemClick = new EventEmitter<MenuItem>();

    constructor() { }

    ngOnInit(): void { }

    onLinkClick(menuItem: MenuItem): void {
        this.menuItemClick.emit(menuItem);
    }

}
