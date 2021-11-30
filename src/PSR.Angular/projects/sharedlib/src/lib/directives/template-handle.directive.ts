import { Directive, NgModule, TemplateRef } from '@angular/core';


@Directive({
    selector: '[appTemplateHandle]'
})
export class TemplateHandleDirective {
    constructor(public templateRef: TemplateRef<any>) { }
}

@NgModule({
    declarations: [TemplateHandleDirective],
    exports: [TemplateHandleDirective]
})
export class TemplateHandleModule { }