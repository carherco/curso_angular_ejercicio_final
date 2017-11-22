import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  name: string;
  constructor(private authService: AuthService) {
    this.name = authService.getUsername();
   }

  ngOnInit() {
  }

}
