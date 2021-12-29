import { Type } from '@angular/core';

export class MenuItem<TParams = any> {
    name = '';
    label = '';
    // routerLink: any[] | string = [];
    navigatable = true;

    isIconVisible?: boolean = false;
    iconComponent?: Type<any>;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    command?: (this: MenuItem<TParams>) => void = () => { };
    routerLink: (params?: TParams) => (any[] | string) = () => [];

    constructor(init: Partial<MenuItem<TParams>>) {
        Object.assign(this, init);
    }
};
