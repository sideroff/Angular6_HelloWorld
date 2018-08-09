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

  getPost(postId) {
    return this.Http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }

  getUsers() {
    return this.Http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.Http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }
}
