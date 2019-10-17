import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-list-detail',
    templateUrl: './list-detail.component.html',
    styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
    productList: Product;

    constructor(private productService: ProductService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.getProductById(id).subscribe(
            next => (this.productList = next),
            error => {
                console.log(error);
                this.productList = null;
            }
        );

    }


}
