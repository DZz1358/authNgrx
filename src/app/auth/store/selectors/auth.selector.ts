import { AuthStateInterface } from './../../interfaces/authState.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const authKey = 'auth';

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>(authKey);

export const selectUserToken = createSelector(
    authFeatureSelector,
    (state) => state.authToken
);
