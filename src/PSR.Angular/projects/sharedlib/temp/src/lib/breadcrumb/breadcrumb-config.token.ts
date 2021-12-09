import { InjectionToken } from '@angular/core';

import { IBreadcrumb } from './breadcrumb.model';

export const BREADCRUMB_CONFIG_TOKEN = new InjectionToken<IBreadcrumb[]>("BREADCRUMB_CONFIG_TOKEN");