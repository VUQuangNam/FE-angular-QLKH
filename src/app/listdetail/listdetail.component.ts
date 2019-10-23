import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-listdetail',
    templateUrl: './listdetail.component.html',
    styleUrls: ['./listdetail.component.scss']
})
export class ListdetailComponent implements OnInit {
    filteredProduct: Product[] = [];
    products: Product[] = [];
    config: any;
    convertedit: boolean;

    constructor(
        private router: Router,
        private productService: ProductService,
        private route: ActivatedRoute,
        http: HttpClient,
        ) {
        http.get<[Product]>('http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp').subscribe(res => {
            this.filteredProduct = res;
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
            }
        );
        this.productService
            .getProducts()
            .subscribe(next => (this.filteredProduct = next), error => (this.filteredProduct = []));

    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    search(key) {
        this.filteredProduct = this.filteredProduct.filter(product => product.name.toLowerCase().includes(key.toLowerCase()));
        console.log("list " + this.filteredProduct.length);
    }

    deletePost(i) {
        var result = confirm("Bạn có chắc chắn xóa người dùng này?");
        if (result == true) {
            for (let j = 0; j < this.filteredProduct.length; j++) {
                const product = this.filteredProduct[j];
                if (product.id === i) {
                    console.log(product);
                    this.productService.deleteProduct(product.id).subscribe(() => {
                        console.log("delete " + product.id);
                        const indexOf = this.filteredProduct.indexOf(product);
                        this.filteredProduct.splice(indexOf, 1);
                        alert("Delete done");
                        console.log("Delete");
                    });
                }
            }
        } else {
            console.log("NO DELTE")
        }


    }
    edit(i) {
        console.log("edit")
        this.convertedit = true;
        
    }
}
