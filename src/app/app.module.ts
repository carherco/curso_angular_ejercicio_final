import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';


import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";
import { AuthGuard } from "./guards/auth.guard";
import { MenuPublicoComponent } from './components/menu-publico/menu-publico.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    AdminHomeComponent,
    MenuPublicoComponent,
    MenuAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
