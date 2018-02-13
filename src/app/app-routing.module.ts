import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/components/auth/login.component';
import { SPSearchComponent } from './modules/components/talentarchitect/search/spsearch.component';

const routes: Routes = [
    { path: '', redirectTo: 'tarc/sp/search', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'tarc/sp/search', component: SPSearchComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
    constructor() {}
}
