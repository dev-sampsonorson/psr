import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRoutes } from '@psr/auth/auth.constants';
import { AuthService } from '@psr/auth/services/auth.service';
import { TestService } from '../services/test.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private test: TestService,
        private auth: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
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
        this.test.getTestDescription().subscribe(result => {
            console.log('result', result);
        });
    }

    onLogout(): void {
        this.auth.logout();

        /*
.subscribe(_ => {
            // this.router.navigate([AuthRoutes.Login]);
        })
        */
    }

}
