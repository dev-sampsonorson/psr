import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SkillCardContextMenuitemService } from '@features/skill-management/services/skill-card-context-menuitem.service';
import { BlockUiDirective } from '@shared/block-ui/block-ui.directive';
import { IBlockableUi } from '@shared/block-ui/block-ui.model';
import { IContextMenuItemClickEvent } from '@shared/context-menu/context-menu.model';
import { MenuItem } from '@shared/menu.model';
import { Observable, Subscription } from 'rxjs';

import { ISkill, ISkillCard } from '../../models/skill.model';
import { SKILL_CARD_TOKEN } from '../skill-list-display/skill-card.token';

@Component({
    selector: 'app-skill-card',
    templateUrl: './skill-card.component.html',
    styleUrls: ['./skill-card.component.scss'],
    providers: [{ provide: SKILL_CARD_TOKEN, useExisting: SkillCardComponent }],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillCardComponent implements OnInit, ISkillCard, IBlockableUi {
    @HostBinding('attr.xBlockui') blockUiDirective = new BlockUiDirective(this.el, this.renderer);

    // @ViewChild('blockUiOverlay', { read: ViewContainerRef }) blockUiOverlayContainerRef: ViewContainerRef | undefined;

    // @Output() contextMenuItemEvent = new EventEmitter<{ skillId: string, menuName: string, card: ISkillCard }>();
    @Input() skill: ISkill | undefined;
    @Input() menuItems: MenuItem<any>[] = [];

    private _blockCard: boolean = false;
    private _eventComplete$: Observable<{ skillId: string, menuName: string }>;
    private _eventCompleteSub: Subscription | undefined;

    // @Output() skillCardClick = new EventEmitter<ISkill>();

    public isContextMenuVisible: boolean = false;
    public contextMenuHandle: Symbol = Symbol('contextMenuHandle');
    public type: 'add' | 'overview' | 'personal' = 'overview';

    public set blockCard(value: boolean) {
        this._blockCard = value;
        // this.cdr.markForCheck();
        this.blockUiDirective.toggleBlockUi(value);
    }
    public get blockCard(): boolean {
        return this._blockCard;
    }

    constructor(
        private el: ElementRef,
        private router: Router,
        private renderer: Renderer2,
        private ctxMenuItem: SkillCardContextMenuitemService,
        // private zone: NgZone,
        // private cdr: ChangeDetectorRef
    ) {
        this._eventComplete$ = this.ctxMenuItem.onEventComplete$;
    }

    ngOnInit(): void { }

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
        this.isContextMenuVisible = !this.isContextMenuVisible;
    }

    onMenuItemClick({ menuItem, handle }: IContextMenuItemClickEvent) {
        const routerLink = menuItem.routerLink(this.skill?.id);

        if (menuItem.navigatable) {
            Array.isArray(routerLink)
                ? this.router.navigate(routerLink)
                : this.router.navigateByUrl(routerLink);
        } else {
            this.blockCard = true;
            this.skill && this.ctxMenuItem.start(this.skill.id, menuItem.name);
        }

        this._eventComplete$.subscribe(({ skillId, menuName }) => {
            if (this.skill && this.skill.id === skillId) {
                this.blockCard = false;
            }
        });

        this.isContextMenuVisible = false;
    }

    ngOnDestroy(): void {
        this.blockUiDirective.ngOnDestroy();
        this._eventCompleteSub?.unsubscribe();
    }
}
