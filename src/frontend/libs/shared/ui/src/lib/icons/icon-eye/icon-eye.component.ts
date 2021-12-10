import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { BaseIconComponent } from '../base-icon/base-icon.component';

@Component({
    selector: 'psr-ui-icon-eye',
    templateUrl: './icon-eye.component.html',
    styleUrls: ['./icon-eye.component.scss'],
})
export class IconEyeComponent extends BaseIconComponent implements OnInit {
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
