import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { IndexComponent } from './index.component';



@NgModule({
    declarations: [IndexComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    exports: [IndexComponent]
})
export class IndexModule { }
