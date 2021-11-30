import { Directive, NgModule, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appElementHost]'
})
export class ElementHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}

@NgModule({
    declarations: [ElementHostDirective],
    exports: [ElementHostDirective]
})
export class ElementHostModule { }
