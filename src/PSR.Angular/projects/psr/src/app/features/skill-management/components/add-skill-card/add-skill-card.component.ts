import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-add-skill-card',
    templateUrl: './add-skill-card.component.html',
    styleUrls: ['./add-skill-card.component.scss']
})
export class AddSkillCardComponent implements OnInit {

    @Output() addSkillCardClick = new EventEmitter<void>();

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
