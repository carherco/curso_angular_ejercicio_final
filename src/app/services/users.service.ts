import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class UsersService {

  private url = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  getOne(id): Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  add(user): Observable<any>{
    return this.http.post(this.url, user);
  }

  edit(user): Observable<any>{
    return this.http.put(this.url+'/'+user.id, user);
  }

  delete(user): Observable<any>{
    return this.http.delete(this.url+'/'+user.id);
  }
}
