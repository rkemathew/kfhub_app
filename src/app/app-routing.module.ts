import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/shared/components/auth/login.component';
import { SessionHandoffSendComponent } from './modules/shared/components/sessionhandoff/sessionhandoffsend.component';

import { SharedConstantsService, AuthGuardService as AuthGuard } from 'kfhub_lib';
import { SPSearchComponent } from 'kfhub_tarc_lib';

const SESSION_HANDOFF_SEND_ROUTE_PREFIX = 'HOSND/';
const SESSION_HANDOFF_RECEIVE_ROUTE_PREFIX = 'HORCV/'

const routes: Routes = [
//    { path: '', redirectTo: getSessionHandoffSendRoute('tarc/sp/search'), pathMatch: 'full' },
    { path: '', redirectTo: 'HOSND/tarc/sp/search', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
//    { path: 'tarch/sp/search', component: SPSearchComponent, canActivate: [AuthGuard] },
    { path: 'HOSND/tarc/sp/search', component: SessionHandoffSendComponent },
//    { path: getSessionHandoffSendRoute('tacq/proj/search'), component: SessionHandoffSendComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
    constructor(
        private sharedConstantsService: SharedConstantsService
    ) { }
}


