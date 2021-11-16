import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ISkillCategory } from '../../skill.model';

@Component({
    selector: 'app-skill-category-card',
    templateUrl: './skill-category-card.component.html',
    styleUrls: ['./skill-category-card.component.scss']
})
export class SkillCategoryCardComponent implements OnInit {

    @Input() category: ISkillCategory | undefined;
    @Output() onCardClick = new EventEmitter<ISkillCategory>();

    constructor() { }

    ngOnInit(): void {
    }

    onCardClickHandler(category: ISkillCategory): void {
        this.onCardClick.emit(category);
    }

}
