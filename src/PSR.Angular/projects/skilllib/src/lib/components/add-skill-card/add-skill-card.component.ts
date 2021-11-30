import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ISkillCard } from '../../models';
import { SKILL_CARD_TOKEN } from '../skill-list-display/skill-card.token';

@Component({
    selector: 'skl-add-card',
    templateUrl: './add-skill-card.component.html',
    styleUrls: ['./add-skill-card.component.scss'],
    providers: [{ provide: SKILL_CARD_TOKEN, useExisting: AddSkillCardComponent }],
})
export class AddSkillCardComponent implements OnInit, ISkillCard {

    @Output() addSkillCardClick = new EventEmitter<void>();

    public blockCard: boolean = false;
    public blockable: boolean = false;
    public type: 'add' | 'overview' | 'personal' = 'add';

    constructor() { }

    ngOnInit(): void {
    }

    addSkillCardClickHandler(): void {
        this.addSkillCardClick.emit();
    }

    onFocus(): void {
        console.log('onFocus');
    }

}
