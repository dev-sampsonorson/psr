import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IUser } from '@psr/auth/models/user.model';
import { AuthService } from '@psr/auth/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ProfileMenuService } from '../profile-menu.service';

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
    styles: [`
        .profile-display {
            @apply relative z-10;

            &__button {
                @apply flex items-center space-x-4 bg-gray-800 rounded-full focus:outline-none ring-0;
            }

            &__welcome {
                //hover:bg-gray-700
                @apply text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium;
            }
        }
    `]
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
