import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private model = {
    username: '',
    password: ''
  }
  private password: string = '';
  private loading: boolean = false;
  private error: string = '';

  constructor(private authService: AuthService, private router: Router) {
    console.log('constructor');
   }

  ngOnInit() {
    console.log('ngOnInit');
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
                    .subscribe(x => {
                      if(x){
                        //redirección a admin
                        this.router.navigate(['/admin']);
                      } else {
                        this.error = "Usuario y/o contraseña incorrectos";
                      }
                      this.loading = false;
                    });
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
