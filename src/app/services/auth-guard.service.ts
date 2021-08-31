import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public auth: AuthService,
  ) {}
  canActivate(): boolean {
    // if (!this.auth.getToken()) {
    //   return false;
    // }
    return true;
  }
}
