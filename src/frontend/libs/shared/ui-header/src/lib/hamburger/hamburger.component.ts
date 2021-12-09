import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'psr-ui-hamburger',
    templateUrl: './hamburger.component.html',
    styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

    @Output() clicked = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    onClick(): void {
        this.clicked.emit();
    }

}
