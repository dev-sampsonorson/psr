import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlockUiOverlayDirective } from './block-ui-overlay.directive';
import { BlockUiComponent } from './block-ui.component';
import { BlockUiDirective } from './block-ui.directive';



@NgModule({
    declarations: [
        BlockUiComponent,
        BlockUiDirective,
        BlockUiOverlayDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [BlockUiComponent, BlockUiDirective, BlockUiOverlayDirective]
})
export class BlockUiModule { }
