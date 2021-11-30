import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorModule } from './error';
import { HttpLoadingInterceptor } from './http-loading.interceptor';
import { APP_CONFIG_TOKEN } from './tokens';
import { USER_STORAGE_KEY_TOKEN } from './tokens/user-storage-key.token';
import * as i0 from "@angular/core";
// import { ErrorModule } from './error';
export class CorelibModule {
    static withConfig(config) {
        return {
            ngModule: CorelibModule,
            providers: [
                { provide: APP_CONFIG_TOKEN, useValue: config },
            ]
        };
    }
}
CorelibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: CorelibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CorelibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: CorelibModule, imports: [CommonModule,
        HttpClientModule,
        ErrorModule], exports: [HttpClientModule,
        ErrorModule] });
CorelibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: CorelibModule, providers: [
        // { provide: APP_INITIALIZER, useFactory: authInitializer, multi: true, deps: [AuthService] },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // { provide: UrlSerializer, useClass: CustomUrlSerializer },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpLoadingInterceptor,
            multi: true,
        },
        { provide: USER_STORAGE_KEY_TOKEN, useValue: 'psr-userkey-tlxstgmzna' },
    ], imports: [[
            CommonModule,
            HttpClientModule,
            ErrorModule
        ], HttpClientModule,
        ErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: CorelibModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlbGliL3NyYy9saWIvY29yZWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFjLE1BQU0sVUFBVSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUV6RSx5Q0FBeUM7QUEyQnpDLE1BQU0sT0FBTyxhQUFhO0lBQ3RCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBa0I7UUFDaEMsT0FBTztZQUNILFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ2xEO1NBQ0osQ0FBQTtJQUNMLENBQUM7OzJHQVJRLGFBQWE7NEdBQWIsYUFBYSxZQXZCbEIsWUFBWTtRQUNaLGdCQUFnQjtRQUVoQixXQUFXLGFBY1gsZ0JBQWdCO1FBRWhCLFdBQVc7NEdBSU4sYUFBYSxhQWxCWDtRQUNQLCtGQUErRjtRQUMvRiwyRUFBMkU7UUFDM0UsNkRBQTZEO1FBQzdEO1lBQ0ksT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLEtBQUssRUFBRSxJQUFJO1NBQ2Q7UUFDRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUU7S0FDMUUsWUFoQlE7WUFDTCxZQUFZO1lBQ1osZ0JBQWdCO1lBRWhCLFdBQVc7U0FDZCxFQWFHLGdCQUFnQjtRQUVoQixXQUFXOzRGQUlOLGFBQWE7a0JBMUJ6QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixnQkFBZ0I7d0JBRWhCLFdBQVc7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLCtGQUErRjt3QkFDL0YsMkVBQTJFO3dCQUMzRSw2REFBNkQ7d0JBQzdEOzRCQUNJLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSxzQkFBc0I7NEJBQ2hDLEtBQUssRUFBRSxJQUFJO3lCQUNkO3dCQUNELEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRTtxQkFDMUU7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGdCQUFnQjt3QkFFaEIsV0FBVztxQkFDZDtvQkFDRCxlQUFlO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVycm9yTW9kdWxlIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBIdHRwTG9hZGluZ0ludGVyY2VwdG9yIH0gZnJvbSAnLi9odHRwLWxvYWRpbmcuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQVBQX0NPTkZJR19UT0tFTiwgSUFwcENvbmZpZyB9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7IFVTRVJfU1RPUkFHRV9LRVlfVE9LRU4gfSBmcm9tICcuL3Rva2Vucy91c2VyLXN0b3JhZ2Uta2V5LnRva2VuJztcblxuLy8gaW1wb3J0IHsgRXJyb3JNb2R1bGUgfSBmcm9tICcuL2Vycm9yJztcbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcblxuICAgICAgICBFcnJvck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC8vIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBhdXRoSW5pdGlhbGl6ZXIsIG11bHRpOiB0cnVlLCBkZXBzOiBbQXV0aFNlcnZpY2VdIH0sXG4gICAgICAgIC8vIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgICAvLyB7IHByb3ZpZGU6IFVybFNlcmlhbGl6ZXIsIHVzZUNsYXNzOiBDdXN0b21VcmxTZXJpYWxpemVyIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IEh0dHBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBVU0VSX1NUT1JBR0VfS0VZX1RPS0VOLCB1c2VWYWx1ZTogJ3Bzci11c2Vya2V5LXRseHN0Z216bmEnIH0sXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG5cbiAgICAgICAgRXJyb3JNb2R1bGVcbiAgICBdXG4gICAgLy8gRXJyb3JNb2R1bGUsXG59KVxuZXhwb3J0IGNsYXNzIENvcmVsaWJNb2R1bGUge1xuICAgIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogSUFwcENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29yZWxpYk1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IENvcmVsaWJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEFQUF9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==