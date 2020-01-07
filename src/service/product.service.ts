import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User[] = [];
    private readonly API_URL = 'http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp';

    constructor(
        private http: HttpClient
    ) { }

    getuserById(id: any): Observable<User> {
        return this.http.get<User>(`${this.API_URL}/${(id)}`);
    }

    createuser(user: User): Observable<User> {
        return this.http.post<User>(this.API_URL, user);
    }

    deleteuser(id: any): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
    }

    updateuser(user: User): Observable<User> {
        return this.http.put<User>(`${this.API_URL}/${user.id}`, user);
    }

    getListusers(): Observable<any> {
        return this.http.get<any>(this.API_URL);
    }

}

