import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PersistanceService } from "../services/persistance.service";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(
        private store: Store,
        private persistanceService: PersistanceService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const localStorageToken = this.persistanceService.getToken('auth');
        
        const authReq = !!localStorageToken ? req.clone({

            setHeaders: { Authorization: 'Bearer ' +  localStorageToken.accessToken},
        }) : req;
        return next.handle(authReq);
    }
}