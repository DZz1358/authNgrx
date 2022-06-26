import { PersistanceService } from './../../services/persistance.service';
import { AuthService } from './../../services/auth.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { loginAction, loginFailureAction, loginRedirect, loginSuccessAction } from './../actions/auth.action';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class AuthEffect {
    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router,
        private persistanceService: PersistanceService
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            map(({ request }) => request),
            exhaustMap((request) => this.authService.login(request).pipe(
                concatMap(currentUser => [
                    loginSuccessAction({ currentUser }),
                    loginRedirect()
                ]),
                catchError(error => of(loginFailureAction({ error })))
            )),
        )
    );

    loginRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginRedirect),
            tap(() => this.router.navigate(['/afterLogin']))
        ),
        { dispatch: false }
    );

    loginSuccessAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginSuccessAction),
            tap((data) => {
                // console.log(data,' 111!!!!');
                this.persistanceService.setToken('auth', data.currentUser.authToken)
                
            })
        ),
        { dispatch: false }
    );
}