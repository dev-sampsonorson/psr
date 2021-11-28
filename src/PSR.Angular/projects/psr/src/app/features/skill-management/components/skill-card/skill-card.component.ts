import {
    AfterViewChecked,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Output,
    Renderer2,
    TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { BlockUiDirective } from '@shared/block-ui/block-ui.directive';
import { IBlockableUi } from '@shared/block-ui/block-ui.model';
import { IContextMenuItemClickEvent } from '@shared/context-menu/context-menu.model';
import { MenuItem } from '@shared/menu.model';

import { IBlockableSkillCard, IBlockUiDirective, ISkill, ISkillCard } from '../../models/skill.model';

@Component({
    selector: 'app-skill-card',
    templateUrl: './skill-card.component.html',
    styleUrls: ['./skill-card.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillCardComponent implements OnInit, AfterViewChecked, ISkillCard, IBlockableUi, IBlockableSkillCard {
    @HostBinding('attr.xBlockui') blockUiDirective: IBlockUiDirective = new BlockUiDirective(this.el, this.renderer);

    // @ViewChild('blockUiOverlay', { read: ViewContainerRef }) blockUiOverlayContainerRef: ViewContainerRef | undefined;

    @Output() contextMenuItemEvent = new EventEmitter<{ skillId: string, menuName: string, card: ISkillCard }>();
    @Input() skill: ISkill | undefined;
    @Input() menuItems: MenuItem<any>[] = [];

    private _blockCard: boolean = false;

    // @Output() skillCardClick = new EventEmitter<ISkill>();

    public isContextMenuVisible: boolean = false;
    public contextMenuHandle: Symbol = Symbol('contextMenuHandle');

    public blockable: boolean = true;
    public type: 'add' | 'overview' | 'personal' = 'overview';

    public set blockCard(value: boolean) {
        this._blockCard = value;
        // this.cdr.markForCheck();
        this.blockUiDirective.toggleBlockUi(value);
    }
    public get blockCard(): boolean {
        return this._blockCard;
    }

    public set targetElement(value: boolean) {
        this.blockUiDirective.targetElement = value;
    }

    public set autoZIndex(value: boolean) {
        this.blockUiDirective.autoZIndex = value;
    }

    public set baseZIndex(value: number) {
        this.blockUiDirective.baseZIndex = value;
    }

    public set maskTpl(value: TemplateRef<any> | undefined) {
        this.blockUiDirective.maskTpl = value;
    }

    constructor(
        private el: ElementRef,
        private router: Router,
        private renderer: Renderer2,
        private cdr: ChangeDetectorRef
    ) { }
    ngAfterViewChecked(): void {
        // console.log('ngAfterViewChecked', this.skill);
    }

    ngOnInit(): void { }

    initView(): void {
        this.blockUiDirective.ngAfterViewInit();
    }

    getCategoryInfo(skill: ISkill): string {
        return `${skill.categoryName} / ${skill.subcategoryName}`;
    }

    @HostListener('document:keydown', ['$event'])
    onHandleEscape(e: KeyboardEvent) {
        if (e.key === 'Esc' || e.key === 'Escape') {
            if (this.isContextMenuVisible) this.isContextMenuVisible = false;
        }
    }

    onToggleContextMenu() {
        // console.log('onToggleContextMenu');
        this.isContextMenuVisible = !this.isContextMenuVisible;
    }

    onMoreClick() {
        console.log('More clicked');
    }

    onMenuItemClick({ menuItem, handle }: IContextMenuItemClickEvent) {
        const routerLink = menuItem.routerLink(this.skill?.id);
        Array.isArray(routerLink)
            ? this.router.navigate(routerLink)
            : this.router.navigateByUrl(routerLink);
        this.isContextMenuVisible = false;

        if (this.skill) {
            this.contextMenuItemEvent.emit({
                skillId: this.skill.id,
                menuName: menuItem.name,
                card: this
            });
        }
    }

    ngOnDestroy(): void {
        this.blockUiDirective.ngOnDestroy();
    }
}
