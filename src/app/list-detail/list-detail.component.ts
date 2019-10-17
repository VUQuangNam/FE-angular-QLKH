import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-list-detail',
    templateUrl: './list-detail.component.html',
    styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
    productList: Product;
    products: Product[] = [];

    constructor(private productService: ProductService,
        private route: ActivatedRoute,
        http: HttpClient) {
        http.get<[Product]>('http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp').subscribe(res => {
            this.products = res;
        });
    }

    ngOnInit() {
        // const id = +this.route.snapshot.paramMap.get('id');
        // this.productService.getProductById(id).subscribe(
        //     next => (this.productList = next),
        //     error => {
        //         console.log(error);
        //         this.productList = null;
        //     }
        // );

    }


}
