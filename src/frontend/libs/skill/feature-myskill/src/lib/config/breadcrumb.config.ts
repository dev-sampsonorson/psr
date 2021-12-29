import { IBreadcrumb } from '@psr/shared/ui';


export const breadcrumbConfig: IBreadcrumb[] = [
    {
        name: "categories",
        label: "Categories",
        path: '/my-skills/categories',
        newRoute: '/my-skills/categories'
    },
    {
        name: "subcategories",
        label: "Sub categories",
        path: '/my-skills/subcategories',
        newRoute: '/my-skills/categories/:categoryId/subcategories'
    },
    {
        name: "list",
        label: "Skills",
        path: '/my-skills/list',
        newRoute: '/my-skills/categories/:categoryId/subcategories/:subcategoryId/list'
    },
]
