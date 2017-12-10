import {Component,
    OnInit} from '@angular/core';

@Component({
    selector : 'app-pipes',
    templateUrl : './pipes.component.html',
    styleUrls : [ './pipes.component.scss' ]
})
export class PipesComponent implements OnInit {
    name: string;
    day = new Date(2017, 12, 7);
    constructor() {}

    ngOnInit()
    {
        this.name = 'Les pipes';
    }
}
