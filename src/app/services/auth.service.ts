import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

    public token: string;
    public rol: string;
    public username: string;

    constructor() {
        // set token if saved in local storage
        // let currentUser = JSON.parse(localStorage.getItem('user_token'));
        // this.token = user_token.token;
        // this.token = 'adfasdasdfads';
    }

    login(username: string, password: string): Observable<boolean> {
      if (username === 'test' && password === 'test') {
        return Observable.of(true)
                          .delay(1000)
                          .do(val => {
                            this.token = 'savaosals09245valsfjga';
                            this.rol = 'ROLE_ADMIN';
                            this.username = username;
                            localStorage.setItem('user_token', this.token);
                            localStorage.setItem('username', this.username);
                            localStorage.setItem('rol', this.rol);
                          });
      } else {
        return Observable.of(false).delay(1000).do(val => {this.token = null; this.rol = null;});
      }
    }

    logout(): void {
        this.token = null;
        this.rol = null;
        localStorage.removeItem('user_token');
        localStorage.removeItem('rol');
        localStorage.removeItem('username');
    }

    isLogged(): boolean {
      if (localStorage.getItem('user_token')) {
        return true;
      } else {
        return false;
      }
    }

    getRol() {
      return localStorage.getItem('rol')
    }

    getUsername() {
      return this.username;
    }

    isAdmin() {
      return localStorage.getItem('rol') == "ROLE_ADMIN";
    }

    isUser() {
      return localStorage.getItem('rol') == "ROLE_USER";
    }

}
