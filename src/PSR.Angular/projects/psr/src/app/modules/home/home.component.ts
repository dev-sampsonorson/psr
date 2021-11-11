import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRoutes } from '@auth/auth.constants';
import { IUser } from '@auth/models/user.model';
import { AuthService } from '@auth/services/auth.service';
import { Subscription } from 'rxjs';

import { TestService } from '../../core/services/test.service';

@Component({
    selector: 'app-home',
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
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getUserSub = this.auth.getUser()
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
                console.error(error);
            }
        );
    }

    onGetTestDescription(): void {
        this.testDescSub = this.test.getTestDescription().subscribe(result => {
            console.log('result', result);
        });
    }

    onLogin(): void {
        this.router.navigate([AuthRoutes.Login]);
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