import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
    selector: 'app-read-field',
    templateUrl: './read-field.component.html',
    styleUrls: ['./read-field.component.scss'],
})
export class ReadFieldComponent {

    @Input() fieldLabel: string | undefined;
    @Input() fieldValue: any | undefined;

    get isFieldVisible(): boolean {
        return this.fieldLabel && this.fieldValue;
    }

    constructor() { }
}

@NgModule({
    declarations: [ReadFieldComponent],
    imports: [CommonModule],
    exports: [ReadFieldComponent]
})
export class ReadFieldModule { }
