import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '@psr/shared/ui';

@Component({
    selector: 'psr-ui-navigation',
    template: `
        <a [routerLink]="menuItem.routerLink()" routerLinkActive="menu__item--active"  class="{{ cssClass() }}" *ngFor="let menuItem of menu">
            {{menuItem.label}}
        </a>
    `,
    styleUrls: ['./navigation.component.scss']
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
