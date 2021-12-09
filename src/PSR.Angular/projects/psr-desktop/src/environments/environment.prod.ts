import { IEnvironment } from './environment.interface';

const _apiHost = 'localhost';
const _apiPort = 4455;
const _version = "v1";
const _apiUrl = `http://${_apiHost}:${_apiPort}/api/${_version}/`;

export const environment: IEnvironment = {
    production: true,
    enableDebugTools: true,
    logLevel: 'debug',
    apiUrl: _apiUrl,
    alertOptions: {
        autoClose: false,
        timeToClose: 10
    }
};