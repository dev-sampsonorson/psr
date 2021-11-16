import { Type } from '@angular/core';

export class MenuItem<TParams = any> {
    name: string = '';
    label: string = '';
    command?: (this: MenuItem<TParams>) => void = () => { };
    // routerLink: any[] | string = [];
    routerLink: (params?: TParams) => (any[] | string) = () => [];

    isIconVisible?: boolean = false;
    iconComponent?: Type<any>;

    constructor(init: MenuItem<TParams>) {
        Object.assign(this, init);
    }
};