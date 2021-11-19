import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBlockUiOverlay]',
    exportAs: 'appBlockUiOverlay'
})
export class BlockUiOverlayDirective {

    constructor(public el: ElementRef) { }

}
