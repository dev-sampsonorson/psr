import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

@Component({
    selector: 'psr-ui-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent implements OnInit {

    @Input() title: string = 'No item found';
    @Input() description: string = 'Get started by adding a new item';
    @Input() buttonLabel: string = 'Add New';

    @Output() addNewItem: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
    }

    onAddNewItem(): void {
        this.addNewItem.emit();
    }

}

@NgModule({
    declarations: [EmptyStateComponent],
    exports: [EmptyStateComponent]
})
export class EmptyStateModule { }
