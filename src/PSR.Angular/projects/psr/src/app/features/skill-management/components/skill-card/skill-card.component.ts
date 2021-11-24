import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { IBlockableUi } from '@shared/block-ui/block-ui.model';
import { IContextMenuItemClickEvent } from '@shared/context-menu/context-menu.model';
import { MenuItem } from '@shared/menu.model';

import { ISkill } from '../../models/skill.model';
import { ISkillCard } from './skill-card.model';

@Component({
    selector: 'app-skill-card',
    templateUrl: './skill-card.component.html',
    styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit, ISkillCard, IBlockableUi {

    @ViewChild('blockUiOverlay', { read: ViewContainerRef }) blockUiOverlayContainerRef: ViewContainerRef | undefined;

    @Output() contextMenuItemEvent = new EventEmitter<{ skillId: string, menuName: string, card: ISkillCard }>();
    @Input() skill: ISkill | undefined;
    @Input() menuItems: MenuItem<any>[] = [];

    // @Output() skillCardClick = new EventEmitter<ISkill>();

    public isContextMenuVisible: boolean = false;
    public blockCard: boolean = false;
    public contextMenuHandle: Symbol = Symbol('contextMenuHandle');

    constructor(
        private el: ElementRef,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    getCategoryInfo(skill: ISkill): string {
        return `${skill.categoryName} / ${skill.subcategoryName}`;
    }

    /* skillCardClickHandler(skill: ISkill): void {
        this.skillCardClick.emit(skill);
    } */

    @HostListener('document:keydown', ['$event'])
    onHandleEscape(e: KeyboardEvent) {
        if (e.key === 'Esc' || e.key === 'Escape') {
            if (this.isContextMenuVisible) this.isContextMenuVisible = false;
        }
    }

    onToggleContextMenu() {
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

        /* if (this.skill)
            this.blockUi = true; */

        /* setTimeout(() => {
            if (this.skill)
                this.skill.deleting = false;
        }, 300000); */
    }

    getBlockableElement(): HTMLElement {
        return this.el.nativeElement; //.children[0];
    }

}
