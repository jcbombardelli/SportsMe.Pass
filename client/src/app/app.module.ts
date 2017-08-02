import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { NavbarComponent } from './partials/navbar/navbar.component';
import { AppRoutingModule } from "./app.routing.module";
import { IndexComponent } from "./partials/index/index.component";
import { UserComponent } from "./partials/user/user.component";
import { LoginComponent } from "./partials/login/login.component";
import { EventModule } from "./partials/event/event.module";
import { AuthService } from "./partials/login/auth.service";
import { AuthGuard } from "./guardians/auth.guard.service";
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    UserComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    EventModule
  ],

  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
