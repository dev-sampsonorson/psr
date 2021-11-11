import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logo',
    template: `
       <!-- <img class="hidden w-40 h-8 lg:block" src="assets/psr-logo.svg" alt="Personal Skill Rating"> -->
       <img class="block w-10 h-8 lg:block" src="assets/psr-abbrv-logo.svg" alt="Personal Skill Rating">
    `,
    styles: [`

    :host {
        @apply flex items-center flex-shrink-0;
    }

  `]
})
export class LogoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
