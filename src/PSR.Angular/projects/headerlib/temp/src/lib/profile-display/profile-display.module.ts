import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileDisplayComponent } from './profile-display.component';



@NgModule({
    declarations: [ProfileDisplayComponent],
    imports: [
        CommonModule
    ],
    exports: [ProfileDisplayComponent]
})
export class ProfileDisplayModule { }
