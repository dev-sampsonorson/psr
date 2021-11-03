import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        LogoComponent,
        DropdownMenuComponent,
    ],
    exports: [
        LogoComponent,
        DropdownMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
