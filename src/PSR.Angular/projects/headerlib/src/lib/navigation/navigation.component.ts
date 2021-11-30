import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '@sharedlib';

@Component({
    selector: 'app-navigation',
    template: `
        <a [routerLink]="menuItem.routerLink()" routerLinkActive="menu__item--active"  class="{{ cssClass() }}" *ngFor="let menuItem of menu">
            {{menuItem.label}}
        </a>
    `,
    styles: [`
        :host-context(.desktop-menu) {
            @apply flex space-x-4;
        }

        :host-context(.mobile-menu) {
            @apply block px-2 pt-2 pb-3 space-y-1;
        }

        .menu {
            &__item {
                @apply px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white;

                &--active {
                    @apply bg-gray-900 text-white;
                }

                &--stacked {
                    @apply block text-base;
                }
            }
        }

    `]
})
export class NavigationComponent implements OnInit {

    @Input() menu: MenuItem[] = [];
    @Input() stacked: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    cssClass() {
        const classes = ['menu__item'];

        if (this.stacked) {
            classes.push('menu__item--stacked');
        }

        return classes.join(' ');
    }



}
