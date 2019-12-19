import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-listdetail',
    templateUrl: './listdetail.component.html',
    styleUrls: ['./listdetail.component.scss']
})
export class ListdetailComponent implements OnInit {
    filteredProduct: Product[] = [];
    products: Product[] = [];

    constructor(
        private productService: ProductService,
        http: HttpClient,
    ) {
        http.get<[Product]>('http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp').subscribe(res => {
            this.filteredProduct = res;
        });
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

    search(key) {
        this.filteredProduct = this.filteredProduct.filter(product => product.name.toLowerCase().includes(key.toLowerCase()));
    }

    deletePost(i) {
        const result = confirm('Bạn có chắc chắn xóa người dùng này?');
        if (result === true) {
            for (let j = 0; j < this.filteredProduct.length; j++) {
                const product = this.filteredProduct[j];
                if (product.id === i) {
                    this.productService.deleteProduct(product.id).subscribe(() => {
                        const indexOf = this.filteredProduct.indexOf(product);
                        this.filteredProduct.splice(indexOf, 1);
                        alert('Delete done');
                    });
                }
            }
        }
    }

}
