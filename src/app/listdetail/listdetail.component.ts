import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';



@Component({
    selector: 'app-listdetail',
    templateUrl: './listdetail.component.html',
    styleUrls: ['./listdetail.component.scss']
})
export class ListdetailComponent implements OnInit {
    displayedColumns: string[] = ['id', 'position', 'name', 'age', 'date', 'setting'];
    dataSource: any = [];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private productService: ProductService,
    ) {

    }

    async ngOnInit() {
        // await this.productService.getListProducts().subscribe(
        //     next => {
        //         this.dataSource = next;
        //         console.log(this.dataSource);
        //     }
        // );
        const respone = await this.productService.list();
        this.dataSource = respone;
    }

    // onSeach(filterValue: string) {
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    //     if (this.dataSource.paginator) {
    //         this.dataSource.paginator.firstPage();
    //     }
    // }

    // onSeach(key) {
    //     this.dataSource = this.dataSource.filter(x => x.name.toLowerCase().includes(key.toLowerCase()));
    // }

    // deletePost(i) {
    //     const result = confirm('Bạn có chắc chắn xóa người dùng này?');
    //     if (result === true) {
    //         for (let j = 0; j < this.dataSource.length; j++) {
    //             const product = this.dataSource[j];
    //             if (product.id === i) {
    //                 this.productService.deleteProduct(product.id).subscribe(() => {
    //                     const indexOf = this.dataSource.indexOf(product);
    //                     this.dataSource.splice(indexOf, 1);
    //                     alert('Delete done');
    //                 });
    //             }
    //         }
    //     }
    // }
}
