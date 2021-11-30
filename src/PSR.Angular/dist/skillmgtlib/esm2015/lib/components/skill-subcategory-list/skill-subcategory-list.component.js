import { Component } from '@angular/core';
import { SkillMgtRoutes } from '../../skill-mgt-constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services";
import * as i3 from "@skilllib";
import * as i4 from "@angular/common";
export class SkillSubcategoryListComponent {
    constructor(route, router, pageTitle) {
        this.route = route;
        this.router = router;
        this.pageTitle = pageTitle;
        this.subcategories = [];
        this.pageTitle.updatePageTitle("Skill Subcategories");
        this.pageTitle.updatePageSubTitle("Choose a skill subcategory from the list below to see skills");
    }
    ngOnInit() {
        this.route.data.subscribe(({ subcategories }) => {
            this.subcategories = subcategories;
        });
    }
    onCardClick(subcategory) {
        // console.log(SkillMgtRoutes.ListSubcategories(category.id));
        // console.log(SkillMgtRoutes.ListSkills(category.categoryId, category.id));
        this.router.navigate(SkillMgtRoutes.ListSkills(subcategory.categoryId, subcategory.id));
    }
}
SkillSubcategoryListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryListComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }, { token: i2.PageTitleService }], target: i0.ɵɵFactoryTarget.Component });
SkillSubcategoryListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillSubcategoryListComponent, selector: "sklmgt-subcategory-list", ngImport: i0, template: "<!-- <p>skill-subcategory-list works!</p> -->\n<!-- { outlets: { primary: 'list', details: null } } -->\n<!-- <a [routerLink]=\"['/skills', 'list']\">List</a><br /> -->\n<!-- { outlets: { primary: 'categories', details: null } } -->\n<!-- <a [routerLink]=\"['/skills', 'categories']\">Categories</a> -->\n<ng-container *ngFor=\"let subcategory of subcategories\">\n    <skl-subcategory-card (onCardClick)=\"onCardClick(subcategory)\" [subcategory]=\"subcategory\">\n    </skl-subcategory-card>\n</ng-container>\n", styles: [":host{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:2rem}\n"], components: [{ type: i3.SkillSubcategoryCardComponent, selector: "skl-subcategory-card", inputs: ["subcategory"], outputs: ["onCardClick"] }], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillSubcategoryListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sklmgt-subcategory-list',
                    templateUrl: './skill-subcategory-list.component.html',
                    styleUrls: ['./skill-subcategory-list.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.PageTitleService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtc3ViY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtc3ViY2F0ZWdvcnktbGlzdC9za2lsbC1zdWJjYXRlZ29yeS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbWd0bGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1zdWJjYXRlZ29yeS1saXN0L3NraWxsLXN1YmNhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUtsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQU8zRCxNQUFNLE9BQU8sNkJBQTZCO0lBSXRDLFlBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLFNBQTJCO1FBRjNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQU52QyxrQkFBYSxHQUF3QixFQUFFLENBQUM7UUFRcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLDhEQUE4RCxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxDQUFDLFdBQThCO1FBQ3RDLDhEQUE4RDtRQUM5RCw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7OzJIQXZCUSw2QkFBNkI7K0dBQTdCLDZCQUE2QiwrRENaMUMsa2dCQVNBOzRGREdhLDZCQUE2QjtrQkFMekMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUseUNBQXlDO29CQUN0RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztpQkFDekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJU2tpbGxTdWJDYXRlZ29yeSB9IGZyb20gJ0Bza2lsbGxpYic7XG5cbmltcG9ydCB7IFBhZ2VUaXRsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBTa2lsbE1ndFJvdXRlcyB9IGZyb20gJy4uLy4uL3NraWxsLW1ndC1jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NrbG1ndC1zdWJjYXRlZ29yeS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2tpbGwtc3ViY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2tpbGwtc3ViY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNraWxsU3ViY2F0ZWdvcnlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzdWJjYXRlZ29yaWVzOiBJU2tpbGxTdWJDYXRlZ29yeVtdID0gW107XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBwYWdlVGl0bGU6IFBhZ2VUaXRsZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5wYWdlVGl0bGUudXBkYXRlUGFnZVRpdGxlKFwiU2tpbGwgU3ViY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgdGhpcy5wYWdlVGl0bGUudXBkYXRlUGFnZVN1YlRpdGxlKFwiQ2hvb3NlIGEgc2tpbGwgc3ViY2F0ZWdvcnkgZnJvbSB0aGUgbGlzdCBiZWxvdyB0byBzZWUgc2tpbGxzXCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKCh7IHN1YmNhdGVnb3JpZXMgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJjYXRlZ29yaWVzID0gc3ViY2F0ZWdvcmllcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DYXJkQ2xpY2soc3ViY2F0ZWdvcnk6IElTa2lsbFN1YkNhdGVnb3J5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFNraWxsTWd0Um91dGVzLkxpc3RTdWJjYXRlZ29yaWVzKGNhdGVnb3J5LmlkKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFNraWxsTWd0Um91dGVzLkxpc3RTa2lsbHMoY2F0ZWdvcnkuY2F0ZWdvcnlJZCwgY2F0ZWdvcnkuaWQpKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoU2tpbGxNZ3RSb3V0ZXMuTGlzdFNraWxscyhzdWJjYXRlZ29yeS5jYXRlZ29yeUlkLCBzdWJjYXRlZ29yeS5pZCkpO1xuICAgIH1cblxufVxuIiwiPCEtLSA8cD5za2lsbC1zdWJjYXRlZ29yeS1saXN0IHdvcmtzITwvcD4gLS0+XG48IS0tIHsgb3V0bGV0czogeyBwcmltYXJ5OiAnbGlzdCcsIGRldGFpbHM6IG51bGwgfSB9IC0tPlxuPCEtLSA8YSBbcm91dGVyTGlua109XCJbJy9za2lsbHMnLCAnbGlzdCddXCI+TGlzdDwvYT48YnIgLz4gLS0+XG48IS0tIHsgb3V0bGV0czogeyBwcmltYXJ5OiAnY2F0ZWdvcmllcycsIGRldGFpbHM6IG51bGwgfSB9IC0tPlxuPCEtLSA8YSBbcm91dGVyTGlua109XCJbJy9za2lsbHMnLCAnY2F0ZWdvcmllcyddXCI+Q2F0ZWdvcmllczwvYT4gLS0+XG48bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWJjYXRlZ29yeSBvZiBzdWJjYXRlZ29yaWVzXCI+XG4gICAgPHNrbC1zdWJjYXRlZ29yeS1jYXJkIChvbkNhcmRDbGljayk9XCJvbkNhcmRDbGljayhzdWJjYXRlZ29yeSlcIiBbc3ViY2F0ZWdvcnldPVwic3ViY2F0ZWdvcnlcIj5cbiAgICA8L3NrbC1zdWJjYXRlZ29yeS1jYXJkPlxuPC9uZy1jb250YWluZXI+XG4iXX0=