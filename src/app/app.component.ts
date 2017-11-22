import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public isLogged;
  constructor(private authService: AuthService) {
    // this.isLogged = false;
    // this.authService.isLogged().subscribe(x => this.isLogged = x)
  }

  // isLoged(){
  //   return this.isLoged;
  // }
}
