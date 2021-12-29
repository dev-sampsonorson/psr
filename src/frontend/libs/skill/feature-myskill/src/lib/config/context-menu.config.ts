import { IconEyeComponent, MenuItem } from '@psr/shared/ui';

import { MySkillRoutes } from '../constants';


export const skillCardContextMenuConfig: MenuItem<any>[] = [
    new MenuItem<string>({
        name: 'myskill-details',
        label: 'Skill detail',
        routerLink: (skillId?: string) => (skillId && MySkillRoutes.ReadSkill(skillId)) || [],
        isIconVisible: true,
        iconComponent: IconEyeComponent
    }),
    new MenuItem<string>({
        name: 'myskill-rating',
        label: 'Rate skill',
        routerLink: (skillId?: string) => (skillId && MySkillRoutes.RateMyskill(skillId)) || [],
        isIconVisible: true,
        iconComponent: IconEyeComponent
    })
]




/*
new MenuItem<string>({
        name: 'skill-details',
        label: 'Skill detail',
        routerLink: (skillId?: string) => (skillId && SkillMgtRoutes.ReadSkill(skillId)) || [],
        isIconVisible: true,
        iconComponent: IconEyeComponent
    }),
*/
