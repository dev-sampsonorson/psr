export interface IBreadcrumb {
    name: string;
    label: string;
    path: string | any[];
    route?: string;
    newRoute: string;
}
