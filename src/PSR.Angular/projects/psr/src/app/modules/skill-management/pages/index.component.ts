import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PageTitleService } from '../services/page-title.service';

@Component({
    selector: 'app-index',
    template: `
    <app-page-heading-layout>
        <h1 class="text-3xl font-bold text-gray-900">
          {{ pageTitle$ | async}}
        </h1>
    </app-page-heading-layout>
    <app-two-column-layout>
    <!-- border-2 border-gray-200 border-dashed rounded-lg -->
        <div main-content class="h-full ">
            <router-outlet></router-outlet>
        </div>
        <div secondary-content class="h-full border-2 border-gray-200 border-dashed rounded-lg">
            <router-outlet name="details"></router-outlet>
        </div>
    </app-two-column-layout>
  `,
    styles: [
        `
      :host {
        display: block;
        flex: 1 1 0%;
        height: 0px;
      }
    `
    ],
    providers: [PageTitleService]
})
export class IndexComponent implements OnInit {

    pageTitle$: Observable<string>;

    constructor(
        private pageTitle: PageTitleService
    ) {
        this.pageTitle$ = this.pageTitle.pageTitle$;
    }

    ngOnInit(): void {
    }

}
