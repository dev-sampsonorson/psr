import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule, PageHeadingModule, TwoColumnLayoutModule } from '@psr/shared/ui';

import { IndexComponent } from './index.component';



@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        TwoColumnLayoutModule,
        PageHeadingModule,
        BreadcrumbModule
    ]
})
export class IndexModule { }
