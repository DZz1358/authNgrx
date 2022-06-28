import { PersistanceService } from './persistance.service';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
    constructor(
        private store: Store,
        private http: HttpClient,
        private router: Router,
        private persistanceService:PersistanceService
    ) { }

    isAuthenticated(): boolean{
        const localStorageToken = this.persistanceService.getToken('auth');
        if(!localStorageToken){
            return false
        }
        return true
    }

    login(loginData: any) {
        return this.http.post(`${environment.apiUrl}/system/common/tokens/auth`, loginData)
    }
    
    getUnits(): Observable<any>{
        return this.http.get(`${environment.apiUrl}/organization/structure/units`)
    }
    
    signOut() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    
}