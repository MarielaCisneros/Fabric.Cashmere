import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'hc-app-root',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['../styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
