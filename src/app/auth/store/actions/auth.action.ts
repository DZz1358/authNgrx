import {
    createAction,
    props
} from '@ngrx/store';


export const loginAction = createAction('[Auth] Login', props<{ request: any }>());
export const loginSuccessAction = createAction('[Auth] Login success', props<{currentUser: any}>());
export const loginFailureAction = createAction('[Auth] Login error', props<{error: any}>());

export const loginRedirect = createAction('[Auth] Login Redirect');

export const getUserToken = createAction('[Auth] Get User Token', props<{ token: any }>());
