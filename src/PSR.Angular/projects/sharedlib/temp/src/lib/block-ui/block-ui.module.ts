import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlockUiDirective } from './block-ui.directive';



@NgModule({
    declarations: [
        BlockUiDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [BlockUiDirective]
})
export class BlockUiModule { }
