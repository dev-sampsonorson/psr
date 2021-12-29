import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RatingFormComponent } from './rating-form.component';



@NgModule({
    declarations: [
        RatingFormComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [RatingFormComponent]
})
export class RatingFormModule { }
