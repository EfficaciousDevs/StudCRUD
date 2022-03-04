import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
        }
  postUsers(user)
  {
    return this.http.post(this.url, user);
  }
  updateUser(user) {
    return this.http.put(this.url + '/' + user.id, user);
  }
}
