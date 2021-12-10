import { IEnvironment } from './environment.interface';

const _baseApiEndpoint = `/api/v1/`;

export const environment: IEnvironment = {
    production: false,
    enableDebugTools: true,
    logLevel: 'debug',
    baseApiEndpoint: _baseApiEndpoint,
    alertOptions: {
        autoClose: false,
        timeToClose: 10
    }
};
