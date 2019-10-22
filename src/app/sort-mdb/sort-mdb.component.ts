import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sort-mdb',
    templateUrl: './sort-mdb.component.html',
    styleUrls: ['./sort-mdb.component.scss']
})
export class SortMdbComponent implements OnInit {

    constructor(
        private router: Router,
         private route: ActivatedRoute,

    ) { }
    elements: any = [];
    headElements = ['id', 'first', 'last', 'handle'];

    ngOnInit() {
        for (let i = 1; i <= 15; i++) {
            this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
        }
    }
}
