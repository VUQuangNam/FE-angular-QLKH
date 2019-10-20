import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    filteredProduct: Product[] = [];
    products: Product[] = [];
    notification;
    config: any;


    constructor(
        private router: Router,
        private productService: ProductService,
        private route: ActivatedRoute,
        http: HttpClient) {
        http.get<[Product]>('http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp').subscribe(res => {
            this.products = res;
        });
        this.config = {

            itemsPerPage: 10,
            currentPage: 1,
        };
    }

    ngOnInit() {
        this.productService.getListProductsByUser().subscribe(
            next => {
                this.filteredProduct = next;
                this.filteredProduct = this.filteredProduct;
            }
        );
        this.productService
            .getProducts()
            .subscribe(next => (this.products = next), error => (this.products = []));

    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    search(key) {
        this.notification = true;
        this.filteredProduct = this.filteredProduct.filter(product => product.name.toLowerCase().includes(key.toLowerCase()));
        console.log("list " + this.filteredProduct.length);
    }

    //     findProductById(id: number) : Product{
    //         for(let i =0;i<this.products.l)
    //         this.products.findIndex
    // return 
    //     }
    deletePost(i) {
        const product = this.products[i];
        this.productService.deleteProduct(product.id).subscribe(() => {
            this.products = this.products.filter(t => t.id !== product.id);
            alert("xoa thanh cong");
        });
    }

}
