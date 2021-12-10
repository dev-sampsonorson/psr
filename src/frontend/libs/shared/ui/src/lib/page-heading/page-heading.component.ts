import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
    selector: 'psr-ui-page-heading',
    templateUrl: './page-heading.component.html',
    styleUrls: ['./page-heading.component.scss'],
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
