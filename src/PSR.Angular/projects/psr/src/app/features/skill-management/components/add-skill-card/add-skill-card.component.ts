import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISkillCard } from '@features/skill-management/models/skill.model';

@Component({
    selector: 'app-add-skill-card',
    templateUrl: './add-skill-card.component.html',
    styleUrls: ['./add-skill-card.component.scss']
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
