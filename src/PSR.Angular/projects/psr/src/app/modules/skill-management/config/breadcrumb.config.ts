import { IBreadcrumb } from '@shared/breadcrumb/breadcrumb.model';

export const breadcrumbConfig: IBreadcrumb[] = [
    {
        name: "categories",
        label: "Categories",
        path: '/skills/categories',
        newRoute: '/skills/categories'
    },
    {
        name: "subcategories",
        label: "Sub categories",
        path: '/skills/subcategories',
        newRoute: '/skills/categories/:categoryId/subcategories'
    },
    {
        name: "list",
        label: "Skills",
        path: '/skills/list',
        newRoute: '/skills/categories/:categoryId/subcategories/:subcategoryId/list'
    },
]