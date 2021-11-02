import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ProfileMenuService } from '../profile-menu.service';

@Component({
    selector: 'app-profile-display',
    templateUrl: './profile-display.component.html',
    styleUrls: ['./profile-display.component.scss']
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
                console.log(status);
                this.profileMenuService.changeOpenStatus(!status);
            });
    }

    ngOnDestroy(): void {
        this.openStatusSubscription?.unsubscribe();
    }

}
