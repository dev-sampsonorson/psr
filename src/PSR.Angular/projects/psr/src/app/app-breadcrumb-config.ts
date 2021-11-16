import { Provider } from '@angular/core';
import { BREADCRUMB_CONFIG_TOKEN } from '@shared/breadcrumb/breadcrumb.service';

export const AppBreadcrumbConfigProvider: Provider = {
    provide: BREADCRUMB_CONFIG_TOKEN,
    useValue: []
}