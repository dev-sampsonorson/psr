import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-two-column-layout',
    templateUrl: './two-column-layout.component.html',
    styles: [
        `
      :host {
          display: block;
          height: 100%;
      }
    `
    ]
})
export class TwoColumnLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
