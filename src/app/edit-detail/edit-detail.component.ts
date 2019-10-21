import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-edit-detail',
    templateUrl: './edit-detail.component.html',
    styleUrls: ['./edit-detail.component.scss'],

})
export class EditDetailComponent implements OnInit {
    product: Product;
    postForm: FormGroup;
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.postForm = this.fb.group({
            name: [null, [Validators.required]],
            position: [null, [Validators.required]],
            office: [null, Validators.required],
            age: ['', [Validators.required]],
            startdate: ['', [Validators.required]],
            salary: ['', [Validators.required]]
        });
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.getProductById(id).subscribe(
            next => {
                this.product = next;
                this.postForm.patchValue(this.product);
            },
            error => {
                console.log(error);
                this.product = null;
            }
        );
    }
    onSubmit() {
        if (this.postForm.valid) {
            const { value } = this.postForm;
            const data = {
                ...this.product,
                ...value
            };
            this.productService.updateProduct(data).subscribe(
                next => {
                    console.log('update');
                    this.router.navigate(['']);
                },
                error => console.log(error)
            );
        }
    }
}
