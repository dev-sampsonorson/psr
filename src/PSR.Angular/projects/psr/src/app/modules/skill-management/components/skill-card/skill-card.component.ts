import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IconEyeComponent } from '@shared/icons/icon-eye.component';
import { IconPencilComponent } from '@shared/icons/icon-pencil.component';
import { IconTrashComponent } from '@shared/icons/icon-trash.component';
import { MenuItem } from '@shared/menu.model';

import { SkillMgtRoutes } from '../../skill-mgt-constants';
import { ISkill } from '../../skill.model';

@Component({
    selector: 'app-skill-card',
    templateUrl: './skill-card.component.html',
    styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

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

    @Output() skillCardClick = new EventEmitter<ISkill>();

    isContextMenuVisible: boolean = false;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    getCategoryInfo(skill: ISkill): string {
        return `${skill.categoryName} / ${skill.subCategoryName}`;
    }

    skillCardClickHandler(skill: ISkill): void {
        this.skillCardClick.emit(skill);
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

    onMoreClick() {
        console.log('More clicked');
    }

    onMenuItemClick(menuItem: MenuItem) {
        const routerLink = menuItem.routerLink(this.skill?.id);
        Array.isArray(routerLink)
            ? this.router.navigate(routerLink)
            : this.router.navigateByUrl(routerLink);
        this.isContextMenuVisible = false;
    }

}
