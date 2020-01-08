import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from 'src/model/user';
import { UserService } from 'src/service/product.service';

declare let swal: any;

@Component({
    selector: 'app-listdetail',
    templateUrl: './listdetail.component.html',
    styleUrls: ['./listdetail.style.scss']
})
export class ListdetailComponent implements OnInit {
    displayedColumns: string[] = ['id', 'position', 'name', 'age', 'date', 'setting'];
    dataSource: MatTableDataSource<User[]>;
    keypress: any;

    constructor(
        private userService: UserService
    ) { }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    async ngOnInit() {
        await this.userService.getListusers().subscribe(
            next => {
                this.dataSource = new MatTableDataSource(next);
                this.dataSource.paginator = this.paginator;
            });
    }

    onSeach(value: string) {
        clearTimeout(this.keypress);
        this.keypress = setTimeout(() => {
            this.dataSource.filter = value.trim().toLowerCase();
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        }, 500);
    }
}
