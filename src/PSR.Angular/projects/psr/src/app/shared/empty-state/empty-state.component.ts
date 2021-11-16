import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
    selector: 'app-empty-state',
    template: `
        <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
             aria-hidden="true">
            <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">{{ title }}</h3>
        <p class="mt-1 text-sm text-gray-500">
            {{ description }}
        </p>
        <div class="mt-6">
            <button type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <!-- Heroicon name: solid/plus -->
                <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd" />
                </svg>
                {{ buttonLabel }}
            </button>
        </div>
  `,
    styles: [
        `
      :host {
        display: block;
        @apply p-12 text-center border-2 border-gray-300;
        @apply border-dashed rounded-lg hover:border-gray-400 focus:outline-none;
      }
    `
    ]
})
export class EmptyStateComponent implements OnInit {

    @Input() title: string = 'No item found';
    @Input() description: string = 'Get started by adding a new item';
    @Input() buttonLabel: string = 'Add New';

    constructor() { }

    ngOnInit(): void {
    }

}

@NgModule({
    declarations: [EmptyStateComponent],
    exports: [EmptyStateComponent]
})
export class EmptyStateModule { }