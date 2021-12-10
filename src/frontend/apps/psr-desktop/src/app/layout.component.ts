import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@psr/auth';
import { IUser, UserStorageService } from '@psr/core';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-layout',
    template: `
      <psr-ui-header [showSignInOrSignUp]="isAuthenticated$ | async" [user]="user"></psr-ui-header>
      <!-- h-0 is here to make the immediate sibling fill height of this container -->
      <div class="flex-1 h-0">
          <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-full flex flex-col">
              <router-outlet></router-outlet>
          </div>
      </div>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
    `]
})
export class LayoutComponent implements OnInit, OnDestroy {

    private getUserSub!: Subscription;

    public isAuthenticated$: Observable<boolean>;
    public user: IUser | null = null;

    constructor(
        private auth: AuthService,
        private userStorage: UserStorageService
    ) {
        this.isAuthenticated$ = this.auth.isAuthenticated()
    }

    ngOnInit(): void {

        this.getUserSub = this.userStorage.getUser()
            .subscribe(user => {
                this.user = user;
            });
    }

    ngOnDestroy() {
        this.getUserSub && this.getUserSub.unsubscribe();
    }

}
