import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent, AlertContainerComponent, AlertHostDirective } from '@widgets/alert';



@NgModule({
    declarations: [AlertContainerComponent, AlertComponent, AlertHostDirective],
    imports: [CommonModule],
    exports: [AlertContainerComponent],
    providers: [AlertModule]
})
export class AlertModule { }
