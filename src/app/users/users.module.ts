import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserEditComponent } from '../components/user-edit/user-edit.component';
import { UserAddComponent } from '../components/user-add/user-add.component';
import { UsersService } from "../services/users.service";

@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserAddComponent,
  ],
  exports: [
    UserListComponent,
    UserEditComponent,
    UserAddComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
