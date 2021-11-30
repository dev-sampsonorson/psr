import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeadingLayoutComponent } from './page-heading-layout.component';



@NgModule({
    declarations: [PageHeadingLayoutComponent],
    imports: [
        CommonModule
    ],
    exports: [PageHeadingLayoutComponent]
})
export class PageHeadingLayoutModule { }
