import { Component, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUiDirective, IBlockableUi, IContextMenuItemClickEvent, MenuItem } from '@psr/shared/ui';
import { ISkill } from '@psr/skill/data-access';
import { ISkillCard, SkillCardContextMenuitemService } from '@psr/skill/util';
import { Observable, Subscription } from 'rxjs';

import { SKILL_CARD_TOKEN } from '../skill-list-display/skill-card.token';

@Component({
    selector: 'psr-skl-card',
    templateUrl: './skill-card.component.html',
    styleUrls: ['./skill-card.component.scss'],
    providers: [{ provide: SKILL_CARD_TOKEN, useExisting: SkillCardComponent }],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillCardComponent implements ISkillCard, IBlockableUi {
    @HostBinding('attr.xBlockui') blockUiDirective = new BlockUiDirective(this.el, this.renderer);

    // @ViewChild('blockUiOverlay', { read: ViewContainerRef }) blockUiOverlayContainerRef: ViewContainerRef | undefined;

    // @Output() contextMenuItemEvent = new EventEmitter<{ skillId: string, menuName: string, card: ISkillCard }>();
    @Input() skill: ISkill | undefined;
    @Input() menuItems: MenuItem<any>[] = [];

    private _blockCard = false;
    private _eventComplete$: Observable<{ skillId: string, menuName: string }>;
    private _eventCompleteSub: Subscription | undefined;

    // @Output() skillCardClick = new EventEmitter<ISkill>();

    public isContextMenuVisible = false;
    public contextMenuHandle = Symbol('contextMenuHandle');
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