import { getUserToken, loginAction, loginFailureAction, loginSuccessAction } from './../actions/auth.action';
import { AuthStateInterface } from "../../interfaces/authState.interface";
import { Action, createReducer, on } from '@ngrx/store';

const initialState: AuthStateInterface = {
    authToken: null,
}

const authReducer = createReducer(
    initialState,
    on(loginAction, (state) => ({
        ...state,
        isSubmitting: true,
    })),
    on(loginSuccessAction, (state, { currentUser }) => ({
        ...state,
        isSubmitting: false,
        authToken: currentUser.authToken
    })),
    on(loginFailureAction, (state) => ({
        ...state,
        isSubmitting: false
    })),
    on(getUserToken, (state, { token }) => ({
        ...state,
        token,
        isSubmitting: false
    })),

);



export function reducer(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}