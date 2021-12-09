import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LinkIconModule } from '../link-icon/link-icon.component';
import { ContextMenuComponent } from './context-menu.component';



@NgModule({
    declarations: [
        ContextMenuComponent
    ],
    imports: [CommonModule, LinkIconModule],
    exports: [ContextMenuComponent]
})
export class ContextMenuModule { }
