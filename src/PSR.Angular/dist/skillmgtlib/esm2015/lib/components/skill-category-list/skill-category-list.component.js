import { Component } from '@angular/core';
import { SkillMgtRoutes } from '../../skill-mgt-constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services";
import * as i3 from "@skilllib";
import * as i4 from "@angular/common";
export class SkillCategoryListComponent {
    constructor(route, router, pageTitle) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.categories = [];
        this.pageTitle.updatePageTitle("Skill Categories");
        this.pageTitle.updatePageSubTitle("Choose a skill category from the list below to see sub categories");
    }
    ngOnInit() {
        this.route.data.subscribe(({ categories }) => {
            this.categories = categories;
        });
    }
    onCardClick(category) {
        this.router.navigate(SkillMgtRoutes.ListSubcategories(category.id));
    }
}
SkillCategoryListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryListComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }, { token: i2.PageTitleService }], target: i0.ɵɵFactoryTarget.Component });
SkillCategoryListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillCategoryListComponent, selector: "sklmgt-category-list", ngImport: i0, template: "<ng-container *ngFor=\"let category of categories\">\n    <skl-category-card (onCardClick)=\"onCardClick(category)\" [category]=\"category\"></skl-category-card>\n</ng-container>\n", styles: [":host{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:2rem}\n"], components: [{ type: i3.SkillCategoryCardComponent, selector: "skl-category-card", inputs: ["category"], outputs: ["onCardClick"] }], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillCategoryListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sklmgt-category-list',
                    templateUrl: './skill-category-list.component.html',
                    styleUrls: ['./skill-category-list.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.PageTitleService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtY2F0ZWdvcnktbGlzdC9za2lsbC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbWd0bGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1jYXRlZ29yeS1saXN0L3NraWxsLWNhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUtsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQU8zRCxNQUFNLE9BQU8sMEJBQTBCO0lBSW5DLFlBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLFNBQTJCO1FBRjNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQU52QyxlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQVE5QixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsbUVBQW1FLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBd0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O3dIQXJCUSwwQkFBMEI7NEdBQTFCLDBCQUEwQiw0RENadkMsc0xBR0E7NEZEU2EsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSxzQ0FBc0M7b0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2lCQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElTa2lsbENhdGVnb3J5IH0gZnJvbSAnQHNraWxsbGliJztcblxuaW1wb3J0IHsgUGFnZVRpdGxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IFNraWxsTWd0Um91dGVzIH0gZnJvbSAnLi4vLi4vc2tpbGwtbWd0LWNvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2tsbWd0LWNhdGVnb3J5LWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9za2lsbC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9za2lsbC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxDYXRlZ29yeUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNhdGVnb3JpZXM6IElTa2lsbENhdGVnb3J5W10gPSBbXTtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHBhZ2VUaXRsZTogUGFnZVRpdGxlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnBhZ2VUaXRsZS51cGRhdGVQYWdlVGl0bGUoXCJTa2lsbCBDYXRlZ29yaWVzXCIpO1xuICAgICAgICB0aGlzLnBhZ2VUaXRsZS51cGRhdGVQYWdlU3ViVGl0bGUoXCJDaG9vc2UgYSBza2lsbCBjYXRlZ29yeSBmcm9tIHRoZSBsaXN0IGJlbG93IHRvIHNlZSBzdWIgY2F0ZWdvcmllc1wiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5kYXRhLnN1YnNjcmliZSgoeyBjYXRlZ29yaWVzIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2FyZENsaWNrKGNhdGVnb3J5OiBJU2tpbGxDYXRlZ29yeSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShTa2lsbE1ndFJvdXRlcy5MaXN0U3ViY2F0ZWdvcmllcyhjYXRlZ29yeS5pZCkpO1xuICAgIH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPlxuICAgIDxza2wtY2F0ZWdvcnktY2FyZCAob25DYXJkQ2xpY2spPVwib25DYXJkQ2xpY2soY2F0ZWdvcnkpXCIgW2NhdGVnb3J5XT1cImNhdGVnb3J5XCI+PC9za2wtY2F0ZWdvcnktY2FyZD5cbjwvbmctY29udGFpbmVyPlxuIl19