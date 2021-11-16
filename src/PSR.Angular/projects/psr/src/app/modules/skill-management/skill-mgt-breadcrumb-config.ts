import { Provider } from '@angular/core';
import { BREADCRUMB_CONFIG_TOKEN } from '@shared/breadcrumb/breadcrumb.service';

export const skillMgtBreadcrumbConfigProvider: Provider = {
    provide: BREADCRUMB_CONFIG_TOKEN,
    useValue: [
        {
            name: "categories",
            label: "Categories",
            path: '/skills/categories',
            route: ["/skills", { outlets: { primary: 'categories', details: null } }],
            newRoute: '/skills/categories'
        },
        {
            name: "subcategories",
            label: "Sub categories",
            path: '/skills/subcategories',
            route: ["/skills", { outlets: { primary: 'subcategories', details: null } }],
            newRoute: '/skills/categories/:categoryId/subcategories'
        },
        {
            name: "list",
            label: "Skills",
            path: '/skills/list',
            route: ["/skills", { outlets: { primary: 'list', details: null } }],
            newRoute: '/skills/categories/:categoryId/subcategories/:subcategoryId/list'
        },
    ]
}