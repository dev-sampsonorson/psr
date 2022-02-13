import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RatingFormComponent } from './rating-form.component';



@NgModule({
    declarations: [
        RatingFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [RatingFormComponent]
})
export class RatingFormModule { }
