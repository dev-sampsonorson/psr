import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IEnvironment } from './environment.interface';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService implements IEnvironment {
    get production() {
        return environment.production;
    }

    get enableDebugTools() {
        return environment.enableDebugTools;
    }

    get logLevel() {
        return environment.logLevel;
    }

    get apiUrl() {
        return environment.apiUrl;
    }

    constructor() { }
}