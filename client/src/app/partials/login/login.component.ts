import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { User } from "./user";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: User = new User();

  constructor(private authService: AuthService) { }
  ngOnInit() { }


  doLogin() {
    this.authService.doLogin(this.userLogin);
  }

}
