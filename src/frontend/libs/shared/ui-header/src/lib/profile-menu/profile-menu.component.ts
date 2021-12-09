import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '@psr/core';
import { IContextMenuItemClickEvent, MenuItem } from '@psr/shared/ui';
import { Observable, Subscription } from 'rxjs';

import { ProfileMenuService } from './profile-menu.service';

// (isDropdownOpen)="toggleDropdown($event)"
@Component({
    selector: 'psr-ui-profile-menu',
    template: `
        <psr-ui-profile-display *ngIf="user" [user]="user"></psr-ui-profile-display>
        <button *ngIf="isDropdownOpen" (click)="onHideDropdown()" class="close-overlay" tabindex="-1"></button>
        <psr-context-menu
            *ngIf="isDropdownOpen"
            [handle]="contextMenuHandle"
            [menuItems]="menuItems"
            (menuItemClick)="onMenuItemClick($event)"
            class="absolute right-0 w-48">
        </psr-context-menu>
    `,
    styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit, OnDestroy {

    @Input() user: IUser | null = null;

    private getUserSub!: Subscription;

    private openStatus$: Observable<boolean>;
    public isDropdownOpen: boolean = false;
    public contextMenuHandle: Symbol = Symbol('profileMenuContextMenuHandle');

    @Input() menuItems: MenuItem[] = [];

    constructor(
        private service: ProfileMenuService,
        private router: Router
    ) {
        this.openStatus$ = this.service.openStatus$;
    }

    ngOnInit(): void {
        this.openStatus$.subscribe(status => {
            this.isDropdownOpen = status;
        });
        /* this.getUserSub = this.auth.getUser()
            .subscribe(user => {
                this.user = user;
            }); */
    }

    onHideDropdown(): void {
        this.service.changeOpenStatus(false);
    }

    onMenuItemClick({ menuItem, handle }: IContextMenuItemClickEvent) {
        this.service.changeOpenStatus(false);
        this.router.navigate(menuItem.routerLink() as any[]);
    }

    @HostListener('document:keydown', ['$event'])
    onHandleEscape(e: KeyboardEvent) {
        if (e.key === 'Esc' || e.key === 'Escape') {
            this.service.changeOpenStatus(false);
        }
    }

    ngOnDestroy() {
        this.getUserSub && this.getUserSub.unsubscribe();
    }
}
