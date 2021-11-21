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
import { IconEyeComponent } from '@shared/icons/icon-eye.component';
import { IconPencilComponent } from '@shared/icons/icon-pencil.component';
import { IconTrashComponent } from '@shared/icons/icon-trash.component';
import { MenuItem } from '@shared/menu.model';

import { ISkill } from '../../models/skill.model';
import { SkillMgtRoutes } from '../../skill-mgt-constants';
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
    @Input() menuItems: MenuItem<any>[] = [
        new MenuItem<string>({
            name: 'skill-details',
            label: 'Skill detail',
            routerLink: (skillId?: string) => (skillId && SkillMgtRoutes.ReadSkill(skillId)) || [],
            isIconVisible: true,
            iconComponent: IconEyeComponent
        }),
        new MenuItem<string>({
            name: 'skill-edit',
            label: 'Edit skill',
            routerLink: (skillId?: string) => (skillId && SkillMgtRoutes.EditSkill(skillId)) || [],
            isIconVisible: true,
            iconComponent: IconPencilComponent
        }),
        new MenuItem<string>({
            name: 'skill-delete',
            label: 'Delete skill',
            routerLink: () => [],
            isIconVisible: true,
            iconComponent: IconTrashComponent
        })
    ];

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
