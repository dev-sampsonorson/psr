import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

import { ButtonIconModule } from '../button-icon/button-icon.component';
import { IconsModule } from '../icons/icons.module';
import { PageHeadingModule } from '../page-heading/page-heading.component';
import { SecondaryHeaderService } from './secondary-header.service';

@Component({
    selector: 'app-secondary-header',
    template: `
        <!-- <div>
            <h1 class="text-lg font-medium leading-6 text-indigo-900">
                Skill Information
            </h1>
            <p class="max-w-2xl mt-1 text-sm text-indigo-900">
                Detils of the skill.
            </p>
        </div> -->
        <app-page-heading x-size="medium" x-color="indigo" [title]="title" [description]="description"></app-page-heading>
        <app-button-icon (buttonClick)="onButtonClick()" class="text-indigo-900">
            <app-icon-close></app-icon-close>
        </app-button-icon>
        <!-- <app-page-heading x-size="medium" x-color="indigo"></app-page-heading> -->
        <!-- <div class="flex items-center ml-3 h-7">
            <button (click)="onCloseClick()" type="button"
                    class="text-indigo-800 bg-transparent rounded-md hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-indigo-900">
                <span class="sr-only">Close panel</span>
                <svg class="w-6 h-6" x-description="Heroicon name: outline/x"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div> -->
  `,
    styles: [
        `
      :host {
        @apply flex justify-between py-5 border-b border-gray-200;
      }
    `
    ]
})
export class SecondaryHeaderComponent implements OnInit {

    @Input() title: string = '';
    @Input() description: string = '';

    @Output() closeClick = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    onButtonClick(): void {
        this.closeClick.emit();
    }

}


@NgModule({
    declarations: [SecondaryHeaderComponent],
    imports: [ButtonIconModule, IconsModule, PageHeadingModule],
    providers: [SecondaryHeaderService],
    exports: [SecondaryHeaderComponent]
})
export class SecondaryHeaderModule { }
