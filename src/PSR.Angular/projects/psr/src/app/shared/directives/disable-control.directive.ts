import { Directive, Input, NgModule, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[disableControl]'
})
export class DisableControlDirective implements OnInit {

    disabled: boolean | undefined;

    @Input() set disableControl(condition: boolean) {
        if (this.disabled !== undefined) {
            this.toggleControl(condition);
        }
        this.disabled = condition;
    }

    constructor(private ngControl: NgControl) { }

    ngOnInit() {
        this.toggleControl(this.disabled ?? false);
    }

    toggleControl(condition: boolean) {
        const action = condition ? 'disable' : 'enable';
        if (this.ngControl.control) {
            this.ngControl.control[action]();
        }
    }

}

@NgModule({
    declarations: [DisableControlDirective],
    exports: [DisableControlDirective]
})
export class DisableControlModule { }