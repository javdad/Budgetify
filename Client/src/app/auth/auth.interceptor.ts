import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { AuthService } from "../services/auth-service/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService ) {}

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        if (this.auth.isAuthenticated()) {
           const token = localStorage.getItem('auth-token')
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', String(token))
            })
            return next.handle(clonedReq)
        }
        return next.handle(req);
    }
}
