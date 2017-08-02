import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { EditUserComponent } from "./edit/edit-user.component";
import { ListUserComponent } from "./list/list-user.component";

import { UserService } from "./user.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  providers: [UserService]
})
export class UserModule { }
