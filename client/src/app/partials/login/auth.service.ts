import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";



import { User } from "./user";

@Injectable()
export class AuthService {

  private userAuth: boolean = false;

  showMenuEmmiter = new EventEmitter<boolean>();


  constructor(private router: Router) { }

  doLogin(user : User){

    if(user.user == "teste@sportsme.pro" && user.pass == "pro"){
      this.userAuth = true;
      this.showMenuEmmiter.emit(this.userAuth);
      this.router.navigate(['/']);
    }
    else{
      this.userAuth = false;
      this.showMenuEmmiter.emit(false);
    }
  }

  getUserAuth(){
    return this.userAuth;
  }





}
