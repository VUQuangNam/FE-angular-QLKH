import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Product } from '../../model/product';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}


@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {

    products: any[] = [];
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource: any = [];
    constructor(
        private http: HttpClient,
    ) { }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.http.get<[Product]>('http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp').subscribe(res => {
            this.products = res;
            this.dataSource = new MatTableDataSource(this.products);
        });
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    delete(i) {
        console.log(i);
    }
}
