import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@skilllib";
import * as i3 from "../../services";
import * as i4 from "@sharedlib";
import * as i5 from "@angular/common";
export class SkillEditComponent {
    constructor(route, router, skillService, skillMgtService, skillFormService, alert) {
        this.route = route;
        this.router = router;
        this.skillService = skillService;
        this.skillMgtService = skillMgtService;
        this.skillFormService = skillFormService;
        this.alert = alert;
        this.title = 'Edit Skill';
        this.description = 'Update details about the skill.';
        this.buttonLabel = 'Update skill';
        this.categories = [];
        this.subcategories = [];
    }
    get isFormVisible() {
        var _a;
        return ((_a = this.skill) === null || _a === void 0 ? void 0 : _a.id) !== undefined;
    }
    ngOnInit() {
        /* this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            tap(x => console.log('router.event => ', x))
        ).subscribe(); */
        this._routeDataSub = this.route.data.pipe(
        // tap(x => console.log('route.data => ', x)),
        switchMap(({ categories, skill }) => {
            return this.skillService.getSubCategories(skill.categoryId).pipe(map(subcategories => {
                return {
                    categories,
                    subcategories,
                    skill
                };
            }));
        })).subscribe(({ categories, skill, subcategories }) => {
            this.categories = categories;
            this.subcategories = subcategories;
            this.skill = skill;
            // console.log('this.skill', this.skill);
        });
    }
    onUpdateSkill(skill) {
        this.skillMgtService.updateSkill(skill).subscribe({
            next: (response) => {
                // tell the list component that skill has been added
                this.skillMgtService.notifySkillUpdate(response);
                this.skillFormService.resetForm();
                this.alert.success('Successful', 'Skill has been updated successfully');
            },
            error: (error) => {
                this.alert.error('Update Failed', 'Unable to update new skill');
            }
        });
    }
    onCloseClick() {
        this.router.navigate(['/skills', { outlets: { details: null } }]);
    }
    ngOnDestroy() {
        var _a;
        (_a = this._routeDataSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
SkillEditComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }, { token: i2.SkillsService }, { token: i3.SkillMgtService }, { token: i2.SkillFormService }, { token: i4.AlertService }], target: i0.ɵɵFactoryTarget.Component });
SkillEditComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: SkillEditComponent, selector: "app-skill-edit", ngImport: i0, template: "<app-secondary-header [title]=\"title\" [description]=\"description\" (closeClick)=\"onCloseClick()\"></app-secondary-header>\n\n<ng-container *ngIf=\"isFormVisible\">\n    <skl-form [skill]=\"skill\" [categories]=\"categories\" [subcategories]=\"subcategories\"\n              (commitSkill)=\"onUpdateSkill($event)\" [buttonLabel]=\"buttonLabel\">\n    </skl-form>\n</ng-container>\n", styles: [":host{display:block}\n"], components: [{ type: i4.SecondaryHeaderComponent, selector: "app-secondary-header", inputs: ["title", "description"], outputs: ["closeClick"] }, { type: i2.SkillFormComponent, selector: "skl-form", inputs: ["categories", "subcategories", "buttonLabel", "skill"], outputs: ["commitSkill"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillEditComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-skill-edit',
                    templateUrl: './skill-edit.component.html',
                    styleUrls: ['./skill-edit.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.SkillsService }, { type: i3.SkillMgtService }, { type: i2.SkillFormService }, { type: i4.AlertService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2tpbGwtZWRpdC9za2lsbC1lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NraWxsbWd0bGliL3NyYy9saWIvY29tcG9uZW50cy9za2lsbC1lZGl0L3NraWxsLWVkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFLN0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQVNoRCxNQUFNLE9BQU8sa0JBQWtCO0lBZTNCLFlBQ1ksS0FBcUIsRUFDckIsTUFBYyxFQUNkLFlBQTJCLEVBQzNCLGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxLQUFtQjtRQUxuQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBYztRQW5CeEIsVUFBSyxHQUFXLFlBQVksQ0FBQztRQUM3QixnQkFBVyxHQUFXLGlDQUFpQyxDQUFDO1FBQ3hELGdCQUFXLEdBQVcsY0FBYyxDQUFDO1FBRXJDLGVBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQXdCLEVBQUUsQ0FBQztJQWUzQyxDQUFDO0lBWEwsSUFBSSxhQUFhOztRQUNiLE9BQU8sQ0FBQSxNQUFBLElBQUksQ0FBQyxLQUFLLDBDQUFFLEVBQUUsTUFBSyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQVdELFFBQVE7UUFFSjs7O3lCQUdpQjtRQUVqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7UUFDckMsOENBQThDO1FBQzlDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQzVELEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDaEIsT0FBTztvQkFDSCxVQUFVO29CQUNWLGFBQWE7b0JBQ2IsS0FBSztpQkFDUixDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNMLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIseUNBQXlDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM5QyxJQUFJLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUU7Z0JBQ3ZCLG9EQUFvRDtnQkFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDZCxZQUFZLEVBQ1oscUNBQXFDLENBQ3hDLENBQUM7WUFDTixDQUFDO1lBQ0QsS0FBSyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNaLGVBQWUsRUFDZiw0QkFBNEIsQ0FDL0IsQ0FBQztZQUNOLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxXQUFXOztRQUNQLE1BQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0hBOUVRLGtCQUFrQjtvR0FBbEIsa0JBQWtCLHNEQ2QvQixrWUFPQTs0RkRPYSxrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICdAc2hhcmVkbGliJztcbmltcG9ydCB7IElTa2lsbCwgSVNraWxsQ2F0ZWdvcnksIElTa2lsbFN1YkNhdGVnb3J5LCBTa2lsbEZvcm1TZXJ2aWNlLCBTa2lsbHNTZXJ2aWNlIH0gZnJvbSAnQHNraWxsbGliJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNraWxsTWd0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtc2tpbGwtZWRpdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NraWxsLWVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NraWxsLWVkaXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdFZGl0IFNraWxsJztcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyA9ICdVcGRhdGUgZGV0YWlscyBhYm91dCB0aGUgc2tpbGwuJztcbiAgICBwdWJsaWMgYnV0dG9uTGFiZWw6IHN0cmluZyA9ICdVcGRhdGUgc2tpbGwnO1xuICAgIHB1YmxpYyBza2lsbDogSVNraWxsIHwgdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBjYXRlZ29yaWVzOiBJU2tpbGxDYXRlZ29yeVtdID0gW107XG4gICAgcHVibGljIHN1YmNhdGVnb3JpZXM6IElTa2lsbFN1YkNhdGVnb3J5W10gPSBbXTtcblxuICAgIHByaXZhdGUgX3JvdXRlRGF0YVN1YjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgZ2V0IGlzRm9ybVZpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNraWxsPy5pZCAhPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBza2lsbFNlcnZpY2U6IFNraWxsc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2tpbGxNZ3RTZXJ2aWNlOiBTa2lsbE1ndFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2tpbGxGb3JtU2VydmljZTogU2tpbGxGb3JtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhbGVydDogQWxlcnRTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIC8qIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgICAgIHRhcCh4ID0+IGNvbnNvbGUubG9nKCdyb3V0ZXIuZXZlbnQgPT4gJywgeCkpXG4gICAgICAgICkuc3Vic2NyaWJlKCk7ICovXG5cbiAgICAgICAgdGhpcy5fcm91dGVEYXRhU3ViID0gdGhpcy5yb3V0ZS5kYXRhLnBpcGUoXG4gICAgICAgICAgICAvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygncm91dGUuZGF0YSA9PiAnLCB4KSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHsgY2F0ZWdvcmllcywgc2tpbGwgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNraWxsU2VydmljZS5nZXRTdWJDYXRlZ29yaWVzKHNraWxsLmNhdGVnb3J5SWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIG1hcChzdWJjYXRlZ29yaWVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJjYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkuc3Vic2NyaWJlKCh7IGNhdGVnb3JpZXMsIHNraWxsLCBzdWJjYXRlZ29yaWVzIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG4gICAgICAgICAgICB0aGlzLnN1YmNhdGVnb3JpZXMgPSBzdWJjYXRlZ29yaWVzO1xuICAgICAgICAgICAgdGhpcy5za2lsbCA9IHNraWxsO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuc2tpbGwnLCB0aGlzLnNraWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25VcGRhdGVTa2lsbChza2lsbDogSVNraWxsKSB7XG4gICAgICAgIHRoaXMuc2tpbGxNZ3RTZXJ2aWNlLnVwZGF0ZVNraWxsKHNraWxsKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHJlc3BvbnNlOiBJU2tpbGwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0ZWxsIHRoZSBsaXN0IGNvbXBvbmVudCB0aGF0IHNraWxsIGhhcyBiZWVuIGFkZGVkXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbE1ndFNlcnZpY2Uubm90aWZ5U2tpbGxVcGRhdGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxGb3JtU2VydmljZS5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICdTdWNjZXNzZnVsJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NraWxsIGhhcyBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydC5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZSBGYWlsZWQnLFxuICAgICAgICAgICAgICAgICAgICAnVW5hYmxlIHRvIHVwZGF0ZSBuZXcgc2tpbGwnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbG9zZUNsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9za2lsbHMnLCB7IG91dGxldHM6IHsgZGV0YWlsczogbnVsbCB9IH1dKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVEYXRhU3ViPy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuIiwiPGFwcC1zZWNvbmRhcnktaGVhZGVyIFt0aXRsZV09XCJ0aXRsZVwiIFtkZXNjcmlwdGlvbl09XCJkZXNjcmlwdGlvblwiIChjbG9zZUNsaWNrKT1cIm9uQ2xvc2VDbGljaygpXCI+PC9hcHAtc2Vjb25kYXJ5LWhlYWRlcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzRm9ybVZpc2libGVcIj5cbiAgICA8c2tsLWZvcm0gW3NraWxsXT1cInNraWxsXCIgW2NhdGVnb3JpZXNdPVwiY2F0ZWdvcmllc1wiIFtzdWJjYXRlZ29yaWVzXT1cInN1YmNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAoY29tbWl0U2tpbGwpPVwib25VcGRhdGVTa2lsbCgkZXZlbnQpXCIgW2J1dHRvbkxhYmVsXT1cImJ1dHRvbkxhYmVsXCI+XG4gICAgPC9za2wtZm9ybT5cbjwvbmctY29udGFpbmVyPlxuIl19