import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
    template: ``
})
export class BaseIconComponent implements OnInit {
    iconClass: string = '';

    constructor(
        protected el: ElementRef,
        protected renderer: Renderer2
    ) { }

    ngOnChanges() {
        // console.log('ngOnChanges');

    }

    ngOnInit(): void {
        // console.log('ngOnInit');
        try {
            this.iconClass.match(/[^ ]+/g)?.forEach((match) => {
                if (match && match.trim())
                    this.renderer.addClass(this.el.nativeElement, match);
            });

            // if (this.iconClass.trim())
        } catch { }
    }

}
