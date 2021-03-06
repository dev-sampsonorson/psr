import { CommonModule } from '@angular/common';
import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    ContentChild,
    EventEmitter,
    Input,
    NgModule,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { IconTrashComponent } from '../icons/icon-trash.component';
import { MenuItem } from '../menu.model';

@Component({
    selector: 'app-link-icon',
    template: `
    <a (click)="onLinkClick()" class="flex items-center px-4 py-2 text-sm cursor-pointer" role="menuitem" tabindex="-1">
        <ng-container #container *ngIf="menuItem?.isIconVisible"></ng-container>
        <span class="truncate">{{menuItem?.label}}</span>
    </a>
  `,
    styles: [
        `
      :host {
        display: block;
      }
    `
    ]
})
export class LinkIconComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {

    @ViewChild('container', { read: ViewContainerRef }) iconViewContainerRef: ViewContainerRef | undefined;
    @ViewChild('tpl') tpl!: TemplateRef<any>;
    @ContentChild(IconTrashComponent) icon: IconTrashComponent | undefined;

    @Input() menuItem: MenuItem | undefined;
    @Input() iconClass: string = '';

    @Output() linkClick = new EventEmitter<MenuItem>();

    private _iconComponentRef: ComponentRef<any> | undefined;

    constructor(
        private resolver: ComponentFactoryResolver
    ) {
        // console.log('viewContainerRef', viewContainer);
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        // console.log('icon', this.icon);
    }

    ngAfterViewInit(): void {
        // console.log('this.iconHost', this.iconViewContainerRef);
        if (!this.menuItem || !this.menuItem.iconComponent)
            return;

        const componentFactory = this.resolver.resolveComponentFactory(this.menuItem.iconComponent);
        this._iconComponentRef = this.iconViewContainerRef?.createComponent(componentFactory);

        if (this._iconComponentRef) {
            this._iconComponentRef.instance.iconClass = this.iconClass;
            this._iconComponentRef?.changeDetectorRef.detectChanges();
        }

    }

    onLinkClick() {
        // this.menuItem?.command();
        this.linkClick.emit(this.menuItem);
    }
    ngOnDestroy(): void {
        this._iconComponentRef?.destroy();
    }

}


@NgModule({
    declarations: [LinkIconComponent],
    imports: [CommonModule],
    exports: [LinkIconComponent]
})
export class LinkIconModule { }