import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { BaseIconComponent } from './base-icon.component';

@Component({
    selector: 'app-icon-dot-vertical',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
  `,
    styles: [
        `
      :host {
        @apply block w-5 h-5 text-gray-500 transition-colors duration-200 hover:text-gray-900;
      }
    `
    ]
})
export class IconDotVerticalComponent extends BaseIconComponent implements OnInit {
    constructor(
        el: ElementRef,
        renderer: Renderer2
    ) {
        super(el, renderer);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}
