import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-list-detail-filter',
    templateUrl: './list-detail-filter.component.html',
    styleUrls: ['./list-detail-filter.component.scss']
})
export class ListDetailFilterComponent implements OnInit {
    // products: Product[] = [];
    filteredProduct: Product[] = [];
    notification;
    config: any;


    constructor(private router: Router,
        private productService: ProductService,
        private route: ActivatedRoute,
        http: HttpClient) { 
            this.config = {
                itemsPerPage: 10,
                currentPage: 1,
            };
        }
        pageChanged(event) {
            this.config.currentPage = event;
        }


    ngOnInit() {
        this.productService.getListProductsByUser().subscribe(
            next => {
                this.filteredProduct = next;
                this.filteredProduct = this.filteredProduct;
            }
        );
    }
    search(key) {
        this.notification = !this.notification;
        this.filteredProduct = this.filteredProduct.filter(product => product.name.toLowerCase().includes(key.toLowerCase()));
        console.log(this.filteredProduct.length);
        console.log(this.notification);
    }
}
