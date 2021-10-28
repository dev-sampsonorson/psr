// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnvironment } from "./environment.interface";

const _apiHost = 'localhost';
const _apiPort = 4455;
const _version = "v1";
const _apiUrl = `http://${_apiHost}:${_apiPort}/api/${_version}/`

export const environment: IEnvironment = {
    production: false,
    enableDebugTools: true,
    logLevel: 'debug',
    apiUrl: _apiUrl,
    alertOptions: {
        autoClose: false,
        timeToClose: 10
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
