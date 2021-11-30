import * as i0 from "@angular/core";
export declare class PageTitleService {
    private _pageTitle$;
    private _pageSubTitle$;
    get pageTitle$(): import("rxjs").Observable<string>;
    get pageSubTitle$(): import("rxjs").Observable<string>;
    updatePageTitle(title: string): void;
    updatePageSubTitle(title: string): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PageTitleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PageTitleService>;
}
