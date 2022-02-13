import { Component, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUiDirective, IBlockableUi, IContextMenuItemClickEvent, MenuItem } from '@psr/shared/ui';
import { ISkillRating } from '@psr/skill/data-access';
import { ISkillCard, SkillCardContextMenuitemService } from '@psr/skill/util';
import { Observable, Subscription } from 'rxjs';

// import { SKILL_CARD_TOKEN } from '../skill-list-display/skill-card.token';

@Component({
    selector: 'psr-skl-rating-card',
    templateUrl: './skill-rating-card.component.html',
    styleUrls: ['./skill-rating-card.component.scss'],
    //   providers: [{ provide: SKILL_CARD_TOKEN, useExisting: SkillRatingCardComponent }],
})
export class SkillRatingCardComponent implements ISkillCard, IBlockableUi {
    @HostBinding('attr.xBlockui') blockUiDirective = new BlockUiDirective(this.el, this.renderer);

    // @ViewChild('blockUiOverlay', { read: ViewContainerRef }) blockUiOverlayContainerRef: ViewContainerRef | undefined;

    // @Output() contextMenuItemEvent = new EventEmitter<{ skillId: string, menuName: string, card: ISkillCard }>();
    @Input() skillRating: ISkillRating | undefined;
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

    getCategoryInfo(skillRating: ISkillRating): string {
        return `${skillRating.categoryName} / ${skillRating.subcategoryName}`;
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
        const routerLink = menuItem.routerLink(this.skillRating?.skillId);

        if (menuItem.navigatable) {
            Array.isArray(routerLink)
                ? this.router.navigate(routerLink)
                : this.router.navigateByUrl(routerLink);
        } else {
            this.blockCard = true;
            this.skillRating && this.ctxMenuItem.start(this.skillRating.skillId, menuItem.name);
        }

        this._eventComplete$.subscribe(({ skillId, menuName }) => {
            if (this.skillRating && this.skillRating.skillId === skillId) {
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
