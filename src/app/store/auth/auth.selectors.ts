import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from './auth.reducers';

export const selectAuth = (state: AppState) => state.auth;
export const selectIsLoggedIn = createSelector(
  selectAuth,
  (state: AuthState) => state.isLoggedIn
);
