import { IconEyeComponent } from '@shared/icons/icon-eye.component';
import { IconPencilComponent } from '@shared/icons/icon-pencil.component';
import { IconTrashComponent } from '@shared/icons/icon-trash.component';
import { MenuItem } from '@shared/menu.model';

import { SkillMgtRoutes } from '../skill-mgt-constants';


export const skillCardContextMenuConfig: MenuItem<any>[] = [
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
]