import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: 'tarc/sp/search', pathMatch: 'full' },
//    { path: 'login', component: LoginComponent },
//    { path: 'tarc/sp/search', component: SPSearchComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
