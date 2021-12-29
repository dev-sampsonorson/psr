import { InjectionToken } from '@angular/core';

import { IPageTitle } from '../models';

export const PAGE_TITLE_TOKEN: InjectionToken<IPageTitle> = new InjectionToken<IPageTitle>("PAGE_TITLE_TOKEN", {
    providedIn: undefined,
    factory: () => {
        return {
            title: '[Empty title]',
            description: '[Empty description]'
        };
    }
});
