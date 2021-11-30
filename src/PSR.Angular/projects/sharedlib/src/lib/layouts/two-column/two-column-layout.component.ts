import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-two-column-layout',
    templateUrl: './two-column-layout.component.html',
    styles: [
        `
      :host {
          display: block;
          flex: 1 1 0%;
      }
    `
    ]
})
export class TwoColumnLayoutComponent implements OnInit {
    @Input() isSecondaryContentVisible = false;
    @Output() hamburgerMenuClick = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
    }

    hamburgerMenuClickHandler(): void {
        this.hamburgerMenuClick.emit();
    }

}
