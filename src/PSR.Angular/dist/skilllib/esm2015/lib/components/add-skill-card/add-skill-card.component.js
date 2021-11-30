import { Component, EventEmitter, Output } from '@angular/core';
import { SKILL_CARD_TOKEN } from '../skill-list-display/skill-card.token';
import * as i0 from "@angular/core";
export class AddSkillCardComponent {
    constructor() {
        this.addSkillCardClick = new EventEmitter();
        this.blockCard = false;
        this.blockable = false;
        this.type = 'add';
    }
    ngOnInit() {
    }
    addSkillCardClickHandler() {
        this.addSkillCardClick.emit();
    }
    onFocus() {
        console.log('onFocus');
    }
}
AddSkillCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AddSkillCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AddSkillCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: AddSkillCardComponent, selector: "skl-add-card", outputs: { addSkillCardClick: "addSkillCardClick" }, providers: [{ provide: SKILL_CARD_TOKEN, useExisting: AddSkillCardComponent }], ngImport: i0, template: "<div tabindex=\"0\" (click)=\"addSkillCardClickHandler()\"\n     class=\"flex flex-col items-center justify-center h-full p-4 space-y-4 text-left text-indigo-500 bg-white border border-gray-100 rounded-lg shadow hover:border-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500\">\n    <svg class=\"w-16 h-16\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\n              d=\"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\"></path>\n    </svg>\n    <h3>Add New Skill</h3>\n</div>\n", styles: [":host{display:block;width:100%;min-height:190px;cursor:pointer}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: AddSkillCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-add-card',
                    templateUrl: './add-skill-card.component.html',
                    styleUrls: ['./add-skill-card.component.scss'],
                    providers: [{ provide: SKILL_CARD_TOKEN, useExisting: AddSkillCardComponent }],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { addSkillCardClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXNraWxsLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2tpbGxsaWIvc3JjL2xpYi9jb21wb25lbnRzL2FkZC1za2lsbC1jYXJkL2FkZC1za2lsbC1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbGliL3NyYy9saWIvY29tcG9uZW50cy9hZGQtc2tpbGwtY2FyZC9hZGQtc2tpbGwtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0FBUTFFLE1BQU0sT0FBTyxxQkFBcUI7SUFROUI7UUFOVSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWhELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixTQUFJLEdBQW9DLEtBQUssQ0FBQztJQUVyQyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsd0JBQXdCO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7bUhBbkJRLHFCQUFxQjt1R0FBckIscUJBQXFCLDRGQUZuQixDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLDBCQ1RsRix1cEJBUUE7NEZER2EscUJBQXFCO2tCQU5qQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixXQUFXLEVBQUUsaUNBQWlDO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyx1QkFBdUIsRUFBRSxDQUFDO2lCQUNqRjswRUFHYSxpQkFBaUI7c0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSVNraWxsQ2FyZCB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBTS0lMTF9DQVJEX1RPS0VOIH0gZnJvbSAnLi4vc2tpbGwtbGlzdC1kaXNwbGF5L3NraWxsLWNhcmQudG9rZW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NrbC1hZGQtY2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkZC1za2lsbC1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZGQtc2tpbGwtY2FyZC5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU0tJTExfQ0FSRF9UT0tFTiwgdXNlRXhpc3Rpbmc6IEFkZFNraWxsQ2FyZENvbXBvbmVudCB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkU2tpbGxDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJU2tpbGxDYXJkIHtcblxuICAgIEBPdXRwdXQoKSBhZGRTa2lsbENhcmRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIHB1YmxpYyBibG9ja0NhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgYmxvY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHR5cGU6ICdhZGQnIHwgJ292ZXJ2aWV3JyB8ICdwZXJzb25hbCcgPSAnYWRkJztcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBhZGRTa2lsbENhcmRDbGlja0hhbmRsZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkU2tpbGxDYXJkQ2xpY2suZW1pdCgpO1xuICAgIH1cblxuICAgIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkZvY3VzJyk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IHRhYmluZGV4PVwiMFwiIChjbGljayk9XCJhZGRTa2lsbENhcmRDbGlja0hhbmRsZXIoKVwiXG4gICAgIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHAtNCBzcGFjZS15LTQgdGV4dC1sZWZ0IHRleHQtaW5kaWdvLTUwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbGcgc2hhZG93IGhvdmVyOmJvcmRlci1ncmF5LTMwMCBmb2N1cy13aXRoaW46cmluZy0yIGZvY3VzLXdpdGhpbjpyaW5nLWluc2V0IGZvY3VzLXdpdGhpbjpyaW5nLWluZGlnby01MDBcIj5cbiAgICA8c3ZnIGNsYXNzPVwidy0xNiBoLTE2XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgZD1cIk0xMiA5djNtMCAwdjNtMC0zaDNtLTMgMEg5bTEyIDBhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCI+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICAgIDxoMz5BZGQgTmV3IFNraWxsPC9oMz5cbjwvZGl2PlxuIl19