import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';



@NgModule({
    declarations: [BreadcrumbComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [BreadcrumbService],
    exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
