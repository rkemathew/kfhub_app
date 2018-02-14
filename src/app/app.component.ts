import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Spinkit } from 'ng-http-loader/spinkits';

import { KFRoutesService, KFAuthService, KFUtilsService, KFMenuItem } from 'kfhub_lib';
import { KFTarcRoutesService } from 'kfhub_tarc_lib';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.less' ]
})
export class AppComponent implements OnInit {
    public spinkit = Spinkit;
    menuItems: KFMenuItem[] = null;
    
    constructor(
        private router: Router,
        private authService: KFAuthService,
        private utilsService: KFUtilsService,
        private kfRoutesService: KFRoutesService,
        private kftarcRoutesService: KFTarcRoutesService
    ) {};

    ngOnInit() {
        this.menuItems = this.getMenuItems();
        this.router.resetConfig(this.getRoutes());
    }

    getMenuItems(): KFMenuItem[] {
        const pmSubMenuSP = new KFMenuItem('BCSuccessProfiles', 'tarc/sp/search');
        const pmSubMenuJD = new KFMenuItem('JobDescriptionsPageTitle', 'tarc/jd/search');
        const pmMainMenu = new KFMenuItem('Talent', 'tarc/sp/search', [ pmSubMenuSP, pmSubMenuJD ]);

        const taSubMenuAP = new KFMenuItem('Assessment Projects', 'tacq/ap/projsearch');
        const taMainMenu = new KFMenuItem('TalentAcquisition', 'tacq/ap/projsearch', [ taSubMenuAP ]);

        const opSubMenuPay = new KFMenuItem('Pay', 'orgp/pay/new');
        const opSubMenuOrgSetup = new KFMenuItem('Organization Setup', 'orgp/orgsetup/leaderboard');
        const opSubMenuOrgSurveys = new KFMenuItem('Organization Surveys', 'orgp/orgsurvey/surveyslist');
        const opMainMenu = new KFMenuItem('OrganizationPerformance', 'orgp/pay/new', [ opSubMenuPay, opSubMenuOrgSetup, opSubMenuOrgSurveys ]);

        return [ pmMainMenu, taMainMenu, opMainMenu ];
    }

    getRoutes(): Route[] {
        let routes: Route[] = [
            { path: '', redirectTo: 'tarc/sp/search', pathMatch: 'full' },
            { path: '**', redirectTo: 'login', pathMatch: 'full' }
        ];

        this.getKFRoutes().forEach((route: Route) => routes.push(route));
        this.getKFTarcRoutes().forEach((route: Route) => routes.push(route));

        return routes;
    }

    getKFRoutes(): Route[] {
        return this.kfRoutesService.getRoutes();
    }

    getKFTarcRoutes(): Route[] {
        return this.kftarcRoutesService.getRoutes();
    }

    isAppPages(): boolean {
        return this.utilsService.isAppPages();
    }

    onLogout(event) {
        console.log('In onLogout event handler in App Component');
        this.authService.removeSessionInfo();
        this.router.navigate(['/login']);
    }
}
