import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-two-column-layout',
    templateUrl: './two-column-layout.component.html',
    styleUrls: ['./two-column-layout.component.scss'],
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
