import {
    AfterViewChecked,
    AfterViewInit,
    ApplicationRef,
    Compiler,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    TemplateRef,
    Type,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { IBlockableSkillCard, ISkill, ISkillCard } from '@features/skill-management/models/skill.model';
import { MenuItem } from '@shared/menu.model';

@Component({
    selector: 'app-skill-list-display',
    templateUrl: './skill-list-display.component.html',
    styleUrls: ['./skill-list-display.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListDisplayComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges, AfterViewChecked, DoCheck {

    @ViewChild('skillListContainer', { read: ViewContainerRef }) container: ViewContainerRef | undefined;
    @ViewChild('mask', { read: TemplateRef }) maskTemplateRef: TemplateRef<any> | undefined;
    // @ViewChild('skillListContainer') skillListContainerRef: any;

    @Input() skillAddCardType: Type<ISkillCard> | undefined;
    @Input() skillCardType: Type<ISkillCard> | undefined;
    @Input() menuItems: MenuItem<any>[] = [];
    @Input() skills: ISkill[] = [];
    @Input() showAddSkillCard: boolean = true;

    @Output() addSkillCardClick = new EventEmitter<void>();
    @Output() contextMenuItemEvent = new EventEmitter<{ skillId: string, menuName: string, card: ISkillCard }>();

    public componentRefs: ComponentRef<ISkillCard>[] = [];

    get isSkillsVisible() {
        return this.skills.length > 0;
    }

    constructor(
        private resolver: ComponentFactoryResolver,
        private app: ApplicationRef,
        private compiler: Compiler
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log('changes', changes);
        changes.skills && this.renderCards();
    }

    ngDoCheck(): void {
        // console.log('ngDoCheck', this.skills.length);
        // this.renderCards();
    }

    ngAfterViewChecked(): void {
        // console.log('ngAfterViewChecked');
        console.log('ngAfterViewChecked', this.skills.length);
        // this.componentRefs.forEach(ref => ref.changeDetectorRef.detectChanges());
        // this.renderCards();
    }

    ngOnInit(): void {
        // console.log('this.cardType', this.skillCardType);
        if (!this.skillCardType)
            throw new Error('Skill card type must be provided to skill list display component');
    }

    ngAfterViewInit(): void {
        this.renderCards();
    }

    renderCards(): void {
        if (this.showAddSkillCard && !this.skillAddCardType) return;
        if (!this.skillCardType) return;
        if (!this.container) return;

        this.container.clear();
        for (let i = 0; i < this.skills.length; i++) {
            const skill = this.skills[i];
            const componentFactory = this.resolver.resolveComponentFactory(this.skillCardType);
            const componentRef = componentFactory.create(this.container.injector, [], null, (componentFactory as any).ngModule);

            this.initSkillCard(
                componentRef,
                this.maskTemplateRef,
                this.menuItems,
                skill
            );

            this.componentRefs.push(componentRef);

            componentRef.changeDetectorRef.detectChanges();
            this.container.insert(componentRef.hostView);
        }
    }

    initSkillCard(componentRef: ComponentRef<ISkillCard>, maskTemplateRef: TemplateRef<any> | undefined, menuItems: MenuItem<any>[], skill: ISkill) {
        componentRef.instance.menuItems = menuItems;
        componentRef.instance.skill = skill;
        componentRef.instance.contextMenuItemEvent?.subscribe(e => {
            // console.log('blockCard', componentRef.instance.blockCard);
            // componentRef.instance.blockCard = !componentRef.instance.blockCard;
            this.onCardItemEvent(e);
            setTimeout(() => {
                // componentRef.changeDetectorRef.detectChanges();
                console.log('componentRef.changeDetectorRef.detectChanges()');
            }, 5000);
        });

        if (this.isBlockableSkillCard(componentRef.instance)) {
            let blockableComponentRef = componentRef.instance as IBlockableSkillCard;
            blockableComponentRef.maskTpl = maskTemplateRef;
            blockableComponentRef.targetElement = true;
            blockableComponentRef.autoZIndex = true;
            blockableComponentRef.baseZIndex = 0;
            blockableComponentRef.initView();
        }
    }

    isBlockableSkillCard(componentRef: any): componentRef is IBlockableSkillCard {
        const prototype = Object.getPrototypeOf(componentRef);
        // console.log(prototype);
        return 'initView' in prototype
            && 'ngOnDestroy' in prototype;
    }

    addSkillCardClickHandler(): void {
        this.addSkillCardClick.emit();
    }

    onCardItemEvent(e: { skillId: string, menuName: string, card: ISkillCard }): void {
        this.contextMenuItemEvent.emit(e);
    }

    ngOnDestroy(): void {
        this.componentRefs.forEach(ref => ref.destroy());
    }

}
