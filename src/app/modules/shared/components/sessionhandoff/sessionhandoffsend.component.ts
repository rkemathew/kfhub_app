import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService, SessionInfo } from 'kfhub_lib';

const SESSION_HANDOFF_SEND_ROUTE_PREFIX = 'HOSND/';
const SESSION_HANDOFF_RECEIVE_ROUTE_PREFIX = 'HORCV/'

@Component({
    selector: 'app-sessionhandoff-send',
    templateUrl: './sessionhandoffsend.component.html',
    styleUrls: [ './sessionhandoffsend.component.less' ]
})
export class SessionHandoffSendComponent implements OnInit {
    constructor(
        private location: Location
    ) {}

    ngOnInit() {
        let navigateUri = location.pathname.slice(1);

        if (navigateUri.startsWith(SESSION_HANDOFF_SEND_ROUTE_PREFIX)) {
            navigateUri = navigateUri.replace(SESSION_HANDOFF_SEND_ROUTE_PREFIX, '');
            let pos = navigateUri.indexOf('/');
            navigateUri = navigateUri.slice(0, pos+1) + SESSION_HANDOFF_RECEIVE_ROUTE_PREFIX + navigateUri.slice(pos+1);
        }

        this.location.go(navigateUri);
    }
}
