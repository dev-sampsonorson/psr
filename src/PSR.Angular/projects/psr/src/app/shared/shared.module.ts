import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageHeadingLayoutComponent } from './layouts/page-heading-layout.component';
import { TwoColumnLayoutComponent } from './layouts/two-column/two-column-layout.component';



@NgModule({
    declarations: [
        TwoColumnLayoutComponent,
        PageHeadingLayoutComponent
    ],
    exports: [
        CommonModule,

        TwoColumnLayoutComponent,
        PageHeadingLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
