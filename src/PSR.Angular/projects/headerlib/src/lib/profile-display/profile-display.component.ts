import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '@corelib';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { ProfileMenuService } from '../profile-menu/profile-menu.service';

@Component({
    selector: 'app-profile-display',
    template: `
        <div class="profile-display">
            <button (click)="toggleDropdown()" type="button" class="profile-display__button" id="profile-menu-button"
                    aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open profile menu</span>
                <span class="profile-display__welcome">Welcome {{ user?.firstName }}</span>
                <!-- <h1 *ngIf="user">Welcome {{ user?.firstName }}</h1> -->
            </button>
        </div>
    `,
    styleUrls: ['./profile-display.component.scss']
})
export class ProfileDisplayComponent implements OnInit, OnDestroy {

    private openStatus$: Observable<boolean>;
    private openStatusSubscription: Subscription | undefined = undefined;

    @Input() user: IUser | null = null;

    constructor(
        private service: ProfileMenuService
    ) {
        this.openStatus$ = this.service.openStatus$;
    }

    ngOnInit(): void {
    }

    toggleDropdown(): void {
        this.openStatusSubscription = this.openStatus$.pipe(take(1))
            .subscribe(status => {
                this.service.changeOpenStatus(!status);
            });
    }

    ngOnDestroy(): void {
        this.openStatusSubscription && this.openStatusSubscription?.unsubscribe();
    }

}
