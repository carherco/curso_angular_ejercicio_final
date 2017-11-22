import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from "../components/user-list/user-list.component";
import { UserAddComponent } from "../components/user-add/user-add.component";
import { UserEditComponent } from "../components/user-edit/user-edit.component";
import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
  { path: 'users',      component: UserListComponent, canActivate: [AuthGuard]  },
  { path: 'user/add',      component: UserAddComponent, canActivate: [AuthGuard]  },
  { path: 'user/edit/:id',      component: UserEditComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
