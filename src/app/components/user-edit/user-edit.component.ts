import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { UsersService } from "../../services/users.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: number;
  user = {};
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    let obs = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.id = +params.get('id');
        return this.usersService.getOne(this.id);
      });

    obs.subscribe(x => this.user = x.data);
  }

}
