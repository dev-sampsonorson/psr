import { InjectionToken } from '@angular/core';

import { IAlertOptions } from '../alert.model';


export const ALERT_CONFIG_TOKEN = new InjectionToken<IAlertOptions>('ALERT_CONFIG');