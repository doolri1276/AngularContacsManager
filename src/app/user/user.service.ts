import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getUser(id: number){
    return this.http.get(`/api/users/${id}`);
  }

  addUser(user: any, callback) {
    this.http.post(`/api/users`, user).subscribe(callback);
  }

  modifyUser(user: any, callback){
    this.http.put(`/api/users/${user.id}`, user).subscribe(callback);
  }

  removeUser(user: any, callback){
    this.http.delete(`/api/users/${user.id}`).subscribe(callback);
  }
}
