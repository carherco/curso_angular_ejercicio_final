import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: 'home',      component: HomePageComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'admin',      component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', loadChildren: 'app/users/users.module#UsersModule' },
  { path: '', redirectTo: '/home',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
