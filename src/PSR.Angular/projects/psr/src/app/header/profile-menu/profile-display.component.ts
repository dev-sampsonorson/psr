import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ProfileMenuService } from '../profile-menu.service';

@Component({
    selector: 'app-profile-display',
    template: `
        <div class="profile-display">
            <button (click)="toggleDropdown()" type="button" class="profile-display_button" id="profile-menu-button"
                    aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open profile menu</span>
                <span class="profile-display__welcome">Welcome John</span>
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

    constructor(private profileMenuService: ProfileMenuService) {
        this.openStatus$ = this.profileMenuService.openStatus$;
    }

    ngOnInit(): void {
    }

    toggleDropdown(): void {
        this.openStatusSubscription = this.openStatus$.pipe(take(1))
            .subscribe(status => {
                this.profileMenuService.changeOpenStatus(!status);
            });
    }

    ngOnDestroy(): void {
        this.openStatusSubscription?.unsubscribe();
    }

}
