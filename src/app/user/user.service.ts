import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getuser(id: number, callback){
    this.http.get(`/api/users/${id}`).subscribe((res)=>{
      console.log("getuser "+res);
    });
  }

  addUser(user: any, callback) {
    this.http.post(`/api/users`, user).subscribe((res)=> {
      console.log("addUser "+res);
    })
  }

  modifyUser(user: any, callback){
    this.http.put(`/api/users/${user.id}`, user).subscribe((res)=>{
      console.log("modifyUser "+res);
    });
  }

  removeUser(user: any, callback){
    this.http.delete(`/api/users/${user.id}`).subscribe((res)=>{
      console.log("removeUser "+ res);
    });
  }
}
