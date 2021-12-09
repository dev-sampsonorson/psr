import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TwoColumnLayoutComponent } from './two-column-layout.component';



@NgModule({
    declarations: [TwoColumnLayoutComponent],
    imports: [
        CommonModule
    ],
    exports: [TwoColumnLayoutComponent]
})
export class TwoColumnLayoutModule { }
