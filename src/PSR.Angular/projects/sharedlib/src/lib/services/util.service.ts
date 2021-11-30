import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

    constructor() { }

    public isString(value: any): boolean {
        return typeof value === 'string';
    }
}
