import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

import { ButtonIconModule } from '../button-icon/button-icon.component';
import { IconsModule } from '../icons/icons.module';
import { PageHeadingModule } from '../page-heading/page-heading.component';
import { SecondaryHeaderService } from './secondary-header.service';

@Component({
    selector: 'psr-ui-secondary-header',
    templateUrl: './secondary-header.component.html',
    styleUrls: ['./secondary-header.component.scss'],
})
export class SecondaryHeaderComponent implements OnInit {

    @Input() title: string = '';
    @Input() description: string = '';

    @Output() closeClick = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    onButtonClick(): void {
        this.closeClick.emit();
    }

}


@NgModule({
    declarations: [SecondaryHeaderComponent],
    imports: [ButtonIconModule, IconsModule, PageHeadingModule],
    providers: [SecondaryHeaderService],
    exports: [SecondaryHeaderComponent]
})
export class SecondaryHeaderModule { }
