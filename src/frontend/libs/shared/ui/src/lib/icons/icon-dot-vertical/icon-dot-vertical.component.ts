import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { BaseIconComponent } from '../base-icon/base-icon.component';

@Component({
    selector: 'psr-ui-icon-dot-vertical',
    templateUrl: './icon-dot-vertical.component.html',
    styleUrls: ['./icon-dot-vertical.component.scss'],
})
export class IconDotVerticalComponent extends BaseIconComponent implements OnInit {
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
