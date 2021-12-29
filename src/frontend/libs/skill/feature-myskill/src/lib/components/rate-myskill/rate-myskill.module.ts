import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RatingFormModule } from '../rating-form';
import { RateMyskillComponent } from './rate-myskill.component';



@NgModule({
    declarations: [
        RateMyskillComponent
    ],
    imports: [
        CommonModule,
        RatingFormModule
    ]
})
export class RateMyskillModule { }
