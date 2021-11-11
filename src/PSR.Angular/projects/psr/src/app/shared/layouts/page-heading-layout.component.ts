import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-heading-layout',
    template: `
    <header class="bg-white border-dashed border-b-2 border-gray-200">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <ng-content></ng-content>
      </div>
    </header>
  `,
    styles: [
        `
      :host {
        display: block;
      }
    `
    ]
})
export class PageHeadingLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
