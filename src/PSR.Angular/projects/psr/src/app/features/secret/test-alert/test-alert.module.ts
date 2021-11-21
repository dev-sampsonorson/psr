import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestAlertComponent } from './test-alert.component';



@NgModule({
    declarations: [
        TestAlertComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [TestAlertComponent]
})
export class TestAlertModule { }
