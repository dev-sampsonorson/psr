import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@sharedlib";
import * as i3 from "@angular/common";
export class SkillReadComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Skill Information';
        this.description = 'Detils of the skill.';
    }
    ngOnInit() {
        this.route.data.subscribe(({ skill }) => {
            this.skill = skill;
        });
    }
    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
}
SkillReadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillReadComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
SkillReadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillReadComponent, selector: "skl-read", ngImport: i0, template: "<app-secondary-header [title]=\"title\" [description]=\"description\" (closeClick)=\"onCloseClick()\"></app-secondary-header>\n<ng-container *ngIf=\"skill\">\n    <div class=\"flex flex-col py-5 space-y-6\">\n        <app-read-field [fieldLabel]=\"'Skill name'\" [fieldValue]=\"skill.name\"></app-read-field>\n        <app-read-field [fieldLabel]=\"'Category'\" [fieldValue]=\"skill.categoryName\"></app-read-field>\n        <app-read-field [fieldLabel]=\"'Sub category'\" [fieldValue]=\"skill.subcategoryName\"></app-read-field>\n        <app-read-field [fieldLabel]=\"'Employees'\" [fieldValue]=\"skill.employees\"></app-read-field>\n        <app-read-field [fieldLabel]=\"'Team competency'\" [fieldValue]=\"skill.teamCompetency\"></app-read-field>\n    </div>\n</ng-container>\n", styles: [":host{display:block}\n"], components: [{ type: i2.SecondaryHeaderComponent, selector: "app-secondary-header", inputs: ["title", "description"], outputs: ["closeClick"] }, { type: i2.ReadFieldComponent, selector: "app-read-field", inputs: ["fieldLabel", "fieldValue"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillReadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'skl-read',
                    templateUrl: './skill-read.component.html',
                    styleUrls: ['./skill-read.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtcmVhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtcmVhZC9za2lsbC1yZWFkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1yZWFkL3NraWxsLXJlYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFVbEQsTUFBTSxPQUFPLGtCQUFrQjtJQU8zQixZQUNZLEtBQXFCLEVBQ3JCLE1BQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTDFCLFVBQUssR0FBVyxtQkFBbUIsQ0FBQztRQUNwQyxnQkFBVyxHQUFXLHNCQUFzQixDQUFDO0lBS3pDLENBQUM7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnSEFwQlEsa0JBQWtCO29HQUFsQixrQkFBa0IsZ0RDVi9CLCt3QkFVQTs0RkRBYSxrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFdBQVcsRUFBRSw2QkFBNkI7b0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSVNraWxsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NraWxsLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdza2wtcmVhZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NraWxsLXJlYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NraWxsLXJlYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbFJlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc2tpbGw6IElTa2lsbCB8IHVuZGVmaW5lZDtcblxuICAgIHRpdGxlOiBzdHJpbmcgPSAnU2tpbGwgSW5mb3JtYXRpb24nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnRGV0aWxzIG9mIHRoZSBza2lsbC4nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKCh7IHNraWxsIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2tpbGwgPSBza2lsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9za2lsbHMnLCB7IG91dGxldHM6IHsgZGV0YWlsczogbnVsbCB9IH1dKTtcbiAgICB9XG59XG4iLCI8YXBwLXNlY29uZGFyeS1oZWFkZXIgW3RpdGxlXT1cInRpdGxlXCIgW2Rlc2NyaXB0aW9uXT1cImRlc2NyaXB0aW9uXCIgKGNsb3NlQ2xpY2spPVwib25DbG9zZUNsaWNrKClcIj48L2FwcC1zZWNvbmRhcnktaGVhZGVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInNraWxsXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgcHktNSBzcGFjZS15LTZcIj5cbiAgICAgICAgPGFwcC1yZWFkLWZpZWxkIFtmaWVsZExhYmVsXT1cIidTa2lsbCBuYW1lJ1wiIFtmaWVsZFZhbHVlXT1cInNraWxsLm5hbWVcIj48L2FwcC1yZWFkLWZpZWxkPlxuICAgICAgICA8YXBwLXJlYWQtZmllbGQgW2ZpZWxkTGFiZWxdPVwiJ0NhdGVnb3J5J1wiIFtmaWVsZFZhbHVlXT1cInNraWxsLmNhdGVnb3J5TmFtZVwiPjwvYXBwLXJlYWQtZmllbGQ+XG4gICAgICAgIDxhcHAtcmVhZC1maWVsZCBbZmllbGRMYWJlbF09XCInU3ViIGNhdGVnb3J5J1wiIFtmaWVsZFZhbHVlXT1cInNraWxsLnN1YmNhdGVnb3J5TmFtZVwiPjwvYXBwLXJlYWQtZmllbGQ+XG4gICAgICAgIDxhcHAtcmVhZC1maWVsZCBbZmllbGRMYWJlbF09XCInRW1wbG95ZWVzJ1wiIFtmaWVsZFZhbHVlXT1cInNraWxsLmVtcGxveWVlc1wiPjwvYXBwLXJlYWQtZmllbGQ+XG4gICAgICAgIDxhcHAtcmVhZC1maWVsZCBbZmllbGRMYWJlbF09XCInVGVhbSBjb21wZXRlbmN5J1wiIFtmaWVsZFZhbHVlXT1cInNraWxsLnRlYW1Db21wZXRlbmN5XCI+PC9hcHAtcmVhZC1maWVsZD5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19