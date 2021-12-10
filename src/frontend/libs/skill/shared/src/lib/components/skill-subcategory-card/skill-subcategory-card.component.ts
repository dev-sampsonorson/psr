import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ISkillSubCategory } from '../../models/skill.model';

@Component({
    selector: 'psr-skl-subcategory-card',
    templateUrl: './skill-subcategory-card.component.html',
    styleUrls: ['./skill-subcategory-card.component.scss']
})
export class SkillSubcategoryCardComponent implements OnInit {

    @Input() subcategory: ISkillSubCategory | undefined;
    @Output() onCardClick = new EventEmitter<ISkillSubCategory>();

    constructor() { }

    ngOnInit(): void {
    }

    onCardClickHandler(subcategory: ISkillSubCategory): void {
        this.onCardClick.emit(subcategory);
    }
}
