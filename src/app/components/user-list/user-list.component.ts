import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users = [];
  constructor(private usersService: UsersService) {



    //this.usersService.getAll().do(x => console.log(x)).subscribe(respuesta => this.users = respuesta.data);
    this.usersService.getAll().subscribe(respuesta =>  this.users = respuesta.data);
  }

  ngOnInit() {
  }

}
