import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { first, Observable } from "rxjs";
import { selectUserToken } from "../store/selectors/auth.selector";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(
        private store: Store,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.store.pipe(select(selectUserToken),
        first())
        console.log(token);
        
        if(!!token){
            req = req.clone({setHeaders: {Authorization: `Bearer ${token}`}})
        }
        return next.handle(req)
    }
}