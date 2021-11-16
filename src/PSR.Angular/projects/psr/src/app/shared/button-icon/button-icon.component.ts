import { AfterContentInit, Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button-icon',
    template: `
        <!-- text-indigo-800  rounded-md hover:text-indigo-900 focus:text-indigo-900 -->
        <button (click)="onClick($event)" type="button" class="bg-transparent">
            <span class="sr-only">{{ ariaLabel }}</span>
            <ng-content></ng-content>
            <!-- <ng-template [ngTemplateOutlet]="outlet"></ng-template> -->
        </button>
  `,
    styles: [
        `
      :host {
        @apply flex items-center h-7 outline-none;
      }
    `
    ]
})
export class ButtonIconComponent implements OnInit, AfterContentInit {

    @Input() ariaLabel: string = '';
    @Output() buttonClick = new EventEmitter();

    // @ContentChild(IconCloseComponent) icon!: IconCloseComponent;

    ngOnInit(): void { }

    ngAfterContentInit(): void {
        /* if (!(this.icon instanceof IconCloseComponent))
            console.error('Invalid component projected in ButtonIcon component'); */
    }

    onClick(e: any) {
        this.buttonClick.emit();
    }
}

@NgModule({
    declarations: [ButtonIconComponent],
    exports: [ButtonIconComponent]
})
export class ButtonIconModule { }
