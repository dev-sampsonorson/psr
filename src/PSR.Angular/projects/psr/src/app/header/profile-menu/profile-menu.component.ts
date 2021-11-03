import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthRoutes } from '@psr/auth/auth.constants';
import { MenuItem } from '@psr/shared/menu.model';
import { Observable } from 'rxjs';
import { ProfileMenuService } from '../profile-menu.service';

// (isDropdownOpen)="toggleDropdown($event)"
@Component({
    selector: 'app-profile-menu',
    template: `
        <app-profile-display></app-profile-display>
        <button *ngIf="isDropdownOpen" (click)="onHideDropdown()" class="close-overlay" tabindex="-1"></button>
        <app-dropdown-menu
            *ngIf="isDropdownOpen"
            [menus]="menuItems"
            (menuItemClicked)="onMenuItemClicked($event)">
        </app-dropdown-menu>
    `,
    styles: [`
        :host {
            @apply relative;
        }

        .close-overlay {
            @apply fixed inset-0 h-full w-full cursor-default; //bg-black opacity-50
        }
    `]
})
export class ProfileMenuComponent implements OnInit {

    private openStatus$: Observable<boolean>;
    public isDropdownOpen: boolean = false;

    @Input() menuItems: MenuItem[] = [];

    constructor(
        private service: ProfileMenuService
    ) {
        this.openStatus$ = this.service.openStatus$;
    }

    ngOnInit(): void {
        this.openStatus$.subscribe(status => {
            this.isDropdownOpen = status;
        });
    }

    onHideDropdown(): void {
        this.service.changeOpenStatus(false);
    }

    onMenuItemClicked(menuItem: MenuItem) {
        if (menuItem.route === AuthRoutes.RevokeToken) {
            this.service.changeOpenStatus(false);
        }
    }

    @HostListener('document:keydown', ['$event'])
    onHandleEscape(e: KeyboardEvent) {
        if (e.key === 'Esc' || e.key === 'Escape') {
            this.service.changeOpenStatus(false);
        }
    }
}
