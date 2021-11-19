import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: '[app-block-ui]',
    template: `
        <div #mask class="ui-blockui ui-widget-overlay" [ngClass]="{'ui-blockui-document':!target}" [ngStyle]="{display: blocked ? 'block' : 'none'}">
            <!-- <ng-content></ng-content> -->
        </div>
  `,
    styles: [
        `
      :host { }

      .ui-blockui {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      }

      .ui-blockui-document {
          position: fixed;
      }

      .ui-widget-overlay {
          border-radius: var(--eui-blockui-overlay-border-radius);
      }
    `
    ]
})
export class BlockUiComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() target: any;
    @Input() autoZIndex: boolean = true;
    @Input() baseZIndex: number = 0;
    @ViewChild('mask', { static: false }) mask: ElementRef | undefined;

    private _blocked: boolean = false;

    @Input() get blocked(): boolean {
        return this._blocked;
    }

    set blocked(val: boolean) {
        this._blocked = val;

        if (this.mask && this.mask.nativeElement) {
            if (this._blocked)
                this.block();
            else
                this.unblock();
        }
    }

    constructor(public el: ElementRef) { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        console.log('this.target', this.target);
        if (this.target && !this.target.getBlockableElement) {
            throw 'Target of BlockUI must implement IBlockableUi interface';
        }
    }

    block() {
        if (this.target) {
            this.target.getBlockableElement().appendChild(this.mask?.nativeElement);
            let style = this.target.style || {};
            style.position = 'relative';
            this.target.style = style;
        }
        else {
            document.body.appendChild(this.mask?.nativeElement);
        }

        if (this.autoZIndex && this.mask) {
            this.mask.nativeElement.style.zIndex = String(this.baseZIndex + 1000); //(++DomHandler.zindex)
        }
    }

    unblock() {
        this.el.nativeElement.appendChild(this.mask?.nativeElement);
    }

    ngOnDestroy() {
        this.unblock();
    }

}
