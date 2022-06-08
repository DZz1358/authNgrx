import { AuthResponseInterface } from './../interfaces/authResponse.interface';
import { UserInterface } from './../interfaces/user.interface';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginRequestInterface } from '../interfaces/loginRequset.interface';

@Injectable()
export class AuthService {
    constructor(
        private store: Store,
        private http: HttpClient,
        private router: Router,
    ) { }

    login(loginData: any) {
        return this.http.post(`${environment.apiUrl}/system/common/tokens/auth`, loginData)
    }

}