import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
    `,
    styles: [
    ]
})
export class MainComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
