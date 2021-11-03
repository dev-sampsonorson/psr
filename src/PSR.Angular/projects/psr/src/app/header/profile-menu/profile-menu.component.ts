import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthRoutes } from '@psr/auth/auth.constants';
import { IUser } from '@psr/auth/models/user.model';
import { AuthService } from '@psr/auth/services/auth.service';
import { MenuItem } from '@psr/shared/menu.model';
import { Observable, Subscription } from 'rxjs';
import { ProfileMenuService } from '../profile-menu.service';

// (isDropdownOpen)="toggleDropdown($event)"
@Component({
    selector: 'app-profile-menu',
    template: `
        <app-profile-display *ngIf="user" [user]="user"></app-profile-display>
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
export class ProfileMenuComponent implements OnInit, OnDestroy {

    public user: IUser | null = null;

    private getUserSub!: Subscription;

    private openStatus$: Observable<boolean>;
    public isDropdownOpen: boolean = false;

    @Input() menuItems: MenuItem[] = [];

    constructor(
        private service: ProfileMenuService,
        private auth: AuthService
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

    ngOnDestroy() {
        this.getUserSub && this.getUserSub.unsubscribe();
    }
}
