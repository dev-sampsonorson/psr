import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

export class CustomUrlSerializer implements UrlSerializer {

    private _doubleSlashPattern: RegExp = /\/\//;

    parse(url: any): UrlTree {
        let dus = new DefaultUrlSerializer();
        // url = this.replaceDoubleSlash(url);
        return dus.parse(url);
    }
    serialize(tree: UrlTree): any {
        let dus = new DefaultUrlSerializer(),
            path = dus.serialize(tree);
        path = this.replaceDoubleSlash(path);
        // console.log('path', path);
        return path;
    }

    private replaceDoubleSlash(input: string): string {
        let inputString = input;
        if (this._doubleSlashPattern.test(inputString)) {
            inputString = inputString.replace(this._doubleSlashPattern, '/');
        }

        return inputString;
    }
}