import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@psr/auth';
import { APP_CONFIG_TOKEN, IAppConfig, IUser, TestService, UserStorageService } from '@psr/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'psr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    public user: IUser | null = null;

    private getUserSub!: Subscription;
    private logoutSub!: Subscription;
    private testDescSub!: Subscription;

    constructor(
        private test: TestService,
        private auth: AuthService,
        private router: Router,
        private userStorage: UserStorageService,
        @Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfig
    ) { }

    ngOnInit(): void {
        this.getUserSub = this.userStorage.getUser()
            .subscribe(user => {
                this.user = user;
            });
    }

    onGetError(): void {
        this.test.getError().subscribe(
            value => {
                console.info(value);
            },
            error => {
                // console.error(error);
            }
        );
    }

    onGetTestDescription(): void {
        this.testDescSub = this.test.getTestDescription().subscribe(result => {
            console.log('result', result);
        });
    }

    onLogin(): void {
        this.router.navigate([this.appConfig.navigationPaths.Login]);
    }

    onLogout(): void {
        this.auth.logout();
    }

    ngOnDestroy(): void {
        this.getUserSub && this.getUserSub.unsubscribe();
        // this.logoutSub.unsubscribe();
        this.testDescSub && this.testDescSub.unsubscribe();
    }
}

