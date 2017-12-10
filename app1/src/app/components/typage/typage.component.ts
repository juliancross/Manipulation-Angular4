import {Component,
    OnInit} from '@angular/core';

@Component({
    selector : 'app-typage',
    templateUrl : './typage.component.html',
    styleUrls : [ './typage.component.scss' ]
})
export class TypageComponent implements OnInit {
    type: string;
    type2: number;
    constructor() {}

    ngOnInit()
    {
        this.type = ' Typé ';
        this.type2 = 365;
    }
}
