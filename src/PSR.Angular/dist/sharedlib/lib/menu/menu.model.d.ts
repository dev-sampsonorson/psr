import { Type } from '@angular/core';
export declare class MenuItem<TParams = any> {
    name: string;
    label: string;
    command?: (this: MenuItem<TParams>) => void;
    routerLink: (params?: TParams) => (any[] | string);
    navigatable: boolean;
    isIconVisible?: boolean;
    iconComponent?: Type<any>;
    constructor(init: Partial<MenuItem<TParams>>);
}
