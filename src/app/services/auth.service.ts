import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isLogin = true;

  logIn(){
    this.isLogin = true;
    this.router.navigate(["/"]);
  }

}
