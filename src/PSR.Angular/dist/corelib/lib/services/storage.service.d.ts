import * as i0 from "@angular/core";
export declare class StorageService {
    private storage;
    constructor();
    saveItem<T>(key: string, item: T): void;
    getItem(key: string): any;
    removeItem(key: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StorageService>;
}
