import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HamburgerComponent } from './hamburger.component';



@NgModule({
    declarations: [HamburgerComponent],
    imports: [
        CommonModule
    ],
    exports: [HamburgerComponent]
})
export class HamburgerModule { }
