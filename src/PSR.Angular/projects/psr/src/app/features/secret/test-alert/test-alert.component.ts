import { Component, OnInit } from '@angular/core';
import { AlertService } from '@shared/alert';

@Component({
    selector: 'app-test-alert',
    template: `
    <p>
      test-alert works!
    </p>
    <button (click)="onClick()">Alert</button>
  `,
    styles: [
        `
      :host {
        display: block;
      }
    `
    ]
})
export class TestAlertComponent implements OnInit {

    constructor(
        private alert: AlertService
    ) { }

    ngOnInit(): void {
    }

    onClick(): void {
        this.alert.success('Success', 'Testing........');

    }

}
