import { AfterContentInit, Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button-icon',
    templateUrl: './button-icon.component.html',
    styleUrls: ['./button-icon.component.scss']
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
