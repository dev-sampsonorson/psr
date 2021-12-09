import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertModule } from './alert';
import { BreadcrumbModule } from './breadcrumb';
import { ButtonIconModule } from './button-icon';
import { ContextMenuModule } from './context-menu';
import { DisableControlModule, ElementHostModule, TemplateHandleModule } from './directives';
import { DropdownMenuModule } from './dropdown-menu';
import { EmptyStateModule } from './empty-state';
import { IconsModule } from './icons';
import { PageHeadingLayoutModule, TwoColumnLayoutModule } from './layouts';
import { LinkIconModule } from './link-icon';
import { LogoModule } from './logo';
import { PageHeadingModule } from './page-heading';
import { ReadFieldModule } from './read-field';
import { SecondaryHeaderModule } from './secondary-header';
import { UtilService } from './services';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,

        AlertModule,
        BreadcrumbModule,
        ButtonIconModule,
        ContextMenuModule,
        DropdownMenuModule,
        EmptyStateModule,
        IconsModule,
        PageHeadingLayoutModule,
        TwoColumnLayoutModule,
        LinkIconModule,
        LogoModule,
        PageHeadingModule,
        ReadFieldModule,
        SecondaryHeaderModule,

        DisableControlModule,
        ElementHostModule,
        TemplateHandleModule
    ],
    exports: [
        CommonModule,

        AlertModule,
        BreadcrumbModule,
        ButtonIconModule,
        ContextMenuModule,
        DropdownMenuModule,
        EmptyStateModule,
        IconsModule,
        PageHeadingLayoutModule,
        TwoColumnLayoutModule,
        LinkIconModule,
        LogoModule,
        PageHeadingModule,
        ReadFieldModule,
        SecondaryHeaderModule,

        DisableControlModule,
        ElementHostModule,
        TemplateHandleModule
    ],
    providers: [
        UtilService
    ]
})
export class SharedlibModule { }
