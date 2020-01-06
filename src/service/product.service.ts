import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products: Product[] = [];
    private readonly API_URL = 'http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp';

    constructor(private http: HttpClient) {
    }

    // list() {
    //     return this.http.get(this.API_URL, this.headerConfig.requestOptions())
    //         .toPromise().then(result => result.json());
    // }


    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.API_URL}/${(id)}`);
    }

    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.API_URL, product);
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);

    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.API_URL}/${product.id}`, product);
    }

    getListProducts(): Observable<any> {
        return this.http.get<any>(this.API_URL);
    }

    list() {
        return this.http.get(this.API_URL)
            .toPromise().then(result => result);
    }

}
