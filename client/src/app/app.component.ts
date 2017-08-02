import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "./partials/login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  title = 'Sports.Me';
  showNavMenu: boolean = false;

  ngOnInit() {
    this.authService.showMenuEmmiter.subscribe(show => this.showNavMenu = show);

  }

  ngOnDestroy(): void {
    this.authService.showMenuEmmiter.unsubscribe();
  }

  constructor(private authService: AuthService) { }
}
