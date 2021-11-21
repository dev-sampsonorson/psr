import { Component, OnInit } from '@angular/core';
import { AlertService } from '@shared/alert';

@Component({
    selector: 'app-secret',
    template: `
    <p>
      secret works!
    </p>
    <app-test-alert></app-test-alert>
  `,
    styles: [
    ]
})
export class SecretComponent implements OnInit {

    constructor(
        private alert: AlertService
    ) { }

    ngOnInit(): void {
    }

}
