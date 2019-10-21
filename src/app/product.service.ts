import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, max } from 'rxjs/operators';
import { Product } from './product';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products: Product[] = [];
    private readonly API_URL = 'http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp';

    constructor(private http: HttpClient) {
    }

    getProducts(count = 10000): Observable<Product[]> {
        return this.http.get<Product[]>(this.API_URL).pipe(
            map(response => response.filter((product, i) => i < count))
        );
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.API_URL}/${(id)}`);
    }


    //Create
    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.API_URL, product);
    }

    // deleteProduct(id:number): Observable<Product>{
    //     console.log(`${this.API_URL}/${(id)}`);
    //     return this.http.delete<Product>(`${this.API_URL}/${(id)}`);
    // }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
       
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.API_URL}/${product.id}`, product);
    }
    getListProductsByUser(): Observable<any> {
        return this.http.get<any>(this.API_URL);
    }
}