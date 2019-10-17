import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
    selector: 'app-list-detail',
    templateUrl: './list-detail.component.html',
    styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
    productList: Product[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit() {
    }
    

}
