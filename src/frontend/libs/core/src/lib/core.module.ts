import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ErrorModule } from './error';
import { HttpLoadingInterceptor } from './http-loading.interceptor';
import { APP_CONFIG_TOKEN, IAppConfig } from './tokens';
import { USER_STORAGE_KEY_TOKEN } from './tokens/user-storage-key.token';

// import { ErrorModule } from './error';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    ErrorModule
  ],
  providers: [
    // { provide: APP_INITIALIZER, useFactory: authInitializer, multi: true, deps: [AuthService] },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: UrlSerializer, useClass: CustomUrlSerializer },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
    { provide: USER_STORAGE_KEY_TOKEN, useValue: 'psr-userkey-tlxstgmzna' },
  ],
  exports: [
    HttpClientModule,

    ErrorModule
  ]
  // ErrorModule,
})
export class CoreModule {
  static withConfig(config: IAppConfig): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: APP_CONFIG_TOKEN, useValue: config },
      ]
    }
  }
}
