import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly API_URL = 'http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/';


    constructor(private http: HttpClient) { }
}
