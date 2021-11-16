import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '@auth/models/user.model';
import { AuthService } from '@auth/services/auth.service';
import { MenuItem } from '@shared/menu.model';
import { Observable, Subscription } from 'rxjs';

import { ProfileMenuService } from '../profile-menu.service';

// (isDropdownOpen)="toggleDropdown($event)"
@Component({
    selector: 'app-profile-menu',
    template: `
        <app-profile-display *ngIf="user" [user]="user"></app-profile-display>
        <button *ngIf="isDropdownOpen" (click)="onHideDropdown()" class="close-overlay" tabindex="-1"></button>
        <app-context-menu
            *ngIf="isDropdownOpen"
            [menuItems]="menuItems"
            (menuItemClick)="onMenuItemClick($event)"
            class="absolute right-0 w-48">
        </app-context-menu>
                <!-- <app-context-menu *ngIf="isContextMenuVisible" (menuItemClick)="onMenuItemClick($event)"
                                  [menuItems]="menuItems" class="absolute right-0 w-40"></app-context-menu> -->
        <!-- <app-dropdown-menu
            *ngIf="isDropdownOpen"
            [menus]="menuItems"
            (menuItemClicked)="onMenuItemClicked($event)">
        </app-dropdown-menu> -->
    `,
    styles: [`
        :host {
            @apply relative;
        }
    `]
})
export class ProfileMenuComponent implements OnInit, OnDestroy {

    public user: IUser | null = null;

    private getUserSub!: Subscription;

    private openStatus$: Observable<boolean>;
    public isDropdownOpen: boolean = false;

    @Input() menuItems: MenuItem[] = [];

    constructor(
        private service: ProfileMenuService,
        private auth: AuthService,
        private router: Router
    ) {
        this.openStatus$ = this.service.openStatus$;
    }

    ngOnInit(): void {
        this.openStatus$.subscribe(status => {
            this.isDropdownOpen = status;
        });
        this.getUserSub = this.auth.getUser()
            .subscribe(user => {
                this.user = user;
            });
    }

    onHideDropdown(): void {
        this.service.changeOpenStatus(false);
    }

    onMenuItemClick(menuItem: MenuItem) {
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
