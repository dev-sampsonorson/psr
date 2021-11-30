import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
    selector: 'app-read-field',
    template: `
    <ng-container *ngIf="isFieldVisible">
        <div class="text-sm font-medium text-indigo-900">{{ fieldLabel }}</div>
        <div class="mt-1 text-sm text-indigo-900">{{ fieldValue }}</div>
    </ng-container>
  `,
    styles: [
        `
      :host {
        display: block;
      }
    `
    ]
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
