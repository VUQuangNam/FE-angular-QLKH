import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from '../product.service';
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']

})
export class CreateComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private product: ProductService
    ) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            name: [null, [Validators.required]],
            position: [null, [Validators.required]],
            office: [null, Validators.required],
            age: ['', [Validators.required]],
            startdate: ['', [Validators.required]],
            salary: ['', [Validators.required]]
        })


    }

    onSubmit() {
        console.log(this.registerForm);
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value);
        this.product.createProduct(this.registerForm.value)
            .subscribe(
                data => {
                    console.log('succsess');
                    // this.router.navigate(['/create']);
                },
            );
    }

}
