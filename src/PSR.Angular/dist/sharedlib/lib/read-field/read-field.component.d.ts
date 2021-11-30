import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class ReadFieldComponent {
    fieldLabel: string | undefined;
    fieldValue: any | undefined;
    get isFieldVisible(): boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ReadFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReadFieldComponent, "app-read-field", never, { "fieldLabel": "fieldLabel"; "fieldValue": "fieldValue"; }, {}, never, never>;
}
export declare class ReadFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ReadFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ReadFieldModule, [typeof ReadFieldComponent], [typeof i1.CommonModule], [typeof ReadFieldComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ReadFieldModule>;
}
