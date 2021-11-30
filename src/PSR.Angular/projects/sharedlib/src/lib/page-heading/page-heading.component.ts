import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-heading',
    template: `
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  `,
    styles: [
        `
      :host {
        display: block;
      }

      :host([x-size=large]) {
          & h1 {
              @apply text-3xl font-bold;
          }

          & p {
              @apply text-lg font-normal;
          }
      }

      :host([x-size=medium]) {
          & h1 {
              @apply text-lg font-medium leading-6;
          }

          & p {
              @apply max-w-2xl mt-1 text-sm;
          }
      }

      :host([x-color=black]) {
          & h1, & p {
              @apply text-gray-900;
          }
      }

      :host([x-color=indigo]) {
          & h1, & p {
              @apply text-indigo-900;
          }
      }
    `
    ]
})
export class PageHeadingComponent implements OnInit {

    @Input() title: string | null = '';
    @Input() description: string | null = '';
    @Input('x-size') xSize: "medium" | "large" = "large";
    @Input('x-color') xColor: "indigo" | "black" = "black";

    constructor() {
        // this.title = this.title ?? '';
        // this.description = this.description ?? '';
    }

    ngOnInit(): void {
    }

}


@NgModule({
    declarations: [PageHeadingComponent],
    exports: [PageHeadingComponent]
})
export class PageHeadingModule {

}