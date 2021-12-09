import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '@sharedlib';

@Component({
    selector: 'app-navigation',
    template: `
        <a [routerLink]="menuItem.routerLink()" routerLinkActive="menu__item--active"  class="{{ cssClass() }}" *ngFor="let menuItem of menu">
            {{menuItem.label}}
        </a>
    `,
    styleUrls: ['./navigation.component.css']
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
