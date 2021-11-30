import { Component, Input, ViewChildren } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/password.service";
export class PasswordStrengthComponent {
    constructor(pwdService, renderer) {
        this.pwdService = pwdService;
        this.renderer = renderer;
        this.defaultColor = '#ddd';
        this.colors = ['darkred', 'orangered', 'orange', 'yellowgreen', '#ddd'];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.passwordControl.valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe((value) => {
            const colorIndex = this.getColorIndex(this.pwdService.checkStrength(value));
            // reset bg color            
            this.chunkEls.forEach((item, index) => {
                this.renderer.setStyle(item.nativeElement, 'background-color', this.defaultColor);
                if (colorIndex === -1 || index <= colorIndex) {
                    this.renderer.setStyle(item.nativeElement, 'background-color', this.colors[colorIndex]);
                }
            });
        });
    }
    getColorIndex(score) {
        const index = [10, 20, 30, 40].indexOf(score);
        return index === -1 ? (this.colors.length - 1) : index;
    }
}
PasswordStrengthComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordStrengthComponent, deps: [{ token: i1.PasswordService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
PasswordStrengthComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.11", type: PasswordStrengthComponent, selector: "app-password-strength", inputs: { passwordControl: ["password-control", "passwordControl"] }, viewQueries: [{ propertyName: "chunkEls", predicate: ["chunk"], descendants: true }], ngImport: i0, template: "<div class=\"strength\">\r\n    <ul class=\"strength__bar\">\r\n        <li class=\"strength__chunk\" #chunk></li>\r\n        <li class=\"strength__chunk\" #chunk></li>\r\n        <li class=\"strength__chunk\" #chunk></li>\r\n        <li class=\"strength__chunk\" #chunk></li>\r\n    </ul>\r\n</div>\r\n", styles: [".strength{display:block}.strength__bar{@apply flex space-x-1 m-0 p-0 list-none;}.strength__chunk{@apply bg-gray-200 rounded-sm h-1 w-1/4;}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: PasswordStrengthComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-password-strength',
                    templateUrl: './password-strength.component.html',
                    styleUrls: ['./password-strength.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.PasswordService }, { type: i0.Renderer2 }]; }, propDecorators: { chunkEls: [{
                type: ViewChildren,
                args: ['chunk']
            }], passwordControl: [{
                type: Input,
                args: ['password-control']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGxpYi9zcmMvbGliL2NvbXBvbmVudHMvcGFzc3dvcmQtc3RyZW5ndGgvcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGxpYi9zcmMvbGliL2NvbXBvbmVudHMvcGFzc3dvcmQtc3RyZW5ndGgvcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFvRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUosT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFRcEUsTUFBTSxPQUFPLHlCQUF5QjtJQU1sQyxZQUFvQixVQUEyQixFQUFVLFFBQW1CO1FBQXhELGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUhwRSxpQkFBWSxHQUFXLE1BQU0sQ0FBQztRQUM5QixXQUFNLEdBQWEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRWpGLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDbEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixvQkFBb0IsRUFBRSxDQUN6QixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUU1RSw2QkFBNkI7WUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUVsRixJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO29CQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztpQkFDM0Y7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFhO1FBQy9CLE1BQU0sS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQzs7dUhBakNRLHlCQUF5QjsyR0FBekIseUJBQXlCLHlOQ1Z0QyxpVEFRQTs0RkRFYSx5QkFBeUI7a0JBTHJDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsV0FBVyxFQUFFLG9DQUFvQztvQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7aUJBQ3BEOzhIQUUwQixRQUFRO3NCQUE5QixZQUFZO3VCQUFDLE9BQU87Z0JBQ00sZUFBZTtzQkFBekMsS0FBSzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZSwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBhc3N3b3JkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Bhc3N3b3JkLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1wYXNzd29yZC1zdHJlbmd0aCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBAVmlld0NoaWxkcmVuKCdjaHVuaycpIGNodW5rRWxzITogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gICAgQElucHV0KCdwYXNzd29yZC1jb250cm9sJykgcGFzc3dvcmRDb250cm9sITogRm9ybUNvbnRyb2w7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRDb2xvcjogc3RyaW5nID0gJyNkZGQnO1xyXG4gICAgcHJpdmF0ZSBjb2xvcnM6IHN0cmluZ1tdID0gWydkYXJrcmVkJywgJ29yYW5nZXJlZCcsICdvcmFuZ2UnLCAneWVsbG93Z3JlZW4nLCAnI2RkZCddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHdkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICApLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvckluZGV4ID0gdGhpcy5nZXRDb2xvckluZGV4KHRoaXMucHdkU2VydmljZS5jaGVja1N0cmVuZ3RoKHZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXNldCBiZyBjb2xvciAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jaHVua0Vscy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpdGVtLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5kZWZhdWx0Q29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2xvckluZGV4ID09PSAtMSB8fCBpbmRleCA8PSBjb2xvckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpdGVtLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5jb2xvcnNbY29sb3JJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29sb3JJbmRleChzY29yZTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBbMTAsIDIwLCAzMCwgNDBdLmluZGV4T2Yoc2NvcmUpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyAodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgOiBpbmRleDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInN0cmVuZ3RoXCI+XHJcbiAgICA8dWwgY2xhc3M9XCJzdHJlbmd0aF9fYmFyXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwic3RyZW5ndGhfX2NodW5rXCIgI2NodW5rPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwic3RyZW5ndGhfX2NodW5rXCIgI2NodW5rPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwic3RyZW5ndGhfX2NodW5rXCIgI2NodW5rPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwic3RyZW5ndGhfX2NodW5rXCIgI2NodW5rPjwvbGk+XHJcbiAgICA8L3VsPlxyXG48L2Rpdj5cclxuIl19