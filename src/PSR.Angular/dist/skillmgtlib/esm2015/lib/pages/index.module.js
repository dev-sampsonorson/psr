import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule, PageHeadingModule, TwoColumnLayoutModule } from '@sharedlib';
import { IndexComponent } from './index.component';
import * as i0 from "@angular/core";
export class IndexModule {
}
IndexModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IndexModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexModule, declarations: [IndexComponent], imports: [CommonModule,
        RouterModule,
        TwoColumnLayoutModule,
        PageHeadingModule,
        BreadcrumbModule], exports: [IndexComponent] });
IndexModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexModule, imports: [[
            CommonModule,
            RouterModule,
            TwoColumnLayoutModule,
            PageHeadingModule,
            BreadcrumbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: IndexModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [IndexComponent],
                    imports: [
                        CommonModule,
                        RouterModule,
                        TwoColumnLayoutModule,
                        PageHeadingModule,
                        BreadcrumbModule
                    ],
                    exports: [IndexComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2tpbGxtZ3RsaWIvc3JjL2xpYi9wYWdlcy9pbmRleC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBZ0JuRCxNQUFNLE9BQU8sV0FBVzs7eUdBQVgsV0FBVzswR0FBWCxXQUFXLGlCQVhMLGNBQWMsYUFFekIsWUFBWTtRQUNaLFlBQVk7UUFFWixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGdCQUFnQixhQUVWLGNBQWM7MEdBRWYsV0FBVyxZQVZYO1lBQ0wsWUFBWTtZQUNaLFlBQVk7WUFFWixxQkFBcUI7WUFDckIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtTQUNuQjs0RkFHUSxXQUFXO2tCQVp2QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osWUFBWTt3QkFFWixxQkFBcUI7d0JBQ3JCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1vZHVsZSwgUGFnZUhlYWRpbmdNb2R1bGUsIFR3b0NvbHVtbkxheW91dE1vZHVsZSB9IGZyb20gJ0BzaGFyZWRsaWInO1xuXG5pbXBvcnQgeyBJbmRleENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXguY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSW5kZXhDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG5cbiAgICAgICAgVHdvQ29sdW1uTGF5b3V0TW9kdWxlLFxuICAgICAgICBQYWdlSGVhZGluZ01vZHVsZSxcbiAgICAgICAgQnJlYWRjcnVtYk1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW0luZGV4Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJbmRleE1vZHVsZSB7IH1cbiJdfQ==