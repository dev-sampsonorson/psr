import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { BaseIconComponent } from './base-icon.component';

@Component({
    selector: 'app-icon-close',
    template: `
        <svg x-description="Heroicon name: outline/x"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
        </svg>
  `,
    styles: [
        `
      :host {
        @apply block w-6 h-6;
      }
    `
    ]
})
export class IconCloseComponent extends BaseIconComponent implements OnInit {
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