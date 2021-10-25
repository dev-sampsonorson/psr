import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private test: TestService) { }

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

}
