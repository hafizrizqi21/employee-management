import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from '../store/app.state';
import { selectIsLoggedIn } from '../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate called');
    let isLoggedIn: boolean = false
    this.store.pipe(select(selectIsLoggedIn), take(1)).subscribe(
      s => isLoggedIn = s
    );
    console.log(isLoggedIn)
    if (isLoggedIn){
      return true
    } 
    
    this.router.navigate(['/login']);
    return false
  }
  
}
