import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getRootUrl() {
    return document.getElementsByTagName('base')[0].href;
}

const providers = [
    { provide: 'ROOT_URL', useFactory: getRootUrl, deps: [] }
];

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
    .catch(err => console.error(err));
