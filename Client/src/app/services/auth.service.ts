import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { User } from "../shared/interfaces/userInterface";

@Injectable({providedIn: 'root'})
export class AuthService {

    private token!: string

    constructor(private http: HttpClient) {
    }

    login(user: User): Observable<{token: string}> {
        return this.http.post<{token: string}>('http://localhost:3000/api/auth/login', user)
        .pipe(tap( ({token}) => {
            this.setSession(token)
            } 
        ))
    }
    
    setSession(token: string) {
        const expiresIn = Date.now() + 60*60;
        localStorage.setItem('auth-token', token);
        localStorage.setItem('expiresIn', String(expiresIn));
        this.token = token
    }

    getToken() {
        return this.token
    }

    isAuthenticated() {
        const expiresIn = localStorage.getItem('expiresIn');
        if (expiresIn) return Date.now() < Number(expiresIn);
        return false
    }

    logOut() {
        this.token = String(null)
        localStorage.removeItem('auth-token')
        localStorage.removeItem('expiresIn')
    }
}