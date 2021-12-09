import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DropdownMenuComponent } from './dropdown-menu.component';

@NgModule({
    declarations: [DropdownMenuComponent],
    imports: [CommonModule, RouterModule],
    exports: [DropdownMenuComponent]
})
export class DropdownMenuModule { }
