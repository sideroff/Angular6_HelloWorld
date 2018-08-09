import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }


  getPosts() {
    return this.Http.get(`https://jsonplaceholder.typicode.com/posts`)
  }

  getUser(userId) {
    return this.Http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }

  getUsers() {
    return this.Http.get('https://jsonplaceholder.typicode.com/users')
  }
}
