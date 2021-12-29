import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '@psr/core';
import { BREADCRUMB_CONFIG_TOKEN, BreadcrumbService, IBreadcrumb, SecondaryHeaderService } from '@psr/shared/ui';
import { PageTitleService } from '@psr/shared/util';
import { ISkillCategory } from '@psr/skill/data-access';
import { SkillReadService } from '@psr/skill/util';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'psr-skl-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    providers: [PageTitleService]
})
export class IndexComponent implements OnInit, OnDestroy {

    pageTitle$: Observable<string>;
    pageSubTitle$: Observable<string>;
    categories: ISkillCategory[] = [];
    user!: IUser;

    isSecondaryContentVisible = false;

    private _routerEventSub!: Subscription;
    private _routeDataSub!: Subscription;

    private _breadcrumbs$: Observable<IBreadcrumb[]>;
    private _onCloseSkillRead$: Observable<void>;

    get isBreadcrumbVisible() {
        return this.breadcrumbConfig.length > 0;
    }

    constructor(
        private pageTitle: PageTitleService,
        private route: ActivatedRoute,
        private router: Router,
        private breadcrumbService: BreadcrumbService,
        private secondaryHeaderService: SecondaryHeaderService,
        @Inject(BREADCRUMB_CONFIG_TOKEN) private breadcrumbConfig: IBreadcrumb[],
        private skillReadService: SkillReadService
    ) {
        this.pageTitle$ = this.pageTitle.pageTitle$;
        this.pageSubTitle$ = this.pageTitle.pageSubTitle$;
        this._breadcrumbs$ = this.breadcrumbService;
        this._onCloseSkillRead$ = this.skillReadService.onCloseSkillRead$;
    }

    ngOnInit(): void {
        this.route.data.subscribe(({ resolverResult: { user, categories } }) => {
            this.categories = categories;
        });

        this.secondaryHeaderService.isCloseClicked$.subscribe((isCloseClicked: boolean) => {
            if (isCloseClicked) {
                this.router.navigate(['/my-skills', { outlets: { details: null } }]);
            }
        });

        this._onCloseSkillRead$.subscribe(() => {
            this.router.navigate(['/my-skills', { outlets: { details: null } }]);
        });
    }

    onDetailsRouterOutletActivate(): void {
        this.isSecondaryContentVisible = true;
        // console.log('activate');
    }

    onDetailsRouterOutletDeactivate(): void {
        this.isSecondaryContentVisible = false;
    }
    onPrimaryRouterOutletActivate(): void {
        // console.log('activate');
    }

    onPrimaryRouterOutletDeactivate(): void {
        // console.log('deactivate');
    }

    hamburgerMenuClickHandler(): void {
        // console.log('hamburgerMenuClickHandler');
    }
    ngOnDestroy(): void {
        this._routerEventSub?.unsubscribe();
        this._routeDataSub?.unsubscribe();
    }

}
