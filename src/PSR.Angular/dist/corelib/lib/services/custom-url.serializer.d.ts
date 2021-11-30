import { UrlSerializer, UrlTree } from '@angular/router';
export declare class CustomUrlSerializer implements UrlSerializer {
    private _doubleSlashPattern;
    parse(url: any): UrlTree;
    serialize(tree: UrlTree): any;
    private replaceDoubleSlash;
}
