import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
};

export const auth = createReducer(
  initialState,
  on(login, (state) => {
    return { ...state, isLoggedIn: true };
  }),
  on(logout, (state) => {
    return { ...state, isLoggedIn: false };
  })
);
