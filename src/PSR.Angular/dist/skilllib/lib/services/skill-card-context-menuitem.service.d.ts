import * as i0 from "@angular/core";
export declare class SkillCardContextMenuitemService {
    private _eventStartSubject;
    private _eventCompleteSubject;
    get onEventStart$(): import("rxjs").Observable<{
        skillId: string;
        menuName: string;
    }>;
    get onEventComplete$(): import("rxjs").Observable<{
        skillId: string;
        menuName: string;
    }>;
    start(skillId: string, menuName: string): void;
    complete(skillId: string, menuName: string): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SkillCardContextMenuitemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SkillCardContextMenuitemService>;
}
