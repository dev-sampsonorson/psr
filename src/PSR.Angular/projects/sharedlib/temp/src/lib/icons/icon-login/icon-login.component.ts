import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { BaseIconComponent } from '../base-icon/base-icon.component';

@Component({
    selector: 'app-icon-login',
    templateUrl: './icon-login.component.html',
    styleUrls: ['./icon-login.component.css'],
})
export class IconLoginComponent extends BaseIconComponent implements OnInit {
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