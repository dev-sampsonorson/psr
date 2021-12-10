import { AfterContentInit, Component, ContentChildren, Input, OnDestroy, OnInit, QueryList } from '@angular/core';

import { ISkillCard } from '../../models';
import { SKILL_CARD_TOKEN } from './skill-card.token';

@Component({
    selector: 'psr-skl-list-display',
    templateUrl: './skill-list-display.component.html',
    styleUrls: ['./skill-list-display.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListDisplayComponent implements OnInit, OnDestroy, AfterContentInit {
    @ContentChildren(SKILL_CARD_TOKEN) cards: QueryList<ISkillCard> | undefined;
    @Input() isAddSkillCardVisible: boolean = false;
    @Input() isSkillsVisible: boolean = false;

    constructor() { }

    ngOnInit(): void {

    }

    ngAfterContentInit(): void {
        // console.log('this.cards', this.cards?.toArray());
    }

    /* isBlockableSkillCard(componentRef: any): componentRef is IBlockableSkillCard {
        const prototype = Object.getPrototypeOf(componentRef);
        // console.log(prototype);
        return 'initView' in prototype
            && 'ngOnDestroy' in prototype;
    } */

    ngOnDestroy(): void {

    }

}
