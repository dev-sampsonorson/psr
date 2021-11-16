import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertModule } from './alert';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ButtonIconModule } from './button-icon/button-icon.component';
import { ContextMenuModule } from './context-menu/context-menu.module';
import { DisableControlModule } from './directives/disable-control.directive';
import { ElementHostModule } from './directives/element-host.directive';
import { TemplateHandleModule } from './directives/template-handle.directive';
import { DropdownMenuModule } from './dropdown-menu/dropdown-menu.module';
import { EmptyStateModule } from './empty-state/empty-state.component';
import { HeaderModule } from './header';
import { IconsModule } from './icons/icons.module';
import { PageHeadingLayoutModule } from './layouts/page-heading-layout/page-heading-layout.module';
import { TwoColumnLayoutModule } from './layouts/two-column/two-column-layout.module';
import { LinkIconModule } from './link-icon/link-icon.component';
import { LogoModule } from './logo';
import { PageHeadingModule } from './page-heading/page-heading.component';
import { ReadFieldModule } from './read-field/read-field.component';
import { SecondaryHeaderModule } from './secondary-header/secondary-header.component';



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
        HeaderModule,
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
        HeaderModule,
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
    ]
})
export class SharedModule { }
